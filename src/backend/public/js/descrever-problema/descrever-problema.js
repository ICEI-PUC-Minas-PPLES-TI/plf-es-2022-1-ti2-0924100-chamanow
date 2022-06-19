function infoPerfil(data) {
    // Nome de usuario
    const nomeUsuario = document.querySelector("#nome-usuario");
    nomeUsuario.innerText = data.nome;

    // Alterar a nota do usuario
    const notaUser = document.querySelector("#nota");
    const userRating = getUserRating(data.cod_user);
    userRating.then((rating) => {
        if (rating.length) {
            // Cálculo da média das avaliacoes
            var mediaNota = 0;

            // Soma as notas das avaliações
            for (let avaliacao of rating) {
                mediaNota += avaliacao.nota;
            }

            // Divide o total pela quantidade de notas
            mediaNota /= rating.length;

            // Adiciona a nota média calculada na página com uma casa decimal
            notaUser.innerText = mediaNota.toFixed(1);

            // Configura as estrelas de acordo com a nota média
            const stars = document.querySelectorAll(".avaliacao li");
            stars[mediaNota.toFixed(0) - 1].classList.add("active");
        } else {
            // Se não houver avaliações, elas são ocultas
            const avaliacaoUsuario = document.querySelector(".avaliacao-usuario");
            avaliacaoUsuario.style = "display: none";
        }
    })

    //Região de atuação
    const regiaoAtuacao = document.querySelector("#location");
    regiaoAtuacao.innerText = data.regiao_atuacao;
}

function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

    return cookie[name];
}

function criarListaAvaliacoes(data) {
    console.log(data)
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
    console.log(data.created_at);
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

function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

    return cookie[name];
}

function alterarHeaderLogado(user) {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso ao perfil
    const perfil = criarElementoLink("/perfil", user.nome);

    // Acesso à página inicial
    const home = criarElementoLink("/", "Tela inicial");

    // Acesso à página inicial
    const indicadores = criarElementoLink("/admin/indicadores", "Indicadores");

    // Adiciona os elementos criados dentro do menu
    menu.appendChild(home);
    menu.appendChild(indicadores);
    menu.appendChild(perfil);
}

function alterarHeaderDeslogado() {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso ao perfil
    const cadastroProfissional = criarElementoLink("/cadastro?user=profissional", "Sou um Profissa");

    // Acesso à página inicial
    const cadastro = criarElementoLink("/cadastro", "Sign Up");

    // Acesso à página inicial
    const login = criarElementoLink("/login", "Login");

    // Adiciona os elementos criados dentro do menu
    menu.appendChild(cadastroProfissional);
    menu.appendChild(cadastro);
    menu.appendChild(login);
}

function criarElementoLink(href, conteudo) {
    // Cria o elemento a
    const a = document.createElement('a');

    // Atribui uma rota a ele
    a.setAttribute('href', href);

    // Adiciona um conteúdo a ele
    a.innerText = conteudo;

    // Retorna o elemento criado
    return a;
}
$(document).ready(function() {
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
        console.log(data)
        dataAvaliacoes.then((data) => {
            if (data.length) {
                for (var i = 0; i < 3; i++) {
                    // Referenciar a div com a tabela
                    console.log(data[i])
                    const divAvaliacoes = criarListaAvaliacoes(data[i]);

                    // Adicionar divAvaliacoeso na divDadosMenu
                    divDadosAvaliacoes.appendChild(divAvaliacoes);
                }
            } else {
                // Referenciar a div com a tabela
                const divAvaliacoes = document.createElement('p');
                divAvaliacoes.className = "dataNull";
                divAvaliacoes.innerText = "Você ainda não possui avaliações";

                // Adicionar divAvaliacoeso na divDadosMenu
                divDadosAvaliacoes.appendChild(divAvaliacoes);
            }
        })
    });

    // Verifica se há detalhamento do problema salvo no localStorage
    var detalhamento = localStorage.getItem("detalhamento");
    if (detalhamento) {
        $("#inputProblema").val(detalhamento);
        localStorage.removeItem("detalhamento");
    }

    const btnOrcamento = document.querySelector("#contratar-servico");
    btnOrcamento.onclick = () => {
        completaInput(getCookie('idUser'), cod_prestadorAux);
    }
})

function formatarData(date, hour) {
    console.log(date)
    var dateFormatada = date.split('T')[0];
    dateFormatada.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');

    if (hour)
        dateFormatada += ` às ${hour.substring(0, 5)}`;

    return dateFormatada;
}

function completaInput(cod_user, cod_prestador) {
    const input_cod_servico = document.querySelector("#input_cod_servico");
    input_cod_servico.value = Math.floor(Date.now() * Math.random()).toString(36);

    const input_cod_contratante = document.querySelector("#input_cod_contratante");
    input_cod_contratante.value = getCookie('idUser');

    const input_cod_prestador = document.querySelector("#input_cod_prestador");
    input_cod_prestador.value = cod_prestador;

    const input_cod_tipo = document.querySelector("#input_cod_tipo");
    input_cod_tipo.value = 500;
}