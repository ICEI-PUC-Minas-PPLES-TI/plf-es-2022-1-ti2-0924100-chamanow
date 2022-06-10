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
    imagem: "./imgs/worker",
    nome: "Fred Silva",
    ocupacao: "Ator Profissional",
    descricao:
      "Nosso Chamaker prestou notórios serviços na arte da atuação nesse mês.",
  },
  {
    imagem: "./imgs/worker",
    nome: "Nikolau 'Du Corte'",
    ocupacao: "Eletricista",
    descricao: "Nosso Chamaker foi destaque em reparos elétricos nesse mês.",
  },
  {
    imagem: "./imgs/worker",
    nome: "Maicon Douglas",
    ocupacao: "Bombeiro",
    descricao:
      "Nosso Chamamaker prestou notórios serviços como bombeiro nesse mês.",
  },
];

// função que imprime os dados na tela
function imprimeDados() {
  // pega o container dos serviços a serem listados
  let containerServicos = document.getElementById("container-servicos");

  // declara variável que irá receber os itens
  let conteudoCatalogo = "";

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

  // coloca a variável no HTML da página
  containerServicos.innerHTML = conteudoCatalogo;
}

// quando todos os itens da tela terminas de ser carregados, chama a função imprimeDados
window.addEventListener("load", imprimeDados);
