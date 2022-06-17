let profissionaisBemAvaliados = [
  {
    imagem: "/img/worker.png",
    nome: "Fred Silva",
    ocupacao: "Ator Profissional",
    descricao:
      "Nosso Chamaker prestou notórios serviços na arte da atuação nesse mês.",
  },
  {
    imagem: "/img/worker.png",
    nome: "Nikolau 'Du Corte'",
    ocupacao: "Eletricista",
    descricao:
      "Nosso Chamaker nos deixou chocados e foi destaque em reparos elétricos nesse mês.",
  },
  {
    imagem: "/img/worker.png",
    nome: "Maicon Douglas",
    ocupacao: "Bombeiro",
    descricao:
      "Nosso Chamamaker não dormiu no ponto e prestou notórios serviços como bombeiro nesse mês.",
  },
];

let principaisServicos = [
  {
    imagem: "/img/worker.png",
    titulo: "Elétrica",
  },
  {
    imagem: "/img/worker.png",
    titulo: "Pintura",
  },
  {
    imagem: "/img/worker.png",
    titulo: "Martelinho de Ouro",
  },
];

function imprimeCatalogo(data) {
  // pega o container dos serviços a serem listados
  let containerServicos = document.getElementById("container-servicos");

  // declara variável que irá receber o catálogo
  let conteudoCatalogo = "";

  // executa item por item e salva dentro da variável
  for (let i = 0; i < data.length; i++) {
    conteudoCatalogo += `
            <div class="servico-catalogo">
                <div class="container-img">
                    <img src="/img/worker.png" alt="Icone trabalho">
                </div>
                <h4>${data[i].nome}</h4>
            </div>
    `;
  }
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
  for (let i = 0; i < 3; i++) {
    conteudoPrincipaisServicos += `
          <div class="principal-servico-item">
              <div class="container-img">
                  <img src="${principaisServicos[i].imagem}" alt="Icone trabalho">
              </div>
              <h4>${principaisServicos[i].titulo}</h4>
          </div>
  `;
  }

  // coloca a variável no HTML da página
  containerPrincipaisServicos.innerHTML = conteudoPrincipaisServicos;
}

function imprimeProfissionais(data) {
  // pega o container dos principais profissionais a serem listados
  let containerProfissionais = document.getElementById(
    "container-bem-avaliados"
  );

  // declara variável que irá receber os profissionais
  let conteudoProfissionais = "";

  // executa item por item e salva dentro da variável
  for (let i = 0; i < 3; i++) {
    conteudoProfissionais += `
          <div class="bem-avaliados-item">
              <div class="container-img">
                  <img src="${principaisServicos[i].imagem}" alt="Icone trabalho">
              </div>
              <div class="container-texto">
                  <h3>${profissionaisBemAvaliados[i].nome}</h3>
                  <h4>${profissionaisBemAvaliados[i].ocupacao}</h4>
                  <p>${profissionaisBemAvaliados[i].descricao}</p>
              </div>
          </div>
  `;
  }

  // coloca a variável no HTML da página
  containerProfissionais.innerHTML = conteudoProfissionais;
}

// função que imprime os dados na tela
function imprimeDados(data) {
  imprimeCatalogo(data);
  imprimePrincipaisServicos(data);
  imprimeProfissionais(data);
}

const button = document.querySelector("#pesquisa-button");
button.addEventListener("click", abrirServicos);
function abrirServicos() {
  window.location.href = "/escolha-servico";
}

// quando todos os itens da tela terminas de ser carregados, chama a função imprimeDados
window.addEventListener("load", init);

function getCookie(name) {
  let cookie = {};

  document.cookie.split(";").forEach(function (el) {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });

  return cookie[name];
}

function init() {
  // Pegar o id do user no cookie
  const idUser = getCookie("idUser");

  // Caso o usuario nã o esteja logado (idUser == null), ele é direcionado para a página inicial
  if (!idUser) window.location.href = "/";

  // Função para pegar os dados dos serviços
  getServices().then((data) => {
    console.log(data);
    imprimeDados(data);
  });

  /*if (idUser.charAt(0) != '1') {
      const btnCadastrarProfissional = document.querySelector("#cadastroPrestador");
      btnCadastrarProfissional.style = "display: none";
  }*/
}
