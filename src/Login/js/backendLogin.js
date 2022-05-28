// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(username, senha) {
    // Para localizar o usuário informado no formulario de login
    for (var i = 0; i < usuariosJSON.user.length; i++) {
        var usuario = usuariosJSON.user[i];

        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (username == usuario.username && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.username = usuario.username;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.sobrenome = usuario.sobrenome;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.senha = usuario.senha;
            usuarioCorrente.endereco = usuario.address;
            usuarioCorrente.pontos = usuario.pontos;
            usuarioCorrente.endCadastrados = usuario.endCadastrados;

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            localStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    return false;
}