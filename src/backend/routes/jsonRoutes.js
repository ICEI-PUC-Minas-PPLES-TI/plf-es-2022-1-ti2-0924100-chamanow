// Importar do EXPRESS
const express = require("express");
const apiRoutes = express.Router();
apiRoutes.use(express.json());

// Importar o Método POST
const Usuario = require("../models/Usuario");
const Avaliacao = require("../models/Avaliacao");

// Rota com os dados dos users
apiRoutes.get('/user-datas/datas', (req, res) => {
    /*const data = await Avaliacao.findAll({
        raw: true,
        attributes: Usuario.all,
            include: {
                model: Usuario,
                required: true
            }
        }).then(() => {
            avaliacoes => console.table(avaliacoes);
        }).catch((error) => {
            console.log("Error: " + error)
        })*/
    const data = [
        { name: 'fredoca' },
        { name: 'nicolau' }
    ]
    res.send(data)
})

// Rota com os dados das avaliações
apiRoutes.get('/user-datas/rating', (req, res) => {
    /*const data = await Avaliacao.findAll({
        raw: true,
        attributes: Usuario.all,
            include: {
                model: Usuario,
                required: true
            }
        }).then(() => {
            avaliacoes => console.table(avaliacoes);
        }).catch((error) => {
            console.log("Error: " + error)
        })*/
    const data = [
        { name: 'fredoca' },
        { name: 'nicolau' }
    ]
    res.send(data)
})

// Exportar rotas
module.exports = apiRoutes;