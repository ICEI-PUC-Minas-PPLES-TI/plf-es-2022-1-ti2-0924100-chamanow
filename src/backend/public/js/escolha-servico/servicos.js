async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/?cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getAllServices() {
    try {
        const response = await fetch(`http://localhost:8786/api/escolha-servico/todos-servicos`);
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

async function getSpecProfessional(userId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/?cod_tipo=${userId}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getRating(userId) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/?cod_avaliado=${userId}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getRatingByService(cod_agendamento, cod_avaliador) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/?cod_agendamento=${cod_agendamento}&cod_avaliador=${cod_avaliador}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}