const catalogoServicos = [
  {
    imagem: "./imgs/worker.png",
    titulo: "Pintura",
  },
  {
    imagem: "./imgs/worker.png",
    titulo: "Reparos Hidraúlicos (Bombeiro)",
  },
  {
    imagem: "./imgs/worker.png",
    titulo: "Carpintaria",
  },
  {
    imagem: "./imgs/worker.png",
    titulo: "Alvenaria",
  },
  {
    imagem: "./imgs/worker.png",
    titulo: "Elétrica",
  },
  {
    imagem: "./imgs/worker.png",
    titulo: "Martelinho de Ouro",
  },
];

const profissionaisBemAvaliados = [
  {
    imagem: "./imgs/worker.png",
    nome: "Fred Silva",
    ocupacao: "Ator Profissional",
    descricao:
      "Nosso Chamaker prestou notórios serviços na arte da atuação nesse mês.",
  },
  {
    imagem: "./imgs/worker.png",
    nome: "Nikolau 'Du Corte'",
    ocupacao: "Eletricista",
    descricao: "Nosso Chamaker foi destaque em reparos elétricos nesse mês.",
  },
  {
    imagem: "./imgs/worker.png",
    nome: "Maicon Douglas",
    ocupacao: "Bombeiro",
    descricao:
      "Nosso Chamamaker não dormiu no ponto e prestou notórios serviços como bombeiro nesse mês.",
  },
];

// função que imprime os dados na tela
function imprimeDados() {
  // pega o container dos serviços a serem listados
  let containerServicos = document.getElementById("container-servicos");

  // pega o container dos serviços a serem listados
  let containerProfissionais = document.getElementById(
    "container-bem-avaliados"
  );

  // declara variável que irá receber o catálogo
  let conteudoCatalogo = "";

  // declara variável que irá receber os profissionais
  let conteudoProfissionais = "";

  // executa item por item e salva dentro da variável
  for (let i = 0; i < catalogoServicos.length; i++) {
    conteudoCatalogo += `
            <div class="servico-catalogo">
                <div class="container-img">
                    <img src="${catalogoServicos[i].imagem}" alt="Icone trabalho">
                </div>
                <h4>${catalogoServicos[i].titulo}</h4>
            </div>
    `;
  }

  // executa item por item e salva dentro da variável
  for (let i = 0; i < 3; i++) {
    conteudoProfissionais += `
            <div class="bem-avaliados-item">
                <div class="container-img">
                    <img src="${profissionaisBemAvaliados[i].imagem}" alt="Icone trabalho">
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
  containerServicos.innerHTML = conteudoCatalogo;

  // coloca a variável no HTML da página
  containerProfissionais.innerHTML = conteudoProfissionais;
}

// quando todos os itens da tela terminas de ser carregados, chama a função imprimeDados
window.addEventListener("load", imprimeDados);
