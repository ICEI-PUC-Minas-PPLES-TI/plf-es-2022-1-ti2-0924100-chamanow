const PERFIL_URL = "../perfil/index.html";

function infoPerfil(data,cod_user) {
    const cod_user = data.cod_user;
    // Nome de usuario
    const nomeUsuario = document.querySelector("#nome-usuario");
    nomeUsuario.innerText = data.nome;

    // Nota do usuario
    const notaAvaliacao = document.querySelector("#nota");
    notaAvaliacao.innerText = "4,5"; // Cálcular a média no banco de dados

    // Mostrar nota nas estrelas


    if (cod_user.charAt(0) != '1'){
    //Região de atuação
    const regiaoAtuacao = document.querySelector("#location");
    regiaoAtuacao.innerText = data.regiao_atuacao;
}}

function criarListaAvaliacoes(cod_user, data) {
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
    nomeAvaliador.innerText = data.NOME;

    // Criação do elemento para o hifen
    const hifen = document.createElement('span');
    hifen.className = "hifen";
    hifen.innerText = "-";

    // Criação do elemento para a data da publicação da avaliação
    const dataPublicacao = document.createElement('span');
    dataPublicacao.id = "data-publicacao";
    dataPublicacao.innerText = formatarData(data.CREATED_AT);

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
    notaAvaliacao.innerText = data.NOTA;

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
    comentarioAvaliacao.innerText = data.COMENTARIO;

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
    const btnOrcamento = criarElementos("a", "btn-orcamento", "titulo-escolher-data", `Baixar Orçamento <i class="fa-solid fa-download"></i>`);;

    // Adicionando um name para o btn
    btnOrcamento.setAttribute("name", "btn-orcamento");

    // Adicionando a href de download do arquivo
    btnOrcamento.setAttribute("href", "");

    // Adicionando o nome do arquivo de download
    btnOrcamento.setAttribute("download", "Orçamento.pdf");

    return btnOrcamento;
}

function escolherData(cod_servico, tipoUser, codStatus, opicoes) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-escolher-data", "Escolher Datas");

    // Criação da descrição da seção
    const pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const descricao = criarElementos("p", "descricao-escolher-data", null, pText);

    // Adição dos elementos criados na div 
    const divEscolherData = document.querySelector(".escolher-data");
    divEscolherData.appendChild(titulo);
    divEscolherData.appendChild(descricao);

    // Criação dos inputs e labels =================================================

    // Criação da label para o input de data
    const labelData = criarLabels("labelData", "inputDataDisponivel", "Datas Disponíveis");

    // Criação do input para escolher a data
    const inputEscolherDatas = criarInputs("inputDataDisponivel", "date", null);

    // Criação da div para conter os inputs e labels da data
    const divInputDate = criarElementos("div", null, "divInputDate");

    // Adicionar os inputs e as labels para escolher a data na divInputDate
    divInputDate.appendChild(labelData);
    divInputDate.appendChild(inputEscolherDatas);

    // Criação da label para o input de horário
    const labelHorario = criarLabels("labelHorario", "inputHorarioDisponivel", "Horários Disponíveis");

    // Criação do input escolher horário
    const inputEscolherHorario = criarInputs("inputHorarioDisponivel", "time", null);

    // Criação da div para conter os inputs e labels da data
    const divInputHour = criarElementos("div", null, "divInputDate");

    // Adicionar os inputs e as labels para escolher a data na divInputHour
    divInputHour.appendChild(labelHorario);
    divInputHour.appendChild(inputEscolherHorario);

    // Variáveis de controle
    const dataInicio = localStorage.getItem('dataInicio');
    const dataFim = localStorage.getItem('dataFim');
    const dataEscolhida = localStorage.getItem('dataEscolhida');

    if (codStatus == 2) {
        if (tipoUser == "cliente") {
            // Alterando o tipo de input
            inputEscolherDatas.setAttribute("type", "datetime-local");

            // Alterando o limite mín e max do input
            inputEscolherDatas.setAttribute("min", dataInicio);
            inputEscolherDatas.setAttribute("max", dataFim);

            // Ocultando a divInputHour
            divInputHour.style = "display: none";
        } else {
            // Salvar a data atual
            const today = new Date().toISOString();

            // Input Date ====================================================

            // Alterar conteúdo de labelData
            labelData.innerText = "Escolha o intervalo de datas:";

            // Alterando o limite min do inputEscolherDatas para a data atual
            inputEscolherDatas.setAttribute("min", today.split('T')[0]);

            // Input Hour ====================================================

            // Alterar conteúdo de labelHorario
            labelHorario.innerText = "Informe o horário disponível:";

            // Criando um input para escolher intervalo de datas
            const inputEscolherDataFim = criarInputs("inputDataFim", "date", null);

            // Alterando o limite min do inputEscolherDataFim para a data atual
            inputEscolherDataFim.setAttribute("min", today.split('T')[0]);

            // Adicionar os inputs e as labels na divEscolherData
            divInputDate.appendChild(inputEscolherDataFim);

            // Alterar conteúdo de labelData
            labelData.innerText = "Escolha o intervalo de datas:";

            // Criando um input para escolher intervalo de horários
            const inputEscolherHorarioFim = criarInputs("inputHorarioFim", "time", null);

            // AppendChild ===================================================

            // Adicionar os inputs e as labels na divEscolherData
            divInputDate.appendChild(inputEscolherDataFim);
            divInputHour.appendChild(inputEscolherHorarioFim)
        }

        // Adicionar os inputs e as labels para escolher o horário na divEscolherData
        divEscolherData.appendChild(divInputDate);
        divEscolherData.appendChild(divInputHour);
    } else {
        // Criação do btn para download do comprovante de pagamento
        const txtDataEscolhida = `${formatarData(dataEscolhida, "dd/mm/aaaa")} às ${formatarHorario(dataEscolhida, "hh:mm")}`
        const dataMarcada = criarElementos("p", "btn-comprovante", null, txtDataEscolhida);

        // Adicionar a data marcada na divEscolherData
        divEscolherData.appendChild(dataMarcada);
    }
}

function formatarData(data, format) {
    const map = {
        dd: data.substring(8, 10),
        mm: data.substring(5, 7),
        aaaa: data.substring(0, 4)
    }

    return format.replace(/dd|mm|aaaa/gi, matched => map[matched])
}

function formatarHorario(data, format) {
    const map = {
        hh: data.substring(11, 13),
        mm: data.substring(14, 16)
    }

    return format.replace(/hh|mm/gi, matched => map[matched])
}

function criarInputs(id, type, placeholder) {
    // Criar o elemento
    const input = document.createElement("input");

    // Atribuir um id para ele
    input.id = id;

    // Atribuir um tipo para ele
    if (type)
        input.setAttribute("type", type);

    // Atribuir um placeholder para ele
    if (placeholder)
        input.placeholder = placeholder;

    // Retornar o input criado
    return input;
}

function criarLabels(id, para, content) {
    // Criar o elemento
    const label = document.createElement("label");

    // Atribuir um id para ele
    label.id = id;

    // Atribuir um tipo para ele
    if (para)
        label.setAttribute("for", para);

    // Atribuir um placeholder para ele
    if (content)
        label.innerHTML = content;

    // Retornar o input criado
    return label;
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

function comprovantePagamento(cod_servico, tipoUser, codStatus) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-comprovante-pagamento", "Comprovante de Pagamento");

    // Criação da descrição da seção
    const pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const descricao = criarElementos("p", "descricao-comprovante", null, pText);

    // Criação da div para armazenar a label e o input
    const divComprovante = criarElementos("div", null, "divComprovante", null);

    if (tipoUser == "cliente") {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = criarInputs("btn-comprovante", "file", null);

        // Adicionando a exenção dos arquivos aceitos
        btnComprovante.setAttribute("accept", ".pdf, .png, .jpg, .jpeg");

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "btn-comprovante");

        // Criação da label para o btn
        const label = criarLabels("labelComprovante", "btn-comprovante", `Upload Comprovante <i class="fa-solid fa-upload"></i>`);

        // Adicionando o btn criado na página
        divComprovante.appendChild(label);
        divComprovante.appendChild(btnComprovante);
    } else {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = criarElementos("a", "btn-comprovante", null, `Baixar Comprovante <i class="fa-solid fa-download"></i>`);

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "btn-comprovante");

        // Adicionando a href de download do arquivo
        btnComprovante.setAttribute("href", "");

        // Adicionando o nome do arquivo de download
        btnComprovante.setAttribute("download", "Comprovante de Pagamento.pdf");

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
    $("#btn-aceitar-servico").click(function () {
        orcamento(0, tipoUser);

        this.parentNode.removeChild(this);

        // Criar o btn para enviar orçamento
        const btnEnviarOrcamento = criarBtnEnviarOrcamento();

        // Adicionar o btn criado na divBtnHud
        const divBtnHub = document.querySelector(".btn-hud");
        divBtnHub.appendChild(btnEnviarOrcamento);

        $("#btn-enviar-orcamento").click(function () {
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

function btnCancelarServico() {
    // Ocultar btn aceitar cervico
    const btnAceitarServico = document.querySelector("#btn-aceitar-servico");
    btnAceitarServico.style = "display: none";

    // Referenciar o btn reusar servico
    const btnCancelarServico = document.querySelector("#btn-recusar-servico");
    btnCancelarServico.innerHTML = `Cancelar Serviço <i class="fa-solid fa-xmark"></i>`;
}

function btnEnviarComprovante() {
    // Ocultar btn recusar cervico
    const btnRecusarServico = document.querySelector("#btn-recusar-servico");
    btnRecusarServico.style = "display: none";

    // Referenciar o btn reusar servico
    const btnEnviarComprovante = document.querySelector("#btn-aceitar-servico");
    btnEnviarComprovante.innerHTML = `Enviar Comprovante <i class="fa-solid fa-check"></i>`;
}

function btnAceitarComprovante() {
    // Ocultar btn recusar cervico
    const btnRecusarServico = document.querySelector("#btn-recusar-servico");
    btnRecusarServico.innerHTML = `Recusar Pagamento <i class="fa-solid fa-xmark"></i>`;

    // Referenciar o btn reusar servico
    const btnEnviarComprovante = document.querySelector("#btn-aceitar-servico");
    btnEnviarComprovante.innerHTML = `Aceitar Pagamento <i class="fa-solid fa-check"></i>`;
}

$(document).ready(function () {
    //Calcula o ano
    document.querySelector('#ano').innerHTML = new Date().getFullYear();

    const tipoUser = "cliente";
    //const tipoUser = "profissional";
    var codStatusServico = 4;
    const arquivoOrcamento = "null";
    const dataEscolhida = localStorage.getItem('dataEscolhida');
    const arquivoComprovante = null;

    // Gera os dados do perfil
    infoPerfil();

    // Gera as avaliações
    avaliacoesUsuario(2);

    // Gerar o detalhamento do problema
    detalharProblema();

    // Refenciar alguns elementos
    const hudBtn = document.querySelector(".btn-hud");
    const linkRecusarServico = document.querySelector("#recusarServico");
    const btnRecusarServico = document.querySelector("#btn-recusar-servico");
    const btnAceitarServico = document.querySelector("#btn-aceitar-servico");

    // Salvar a data atual
    const today = new Date().toISOString().split('T')[0];

    // Variáveis de controle
    const dataInicio = localStorage.getItem('dataInicio');
    const dataFim = localStorage.getItem('dataFim');

    switch (tipoUser) {
        case "cliente":
            switch (codStatusServico) {
                case 4:
                    hudBtn.style = "display: none";

                case 3:
                    if (today != dataEscolhida.split('T')[0]) {
                        if (arquivoComprovante == null) {
                            comprovantePagamento(0, tipoUser);
                            btnEnviarComprovante();
                        } else {
                            comprovantePagamento(0, "profissional");
                            hudBtn.style = "display: none";
                        }
                    } else
                        btnCancelarServico();
                case 2:
                    if (dataInicio) {
                        escolherData(0, tipoUser, codStatusServico, 6);

                        $("#btn-aceitar-servico").click(function () {
                            localStorage.setItem("dataEscolhida", `${$("#inputDataDisponivel").val()}`);
                        })
                    } else
                        hudBtn.style = "display: none";

                    if (dataEscolhida) {
                        if (codStatusServico == 2) {
                            const inputDataDisponivel = document.querySelector("#inputDataDisponivel");
                            inputDataDisponivel.value = dataEscolhida;
                            inputDataDisponivel.disabled = true;
                        }

                        hudBtn.style = "display: none";
                    }

                case 1:
                    if (arquivoOrcamento == null)
                        hudBtn.style = "display: none";
                    else
                        orcamento(0, tipoUser, codStatusServico);

                    break;

                case 0:
                    hudBtn.style = "display: none";

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

            break;

        default:
            switch (codStatusServico) {
                case 4:
                    hudBtn.style = "display: none";

                case 3:
                    if (today != dataEscolhida.split('T')[0]) {
                        if (arquivoComprovante != null) {
                            comprovantePagamento(0, tipoUser);
                            btnAceitarComprovante();
                        }
                    } else
                        hudBtn.style = "display: none";

                case 2:
                    escolherData(0, tipoUser, codStatusServico, 6);
                    $("#btn-aceitar-servico").click(function () {
                        localStorage.setItem("dataInicio", `${$("#inputDataDisponivel").val()}T${$("#inputHorarioDisponivel").val()}`);
                        localStorage.setItem("dataFim", `${$("#inputDataFim").val()}T${$("#inputHorarioFim").val()}`);
                    })

                    if (dataInicio != null) {
                        $("#inputDataDisponivel").val(dataInicio.substring(0, 10));
                        $("#inputDataFim").val(dataFim.substring(0, 10));
                        $("#inputHorarioDisponivel").val(dataInicio.substring(11));
                        $("#inputHorarioFim").val(dataFim.substring(11));

                        const allInputs = document.querySelectorAll("input");
                        allInputs.forEach(input => {
                            input.disabled = true;
                        })

                        if (codStatusServico == 2)
                            hudBtn.style = "display: none";
                    }

                    $("#btn-aceitar-servico").click(function () {
                        window.location.assign(PERFIL_URL);
                    })

                case 1:
                    if (arquivoOrcamento == null)
                        orcamento(0, tipoUser, codStatusServico);
                    else
                        orcamentoCliente();

                    break;

                case 0:
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

            break;
    }
    // Adiciona o atributo required para todos os inputs da página
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => {
        input.setAttribute("required", "");
    })

    if ((tipoUser == "cliente")) {
        linkRecusarServico.setAttribute("href", "../Escolha do Serviço/index.html");
        $("#btn-aceitar-servico").click(function () {
            window.location.assign(PERFIL_URL);
        })
    }
})
console.log(window.fetch)