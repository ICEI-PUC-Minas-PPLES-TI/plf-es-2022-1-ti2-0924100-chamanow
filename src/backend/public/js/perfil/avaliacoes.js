function criarListaAvaliacoes(cod_user) {

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

    // Colocando todos as divs criadas dentro da divAvaliacoes
    divAvaliacoes.appendChild(divNomeData);
    divAvaliacoes.appendChild(divAvaliacao);
    divAvaliacoes.appendChild(comentarioAvaliacao);

    // Retornar divAvaliacoes
    return divAvaliacoes;
}