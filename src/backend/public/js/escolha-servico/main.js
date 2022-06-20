// Função que cria os elementos da pesquisa
function carregaPesquisa() {
    // Slogan e Barra de Pesquisa ============================================

    // Criação do slogan
    const content = `O melhor <span class="corLaranja"> serviço </span> pelo melhor <span class="corLaranja"> preço</span>`;
    const slogan = criarElementos("h1", null, "titulo", content);

    // Criar o datalist
    const datalist = criarElementos('datalist', "servicos");

    // Criação do input
    const searchInput = criarInputs('pesquisar', null, "searchInput", "Pesquisar Serviço", "servicos");

    // Criação da div search
    const search = criarElementos('div', null, "banner");

    // Imagem ================================================================

    // Criação da imagem
    const img_banner = new Image;
    img_banner.src = '/img/gustavo.png';

    // Append Child ==========================================================

    // Adicionar os slogan e barra de pesquisa criados dentro da div search
    search.appendChild(slogan);
    search.appendChild(searchInput);
    search.appendChild(datalist);

    // Criação da div que vai conter todos os elementos
    const banner = criarElementos('div', null, "banner");

    // Adicionar a div search e a imagem criados dentro da div banner 
    banner.appendChild(search);
    banner.appendChild(img_banner);

    // Retornar banner
    return banner;
}

// Função que cria a lista do resultado de busca dos serviços e povoa o datalist
function listSearchResults(servico) {
    // Povoar datalist =============================================================

    // Criar a option com o servico
    const option = criarElementos('option', null, null, servico.nome, servico.nome);

    // Referencia o datalist
    const datalist = document.querySelector("#servicos");

    // Adicionar o option dentro do datalist
    datalist.appendChild(option);

    // Resultados ==================================================================

    // Criação da div que vai conter o resultado de busca
    const resultService = criarElementos('div', servico.cod_tipo, "servico");

    // Criação do título do resultado
    const titulo = criarElementos('h3', null, "result-title", servico.nome);

    // Criação da descrição do serviço
    const descricao = criarElementos('p', null, "result-description", servico.descricao);

    // Adicionar os elementos na página
    resultService.appendChild(titulo);
    resultService.appendChild(descricao);

    // Retorna o elemento criado
    return resultService;
}

// Função que cria o título e descrição do serviço escolhido
function criaServicoNP(servico) {
    // Criação da div para armazenar as infos
    const divServicoNP = criarElementos('div', null, "servicoNP");

    // Div Título e botao voltar ===========================================

    // Criação da div para armazenar o título e o botão para voltar
    const divTitulo = criarElementos('div', null, "tit_servicoNP");

    // Criação do título
    const titulo = criarElementos('h1', null, null, servico.nome);

    // Criação do btn voltar
    const btnVoltar = criarBtns('button', null, "btn-voltar", "Voltar");

    // Criação do parágrafo de descrilção
    const descricao = criarElementos('p', null, "descricao-servico", servico.descricao);

    // Append Child =======================================================

    // Adicionar o título e o btn dentro da divTitulo
    divTitulo.appendChild(titulo);
    divTitulo.appendChild(btnVoltar);

    // Adiciona os elementos criados na página
    divServicoNP.appendChild(divTitulo);
    divServicoNP.appendChild(descricao);

    // Retorna a  divServicoNP
    return divServicoNP;
}

// Função que cria os cards dos prestadores
function criaCardsNP(prestador, cod_servico) {
    console.log(prestador)
    console.log(cod_servico)

    // Criação da imagem
    const img_prof = new Image;
    img_prof.src = '/img/3329962-corpo-do-cantor-gusttavo-lima-foi-elogia-opengraph_1200-3.jpg';
    img_prof.id = 'card_img';

    // Infos do prestador ==================================================

    // Nome =================================================

    // Criação do elemento nome do prestador
    const nome = criarElementos('h1', null, "card-name", prestador.nome);

    // Div Avaliação ========================================

    // Criação da div com a nota da avaliação
    const divAvaliacao = criarElementos('div', null, "avaliacao-usuario");

    // Criação do elemento para a nota
    const notaAvaliacao = criarElementos('span', "nota", null);

    // Colocando notaAvaliacao dentro da divAvaliacao
    divAvaliacao.appendChild(notaAvaliacao);

    // Busca no banco de dados a média da nota do prestador
    const media_avaliacao = getAvgRating(prestador.cod_user);
    media_avaliacao.then(avaliacao => {
        // Atribui a nota à uma variável
        const nota = avaliacao[0].nota;

        if (nota) {
            // Criação do elemento para o ponto de separação
            const ponto = criarElementos('span', null, "ponto");

            // Criação do elemento que conterá as estrelas
            const listEstrelas = criarElementos('ul', null, "avaliacao");

            // Colocando os elementos criados dentro da divAvaliacao
            divAvaliacao.appendChild(ponto);
            divAvaliacao.appendChild(listEstrelas);

            // Adicionando a média da nota no elemento 'span'
            notaAvaliacao.innerText = nota.toFixed(1);

            // Criando e colocando os elementos estrela dentro da lista
            for (var i = 0; i < 5; i++) {
                // Criação do elemento para as estrelas
                const estrelas = criarElementos('li', null, "star-icon-view");

                // Colocando os elementos estrela dentro da lista
                listEstrelas.appendChild(estrelas);
            }

            // Configura as estrelas de acordo com a nota média
            const stars = document.querySelectorAll(".avaliacao li");
            stars[nota.toFixed(0) - 1].classList.add("active");
        } else
            notaAvaliacao.innerText = "Este prestador não possui avaliações ainda";
    })

    // Email ================================================

    const email = criarElementos('p', "card-p", null, prestador.email);

    // Btn Escolher Prestador ===============================

    const btnEscolherPrestador = criarBtns("button", "card-button", null, "Escolher Prestador");

    // Cria uma constante com o link para a página de descrever problema
    const href = `/descrever-problema/?cod_prestador=${prestador.cod_user}&cod_servico=${cod_servico}`;

    // Cria o elemento com o link e o btnEscolherPrestador
    const aEscolherPrestador = criarElementoLink(href);

    // Adicionar o btnEscolherPrestador dentro de aEscolherPrestador
    aEscolherPrestador.appendChild(btnEscolherPrestador);

    // Append Child ========================================================

    // Criação da div que vai armazenar as infos do prestador
    const cardInfo = criarElementos("div", null, "card-infos");

    // Adiciona o nome, nota e email do prestador na div cardInfo
    cardInfo.appendChild(nome);
    cardInfo.appendChild(divAvaliacao);
    cardInfo.appendChild(email);

    // Criação da div card
    const card = criarElementos("div", null, "card");

    // Adiciona os elementos criados dentro de card
    card.appendChild(img_prof);
    card.appendChild(cardInfo);
    card.appendChild(aEscolherPrestador);

    // Retorna o card completo
    return card;
}

/*A função a seguir cria a página de escolha de serviço----------- */

function mostraServicos() {
    const tudo = document.querySelector(".tudo");

    // Criação do banner do site
    const banner = carregaPesquisa();

    // Criação da div searchResults
    const searchResults = criarElementos("div", null, "searchResults");

    // Adição do banner e da div searchResults na página
    tudo.appendChild(banner);
    tudo.appendChild(searchResults);

    // Busca todos os serviços no banco de dados
    const servicos = getAllServices();
    servicos.then(servico => {
        // Criação dos cards para cada servico
        servico.forEach(data => {
            // Criação de uma div para conter os resultados da busca
            const divServicos = listSearchResults(data);

            // Adiciona o elemento criado na div searchResults
            searchResults.appendChild(divServicos);
        })

        // Identifica o elemento clicado
        $('.searchResults div').click((event) => {
            // Limpa a tela
            $(".tudo").html("");

            // Salva o id do elemento clicado em uma constante
            const elemento = event.target;
            const nodeElementId = elemento.closest("div").id;

            // Criação o título e descrição do serviço escolhido ========================

            // Identificação do serviço escolhido
            const servicoClicado = servico.find(dado => dado.cod_tipo = nodeElementId);

            // Criação da seção com o título e descrição do serviço escolhido
            const secao = criaServicoNP(servicoClicado);
            tudo.appendChild(secao);

            // Cria a div que vai conter os cards dos prestadores
            const divPrestadores = criarElementos('div', null, "prestadores");

            // Adiciona a div criada na página
            tudo.appendChild(divPrestadores);

            // Busca no banco de dados as informações de todos os prestadores que prestam o servico escolhido pelo usuario
            const prestadores = getSpecProfessional(nodeElementId);
            prestadores.then(prestador => {
                prestador.forEach(prestador => {
                    // Cria o card de cada prestador
                    const card = criaCardsNP(prestador, nodeElementId);

                    // Adiciona o card na divPrestadores
                    divPrestadores.appendChild(card);
                })
            })

            // Refencia o btn de voltar
            const btnVoltar = document.querySelector(".btn-voltar");

            // Quando clicado, a página é apagada e os servicos são mostrodos novamente
            btnVoltar.onclick = () => {
                // Limpa a tela
                $(".tudo").html("");

                // Os resultados de busca são renderizados novamente
                mostraServicos();
            }
        })
    })

    // Filtrar resultados de acordo com o input
    const pesquisar = document.querySelector("#pesquisar");
    pesquisar.onclick = () => {
        filtroPerguntas();
    }
}

/*Chamando funções----------- */
$(document).ready(() => {
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

    // Carrega os serviços
    mostraServicos();
})