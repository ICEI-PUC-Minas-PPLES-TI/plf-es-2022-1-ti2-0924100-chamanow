const url = "http://localhost:8786/api/user-datas/user-infos/user-login";

async function getUserData(email, senha) {
    try {
        const userLogin = {
            email: email,
            senha: senha
        }

        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })

        const response = await fetch(request);
        const data = await response.json()

        return data;
    } catch (error) {
        console.error(error);
    }
}