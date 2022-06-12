// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
async function loginUser(email, senha) {
    const userData = await getUserData(email, senha);
    console.log(userData)
    if (userData) {
        // Cria o cookie com o id do usuario
        createCookie(userData.cod_user, 1000);

        // Retorna true para usuário encontrado
        return true;
    }

    return false;
}

function createCookie(idUser, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();

    document.cookie = `idUser = ${idUser}; expires: ${expires}`;
}