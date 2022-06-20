let profissionaisBemAvaliados = [{
        imagem: "/img/worker.png",
        nome: "Fred Silva",
        ocupacao: "Ator Profissional",
        descricao: "Nosso Chamaker prestou notórios serviços na arte da atuação nesse mês.",
    },
    {
        imagem: "/img/worker.png",
        nome: "Nikolau 'Du Corte'",
        ocupacao: "Eletricista",
        descricao: "Nosso Chamaker nos deixou chocados e foi destaque em reparos elétricos nesse mês.",
    },
    {
        imagem: "/img/worker.png",
        nome: "Maicon Douglas",
        ocupacao: "Bombeiro",
        descricao: "Nosso Chamamaker não dormiu no ponto e prestou notórios serviços como bombeiro nesse mês.",
    },
];

function imprimeCatalogo(data) {
    // pega o container dos serviços a serem listados
    let containerServicos = document.getElementById("container-servicos");

    // declara variável que irá receber o catálogo
    let conteudoCatalogo = "";

    // executa item por item e salva dentro da variável
    data.forEach(data => {
        conteudoCatalogo += `
        <a href="/escolha-servico/?cod_servico=${data.cod_tipo}">
          <div class="servico-catalogo">
                <div class="container-img">
                    <img src="/img/worker.png" alt="Icone trabalho">
                </div>
                <h4>${data.nome}</h4>
            </div>
        </a>`
    })

    // coloca a variável no HTML da página
    containerServicos.innerHTML = conteudoCatalogo;
}

function imprimePrincipaisServicos(data) {
    // pega o container dos principais serviços a serem listados
    let containerPrincipaisServicos = document.getElementById(
        "container-principais-servicos"
    );

    // declara variável que irá receber os principais serviços
    let conteudoPrincipaisServicos = "";

    // executa item por item e salva dentro da variável
    for (var i = 0; i < 3; i++) {
        conteudoPrincipaisServicos += `
        <a href="/escolha-servico/?cod_servico=${data[i].cod_tipo}">
          <div class="principal-servico-item">
              <div class="container-img">
                <img src="/img/worker.png" alt="Icone trabalho">
              </div>
              <h4>${data[i].nome}</h4>
          </div>
        </a>`
    }

    // coloca a variável no HTML da página
    containerPrincipaisServicos.innerHTML = conteudoPrincipaisServicos;
}

function imprimeProfissionais(data) {
    console.log(data)
        // pega o container dos principais profissionais a serem listados
    let containerProfissionais = document.getElementById(
        "container-bem-avaliados"
    );

    // declara variável que irá receber os profissionais
    let conteudoProfissionais = "";

    // executa item por item e salva dentro da variável
    data.forEach(data => {
        conteudoProfissionais += `
          <div class="bem-avaliados-item">
              <div class="container-img">
                  <img src="/img/worker.png" alt="Icone trabalho">
              </div>
              <div class="container-texto">
                  <h3>${data.nome}</h3>
                  <h4>${data.servico}</h4>
                  <p>Nota média do prestador: ${data.nota_media_prestador.toFixed(1)}</p>
              </div>
          </div>`
    })

    // coloca a variável no HTML da página
    containerProfissionais.innerHTML = conteudoProfissionais;
}

$(document).ready(() => {
    // Pegar o id do user no cookie
    const idUser = getCookie("idUser");

    // Caso o usuario nã o esteja logado (idUser == null), ele é direcionado para a página inicial
    if (!idUser) alterarHeaderDeslogado();
    else {
        const user = getUserData(idUser);
        user.then((user) => {
            alterarHeaderLogado(user);
        });
    }

    // Função para pegar os dados dos serviços
    getServices().then((data) => {
        console.log(data);
        imprimeCatalogo(data);
    });

    // Função para pegar os dados dos serviços mais contratados
    getServicosMaisContratados().then((data) => {
        console.log(data);
        imprimePrincipaisServicos(data);
    });

    // Função para pegar os dados dos profissionais mais bem avaliados
    getAvaliacaoPrestadores().then((data) => {
        console.log(data);
        imprimeProfissionais(data);
    });

    /*if (idUser.charAt(0) != '1') {
          const btnCadastrarProfissional = document.querySelector("#cadastroPrestador");
          btnCadastrarProfissional.style = "display: none";
      }*/
})