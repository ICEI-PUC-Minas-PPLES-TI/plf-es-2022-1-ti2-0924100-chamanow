function orcamento(data, tipoUser) {
    // Criação da div para armazenar a label e o input
    const divOrcamento = document.createElement("div");
    divOrcamento.className = "div-orcamento";

    if (tipoUser == '1' || data.valor_orcamento != null) {
        // Adicionando o btn criado na página
        divOrcamento.appendChild(orcamentoCliente());
    } else {
        // Criação da label para o btn
        const label = document.createElement("label");
        label.setAttribute("for", "btn-orcamento");

        // Adicionando o conteúdo do btn
        label.innerHTML = `Upload Orçamento <i class="fa-solid fa-upload"></i>`;

        // Criação do btn para download do orçamento
        const btnOrcamento = criarInputs("btn-orcamento", "file", "orcamento");

        // Adicionando o local onde será armazenado o arquivo no banco de dados
        btnOrcamento.setAttribute("accept", "");

        // Criação do input para o prestador adicionar o valor do orçamento para o serviço
        const valorOrcamento = criarInputs("valor-orcamento", "number", "valor_orcamento", "Valor do Orçamento");

        // Adicionando o btn criado na página
        divOrcamento.appendChild(label);
        divOrcamento.appendChild(btnOrcamento);
        divOrcamento.appendChild(valorOrcamento);
    }

    // Adição dos elementos criados na div 
    const divPrincipalOrcamento = document.querySelector(".orcamento");
    divPrincipalOrcamento.appendChild(divOrcamento);
}

function orcamentoCliente() {
    // Criação do btn para download do orçamento
    const btnOrcamento = criarElementos("a", "btn-orcamento", "titulo-orcamento", `Baixar Orçamento <i class="fa-solid fa-download"></i>`);;

    // Adicionando um name para o btn
    btnOrcamento.setAttribute("name", "btn-orcamento");

    // Adicionando a href de download do arquivo
    btnOrcamento.setAttribute("href", "");

    // Adicionando o nome do arquivo de download
    btnOrcamento.setAttribute("download", "Orçamento.pdf");

    return btnOrcamento;
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