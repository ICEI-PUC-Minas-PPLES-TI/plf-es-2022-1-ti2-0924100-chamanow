var userLogin = JSON.parse(localStorage.getItem('usuarioCorrente'));
const LOGIN_URL = "../Login/login.html";
const DETALHE_URL = "../detalhe-servico/index.html";

function detalheProblemaBD(event) {
    //Faz a verificação individual de cada campo do formulário
    validacaoForm();

    // Referencia o inputProblema
    var detalheProblema = $("#inputProblema").val();

    // Verfica se o formulário está preenchido corretamente
    if (!$('#formDetalheProblema')[0].checkValidity()) {
        // Envia um alerta
        alert('Descreva o problema');

        event.preventDefault();
        return;
    }

    // Valida o campo e se estiver ok e o usuario estiver logado, redireciona para os detalhes do serviço
    if (userLogin == undefined) {
        // Salva o detalhamento do problema no Session Storage, mas antes converte para string
        localStorage.setItem("detalhamento", detalheProblema);

        alert("Usuário não logado");
        window.location.replace(LOGIN_URL);
    } else {
        const inputDetalheProblema = document.querySelector("#inputProblema");
        console.log(detalheProblema);

        window.location.replace(DETALHE_URL);
    }
}