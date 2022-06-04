function validacaoFormulario(event) {
    //Faz a verificação individual de cada campo do formulário
    validacaoForm();

    // Verfica se o formulário está preenchido corretamente
    if (!$('#formDados')[0].checkValidity()) {
        // Envia um alerta
        alert('Preencha os campos corretamente');

        event.preventDefault();
        return false;
    }

    // Verifica se as senhas coincidem
    const senha = $("#senhaCadastro").val();
    const confirmarSenha = $("#confirmar-senhaCadastro").val();

    if (senha != confirmarSenha) {
        alert("As senhas não coincidem");
        event.preventDefault();
        return false;
    }

    return true;
}