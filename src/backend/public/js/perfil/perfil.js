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

    console.log(dataServicos)

    dataServicos.then((data) => {
        // Referenciar a div com a tabela
        const divTabelaServico = tabelaServicos(cod_user, data);

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

        const dataAvaliacoes = getUserRating(cod_user);
        dataAvaliacoes.then((data) => {
            console.log(data)
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    // Referenciar a div com a tabela
                    const divAvaliacoes = criarListaAvaliacoes(cod_user, data[i]);

                    // Adicionar divAvaliacoeso na divDadosMenu
                    divDadosMenu.appendChild(divAvaliacoes);
                }
            } else {
                // Referenciar a div com a tabela
                const divAvaliacoes = document.createElement('p');
                divAvaliacoes.className = "dataNull";
                divAvaliacoes.innerText = "Você ainda não possui avaliações";

                // Adicionar divAvaliacoeso na divDadosMenu
                divDadosMenu.appendChild(divAvaliacoes);
            }
        })
    })

    // Identificar qual serviço da tabela foi clicado
    $('#tabelaServico tr').click(() => {
        console.log("Teste")
        var target = this.id;
        console.log(target);
        /*setTimeout(() => {
            window.location.href = `/detalhe-servico/index.html?cod-servico=${String(target.id)}`;
        }, 50);*/
    });
}

function formatarData(date, hour) {
    var dateFormatada = date.split('T')[0].replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    if (hour)
        dateFormatada += ` às ${hour.substring(0, 5)}`;

    return dateFormatada;
}

$(document).ready(() => {
    const idUser = "1-j36dvenx";
    getUserData(idUser).then((data) => {
        console.log(data)
        init(data);
    });

    if (idUser.charAt(0) != '1') {
        const btnCadastrarProfissional = document.querySelector("#cadastroPrestador");
        btnCadastrarProfissional.style = "display: none";
    }
})