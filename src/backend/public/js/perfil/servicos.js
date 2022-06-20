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
        dadosModel(nodeElement, cod_user);

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

function dadosModel(nodeElement, cod_user) {
    // Adicionar link para acessar os detalhes do serviço clicado
    const service = document.querySelector("#servicoUrl");
    service.setAttribute("href", `/perfil/servicos?cod_servico=${nodeElement.id}&cod_user=${cod_user}`)

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