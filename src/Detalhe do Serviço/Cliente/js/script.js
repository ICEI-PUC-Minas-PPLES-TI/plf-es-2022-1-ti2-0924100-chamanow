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

function detalharProblema(cor_usuario) {
    // Descrição do problema
    const descricaoProblema = document.querySelector("#detalhe-problema-cliente");
    descricaoProblema.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Eleifend donec pretium vulputate sapien nec sagittis.Cras adipiscing enim eu turpis egestas pretium aenean.Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.";
}

$(document).ready(function() {
    // Gera os dados do perfil
    infoPerfil();

    // Gera as avaliações
    avaliacoesUsuario(2);

    // Gerar o detalhamento do problema
    detalharProblema();
})