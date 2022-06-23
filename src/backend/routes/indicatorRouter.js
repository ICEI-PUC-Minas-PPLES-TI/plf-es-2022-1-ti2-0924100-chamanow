// Importar do EXPRESS
const express = require("express");
const indicador = express.Router();
indicador.use(express.json());

// Instalação do SEQUELIZE
const connection = require('../database');
const { QueryTypes } = require('sequelize');

// Rotas dos indicadores
indicador.get('/rating/prestadores', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT AVG(A.nota) AS nota_media_prestador, B.cod_user AS cod_usuario, B.nome,\
            B.email, B.cpf AS CPF, B.cnpj AS CNPJ, B.data_nasc AS data_nascimento, B.cod_tipo AS cod_servico,\
            B.created_at AS data_criacao, C.nome AS servico\
            FROM avaliacaos AS A JOIN usuarios AS B\
            ON A.cod_avaliado = B.cod_user\
            JOIN servicos AS C\
            ON B.cod_tipo = C.cod_tipo\
            WHERE cod_avaliado LIKE '2%' OR cod_avaliado LIKE '3%'\
            GROUP BY A.cod_avaliado\
            ORDER BY 1 DESC LIMIT 10", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador do tempo de para a realização do serviço
indicador.get('/time-service', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT AVG(DATEDIFF(A.data_pagamento, A.created_at)) AS tempo_servico_media, B.nome\
            FROM agendamentos AS A JOIN servicos AS B\
            WHERE A.cod_tipo = B.cod_tipo\
            GROUP BY 2", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador da taxa de cancelamento
indicador.get('/cancellation-rate', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT created_at AS data, SUM(status='Cancelado') AS cancelamento\
            FROM agendamentos\
            GROUP BY MONTH(created_at)\
            HAVING cancelamento > 0", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador da quantidade de usuarios novos cadastrados
indicador.get('/cadastro-usuario', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT MONTH(created_at) AS mes, YEAR(created_at) AS ano, COUNT(created_at) AS novos_usuarios\
            FROM usuarios\
            GROUP BY MONTH(created_at), YEAR(created_at)\
            ORDER BY 2, 1", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador da quantidade de usuarios novos cadastrados
indicador.get('/cadastro-prestador', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT MONTH(created_at) AS mes, YEAR(created_at) AS ano, COUNT(cod_tipo) AS novos_prestadores\
            FROM usuarios\
            GROUP BY MONTH(created_at), YEAR(created_at)\
            ORDER BY 2, 1", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador dos serviços mais cadastrados
indicador.get('/servicos-mais-contratados', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT B.nome, COUNT(A.cod_tipo) AS percentagem, B.cod_tipo\
            FROM agendamentos AS A JOIN servicos AS B\
            ON A.cod_tipo = B.cod_tipo\
            GROUP BY 1\
            ORDER BY 2 DESC", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador do preço médio de cada serviço
indicador.get('/preco-medio', async(req, res) => {
    try {
        const data = await connection.query(
            "SELECT B.nome, AVG(A.valor_orcamento) AS preco_medio\
            FROM agendamentos AS A JOIN servicos AS B\
            ON A.cod_tipo = B.cod_tipo\
            WHERE A.valor_orcamento IS NOT NULL\
            GROUP BY A.cod_tipo\
            ORDER BY 1", { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Rota para o indicador da taxa de serviços pendentes
indicador.get('/servicos-pendentes', async(req, res) => {
    try {
        const data = await connection.query(
            `SELECT B.nome, MONTH(A.created_at) AS mes, YEAR(A.created_at) AS ano, COUNT(A.status='Pendente') AS servicos_pendentes\
            FROM agendamentos AS A JOIN servicos AS B\
            ON A.cod_tipo = B.cod_tipo\
            WHERE A.cod_tipo = ${req.query.cod_tipo} AND A.status='Pendente'\
            GROUP BY 3, 2, B.cod_tipo\
            ORDER BY 3, 2`, { type: QueryTypes.SELECT }
        );
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
    }
})

// Exportar rotas
module.exports = indicador;