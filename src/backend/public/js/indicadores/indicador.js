function avaliacaoPrestador(data) {
    for (rating of data) {
        criarListaAvaliacoes(rating);
    }
}

$(document).ready(() => {
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
        //console.log(data);
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
    const pendingServices = getServicosPendentes();
    const servicoSelection = document.querySelector("#servicoSelection");
    pendingServices.then(data => {
        data.forEach(data => {
            const option = criarElementos("option", null, null, data.nome, data.nome);
            servicoSelection.appendChild(option);
        })
        graficoServicosPendentes(data);
    })
})