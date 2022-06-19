function comprovantePagamento(servico, tipoUser) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-comprovante-pagamento", "Comprovante de Pagamento");

    // Criação da descrição da seção
    const pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const descricao = criarElementos("p", "descricao-comprovante", null, pText);

    // Criação da div para armazenar a label e o input
    const divComprovante = criarElementos("div", null, "divComprovante", null);

    if (tipoUser == "1" && servico.comprovante_pagamento == null) {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = criarInputs("btn-comprovante", "file", null);

        // Adicionando a exenção dos arquivos aceitos
        btnComprovante.setAttribute("accept", ".pdf, .png, .jpg, .jpeg");

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "comprovante");

        // Criação da label para o btn
        const label = criarLabels("labelComprovante", "btn-comprovante", `Upload Comprovante <i class="fa-solid fa-upload"></i>`);

        // Adicionando o btn criado na página
        divComprovante.appendChild(label);
        divComprovante.appendChild(btnComprovante);
    } else {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = criarElementos("a", "btn-comprovante", null, `Baixar Comprovante <i class="fa-solid fa-download"></i>`);

        // Adicionando um name para o btn
        btnComprovante.setAttribute("name", "comprovante");

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