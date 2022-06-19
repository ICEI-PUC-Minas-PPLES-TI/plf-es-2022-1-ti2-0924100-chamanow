function getCookie(name) {
    let cookie = {};

    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })

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
    const home = criarElementoLink("/", "Tela inicial");

    // Acesso à página inicial
    const indicadores = criarElementoLink("/admin/indicadores", "Indicadores");

    // Adiciona os elementos criados dentro do menu
    menu.appendChild(home);
    menu.appendChild(indicadores);
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

function formatarData(data, format) {
    const map = {
        dd: data.substring(8, 10),
        mm: data.substring(5, 7),
        aaaa: data.substring(0, 4)
    }

    return format.replace(/dd|mm|aaaa/gi, matched => map[matched])
}

function formatarHorario(horario, format) {
    var map;

    if (horario.length > 8)
        map = {
            hh: horario.substring(11, 13),
            mm: horario.substring(14, 16)
        }
    else
        map = {
            hh: horario.substring(0, 2),
            mm: horario.substring(3, 5)
        }

    return format.replace(/hh|mm/gi, matched => map[matched])
}

function criarInputs(id, type, nome, placeholder) {
    // Criar o elemento
    const input = document.createElement("input");

    // Atribuir um id para ele
    input.id = id;

    // Atribuir um tipo para ele
    if (type)
        input.setAttribute("type", type);

    // Atribuir um nome para ele
    if (nome)
        input.name = nome;

    // Atribuir um placeholder para ele
    if (placeholder)
        input.placeholder = placeholder;

    // Retornar o input criado
    return input;
}

function criarLabels(id, para, content) {
    // Criar o elemento
    const label = document.createElement("label");

    // Atribuir um id para ele
    label.id = id;

    // Atribuir um tipo para ele
    if (para)
        label.setAttribute("for", para);

    // Atribuir um placeholder para ele
    if (content)
        label.innerHTML = content;

    // Retornar o input criado
    return label;
}

function criarElementos(element, id, classe, content) {
    // Criar o elemento
    const elemento = document.createElement(element);

    // Atribuir um id para ele
    if (id)
        elemento.id = id;

    // Atribuir um tipo para ele
    if (classe)
        elemento.className = classe;

    // Atribuir um placeholder para ele
    if (content)
        elemento.innerHTML = content;

    // Retornar o input criado
    return elemento;
}