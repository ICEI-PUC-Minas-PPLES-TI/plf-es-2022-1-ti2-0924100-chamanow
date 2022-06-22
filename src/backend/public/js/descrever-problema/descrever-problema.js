function infoPerfil(data) {
    // Nome de usuario
    const nomeUsuario = document.querySelector("#nome-usuario");
    nomeUsuario.innerText = data.nome;

    // Alterar a nota do usuario
    const notaUser = document.querySelector("#nota");

    // Div Avaliação ========================================

    // Busca no banco de dados a média da nota do prestador
    const media_avaliacao = getAvgRating(data.cod_user);
    media_avaliacao.then(avaliacao => {
        // Atribui a nota à uma variável
        const nota = avaliacao[0].nota;

        // Se houver nota para o prestador, ela é carregada na página
        if (nota) {
            // Adiciona a nota média calculada na página com uma casa decimal
            notaUser.innerText = nota.toFixed(1);

            // Configura as estrelas de acordo com a nota média
            const stars = document.querySelectorAll(".avaliacao li");
            stars[nota.toFixed(0) - 1].classList.add("active");
        } else {
            // Caso contrario, uma mesagem é exibida

            // Oculta as estrelas ==================

            // Referencia os elementos que serão ocultos
            const ulAvalicao = document.querySelector(".avaliacao");
            const ponto = document.querySelector(".ponto");

            // Atribui 'display: none' aos elementos
            ulAvalicao.style = "display: none";
            ponto.style = "display: none";

            // Atribui uma class para o elemento
            notaUser.className = "sem-avaliacao";

            // Adiciona uma mensagem no elemento
            notaUser.innerText = "Este prestador ainda não possui avaliações";
        }
    })

    //Região de atuação
    const regiaoAtuacao = document.querySelector("#location");
    regiaoAtuacao.innerText = data.regiao_atuacao;
}

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
    dataPublicacao.innerText = formatarDataHora(data.created_at);

    // Colocando os elementos criados dentro de div nomeData
    divNomeData.appendChild(nomeAvaliador);
    divNomeData.appendChild(hifen);
    divNomeData.appendChild(dataPublicacao);

    // Div Avaliação ========================================

    // Criação da div com a nota da avaliação
    const divAvaliacao = criarElementos('div', null, "avaliacao-usuario");

    // Criação do elemento para a nota
    const notaAvaliacao = criarElementos('span', "nota", null);

    // Adiciona a divAvaliacao na página


    // Colocando notaAvaliacao dentro da divAvaliacao
    divAvaliacao.appendChild(notaAvaliacao);

    // Se houver nota para o prestador, ela é carregada na página
    if (data.nota) {
        // Criação do elemento para o ponto de separação
        const ponto = criarElementos('span', null, "ponto");

        // Criação do elemento que conterá as estrelas
        const listEstrelas = criarElementos('ul', null, "avaliacao");

        // Colocando os elementos criados dentro da divAvaliacao
        divAvaliacao.appendChild(ponto);
        divAvaliacao.appendChild(listEstrelas);

        // Adicionando a média da nota no elemento 'span'
        notaAvaliacao.innerText = data.nota;

        // Criando e colocando os elementos estrela dentro da lista
        for (var i = 0; i < 5; i++) {
            // Criação do elemento para as estrelas
            const estrelas = criarElementos('li', null, "star-icon-view");

            // Adiciona a class 'active' na estrela correspondente à nota do usuario
            if (i == (data.nota.toFixed(0) - 1))
                estrelas.classList.add("active");

            // Colocando os elementos estrela dentro da lista
            listEstrelas.appendChild(estrelas);
        }
    } else {
        // Caso contrario, uma mesagem é exibida

        // Atribui uma class para o elemento
        notaAvaliacao.className = "sem-avaliacao";

        // Adiciona uma mensagem no elemento
        notaAvaliacao.innerText = "Este prestador ainda não possui avaliações";
    }

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

$(document).ready(function() {
    // Muda a logo em dispositivos com display menor que 1000px
    logoMobile();

    // Pegar o id do user no cookie
    const idUser = getCookie("idUser");

    // Caso o usuario nã o esteja logado (idUser == null), ele é direcionado para a página inicial
    if (!idUser)
        alterarHeaderDeslogado();
    else {
        const user = getUserData(idUser);
        user.then(user => {
            alterarHeaderLogado(user);
        })
    }
    const urlParams = new URLSearchParams(location.search);

    const cod_prestador = getUserData(urlParams.get('cod_prestador'));
    cod_prestador.then(data => {
        // Gera os dados do perfil
        infoPerfil(data);

        // Gera as avaliações
        const divDadosAvaliacoes = document.querySelector("#avaliacoes");
        const dataAvaliacoes = getAvaliacao(data.cod_user);
        dataAvaliacoes.then((data) => {
            if (data.length) {
                for (var i = 0; i < 3; i++) {
                    // Referenciar a div com a tabela
                    const divAvaliacoes = criarListaAvaliacoes(data[i]);

                    // Adicionar divAvaliacoeso na divDadosMenu
                    divDadosAvaliacoes.appendChild(divAvaliacoes);
                }
            } else {
                // Referenciar a div com a tabela
                const divAvaliacoes = document.createElement('p');
                divAvaliacoes.className = "dataNull";
                divAvaliacoes.innerText = "Este prestador ainda não possui avaliações";

                // Adicionar divAvaliacoeso na divDadosMenu
                divDadosAvaliacoes.appendChild(divAvaliacoes);
            }

            const btnOrcamento = document.querySelector("#contratar-servico");
            btnOrcamento.onclick = () => {
                completaInput(getCookie('idUser'), urlParams.get('cod_prestador'));
            }
        })
    });

    // Verifica se há detalhamento do problema salvo no localStorage
    var detalhamento = localStorage.getItem("detalhamento");
    if (detalhamento) {
        $("#inputProblema").val(detalhamento);
        localStorage.removeItem("detalhamento");
    }
})

function completaInput(cod_contratante, cod_prestador) {
    const input_cod_servico = document.querySelector("#input_cod_servico");
    input_cod_servico.value = Math.floor(Date.now() * Math.random()).toString(36);

    const input_cod_contratante = document.querySelector("#input_cod_contratante");
    input_cod_contratante.value = cod_contratante;

    const input_cod_prestador = document.querySelector("#input_cod_prestador");
    input_cod_prestador.value = cod_prestador;

    const input_cod_tipo = document.querySelector("#input_cod_tipo");
    input_cod_tipo.value = 500;
}