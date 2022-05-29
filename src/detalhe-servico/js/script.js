const PERFIL_URL = "../perfil/index.html";

function infoPerfil() {
    // Nome de usuario
    const nomeUsuario = document.querySelector("#nome-usuario");
    nomeUsuario.innerText = "Nome do Prestador";

    // Nota do usuario
    const notaAvaliacao = document.querySelector("#nota");
    notaAvaliacao.innerText = "4,5"; // Cálcular a média no banco de dados

    // Mostrar nota nas estrelas


    // Descrição do usuário
    const descricaoUsuario = document.querySelector("#descricao");
    descricaoUsuario.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Região de Atuação
    const regiaoAtuacao = document.querySelector("#location");
    regiaoAtuacao.innerText = "";
}

function criarListaAvaliacoes(cod_cliente) {
    // Criação da div geral
    const divGeral = document.createElement('div');
    divGeral.className = "content-avaliacoes";

    // Div Nome e Data ====================================

    // Criação da div com o nome e data
    const divNomeData = document.createElement('div');
    divNomeData.className = "nome-data";

    // Criação do elemento para o nome do avaliador
    const nomeAvaliador = document.createElement('h5');
    nomeAvaliador.id = "nome-avaliador";
    nomeAvaliador.innerText = "Nome do Avaliador";

    // Criação do elemento para o hifen
    const hifen = document.createElement('span');
    hifen.className = "hifen";
    hifen.innerText = "-";

    // Criação do elemento para a data da publicação da avaliação
    const dataPublicacao = document.createElement('span');
    dataPublicacao.id = "data-publicacao";
    dataPublicacao.innerText = "Data da publicacao";

    // Colocando os elementos criados dentro de div nomeData
    divNomeData.appendChild(nomeAvaliador);
    divNomeData.appendChild(hifen);
    divNomeData.appendChild(dataPublicacao);

    // Div Avaliação ========================================

    // Criação da div com a nota da avaliação
    const divAvaliacao = document.createElement('div');
    divAvaliacao.className = "avaliacao-usuario";

    // Criação do elemento para a nota
    const notaAvaliacao = document.createElement('span');
    notaAvaliacao.id = "nota";
    notaAvaliacao.innerText = "4,5";

    // Criação do elemento para o ponto de separação
    const ponto = document.createElement('span');
    ponto.className = "ponto";

    // Criação do elemento que conterá as estrelas
    const listEstrelas = document.createElement('ul');
    listEstrelas.className = "avaliacao";

    // Criando e colocando os elementos estrela dentro da lista
    for (var i = 0; i < 5; i++) {
        // Criação do elemento para as estrelas
        const estrelas = document.createElement('li');
        estrelas.className = "star-icon";

        // Colocando os elementos estrela dentro da lista
        listEstrelas.appendChild(estrelas);
    }

    // Colocando os elementos criados dentro da divAvaliacao
    divAvaliacao.appendChild(notaAvaliacao);
    divAvaliacao.appendChild(ponto);
    divAvaliacao.appendChild(listEstrelas);

    // Comentario ============================================

    // Criação do elemento para o comentario da avaliação
    const comentarioAvaliacao = document.createElement('p');
    comentarioAvaliacao.id = "comentario";
    comentarioAvaliacao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Div Geral =============================================


    // Colocando todos as divs criadas dentro da divGeral
    divGeral.appendChild(divNomeData);
    divGeral.appendChild(divAvaliacao);
    divGeral.appendChild(comentarioAvaliacao);

    // Retornando a divGeral
    return divGeral;
}

function avaliacoesUsuario(quantAvaliacoes) {
    const divAvaliacoes = document.querySelector('#avaliacoes');

    // Criando múltiplas avaliações na página
    for (var i = 0; i < quantAvaliacoes; i++) {
        const avaliacoes = criarListaAvaliacoes(0000);
        divAvaliacoes.appendChild(avaliacoes);
    }
}

function detalharProblema(cod_usuario) {
    // Descrição do problema
    const descricaoProblema = document.querySelector("#detalhe-problema-cliente");
    descricaoProblema.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Eleifend donec pretium vulputate sapien nec sagittis.Cras adipiscing enim eu turpis egestas pretium aenean.Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.";
}

function orcamento(cod_servico, tipoUser, codStatus) {
    // Criação do título da seção
    const titulo = document.createElement("h2");
    titulo.className = "titulo-orcamento";
    titulo.innerText = "Orçamento";

    // Criação da descrição da seção
    const descricao = document.createElement("p");
    descricao.id = "descricao-orcamento";
    descricao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Criação da div para armazenar a label e o input
    const divOrcamento = document.createElement("div");
    divOrcamento.className = "divOrcamento";

    if (tipoUser == "cliente" || codStatus > 1) {
        // Adicionando o btn criado na página
        divOrcamento.appendChild(orcamentoCliente());
    } else {
        // Criação do btn para download do orçamento
        const btnOrcamento = document.createElement("input");

        // Adicionando o tipo do input para file
        btnOrcamento.setAttribute("type", "file");

        // Adicionando um id para o btn
        btnOrcamento.id = "btn-orcamento";

        // Adicionando um name para o btn
        btnOrcamento.setAttribute("name", "btn-orcamento");

        // Adicionando o local onde será armazenado o arquivo no banco de dados
        btnOrcamento.setAttribute("accept", "");

        // Criação da label para o btn
        const label = document.createElement("label");
        label.setAttribute("for", "btn-orcamento");

        // Adicionando o conteúdo do btn
        label.innerHTML = `Upload Orçamento <i class="fa-solid fa-upload"></i>`;

        // Adicionando o btn criado na página
        divOrcamento.appendChild(label);
        divOrcamento.appendChild(btnOrcamento);

        // Alterar nome do btn para enviar orçamento
        const btnEnviarOrcamento = document.querySelector("#btn-aceitar-servico");
        btnEnviarOrcamento.innerHTML = `Enviar Orçamento <i class="fa-solid fa-check"></i>`;
    }

    // Adição dos elementos criados na div 
    const divPrincipalOrcamento = document.querySelector(".orcamento");
    divPrincipalOrcamento.appendChild(titulo);
    divPrincipalOrcamento.appendChild(descricao);
    divPrincipalOrcamento.appendChild(divOrcamento);
}

function orcamentoCliente() {
    // Criação do btn para download do orçamento
    const btnOrcamento = document.createElement("a");

    // Adicionando um id para o btn
    btnOrcamento.id = "btn-orcamento";

    // Adicionando um name para o btn
    btnOrcamento.setAttribute("name", "btn-orcamento");

    // Adicionando a href de download do arquivo
    btnOrcamento.setAttribute("href", "");

    // Adicionando o nome do arquivo de download
    btnOrcamento.setAttribute("download", "Orçamento.pdf");

    // Adicionando o conteúdo do btn
    btnOrcamento.innerHTML = `Baixar Orçamento <i class="fa-solid fa-download"></i>`;

    return btnOrcamento;
}

function escolherData(cod_servico, tipoUser, codStatus, opicoes) {
    // Criação do título da seção
    const titulo = document.createElement("h2");
    titulo.className = "titulo-escolher-data";
    titulo.innerText = "Escolher Datas";

    // Criação da descrição da seção
    const descricao = document.createElement("p");
    descricao.id = "descricao-escolher-data";
    descricao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Criação do input
    const inputEscolherDatas = document.createElement("input");
    inputEscolherDatas.id = "inputDataDisponivel";
    inputEscolherDatas.placeholder = "Datas Disponíveis";

    // Criação do datalist
    const datalistEscolherDatas = document.createElement("datalist");
    datalistEscolherDatas.id = "data-disponivel";

    // Adição dos elementos criados na div 
    const divEscolherData = document.querySelector(".escolher-data");
    divEscolherData.appendChild(titulo);
    divEscolherData.appendChild(descricao);

    var data = localStorage.getItem('data');
    if (codStatus == 2) {
        if (tipoUser == "cliente") {

            // Criando uma referência para o input e adicionar o atributo list
            inputEscolherDatas.setAttribute("list", "data-disponivel");

            for (var i = 0; i < opicoes; i++) {
                // Criação dos elementos para as datas disponíveis
                const opicoesDatasDisponiveis = document.createElement('option');
                opicoesDatasDisponiveis.id = `opicao-${i}`;
                opicoesDatasDisponiveis.value = `Item ${i + 1}`;

                // Colocando as opições dentro do datalist
                datalistEscolherDatas.appendChild(opicoesDatasDisponiveis);
            }
        } else {
            const today = new Date();
            // Criando uma referência para o input e adicionar o atributo type
            inputEscolherDatas.setAttribute("type", "text");
            inputEscolherDatas.setAttribute("min", today.toISOString().split('T')[0]);
            inputEscolherDatas.setAttribute("datepicker", "");
            inputEscolherDatas.setAttribute("data-range", "true");
        }

        // Adicionar o input e o datalist na divEscolherData
        divEscolherData.appendChild(inputEscolherDatas);
        divEscolherData.appendChild(datalistEscolherDatas);
    } else {
        // Criação do btn para download do comprovante de pagamento
        const dataMarcada = document.createElement("p");

        // Adicionando um id para o btn
        dataMarcada.id = "btn-comprovante";

        // Adicionando o conteúdo do btn
        dataMarcada.innerText = `${data}`;

        // Adicionar a data marcada na divEscolherData
        divEscolherData.appendChild(dataMarcada);
    }
}

function comprovantePagamento(cod_servico, tipoUser, codStatus) {
    // Criação do título da seção
    const titulo = document.createElement("h2");
    titulo.className = "titulo-comprovante-pagamento";
    titulo.innerText = "Comprovante de Pagamento";

    // Criação da descrição da seção
    const descricao = document.createElement("p");
    descricao.id = "descricao-comprovante";
    descricao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Criação da div para armazenar a label e o input
    const divComprovante = document.createElement("div");
    divComprovante.className = "divComprovante";

    if (tipoUser == "cliente") {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = document.createElement("input");

        // Adicionando o tipo do input para file
        btnComprovante.setAttribute("type", "file");

        // Adicionando a exenção dos arquivos aceitos
        btnComprovante.setAttribute("accept", ".pdf, .png, .jpg, .jpeg");

        // Adicionando um id para o btn
        btnComprovante.id = "btn-comprovante";

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "btn-comprovante");

        // Criação da label para o btn
        const label = document.createElement("label");
        label.setAttribute("for", "btn-comprovante");

        // Adicionando o conteúdo do btn
        label.innerHTML = `Upload Comprovante <i class="fa-solid fa-upload"></i>`;

        // Adicionando o btn criado na página
        divComprovante.appendChild(label);
        divComprovante.appendChild(btnComprovante);
    } else {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = document.createElement("a");

        // Adicionando um id para o btn
        btnComprovante.id = "btn-comprovante";

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "btn-comprovante");

        // Adicionando a href de download do arquivo
        btnComprovante.setAttribute("href", "");

        // Adicionando o nome do arquivo de download
        btnComprovante.setAttribute("download", "Comprovante de Pagamento.pdf");

        // Adicionando o conteúdo do btn
        btnComprovante.innerHTML = `Baixar Comprovante <i class="fa-solid fa-download"></i>`;

        // Adicionando o btn criado na página
        divComprovante.appendChild(btnComprovante);
    }

    // Adição dos elementos criados na div 
    const divPrincipalComprovante = document.querySelector(".comprovante");
    divPrincipalComprovante.appendChild(titulo);
    divPrincipalComprovante.appendChild(descricao);
    divPrincipalComprovante.appendChild(divComprovante);
}

function data_Orcamento(tipoUser) {
    $("#btn-aceitar-servico").click(function() {
        orcamento(0, tipoUser);

        this.parentNode.removeChild(this);

        // Criar o btn para enviar orçamento
        const btnEnviarOrcamento = criarBtnEnviarOrcamento();

        // Adicionar o btn criado na divBtnHud
        const divBtnHub = document.querySelector(".btn-hud");
        divBtnHub.appendChild(btnEnviarOrcamento);

        $("#btn-enviar-orcamento").click(function() {
            window.location.assign(PERFIL_URL);
        })
    })
}

function criarBtnEnviarOrcamento() {
    // Criar o btn para enviar orçamento
    const btnEnviarOrcamento = document.createElement("button");
    btnEnviarOrcamento.id = "btn-enviar-orcamento";
    btnEnviarOrcamento.innerHTML = `Enviar Orçamento <i class="fa-solid fa-check"></i>`;

    // Retornar o btn criado
    return btnEnviarOrcamento;
}

$(document).ready(function() {
    const tipoUser = "profissional";
    var codStatusServico = 2;
    const arquivoOrcamento = "null";
    const escolherDataHora = null;

    // Gera os dados do perfil
    infoPerfil();

    // Gera as avaliações
    avaliacoesUsuario(2);

    // Gerar o detalhamento do problema
    detalharProblema();

    const hudBtn = document.querySelector(".btn-hud");
    const linkRecusarServico = document.querySelector("#recusarServico");
    const btnRecusarServico = document.querySelector("#btn-recusar-servico");
    const btnAceitarServico = document.querySelector("#btn-aceitar-servico");

    switch (codStatusServico) {
        case 3:
            comprovantePagamento(0, tipoUser);

        case 2:
            escolherData(0, tipoUser, codStatusServico, 6);
            $("#inputDataDisponivel").blur(function() {
                localStorage.setItem("data", $("#inputDataDisponivel").val());
            })

        case 1:
            orcamento(0, tipoUser, codStatusServico);
            break;

        case 0:
            if (tipoUser == "cliente")
                hudBtn.style = "display: none";
            else
                data_Orcamento(tipoUser);

            break;

        case -3:
            comprovantePagamento(0, tipoUser);

        case -2:
            escolherData(0, tipoUser, 6);

        case -1:
            orcamento(0, tipoUser);
            hudBtn.style = "display: none;";
            break;

        case -5:
            if ((tipoUser == "cliente")) {
                linkRecusarServico.setAttribute("href", "../Escolha do Serviço/index.html");
                btnRecusarServico.style = "width: 105%";
                btnRecusarServico.innerHTML = `Escolher outro prestador <i class="fa-solid fa-chevron-left"></i>`;
            }

            btnAceitarServico.style = "display: none";
            break;
    }

    if ((tipoUser == "cliente")) {
        linkRecusarServico.setAttribute("href", "../Escolha do Serviço/index.html");
        $("#btn-aceitar-servico").click(function() {
            window.location.assign(PERFIL_URL);
        })
    } else if (arquivoOrcamento != null && escolherDataHora != null)
        hudBtn.style = "display: none";
})