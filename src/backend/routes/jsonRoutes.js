// Importar do EXPRESS
const express = require("express");
const apiRoutes = express.Router();
apiRoutes.use(express.json());

// Importar o Método POST
const Usuario = require("../models/Usuario");
const Avaliacao = require("../models/Avaliacao");
const userController = require("../controller/userController");

// Rota com os dados de todos os usuarios
apiRoutes.get('/user-datas/datas', async(req, res) => {
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
    return res.json(data)
})

// Rota com os dados dos users
apiRoutes.get('/user-datas/datas/:userId', async(req, res) => {
    /*const data = await Usuario.findByPK()*/
    const data = [
        { name: 'fredoca' },
        { name: 'nicolau' }
    ]
    return res.json(data)
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
    return res.json(data)
})

// Rota com os dados da tabela de agendamento
apiRoutes.get('/user-datas/scheduling', (req, res) => {
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
    return res.json(data)
})

// Rotas POST
apiRoutes.post('/cadastro/user-data', userController.createUser)
apiRoutes.post('/cadastro/tel-data', userController.telUser)

// Exportar rotas
module.exports = apiRoutes;