// Importar do EXPRESS
const express = require("express");
const apiRoutes = express.Router();
apiRoutes.use(express.json());

// Instalação do SEQUELIZE
const connection = require('../database');
const { queryTypes } = require('sequelize');
const { QueryTypes } = require('sequelize');

// Importar o Método POST
const Usuario = require("../models/Usuario");
const Avaliacao = require("../models/Avaliacao");
const Telefone = require("../models/Telefone");
const Endereco = require("../models/Endereco");
const Agendamento = require("../models/Agendamento");
const Servico = require("../models/Servico");

// Rota com os dados de todos os usuarios
apiRoutes.get('/user-datas/datas', async(req, res) => {
    try {
        const data = await Usuario.findAll();
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados de todos os usuarios
apiRoutes.get('/user-datas/teste', async(req, res) => {
    try {
        const data = await connection.query(
            `select a.nome, a.regiao_atuacao\
            from usuarios as a join servicos as b\
            on a.cod_tipo = b.cod_tipo`, { type: QueryTypes.SELECT }
        );
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados dos users
apiRoutes.get('/user-datas/user-infos/', async(req, res) => {
    try {
        const data = await Usuario.findByPk(req.query.cod_user);
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados dos users
apiRoutes.get('/user-datas/user-infos/', async(req, res) => {
    try {
        const data = await Usuario.findOne({ where: { email: req.query.email } });
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

//Rota de um serviço específico

apiRoutes.get('/escolha-servico/todos-servicos/', async(req, res) => {
    try {
        const data = await Servico.findAll({ where: { cod_tipo: req.query.cod_tipo } });
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

//Rota de todos os serviços
apiRoutes.get('/escolha-servico/todos-servicos', async(req, res) => {
    try {
        const data = await Servico.findAll();
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

//Rota de profissionais que prestam um serviço especifico

apiRoutes.get('/user-datas/', async(req, res) => {
    try {
        const data = await Usuario.findAll({ where: { cod_tipo: req.query.cod_tipo } })
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados do telefone dos users
apiRoutes.get('/user-datas/user-tel/', async(req, res) => {
    try {
        const data = await Telefone.findOne({ where: { cod_user: req.query.cod_user } });
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados do telefone dos users
apiRoutes.get('/user-datas/user-adress/', async(req, res) => {
    try {
        const data = await Endereco.findOne({ where: { cod_user: req.query.cod_user } });
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados das avaliações
apiRoutes.get('/user-datas/rating/', async(req, res) => {
    try {
        const data = await Avaliacao.findAll({ where: { cod_avaliado: req.query.cod_avaliado } })
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados da tabela de agendamento para o cliente
apiRoutes.get('/user-datas/services/client/', async(req, res) => {
    try {
        const data = await Agendamento.findAll({ where: { cod_contratante: req.query.cod_contratante } });
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados da tabela de agendamento para o prestador
apiRoutes.get('/user-datas/services/', async(req, res) => {
    try {
        const data = await Agendamento.findAll({ where: { cod_prestador: req.query.cod_prestador } });
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados de todos os usuarios
apiRoutes.get('/services/', async(req, res) => {
    try {
        const data = await Servico.findOne({ where: { cod_tipo: req.query.cod_servico } });
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota para as avalaições do usuario com o nome do avaliador
apiRoutes.get('/user-datas/rating/', async(req, res) => {
    try {
        const data = await connection.query(
            `SELECT A.id, A.cod_avaliador, A.cod_avaliado, A.nota, A.comentario, A.created_at, A.cod_agendamento, B.nome\
            FROM avaliacaos AS A JOIN usuarios AS B\
            ON A.cod_avaliador = B.cod_user\
            WHERE cod_avaliado = '${req.query.cod_avaliado}'\
            GROUP BY A.id`, { type: queryTypes.SELECT }
        );
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota para os serviços agendados que foram avaliados
apiRoutes.get('/user-datas/rating/', async(req, res) => {
    try {
        const data = await Avaliacao.findOne({
            where: {
                cod_agendamento: req.query.cod_agendamento,
                cod_avaliador: req.query.cod_avaliador
            }
        });
        return res.status(200).json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

apiRoutes.post('/user-datas/user-infos/user-login', async(req, res) => {
    try {
        const email = req.body.email;
        const senha = req.body.senha;

        const data = await Usuario.findOne({ where: { email: email, senha: senha } });
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
})

// Rota 3 últimas avaliações do prestador
apiRoutes.get('/user-datas/rating/last-rating/', async(req, res) => {
    try {
        const data = await connection.query(
            `SELECT A.cod_avaliador, A.nota, A.comentario, A.created_at, B.nome\
            FROM avaliacaos AS A JOIN usuarios AS B\
            ON A.cod_avaliador = B.cod_user\
            WHERE A.cod_avaliado = '${req.query.cod_avaliado}'\
            ORDER BY DAY(A.created_at) DESC LIMIT 3`, { type: QueryTypes.SELECT }
        );
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
    }
})

// Exportar rotas
module.exports = apiRoutes;