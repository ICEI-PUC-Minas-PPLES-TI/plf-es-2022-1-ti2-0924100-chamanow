function init(data) {
    const cod_user = data.cod_user;

    // Alterar o nome do usuário no perfil
    const nomeUser = document.querySelector("#nomeUser");
    nomeUser.innerText = data.nome;

    // Alterar a foto de perfil do user, se houver
    // const ft_perfil = document.querySelector("#ftUser");
    // if(data.foto_perfil)
    //     ft_perfil.setAttribute("src")

    // Referencia a div com o conteúdo dos menus
    const divDadosMenu = document.querySelector(".dadosMenu");

    var dataServicos = "";

    if (cod_user.charAt(0) == '1')
        dataServicos = getUserServicesCliente(cod_user);
    else
        dataServicos = getUserServicesPrestador(cod_user);

    dataServicos.then((data) => {
        // Referenciar a div com a tabela
        const divTabelaServico = tabelaServicos(cod_user, data, );

        // Adicionar divTabelaServico na divDadosMenu
        divDadosMenu.appendChild(divTabelaServico);
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#servicos").click(() => {
        dataServicos.then((data) => {
            // Referenciar a div com a tabela
            const divTabelaServico = tabelaServicos(cod_user, data);

            // Adicionar divTabelaServico na divDadosMenu
            divDadosMenu.appendChild(divTabelaServico);
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
        // Apagar todos os elementos da seção
        $(".dadosMenu").html("");

        for (var i = 0; i < 6; i++) {
            // Referenciar a div com a tabela
            const divAvaliacoes = criarListaAvaliacoes(cod_user);

            // Adicionar divAvaliacoeso na divDadosMenu
            divDadosMenu.appendChild(divAvaliacoes);
        }
    })

    // Identificar qual serviço da tabela foi clicado
    $('#tabelaServico tr').click(() => {
        var target = this.closest('[id]');
        setTimeout(() => {
            window.location.href = `../detalhe-servico/index.html?cod-servico=${String(target.id)}`;
        }, 50);
    });
}

$(document).ready(() => {
    const idUser = "2-a9s807xo";
    getUserData(idUser).then((data) => {
        init(data);
    });
})