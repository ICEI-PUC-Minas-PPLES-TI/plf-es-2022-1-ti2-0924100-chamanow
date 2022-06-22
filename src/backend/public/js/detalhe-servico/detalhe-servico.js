function infoPerfil(data, tipoUser) {
    // Busca os dados e avaliações do usuario no banco de dados
    var cod_user;
    if (tipoUser == '1')
    // Pegar o cod_user do prestador
        cod_user = data.cod_prestador;
    else
    // Pegar o cod_user do cliente
        cod_user = data.cod_contratante;

    // Pegar os dados do cliente
    const userData = getUserData(cod_user);

    userData.then(user => {
        // Nome de usuario
        const nomeUsuario = document.querySelector("#nome-usuario");
        nomeUsuario.innerText = user.nome;

        // Referenciar o elemento .infos
        const infos = document.querySelector(".infos");

        // Se o usuário for cliente, então o será mostrado a região de atuação do prestador
        if (tipoUser == '1')
        //Região de atuação
            infos.innerText = "Região de Atuação: " + user.regiao_atuacao;

        // Referenciar o elemento de enderco
        const endereco = document.querySelector(".endereco");

        //Região de endereco
        endereco.innerText = "Endereço: " + data.endereco;
    })

    // Alterar a nota do usuario

    // Referencia o elemento do html 
    const notaUser = document.querySelector("#nota");

    // Pegar as avaliações do cliente
    const userRating = getAvgRating(cod_user);

    userRating.then(rating => {
        if (rating[0].nota) {
            // Adiciona a nota média calculada na página com uma casa decimal
            notaUser.innerText = rating[0].nota.toFixed(1);

            // Configura as estrelas de acordo com a nota média
            const stars = document.querySelectorAll(".avaliacao li");
            stars[rating[0].nota.toFixed(0) - 1].classList.add("active");
        } else {
            // Se não houver avaliações, elas são ocultas
            const avaliacaoUsuario = document.querySelector(".avaliacao-perfil");
            avaliacaoUsuario.style = "display: none";
        }
    })
}

function detalharProblema(data) {
    // Descrição do problema
    const descricaoProblema = document.querySelector("#detalhe-problema-cliente");
    descricaoProblema.innerText = data.descricao;
}

$(document).ready(() => {
    // Muda a logo em dispositivos com display menor que 1000px
    logoMobile();

    //Calcula o ano
    document.querySelector('#ano').innerHTML = new Date().getFullYear();

    // Pegar o id do user no cookie
    const idUser = getCookie("idUser");
    //const idUser = '1-khs0oyf1';
    //const idUser = '2-1iskd06o';

    // Caso o usuario nã o esteja logado (idUser == null), ele é direcionado para a página inicial
    if (!idUser)
        alterarHeaderDeslogado();
    else {
        const user = getUserData(idUser);
        user.then(user => {
            alterarHeaderLogado(user);
        })
    }

    var tipoUser = "";
    var codStatusServico = "";

    // Pegar o parâmetros da url
    const urlParams = new URLSearchParams(location.search);
    const cod_servico = urlParams.get('cod_servico');
    const cod_user = urlParams.get('cod_user');

    // Alterar a action do form para o serviço específico
    const formServico = document.querySelector("#formServico");
    formServico.setAttribute("action", `/agendamento/atualizar-servico/?cod_servico=${cod_servico}`);

    // Busca os dados do serviço do escolhido
    const servicoMain = getServico(cod_servico);
    servicoMain.then(service => {
        console.log(service)
            // Pega o cod do status do servico
        codStatusServico = service.cod_status;

        // Manipula a página de acordo com o cod do status
        codServico(codStatusServico);

        // Pega o tipo de usuario
        tipoUser = idUser.split("-")[0];

        // Gera os dados do perfil
        infoPerfil(service, tipoUser);

        // Gera as avaliações
        const divDadosAvaliacoes = document.querySelector("#avaliacoes");
        const dataAvaliacoes = getAvaliacao(service.cod_user);
        dataAvaliacoes.then(data => {
                //console.log(data)
                if (data.length) {
                    data.forEach(rating => {
                        // Referenciar a div com a tabela
                        const divAvaliacoes = criarListaAvaliacoes(rating);

                        // Adicionar divAvaliacoeso na divDadosMenu
                        divDadosAvaliacoes.appendChild(divAvaliacoes);
                    })
                } else {
                    // Referenciar a div com a tabela
                    const divAvaliacoes = document.createElement('p');
                    divAvaliacoes.className = "dataNull";
                    divAvaliacoes.innerText = "Este usuário ainda não possui avaliações";

                    // Adicionar divAvaliacoeso na divDadosMenu
                    divDadosAvaliacoes.appendChild(divAvaliacoes);
                }
            })
            // Gerar o detalhamento do problema
        detalharProblema(service, tipoUser);

        // Gera a seção de enviar/receber o orçamento
        orcamento(service, tipoUser);

        // Gera a seção de escolher datas
        escolherData(service, tipoUser);

        // Gera a seção de enviar/receber o comprovante de pagamento
        comprovantePagamento(service, tipoUser);

        // Adiciona o atributo required para todos os inputs da página exceto do comprovante de pagamento
        const allInputs = document.querySelectorAll("input");
        allInputs.forEach(input => {
            if (input.id != "btn-comprovante")
            // Verifica se o id dos inputs é diferente do input do comprovante de pagamento
                input.setAttribute("required", "");
        })

        cancelarServico(cod_servico);
    })
})

function codServico(cod_status) {
    if (cod_status == 3) {
        // Referencia o btn de Aceitar Serviço
        const btnConcluirServico = document.querySelector("#btn-aceitar-servico");

        // Altera o conteúdo dele
        btnConcluirServico.innerHTML = `Concluir <i class="fa-solid fa-check"></i>`;
    }

    if (cod_status == -1) {
        // Some com os btns
        const hudBtn = document.querySelector(".btn-hud");
        hudBtn.style = "display: none";

        // Desabilita todos os inputs
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.setAttribute("disabled", "true");
        })
    }
}

function cancelarServico(cod_servico) {
    // Referencia o btn de Aceitar Serviço
    const btnConcluirServico = document.querySelector("#btn-recusar-servico");

    // Altera o conteúdo dele
    btnConcluirServico.setAttribute("formaction", `/agendamento/cancelar-servico/?cod_servico=${cod_servico}`);

}