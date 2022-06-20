function criarListaAvaliacoes(data) {
    // Referenciar div dadosMenu
    const divAvaliacoes = document.createElement("div");
    divAvaliacoes.className = "divAvaliacoes";

    // Div Nome e Data ====================================

    // Criação da div com o nome e data
    const divNomeData = document.createElement('div');
    divNomeData.className = "nome-data";

    // Criação do elemento para o nome do avaliador
    const nomeAvaliador = document.createElement('h5');
    nomeAvaliador.id = "nome-avaliador";
    nomeAvaliador.innerText = data.nome;

    // Criação do elemento para o hifen
    const hifen = document.createElement('span');
    hifen.className = "hifen";
    hifen.innerText = "-";

    // Criação do elemento para a data da publicação da avaliação
    const dataPublicacao = document.createElement('span');
    dataPublicacao.id = "data-publicacao";
    dataPublicacao.innerText = formatarData(data.created_at);

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
    notaAvaliacao.innerText = data.nota;

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
    comentarioAvaliacao.innerText = data.comentario;

    // Div Geral =============================================

    // Colocando todos as divs criadas dentro da divAvaliacoes
    divAvaliacoes.appendChild(divNomeData);
    divAvaliacoes.appendChild(divAvaliacao);
    divAvaliacoes.appendChild(comentarioAvaliacao);

    // Retornar divAvaliacoes
    return divAvaliacoes;
}

function actveStar(idAvaliado, idAvaliador, idAgendamento) {
    $('.avaliacao li').click((e) => {
        // Remove a classe 'active' de todas as estrelas
        const stars = document.querySelectorAll(".avaliacao li");
        for (let star of stars)
            star.classList.remove("active");

        // Adiciona a classe 'active' apenas na estre clicada
        const element = e.target;
        element.classList.add("active");

        // Adicionar a avaliação input hidden
        const inputRating = document.querySelector("#inputRating");
        inputRating.value = element.id;

        // Adicionar o cod do avaliado no input hidden
        const inputCodAvaliado = document.querySelector("#inputAvaliado");
        inputCodAvaliado.value = idAvaliado;

        // Adicionar o cod do avaliador no input hidden
        const inputCodAvaliador = document.querySelector("#inputAvaliador");
        inputCodAvaliador.value = idAvaliador;

        // Adicionar o cod do agendamento
        const inputAgendamento = document.querySelector("#inputAgendamento");
        inputAgendamento.value = idAgendamento;
    });
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
    const inputAvaliado = criarInputs("inputAvaliado", "hidden", "cod_avaliado");
    const inputAvaliador = criarInputs("inputAvaliador", "hidden", "cod_avaliador");
    const inputAgendamento = criarInputs("inputAgendamento", "hidden", "cod_agendamento");
    const inputRating = criarInputs("inputRating", "hidden", "nota");
    const inputComentario = criarInputs("comentario-avaliacao", "textarea", "comentario", "Adicionar comentário...");

    // Atribuir required para o input de comentário
    inputComentario.setAttribute("required", "");

    // Criar os btns
    const btnSair = criarBtns("button", "btn-sair-avaliacao", null, `<i class="fa-solid fa-chevron-left"></i> Sair`);
    btnSair.setAttribute("data-bs-dismiss", "modal");

    const btnAvaliar = criarBtns("submit", "btn-enviar-avaliacao", null, `Enviar <i class="fa-solid fa-chevron-right"></i>`);

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