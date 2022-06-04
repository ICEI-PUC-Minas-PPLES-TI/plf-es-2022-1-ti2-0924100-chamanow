function escolherUsuario() {
    // Limpa o conteúdo do form
    $("#formDados").html("");

    // Limpa os btns de escolha do tipo de usuario
    $(".escolherUsuario").html("");

    // Atualização do subtitulo
    const subtitulo = document.querySelector(".subtituloDados");
    subtitulo.innerText = "Escolha o tipo de usuario";

    // Referenciar o form do escolherUsuario
    const divEscolherUsuario = document.querySelector(".escolherUsuario");

    // Criar botão Cliente
    const btnCliente = document.createElement('button');
    btnCliente.id = "cliente";
    btnCliente.innerHTML = `Sou Cliente`;

    // Criar botão Profissa
    const btnProfissa = document.createElement('button');
    btnProfissa.id = "profissional";
    btnProfissa.innerHTML = `Sou Profissa`;

    // Criar botão Empresa
    const btnEmpresa = document.createElement('button');
    btnEmpresa.id = "empresa";
    btnEmpresa.innerHTML = `Sou Empresa`;

    // Adicionar os btns dentro da div
    divEscolherUsuario.appendChild(btnCliente);
    divEscolherUsuario.appendChild(btnProfissa);
    divEscolherUsuario.appendChild(btnEmpresa);

    // Identificar o btn clicado para carregar a tela de login
    $('.escolherUsuario button').click(function(e) {
        formGeral(String(e.target.id));
    });
}

function formGeral(tipoUsuario) {
    // Referenciar a div do form
    const dadosContent = document.querySelector(".dadosContent");

    // Mostrar a div do form
    dadosContent.style = "display: block";

    // Atualização do subtitulo
    const subtitulo = document.querySelector(".subtituloDados");
    subtitulo.innerText = "Preencha os campos corretamente";

    // Limpa os btns de escolha do tipo de usuario
    $(".escolherUsuario").html("");

    // Referenciar o form do login
    const formDados = document.querySelector("#formUser");

    // Limpa o conteúdo do form
    $("#formUser").html("");

    // Disparar animação para o form aparecer
    formDados.style = "opacity: 0";
    setTimeout(() => formDados.style = "animation: surgir .3s ease-out", 5);

    // Criação do input do email
    const inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "emailCadastro";
    inputEmail.className = "form-control";
    inputEmail.placeholder = "E-mail";
    inputEmail.setAttribute("required", "");

    // Criação do input do senha
    const inputSenha = document.createElement('input');
    inputSenha.type = "password";
    inputSenha.name = "senha";
    inputSenha.id = "senhaCadastro";
    inputSenha.className = "form-control";
    inputSenha.placeholder = "Senha";
    inputSenha.minlength = "8";
    inputSenha.maxlength = "50";
    inputSenha.setAttribute("required", "");

    // Criação do input do confirmar senha
    const inputConfirmarSenha = document.createElement('input');
    inputConfirmarSenha.type = "password";
    inputConfirmarSenha.name = "confirmar-senha";
    inputConfirmarSenha.id = "confirmar-senhaCadastro";
    inputConfirmarSenha.className = "form-control";
    inputConfirmarSenha.placeholder = "Confirmar Senha";
    inputConfirmarSenha.minlength = "8";
    inputConfirmarSenha.maxlength = "50";
    inputConfirmarSenha.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formDados.appendChild(inputEmail);
    formDados.appendChild(inputSenha);
    formDados.appendChild(inputConfirmarSenha);

    if (tipoUsuario != "empresa")
        dadosPessoais(tipoUsuario);
    else
        dadosEmpresa();
}

function dadosPessoais(tipoUsuario) {
    // Referenciar o form do dadosPessoais
    const formDados = document.querySelector("#formUser");

    // Criação do input do Nome
    const inputNome = document.createElement('input');
    inputNome.type = "text";
    inputNome.name = "nome";
    inputNome.id = "nomeUsuario";
    inputNome.className = "form-control";
    inputNome.placeholder = "Nome Completo";
    inputNome.minlength = "10";
    inputNome.maxlength = "50";
    inputNome.setAttribute("required", "");

    // Criação do input do Data de Nascimento
    const inputDataNasc = document.createElement('input');
    inputDataNasc.type = "date";
    inputDataNasc.name = "data-nascimento";
    inputDataNasc.id = "dataNasc";
    inputDataNasc.className = "form-control";
    inputDataNasc.placeholder = "Data de Nascimento";
    inputDataNasc.min = "1950-01-01";
    inputDataNasc.max = "2004-12-31";
    inputDataNasc.setAttribute("required", "");

    // Criação do input do CPF
    const inputCPF = document.createElement('input');
    inputCPF.type = "number";
    inputCPF.name = "cpf";
    inputCPF.id = "cpfCadastro";
    inputCPF.className = "form-control";
    inputCPF.placeholder = "CPF";
    inputCPF.minlength = "11";
    inputCPF.maxlength = "11";
    inputCPF.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formDados.appendChild(inputNome);
    formDados.appendChild(inputDataNasc);
    formDados.appendChild(inputCPF);

    if (tipoUsuario != "cliente")
        regiaoAtuacao();
    else {
        const btnConfirmar = criarBtnConfirmar();
        formDados.appendChild(btnConfirmar);
    }
}

function dadosEmpresa() {
    // Referenciar o form do dadosEmpresa
    const formDados = document.querySelector("#formUser");

    // Criação do input do Nome da Empresa
    const inputNomeEmpresa = document.createElement('input');
    inputNomeEmpresa.type = "text";
    inputNomeEmpresa.name = "nome";
    inputNomeEmpresa.id = "nomeEmpresa";
    inputNomeEmpresa.className = "form-control";
    inputNomeEmpresa.placeholder = "Nome da Empresa";
    inputNomeEmpresa.minlength = "10";
    inputNomeEmpresa.maxlength = "50";
    inputNomeEmpresa.setAttribute("required", "");

    // Criação do input do CNPJ
    const inputCNPJ = document.createElement('input');
    inputCNPJ.type = "number";
    inputCNPJ.name = "cnpj";
    inputCNPJ.id = "cnpjCadastro";
    inputCNPJ.className = "form-control";
    inputCNPJ.placeholder = "CNPJ";
    inputCNPJ.minlength = "18";
    inputCNPJ.maxlength = "18";
    inputCNPJ.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formDados.appendChild(inputNomeEmpresa);
    formDados.appendChild(inputCNPJ);

    regiaoAtuacao();
}

function regiaoAtuacao() {
    // Referenciar o form do regiaoAtuacao
    const formDados = document.querySelector("#formUser");

    // Criação do input do Selecionar Serviços
    const selectServico = document.createElement('select');
    selectServico.name = "select-servicos";
    selectServico.id = "selectServico";
    selectServico.className = "form-control";
    selectServico.innerHTML = `<option value="" selected>Selecionar Servico(s)</option>`;
    selectServico.setAttribute("required", "");

    for (var i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i * 10;
        option.innerText = `Item ${i}`;
        selectServico.appendChild(option);
    }

    // Criação da label para a Seleção doS Serviço
    const labelSelecaoServico = document.createElement('label');
    labelSelecaoServico.setAttribute("for", selectServico.id);
    labelSelecaoServico.innerText = "Selecionar Serviço(s)";

    // Criação do input do Região de Atuação
    const selectRegiaoAtuacao = document.createElement('select');
    selectRegiaoAtuacao.name = "regiao-atuacao";
    selectRegiaoAtuacao.id = "regiaoAtuacao";
    selectRegiaoAtuacao.className = "form-control";
    selectRegiaoAtuacao.innerHTML = `<option value="" selected>Selecionar Raio de Atuação</option>`;

    for (var i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i * 10;
        option.innerText = `${i*10}km`;
        selectRegiaoAtuacao.appendChild(option);
    }

    selectRegiaoAtuacao.setAttribute("required", "");

    // Criação da label para a Seleção da Região de Atuação
    const labelRegiaoAtuacao = document.createElement('label');
    labelRegiaoAtuacao.setAttribute("for", selectRegiaoAtuacao.id);
    labelRegiaoAtuacao.innerText = "Raio de Atuação";

    // Adicionar os inputs e labels dentro do form
    formDados.appendChild(labelSelecaoServico);
    formDados.appendChild(selectServico);
    formDados.appendChild(labelRegiaoAtuacao);
    formDados.appendChild(selectRegiaoAtuacao);

    const btnConfirmar = criarBtnConfirmar();
    formDados.appendChild(btnConfirmar);
}

function criarBtnConfirmar() {
    const btnConfirmar = document.createElement('button');
    btnConfirmar.id = "confirmar";
    btnConfirmar.setAttribute("type", "submit");
    btnConfirmar.innerHTML = `Confirmar <i class="fa-solid fa-check"></i>`;
    return btnConfirmar;
}

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('user');

    // Carregar os btns de esolher o usuario
    if (!searchParam)
        escolherUsuario();
    else
        formGeral(searchParam);
})