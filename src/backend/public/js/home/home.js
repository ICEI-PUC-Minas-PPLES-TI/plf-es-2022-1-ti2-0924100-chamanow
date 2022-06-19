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
                <img src="/img/worker.png" alt="Icone trabalho">
              </div>
              <h4>${data[i].nome}</h4>
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
  // executa item por item e salva dentro da variável
  for (let i = 0; i < 3; i++) {
    conteudoProfissionais += `
            <div class="bem-avaliados-item">
                <div class="container-img">
                    <img src="/img/worker.png" alt="Icone trabalho">
                </div>
                <div class="container-texto">
                    <h3>${data[i].nome}</h3>
                    <h4>${data[i].servico}</h4>
                    <p>Nota média do prestador: ${data[i].nota_media_prestador}</p>
                </div>
            </div>
    `;
  }

  // coloca a variável no HTML da página
  containerProfissionais.innerHTML = conteudoProfissionais;
}

const button = document.querySelector("#pesquisa-button");
button.addEventListener("click", abrirServicos);

function abrirServicos() {
  window.location.href = "/escolha-servico";
}

// quando todos os itens da tela terminas de ser carregados, chama a função que carrega tudo
window.addEventListener("load", init);

function getCookie(name) {
  let cookie = {};

  document.cookie.split(";").forEach(function (el) {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });

  return cookie[name];
}

function alterarHeaderLogado(user) {
  // Referenciar a nav menu
  const menu = document.querySelector(".menu");
  menu.innerHTML = "";

  // Criar os itens do menu ================================

  // Acesso ao perfil
  const perfil = criarElementoLink("/perfil", user.nome);

  // Acesso à página inicial
  const indicadores = criarElementoLink("/admin/indicadores", "Indicadores");

  // Adiciona os elementos criados dentro do menu
  menu.appendChild(indicadores);
  menu.appendChild(perfil);
}

function alterarHeaderDeslogado() {
  // Referenciar a nav menu
  const menu = document.querySelector(".menu");
  menu.innerHTML = "";

  // Criar os itens do menu ================================

  // Acesso ao perfil
  const cadastroProfissional = criarElementoLink(
    "/cadastro?user=profissional",
    "Sou um Profissa"
  );

  // Acesso à página inicial
  const cadastro = criarElementoLink("/cadastro", "Sign Up");

  // Acesso à página inicial
  const login = criarElementoLink("/login", "Login");

  // Adiciona os elementos criados dentro do menu
  menu.appendChild(cadastroProfissional);
  menu.appendChild(cadastro);
  menu.appendChild(login);
}

function criarElementoLink(href, conteudo) {
  // Cria o elemento a
  const a = document.createElement("a");

  // Atribui uma rota a ele
  a.setAttribute("href", href);

  // Adiciona um conteúdo a ele
  a.innerText = conteudo;

  // Retorna o elemento criado
  return a;
}

function init() {
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
}
