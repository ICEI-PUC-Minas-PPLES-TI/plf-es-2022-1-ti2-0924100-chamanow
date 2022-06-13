async function getAvaliacao(cod_avaliador){
        try {
            const url = 'http://localhost:8786/api//user-datas/rating/last-rating/'
            const request = new Request(url, {
                method: 'POST',
                body: JSON.stringify(cod_avaliador),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            })
            const response = await fetch(request);
            const data = await response.json();
            console.log(data)
    
            return data;
        } catch (error) {
            console.error(error);
        }
}

async function getUserData(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/user-infos/${idUser}`);
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

async function getUserRating(idUser) {
    try {
        const response = await fetch(`http://localhost:8786/api/user-datas/rating/cod_user=${idUser}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
