function criarElementos(element, id, classe, valor, content) {
    // Criar o elemento
    const elemento = document.createElement(element);

    // Atribuir um id para ele
    if (id)
        elemento.id = id;

    // Atribuir um tipo para ele
    if (classe)
        elemento.className = classe;

    // Atribuir um valor para ele
    if (valor)
        elemento.value = valor;

    // Atribuir um placeholder para ele
    if (content)
        elemento.innerHTML = content;

    // Retornar o input criado
    return elemento;
}

function alterarHeaderLogado(user) {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso ao perfil
    const perfil = criarElementoLink("/perfil", user.nome);
    perfil.id = "perfil";

    // Acesso à página inicial
    const home = criarElementoLink("/", "Tela inicial");

    // Adiciona os elementos criados dentro do menu
    menu.appendChild(home);
    menu.appendChild(perfil);
}

function alterarHeaderDeslogado() {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso ao perfil
    const cadastroProfissional = criarElementoLink("/cadastro?user=profissional", "Sou um Profissa");

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
    const a = document.createElement('a');

    // Atribui uma rota a ele
    a.setAttribute('href', href);

    // Adiciona um conteúdo a ele
    a.innerText = conteudo;

    // Retorna o elemento criado
    return a;
}

function setaSelect() {
    const servicoSelection = document.querySelector("#servicoSelection");
    servicoSelection.onclick = () => {
        servicoSelection.classList.toggle('active');
    }
}

function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

    return cookie[name];
}

function formatarData(date, hour) {
    var dateFormatada = date.split('T')[0].replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    if (hour)
        dateFormatada += ` às ${hour.substring(0, 5)}`;

    return dateFormatada;
}