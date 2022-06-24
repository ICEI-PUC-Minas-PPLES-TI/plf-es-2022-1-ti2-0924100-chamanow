function comprovantePagamento(servico, tipoUser, usuario) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-comprovante-pagamento", "Comprovante de Pagamento");

    // Criação da descrição da seção
    const pText = "Envie e receba aqui o comprovante de pagamento disponibilizado pelo cliente após a realização do serviço";
    const descricao = criarElementos("p", "descricao-comprovante", null, pText);

    // Criação da div para armazenar a label e o input
    const divComprovante = criarElementos("div", null, "divComprovante", null);

    if (servico.comprovante_pagamento == null) {
        if (tipoUser == '1') {
            // Criação do btn para download do comprovante de pagamento
            const btnComprovante = criarInputs("btn-comprovante", "file", null);

            // Adicionando a exenção dos arquivos aceitos
            btnComprovante.setAttribute("accept", ".pdf, .png, .jpg, .jpeg");

            // Criação da label para o btn
            const label = criarLabels("labelComprovante", "btn-comprovante", `Upload Comprovante <i class="fa-solid fa-upload"></i>`);

            // Adicionando o btn criado na página
            divComprovante.appendChild(label);
            divComprovante.appendChild(btnComprovante);

            // Pega o evento de click
            btnComprovante.onchange = () => {
                // Decrementa 3 horas do horário escolhido
                convertToBase64("btn-comprovante");
            };
        } else {
            // Cria um elemento com uma mensagem
            const mensagem = criarElementos('p', null, "msg-semOrcamento", "Ainda não há comprovante de pagamento");

            // Adicionando o elemento criado na página
            divComprovante.appendChild(mensagem);

            if (servico.orcamento && servico.cod_status == 2) {
                // Referenciar o hud de btns
                const btnEnviar = document.querySelector("#btn-aceitar-servico");

                // Oculta o hud de btns
                btnEnviar.style = "display: none";
            }
        }
    } else {
        // Criação do btn para download do comprovante de pagamento
        const btnComprovante = criarElementos("a", "btn-comprovante", null, `Baixar Comprovante <i class="fa-solid fa-download"></i>`);

        // Adicionando a href de download do arquivo
        btnComprovante.setAttribute("href", servico.comprovante_pagamento);

        // Adicionando o nome do arquivo de download
        btnComprovante.setAttribute("download", `Comprovante-Pagamento(${usuario.nome}).pdf`);

        // Adicionando o btn criado na página
        divComprovante.appendChild(btnComprovante);
    }

    // Adição dos elementos criados na div 
    const divPrincipalComprovante = document.querySelector(".comprovante");
    divPrincipalComprovante.appendChild(titulo);
    divPrincipalComprovante.appendChild(descricao);
    divPrincipalComprovante.appendChild(divComprovante);
}