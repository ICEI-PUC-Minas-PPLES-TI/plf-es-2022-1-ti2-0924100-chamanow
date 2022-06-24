// Declara uma função para processar o formulário de login
function processaFormLogin(event) {
    //Faz a verificação individual de cada campo do formulário
    validacaoForm();

    // Obtem os dados de login e senha a partir do formulário de login
    var email = $('#email').val();
    var password = $('#senha').val();

    // Verfica se o formulário está preenchido corretamente
    if (!$('#formDados')[0].checkValidity()) {
        if (password.length <= 8 || password.length >= 50)
            alert('A senha deve ser maior que 8 caracteres');
        else
            alert('Dados incorretos');

        event.preventDefault();
        return;
    }

    event.preventDefault();
    const loginUsers = loginUser(email, password);
    loginUsers.then(resp => {
        console.log(resp);
        if (resp) {
            window.history.go(-1);
        } else {
            alert("Dados Incorretos");
            window.location.reload();
        }
    })
}

$(document).ready(() => {
    // Pega o cookie do usuário
    const idUser = getCookie("idUser");

    // Se ele existir, o usuário é redirecionado para a página inicial
    if (idUser)
        window.location.replace('/');


    // Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
    $("#entrar").click(processaFormLogin);
})