async function getAvaliacaoPrestador() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/rating/prestadores`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getTimeService() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/time-service`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getCancellationRate() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/cancellation-rate`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUserRegister() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/cadastro-usuario`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getProviderRegister() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/cadastro-prestador`);
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

async function getPrecoMedio() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/preco-medio`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getServicosPendentes() {
    try {
        const response = await fetch(`http://localhost:8786/indicator/servicos-pendentes`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}