function avaliacaoPrestador(data) {
    for (rating of data) {
        criarListaAvaliacoes(rating);
    }
}

$(document).ready(() => {
    const users = getAllUsers();
    users.then(users => {
            const allServices = getAllServices();
            allServices.then(services => {
                const arrayServices = services.map(obj => {
                    return Object.keys(obj).map(key => {
                        return obj[key];
                    });
                });

                var cod_tipo = [];
                arrayServices.forEach(element => {
                    cod_tipo.push(element[0]);
                });

                const arrayUsers = users.map(obj => {
                    return Object.keys(obj).map(key => {
                        return obj[key];
                    });
                });

                var cod_prestador = [];
                arrayUsers.forEach(element => {
                    if (element[0].startsWith("2"))
                        cod_prestador.push(element[0]);
                });

                povoarTabela(users, cod_tipo, cod_prestador);
            })
        })
        // Função para mostrar os dez prestadores mais bem avaliados
    const rating = getAvaliacaoPrestador();
    rating.then(rating => {

        avaliacaoPrestador(rating);
    });

    // Função para mostrar a média do tempo de realização do serviço de cada tipo
    const timeService = getTimeService();
    timeService.then(time => {
        console.log(time)
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
    const allServices = getAllServices();
    const servicoSelection = document.querySelector("#servicoSelection");
    allServices.then(data => {
        data.forEach(data => {
            const option = criarElementos("option", data.cod_tipo, null, data.nome, data.nome);
            servicoSelection.appendChild(option);
        })

        $("#servicoSelection").change(e => {
            const index = servicoSelection.selectedIndex;
            const optionId = servicoSelection.options[index].id;
            const pendingServices = getServicosPendentes(optionId);
            pendingServices.then(service => {
                graficoServicosPendentes(service);
            })
        })
    })
})