async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/?cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserTel(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-tel/?cod_user=${idUser}`);
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

async function getUserRating(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/?cod_user=${idUser}`);
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

async function getUserServicesCliente(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/services/client/?cod_contratante=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserServicesPrestador(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/services/?cod_prestador=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getService(serviceId) {
    try {
        const response = await fetch(`http://localhost:8786/api/services/?cod_servico=${serviceId}`);
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
        const response = await fetch(`http://localhost:8786/api/agendamento/rating/?cod_agendamento=${cod_agendamento}&cod_avaliador=${cod_avaliador}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}