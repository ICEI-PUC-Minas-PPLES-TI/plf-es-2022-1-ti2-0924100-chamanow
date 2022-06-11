// Importar do EXPRESS
const express = require("express");
const apiRoutes = express.Router();
apiRoutes.use(express.json());

// Instalação do SEQUELIZE

const connection = require('../database');
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
apiRoutes.get('/user-datas/user-infos/:userId', async(req, res) => {
    const data = await Usuario.findByPk(req.params.userId);
    res.json(data);
})

// Rota com os dados do telefone dos users
apiRoutes.get('/user-datas/user-tel/:userId', async(req, res) => {
    try {
        const data = await Telefone.findOne({ where: { cod_user: req.params.userId } });
        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados do telefone dos users
apiRoutes.get('/user-datas/user-adress/cod_user=:userId', async(req, res) => {
    try {
        const data = await Endereco.findOne({ where: { cod_user: req.params.userId } });

        res.json(data);
    } catch (error) {
        console.log("Error: " + error);
    }
})

// Rota com os dados das avaliações
apiRoutes.get('/user-datas/rating/cod_avaliado=:userId', async(req, res) => {
    const data = await Avaliacao.findAll({ where: { cod_avaliado: req.params.userId } })
    return res.json(data);
})

// Rota com os dados da tabela de agendamento para o cliente
apiRoutes.get('/user-datas/services/client/:cod_contratante', async(req, res) => {
    const data = await Agendamento.findAll({ where: { cod_contratante: req.params.cod_contratante } });

    return res.json(data);
})

// Rota com os dados da tabela de agendamento para o prestador
apiRoutes.get('/user-datas/services/provider/:cod_prestador', async(req, res) => {
    const data = await Agendamento.findAll({ where: { cod_prestador: req.params.cod_prestador } });

    return res.json(data);
})

// Rota com os dados de todos os usuarios
apiRoutes.get('/services/cod_servico=:serviceId', async(req, res) => {
    const data = await Servico.findOne({ where: { cod_tipo: req.params.serviceId } });

    return res.json(data);
})

apiRoutes.get('/user-datas/rating/cod_user=:userId', async(req, res) => {
    const data = await connection.query(
        `SELECT A.id, A.cod_avaliador, A.cod_avaliado, A.nota, A.comentario, A.created_at, A.cod_agendamento, B.nome\
        FROM avaliacaos AS A JOIN usuarios AS B\
        ON A.cod_avaliador = B.cod_user\
        WHERE cod_avaliado = '${req.params.userId}'\
        GROUP BY A.id`, { type: QueryTypes.SELECT }
    );

    return res.json(data);
})

apiRoutes.get('/user-datas/rating/cod_agendamento=:cod_agendamento/cod_avaliador=:cod_avaliador', async(req, res) => {
    const data = await Avaliacao.findOne({
        where: {
            cod_agendamento: req.params.cod_agendamento,
            cod_avaliador: req.params.cod_avaliador
        }
    });

    return res.json(data);
})

// Exportar rotas
module.exports = apiRoutes;