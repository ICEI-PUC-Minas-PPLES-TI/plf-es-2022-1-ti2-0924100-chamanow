function init(data) {
    const cod_user = data.cod_user;

    // Alterar o nome do usuário no perfil
    const nomeUser = document.querySelector("#nomeUser");
    nomeUser.innerText = data.nome;

    // Alterar a nota do usuario
    const notaUser = document.querySelector("#nota");
    const userRating = getAvgRating(cod_user);
    userRating.then((rating) => {
        const nota = rating[0].nota;

        if (nota) {
            // Adiciona a nota média calculada na página com uma casa decimal
            notaUser.innerText = nota.toFixed(1);

            // Configura as estrelas de acordo com a nota média
            const stars = document.querySelectorAll(".avaliacao li");
            stars[nota.toFixed(0) - 1].classList.add("active");
        } else {
            // Se não houver avaliações, elas são ocultas
            const avaliacaoUsuario = document.querySelector(".avaliacao-usuario");
            avaliacaoUsuario.style = "display: none";
        }
    })

    const userEmail = document.querySelector("#userEmail");
    userEmail.innerText = data.email;

    // Alterar a foto de perfil do user, se houver
    // const ft_perfil = document.querySelector("#ftUser");
    // if(data.foto_perfil)
    //     ft_perfil.setAttribute("src", data.foto_perfil)

    // Referencia a div com o conteúdo dos menus
    const divDadosMenu = document.querySelector(".dadosMenu");

    var dataServicos = "";

    if (cod_user.charAt(0) == '1')
        dataServicos = getUserServicesCliente(cod_user);
    else
        dataServicos = getUserServicesPrestador(cod_user);

    dataServicos.then((data) => {
        // Referenciar a div com a tabela
        const divTabelaServico = tabelaServicos(cod_user, data);

        // Adicionar divTabelaServico na divDadosMenu
        divDadosMenu.appendChild(divTabelaServico);

        trClicada(data, cod_user);
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#servicos").click(() => {
        dataServicos.then((data) => {
            // Referenciar a div com a tabela
            const divTabelaServico = tabelaServicos(cod_user, data);

            // Adicionar divTabelaServico na divDadosMenu
            divDadosMenu.appendChild(divTabelaServico);

            trClicada(data);
        })
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#alterarCadastro").click(() => {
        // Referenciar a div com a tabela
        const divAlterarCadastro = alterarCadastro(data, cod_user);

        // Adicionar divAlterarCadastro na divDadosMenu
        divDadosMenu.appendChild(divAlterarCadastro);
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#avaliacoes").click(() => {
        // Alterar o título da seção
        const tituloSecao = document.querySelector("h2.tituloSecao");
        tituloSecao.innerText = "Avaliações";

        // Alterar a descrição da seção
        const descricaoSecao = document.querySelector(".descricaoSecao");
        descricaoSecao.innerText = "Lista de avaliações em que você foi avaliado:";

        // Apagar todos os elementos da seção
        $(".dadosMenu").html("");

        const dataAvaliacoes = getUserRating(cod_user);
        dataAvaliacoes.then((data) => {
            console.log(data)
            if (data)
                data.forEach(data => {
                    // Referenciar a div com a tabela
                    const divAvaliacoes = criarListaAvaliacoes(cod_user, data);

                    // Adicionar divAvaliacoeso na divDadosMenu
                    divDadosMenu.appendChild(divAvaliacoes);
                })
            else {
                // Referenciar a div com a tabela
                const divAvaliacoes = document.createElement('p');
                divAvaliacoes.className = "dataNull";
                divAvaliacoes.innerText = "Você ainda não possui avaliações";

                // Adicionar divAvaliacoeso na divDadosMenu
                divDadosMenu.appendChild(divAvaliacoes);
            }
        })
    })
}

$(document).ready(() => {
    // Pegar o id do user no cookie
    const idUser = getCookie("idUser");

    // Caso o usuario nã o esteja logado (idUser == null), ele é direcionado para a página inicial
    if (!idUser)
        window.location.href = "/";

    // Função para pegar os dados do usuario
    getUserData(idUser).then((data) => {
        init(data);
    });

    if (idUser.charAt(0) != '1') {
        const btnCadastrarProfissional = document.querySelector("#cadastroPrestador");
        btnCadastrarProfissional.style = "display: none";
    }

    $("#logout").click(() => {
        document.cookie = `idUser=; expires=1970-01-01T00:00:00.000Z;`;
        window.location.replace("/");
    })
})