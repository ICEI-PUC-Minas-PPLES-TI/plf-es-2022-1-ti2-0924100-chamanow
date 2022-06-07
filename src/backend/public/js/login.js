var link = JSON.parse(localStorage.getItem('link'));

// Declara uma função para processar o formulário de login
function processaFormLogin(event) {
    //Faz a verificação individual de cada campo do formulário
    validacaoForm();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = $('#email').val();
    var password = $('#senha').val();

    // Verfica se o formulário está preenchido corretamente
    if (!$('#formDados')[0].checkValidity()) {
        if (password.length <= 8 || password.length >= 25)
            alert('Senha menor que 8 caracteres');
        else
            alert('Dados incorretos');
        event.preventDefault();
        return;
    }

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    if (username && password) {
        resultadoLogin = loginUser(username, password);

        if (!resultadoLogin) {
            // Cancela a submissão do formulário para tratar sem fazer refresh da tela
            event.preventDefault();
            alert('Nome de usuário ou senha incorretos');
        }
    }
}

function linkBtnEntrar() {
    const btnEntrar = document.querySelector('#btn-entrar');
    const inputNome = document.querySelector('#email');
    const inputSenha = document.querySelector('#senha');

    if (link)
        inputSenha.oninput = () => {
            if (loginUser(inputNome.value, inputSenha.value))
                btnEntrar.setAttribute('href', link);
            else
                btnEntrar.setAttribute('href', "");
        }
}

$(document).ready(function() {
    // Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
    document.getElementById('entrar').addEventListener('click', processaFormLogin);

    // Associar link da página antiga ao botão entrar
    document.getElementById('senha').addEventListener('focus', linkBtnEntrar);
})