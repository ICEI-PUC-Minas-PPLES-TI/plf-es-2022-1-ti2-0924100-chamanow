// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(username, senha) {
    // Para localizar o usuário informado no formulario de login
    for (var i = 0; i < 6; i++) {
        var usuario = usuariosJSON.user[i];

        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (username == usuario.username && senha == usuario.senha) {
            let usuario = {
                id: newId
            };

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            localStorage.setItem("usuarioCorrente", JSON.stringify(usuario));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    return false;
}