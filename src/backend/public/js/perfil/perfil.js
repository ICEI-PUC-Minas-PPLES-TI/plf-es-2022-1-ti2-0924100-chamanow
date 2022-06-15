function init(data) {
    const cod_user = data.cod_user;

    // Alterar o nome do usuário no perfil
    const nomeUser = document.querySelector("#nomeUser");
    nomeUser.innerText = data.nome;

    // Alterar a nota do usuario
    const notaUser = document.querySelector("#nota");
    const userRating = getUserRating(cod_user);
    userRating.then((rating) => {
        if (rating) {
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

    const userEmail = document.querySelector("#userEmail");
    userEmail.innerText = data.email;

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
            if (data) {
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

    $("#logout").click(() => {
        document.cookie = "idUser=; expires=1970-01-01T00:00:00.000Z;";
    })
}

function formatarData(date, hour) {
    var dateFormatada = date.split('T')[0].replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    if (hour)
        dateFormatada += ` às ${hour.substring(0, 5)}`;

    return dateFormatada;
}

function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

    return cookie[name];
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
})