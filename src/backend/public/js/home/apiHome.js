/*async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}*/

async function getServices() {
    try {
        const response = await fetch(`http://localhost:8786/api/escolha-servico/todos-servicos`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getServicosMaisContratados() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/servicos-mais-contratados`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getAvaliacaoPrestador() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/rating/prestadores`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}