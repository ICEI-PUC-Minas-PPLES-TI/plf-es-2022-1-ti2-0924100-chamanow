async function getAllServices() {
    try {
        const response = await fetch(`http://localhost:8786/api/escolha-servico/todos-servicos`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}