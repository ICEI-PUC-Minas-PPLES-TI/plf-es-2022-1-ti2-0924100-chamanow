function tabelaServicos(cod_user, data) {
    // Apagar todos os elementos da seção
    $(".dadosMenu").html("");

    // Alterar o título da seção
    const tituloSecao = document.querySelector("h2.tituloSecao");
    tituloSecao.innerText = "Serviços";

    // Alterar a descrição da seção
    const descricaoSecao = document.querySelector(".descricaoSecao");
    descricaoSecao.innerText = "Veja na tabela a seguir todos os seus serviços:";

    // Criação da div da tabela dos serviços
    const divTabelaServico = document.createElement('div');
    divTabelaServico.className = "divTebelaServico";

    // Criação da tabela dos serviços
    const tabelaServico = document.createElement("table");
    tabelaServico.id = "tabelaServico";

    // Criação do cabeçalho da tabela
    const cabecalhoTabela = document.createElement("thead");
    cabecalhoTabela.className = "cabecalho";

    const contentTabela = document.createElement("th");

    // Criação das colunas do cabeçalho =======================

    // Criação da coluna do nome do cabeçalho
    const colunaNome = document.createElement("td");
    if (cod_user.charAt(0) == '1')
        colunaNome.innerText = "Prestador";
    else
        colunaNome.innerText = "Cliente";


    // Criação da coluna do serviço do cabeçalho
    const colunaServico = document.createElement("td");
    colunaServico.innerText = "Serviço";

    // Criação da coluna do endereço do cabeçalho
    const colunaEndereco = document.createElement("td");
    colunaEndereco.innerText = "Endereço";

    // Criação da coluna da data do cabeçalho
    const colunaData = document.createElement("td");
    colunaData.innerText = "Data";

    // Criação da coluna do status do cabeçalho
    const colunaStatus = document.createElement("td");
    colunaStatus.innerText = "Status";

    // Adicionar as colunas dentro do cabeçalho
    cabecalhoTabela.appendChild(colunaNome);
    cabecalhoTabela.appendChild(colunaServico);
    cabecalhoTabela.appendChild(colunaEndereco);
    cabecalhoTabela.appendChild(colunaData);
    cabecalhoTabela.appendChild(colunaStatus);

    // Adicionar a cabeçalho na tabela
    contentTabela.appendChild(cabecalhoTabela);
    tabelaServico.appendChild(contentTabela);

    const tbody = document.createElement("tbody");

    // Criação das tuplas da tabela
    data.forEach(data => {
        // Criação da linha
        const tupla = document.createElement("tr");
        tupla.id = `${data.cod_servico}`;
        tupla.setAttribute('data-toggle', 'modal');
        tupla.setAttribute('data-target', '#servico-modal');
        tupla.setAttribute('data-dismiss', 'modal');

        // Criação das colunas da tupla =======================

        // Criação da coluna do nome do cabeçalho
        const colunaNomeTupla = document.createElement("td");
        if (cod_user.charAt(0) == '1') {
            colunaNomeTupla.id = `prestador.${data.cod_prestador}`;

            const nomeUsuario = getUserData(data.cod_prestador);
            nomeUsuario.then((user) => {
                colunaNomeTupla.innerText = `${user.nome}`;
            })
        } else {
            colunaNomeTupla.id = `cliente.${data.cod_contratante}`;
            const nomeUsuario = getUserData(data.cod_contratante);
            nomeUsuario.then((user) => {
                colunaNomeTupla.innerText = `${user.nome}`;
            })
        }

        // Criação da coluna do serviço do cabeçalho
        const colunaServicoTupla = document.createElement("td");
        colunaServicoTupla.id = `serviço.${data.cod_tipo}`;

        const nomeServico = getService(data.cod_tipo);
        nomeServico.then(service => {
            colunaServicoTupla.innerText = `${service.nome}`;
        })

        // Criação da coluna do endereço do cabeçalho
        const colunaEnderecoTupla = document.createElement("td");
        colunaEnderecoTupla.id = `endereco.${data.cod_endereco}`;
        colunaEnderecoTupla.innerText = `${data.endereco}`;


        // Criação da coluna da data do cabeçalho
        const colunaDataTupla = document.createElement("td");
        colunaDataTupla.id = `data-${data.data_servico}`;
        colunaDataTupla.innerText = formatarData(data.data_servico, data.horario);

        // Criação da coluna do status do cabeçalho
        const colunaStatusTupla = document.createElement("td");
        const spanStatus = document.createElement("span");
        spanStatus.id = `status.${data.cod_status}`;
        spanStatus.innerText = `${data.status}`;

        // Adicionar o spanStatus dentro da coluna status
        colunaStatusTupla.appendChild(spanStatus);

        // Adicionar as colunas dentro do cabeçalho
        tupla.appendChild(colunaNomeTupla);
        tupla.appendChild(colunaServicoTupla);
        tupla.appendChild(colunaEnderecoTupla);
        tupla.appendChild(colunaDataTupla);
        tupla.appendChild(colunaStatusTupla);

        // Adicionar a tupla na tabela
        tbody.appendChild(tupla);
    })

    tabelaServico.appendChild(tbody);

    // Adicionar a tabela na divTabela
    divTabelaServico.appendChild(tabelaServico);

    // Retornar a tabela
    return divTabelaServico;
}

function trClicada(data, cod_user) {
    // Identificar qual linha na tabela foi clicado
    $('#tabelaServico tr').click((e) => {
        // Pegar o elemento pai (tr) do elemento clicado (td)
        const element = e.target;
        const nodeElement = element.closest("tr");

        // Carrega os dados da tr clicada no modal
        dadosModel(nodeElement);

        // Verifica se o usuario já foi avaliado em um determinado serviço
        const avaliacoes = getRatingByService(nodeElement.id, cod_user);
        avaliacoes.then((rating) => {
            if (rating)
                dadosModelVisualizarAvaliacao(nodeElement, rating);
            else
                dadosModelAvaliar(nodeElement);

            for (let service of data) {
                var codServico = service.cod_servico;
                if (codServico == nodeElement.id) {
                    var idAvaliado;
                    var idAvaliador;
                    if (cod_user.charAt(0) == '1') {
                        idAvaliador = cod_user;
                        idAvaliado = service.cod_prestador;
                    } else {
                        idAvaliador = cod_user;
                        idAvaliado = service.cod_contratante;
                    }

                    if (!rating)
                        actveStar(idAvaliado, idAvaliador, codServico);
                }
            }
        })
    })
}

function dadosModel(nodeElement) {
    // Adicionar link para acessar os detalhes do serviço clicado
    const service = document.querySelector("#servicoUrl");
    service.setAttribute("href", `/perfil/servicos?cod_servico=${nodeElement.id}`)

    // Colocar nome do user nos modais
    const nomeUser = document.querySelector(".nome-usuario");
    nomeUser.innerText = nodeElement.firstChild.textContent;

    // Adicionar o serviço realizado no modal
    const servico = document.querySelector(".servico");
    servico.innerText = "Serviço: " + nodeElement.childNodes[1].textContent;

    // Adicionar o serviço realizado no modal
    const endereco = document.querySelector(".endereco");
    endereco.innerText = "Endereço: " + nodeElement.childNodes[2].textContent;

    // Adicionar o serviço realizado no modal
    const dataServico = document.querySelector(".data-servico");
    dataServico.innerText = "Data: " + nodeElement.childNodes[3].textContent;

    // Adicionar o serviço realizado no modal
    const status = document.querySelector(".status");
    status.innerText = "Status do serviço: " + nodeElement.childNodes[4].textContent;
}

function dadosModelAvaliar(nodeElement) {
    // Limpa o corpo do modal para criar um novo
    $(".body-avaliacao").html("");

    // Referencia a div do corpo do modal de avaliacao
    const modalBody = document.querySelector(".body-avaliacao");

    // Criar e colocar o nome do user no modal
    const nomeUserContent = nodeElement.firstChild.textContent
    const nomeUser = criarElementos("h5", null, "nome-usuario-avaliacao", nomeUserContent);

    // Criar a div para a avaliacao
    const divAvalicao = criarElementos("div", null, "avaliacao-usuario");

    // Criar a ul para comportar as estrelas
    const ulEstrelas = criarElementos("ul", null, "avaliacao");

    // Criar as estrelas
    for (var i = 1; i <= 5; i++) {
        // Criar o elemento das estrelas
        const star = criarElementos("li", i, "star-icon");

        if (i == 1)
            star.classList.add("active");

        // Inserir elemento criado no ulEstrelas
        ulEstrelas.appendChild(star);
    }

    // Adicionar a ulEstrelas dentro da divAvaliação
    divAvalicao.appendChild(ulEstrelas);

    // Criar o form do comentário
    const formRating = criarElementos("form", null, "form");
    formRating.setAttribute("action", "/perfil/avaliacao");
    formRating.setAttribute("method", "post");

    // Criar os inputs
    const inputAvaliado = criarInputs("hidden", "inputAvaliado", "cod_avaliado");
    const inputAvaliador = criarInputs("hidden", "inputAvaliador", "cod_avaliador");
    const inputAgendamento = criarInputs("hidden", "inputAgendamento", "cod_agendamento");
    const inputRating = criarInputs("hidden", "inputRating", "nota");
    const inputComentario = criarInputs("textarea", "comentario-avaliacao", "comentario", "Adicionar comentário...")

    // Criar os btns
    const btnSair = crarBtns("button", "btn-sair-avaliacao", `<i class="fa-solid fa-chevron-left"></i> Sair`);
    btnSair.setAttribute("data-bs-dismiss", "modal");

    const btnAvaliar = crarBtns("submit", "btn-enviar-avaliacao", `Enviar <i class="fa-solid fa-chevron-right"></i>`);

    // Adicionar os elementos criados no form
    formRating.appendChild(inputAvaliado);
    formRating.appendChild(inputAvaliador);
    formRating.appendChild(inputAgendamento);
    formRating.appendChild(inputRating);
    formRating.appendChild(inputComentario);
    formRating.appendChild(btnSair);
    formRating.appendChild(btnAvaliar);

    // Adicionar os itens criados no corpo do modal
    modalBody.appendChild(nomeUser);
    modalBody.appendChild(divAvalicao);
    modalBody.appendChild(formRating);
}

function dadosModelVisualizarAvaliacao(nodeElement, rating) {
    // Limpa o corpo do modal para criar um novo
    $(".body-avaliacao").html("");

    // Referencia a div do corpo do modal de avaliacao
    const modalBody = document.querySelector(".body-avaliacao");

    // Criar e colocar o nome do user no modal
    const nomeUserContent = nodeElement.firstChild.textContent
    const nomeUser = criarElementos("h5", null, "nome-usuario-avaliacao", nomeUserContent);

    // Criar a div para a avaliacao
    const divAvalicao = criarElementos("div", null, "avaliacao-usuario");

    // Adicionar a nota da avaliação
    const nota = criarElementos("p", null, "nota-avaliaca", rating.nota)

    // Criar a ul para comportar as estrelas
    const ulEstrelas = criarElementos("ul", null, "avaliacao");

    // Criar as estrelas
    for (var i = 1; i <= 5; i++) {
        // Criar o elemento das estrelas
        const star = criarElementos("li", i, "star-icon-view");
        if (i == rating.nota)
            star.classList.add("active");

        // Inserir elemento criado no ulEstrelas
        ulEstrelas.appendChild(star);
    }

    // Adicionar a nota e a ulEstrelas dentro da divAvaliação
    divAvalicao.appendChild(nota);
    divAvalicao.appendChild(ulEstrelas);

    // Adicionar o comentário escrito
    const contentComentario = "Comentário: " + rating.comentario;
    const comentario = criarElementos("p", null, "comentario", contentComentario);

    // Adicionar os itens criados no corpo do modal
    modalBody.appendChild(nomeUser);
    modalBody.appendChild(divAvalicao);
    modalBody.appendChild(comentario);
}

function criarElementos(element, id, classe, content) {
    // Criar o elemento
    const elemento = document.createElement(element);

    // Atribuir um id para ele
    if (id)
        elemento.id = id;

    // Atribuir um tipo para ele
    if (classe)
        elemento.className = classe;

    // Atribuir um placeholder para ele
    if (content)
        elemento.innerHTML = content;

    // Retornar o input criado
    return elemento;
}

function criarInputs(type, id, name, placeholder) {
    // Criar o elemento
    const input = document.createElement("input");

    // Atribuir um tipo para ele
    if (type)
        input.setAttribute("type", type);

    // Atribuir um id para ele
    input.id = id;

    if (name)
        input.name = name;

    // Atribuir um placeholder para ele
    if (placeholder)
        input.placeholder = placeholder;

    // Retornar o input criado
    return input;
}

function crarBtns(type, id, content) {
    // Criar o elemento
    const btn = document.createElement("button");

    // Atribuir um tipo para ele
    if (type)
        btn.setAttribute("type", type);

    // Atribuir um id para ele
    btn.id = id;

    // Atribuir um placeholder para ele
    if (content)
        btn.innerHTML = content;

    // Retornar o input criado
    return btn;
}