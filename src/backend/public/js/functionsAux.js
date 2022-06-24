function logoMobile() {
    // Verifica a largura da tela
    const widthWindow = window.innerWidth;
    const widthScreen = screen.width;

    // Se for menor do que 1000px, a logo é trocada
    if (widthWindow < 1000 || widthScreen < 1000) {
        const logo = document.querySelector("#logo");
        logo.setAttribute("src", "/img/Logo.svg");
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

function alterarHeaderLogado(user) {
    // Referenciar a nav menu
    const menu = document.querySelector(".menu");
    menu.innerHTML = "";

    // Criar os itens do menu ================================

    // Acesso à página inicial
    const home = criarElementoLink("/", "Tela inicial");
    home.id = "home";

    // Acesso ao perfil
    const perfil = criarElementoLink("/perfil", user.nome);

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


function formatarDataHora(date, hour) {
    var dateFormatada = date.split('T')[0].replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    if (hour)
        dateFormatada += ` às ${hour.substring(0, 5)}`;

    return dateFormatada;
}

function criarElementoLink(href, conteudo) {
    // Cria o elemento 'a'
    const a = document.createElement('a');

    // Atribui uma rota a ele
    a.setAttribute('href', href);

    // Adiciona um conteúdo a ele
    if (conteudo)
        a.innerHTML = conteudo;

    // Retorna o elemento criado
    return a;
}

function criarInputs(id, type, nome, placeholder, datalist) {
    // Criar o elemento 'input'
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

    // Atribuir um placeholder para ele
    if (datalist)
        input.setAttribute('list', datalist);

    // Retornar o input criado
    return input;
}

function criarLabels(id, para, content) {
    // Criar o elemento 'label'
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

function criarElementos(element, id, classe, content, value) {
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

    // Atribuir um value para ele
    if (value)
        elemento.value = value;

    // Retornar o input criado
    return elemento;
}

function criarBtns(type, id, classe, content) {
    // Criar o elemento 'button'
    const btn = document.createElement("button");

    // Atribuir um tipo para ele
    if (type)
        btn.setAttribute("type", type);

    // Atribuir um id para ele
    btn.id = id;

    // Atribuir um tipo para ele
    if (classe)
        btn.className = classe;

    // Atribuir um placeholder para ele
    if (content)
        btn.innerHTML = content;

    // Retornar o input criado
    return btn;
}

// Função para converter PDF em base64
var base64;

function convertToBase64(input) {
    //Read File
    var selectedFile = document.getElementById(input).files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();

        // Onload of file read the file content
        fileReader.onload = fileLoadedEvent => {
            base64 = fileLoadedEvent.target.result;

            // Print data in console
            if (input == "btn-orcamento") {
                const orcamento = document.querySelector("#hidden-orcamento");
                orcamento.value = base64;
            } else if (input == "btn-comprovante") {
                const comprovante = document.querySelector("#hidden-comprovante");
                comprovante.value = base64;
            }
        }

        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}