async function getAvaliacao(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api//user-datas/rating/last-rating/cod_avaliador=${idUser}`)
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserAdress(adressId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-adress/cod_user=${adressId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserRating(userId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/cod_avaliado=${userId}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getServico(cod_servico) {
    try {
        const response = await fetch(`http://localhost:8786/api/agendamento/?cod_servico=${cod_servico}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}