function avaliacaoPrestador(data) {
    for (rating of data) {
        criarListaAvaliacoes(rating);
    }
}

$(document).ready(() => {
    // Função que muda a seta do select quando clicado
    setaSelect();

    // Muda a logo quando o dispositivo é mobile
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

    // Função para mostrar os dez prestadores mais bem avaliados
    const rating = getAvaliacaoPrestador();
    rating.then(rating => {
        avaliacaoPrestador([rating]);
    });

    // Função para mostrar a média do tempo de realização do serviço de cada tipo
    const timeService = getTimeService();
    timeService.then(time => {
        graficoTimeService(time);
    })

    // Função para mostrar a taxa de cancelamento dos servicos
    const cancellation = getCancellationRate();
    cancellation.then(rate => {
        graficoTaxaCancelamento(rate);
    })

    // Função para mostrar usuarios novos cadastrados
    const userRegister = getUserRegister();
    userRegister.then(users => {
        graficoCadastroUsuario(users);
    })

    // Função para mostrar prestadores novos cadastrados
    const providerRegister = getProviderRegister();
    providerRegister.then(providers => {
        graficoCadastroPrestador(providers);
    })

    // Função para mostrar prestadores novos cadastrados
    const mostContractedServices = getServicosMaisContratados();
    mostContractedServices.then(services => {
        graficoServicosMaisContratados(services);
    })

    // Função para mostrar prestadores novos cadastrados
    const avgPriceService = getPrecoMedio();
    avgPriceService.then(prices => {
        graficoPrecoMedio(prices);
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