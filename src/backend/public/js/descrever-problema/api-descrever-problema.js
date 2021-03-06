async function getAvaliacao(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/last-rating/?cod_avaliado=${idUser}`)
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/?cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserAdress(adressId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-adress/?cod_user=${adressId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserRating(userId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/?cod_avaliado=${userId}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getAvgRating(cod_avaliado) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/avg-rating/?cod_avaliado=${cod_avaliado}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}