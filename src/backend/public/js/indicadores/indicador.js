function avaliacaoPrestador(data) {
    for (rating of data) {
        criarListaAvaliacoes(rating);
    }
}

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

    // Função para mostrar os dez prestadores mais bem avaliados
    const rating = getAvaliacaoPrestador();
    rating.then(rating => {
        avaliacaoPrestador(rating);
    });

    // Função para mostrar a média do tempo de realização do serviço de cada tipo
    const timeService = getTimeService();
    timeService.then(time => {
        graficoTimeService(time);
    })

    // Função para mostrar a taxa de cancelamento dos servicos
    const cancellation = getCancellationRate();
    cancellation.then(data => {
        console.log(data);
    })

    // Função para mostrar usuarios novos cadastrados
    const userRegister = getUserRegister();
    userRegister.then(data => {
        graficoCadastroUsuario(data);
    })

    // Função para mostrar prestadores novos cadastrados
    const providerRegister = getProviderRegister();
    providerRegister.then(data => {
        graficoCadastroPrestador(data);
    })

    // Função para mostrar prestadores novos cadastrados
    const mostContractedServices = getServicosMaisContratados();
    mostContractedServices.then(data => {
        graficoServicosMaisContratados(data);
    })

    // Função para mostrar prestadores novos cadastrados
    const avgPriceService = getPrecoMedio();
    avgPriceService.then(data => {
        graficoPrecoMedio(data);
    })

    // Função para mostrar a taxa de serviços pendentes
    const allServices = getAllServices();
    const servicoSelection = document.querySelector("#servicoSelection");
    allServices.then(data => {
        data.forEach(data => {
            const option = criarElementos("option", data.cod_tipo, null, data.nome, data.nome);
            servicoSelection.appendChild(option);
        })

        $("#servicoSelection").change(e => {
            const index = servicoSelection.selectedIndex;
            const option = servicoSelection.options[index];
            const pendingServices = getServicosPendentes(option.id);
            pendingServices.then(service => {
                graficoServicosPendentes(service, option.value);
            })
        })
    })
})

function alterarHeaderLogado(user) {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso ao perfil
    const perfil = criarElementoLink("/perfil", user.nome);

    // Acesso à página inicial
    const home = criarElementoLink("/", "Tela inicial");

    // Adiciona os elementos criados dentro do menu
    menu.appendChild(home);
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

function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

    return cookie[name];
}