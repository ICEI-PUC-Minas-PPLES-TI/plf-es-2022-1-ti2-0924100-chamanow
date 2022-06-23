function orcamento(data, tipoUser, usuario) {
    // Criação da div para armazenar a label e o input
    const divOrcamento = document.createElement("div");
    divOrcamento.className = "div-orcamento";

    if (data.valor_orcamento != null) {
        // Adicionando o btn criado na página
        divOrcamento.appendChild(orcamentoCliente(data, usuario));

        // Criação de um elemento que mostra o valor do orçamento do serviço
        const valorOrcamento = criarElementos('p', null, "valor_orcamento", `Valor do Orçamento: R$ ${data.valor_orcamento}`);

        // Adiciona o valor do orçamento na página
        divOrcamento.appendChild(valorOrcamento);
    } else {
        if (tipoUser != '1') {
            // Criação da label para o btn
            const label = document.createElement("label");
            label.setAttribute("for", "btn-orcamento");

            // Adicionando o conteúdo do btn
            label.innerHTML = `Upload Orçamento <i class="fa-solid fa-upload"></i>`;

            // Criação do btn para download do orçamento
            const btnOrcamento = criarInputs("btn-orcamento", "file");

            // Adicionando o local onde será armazenado o arquivo no banco de dados
            btnOrcamento.setAttribute("accept", ".pdf, .png, .jpg, .jpeg");

            // Criação do input para o prestador adicionar o valor do orçamento para o serviço
            const valorOrcamento = criarInputs("valor-orcamento", "number", "valor_orcamento", "Valor do Orçamento");

            // Adicionando o btn criado na página
            divOrcamento.appendChild(label);
            divOrcamento.appendChild(btnOrcamento);
            divOrcamento.appendChild(valorOrcamento);

            // Referenciar o btn eviar

            // Pega o evento de click
            btnOrcamento.onchange = () => {
                //e.preventDefault();
                // Decrementa 3 horas do horário escolhido
                convertToBase64("btn-orcamento");
            };
        } else {
            // Cria um elemento com uma mensagem
            const mensagem = criarElementos('p', null, "msg-semOrcamento", "Ainda não há orçamento");

            // Adicionando o elemento criado na página
            divOrcamento.appendChild(mensagem);
        }
    }

    // Adição dos elementos criados na div 
    const divPrincipalOrcamento = document.querySelector(".orcamento");
    divPrincipalOrcamento.appendChild(divOrcamento);
}

function orcamentoCliente(data, usuario) {
    // Criação do btn para download do orçamento
    const btnOrcamento = criarElementos("a", "btn-orcamento", "titulo-orcamento", `Baixar Orçamento <i class="fa-solid fa-download"></i>`);;

    // Adicionando um name para o btn
    btnOrcamento.setAttribute("name", "btn-orcamento");

    // Adicionando a href de download do arquivo
    btnOrcamento.setAttribute("href", data.orcamento);

    // Adicionando o nome do arquivo de download
    btnOrcamento.setAttribute("download", `Orçamento(${usuario.nome}).pdf`);

    return btnOrcamento;
}