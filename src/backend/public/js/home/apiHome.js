/*async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/cod_user=${idUser}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}*/

async function getServices(serviceId) {
    try {
        const response = await fetch(`http://localhost:8786/api/escolha-servico/todos-servicos`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}