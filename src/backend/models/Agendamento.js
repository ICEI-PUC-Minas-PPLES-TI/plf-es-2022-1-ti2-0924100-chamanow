const db = require('../database');
const Sequelize = require('sequelize');

const Agendamento = db.define('agendamento', {
    cod_servico: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cod_contratante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cod_prestador: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cod_tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        require: true
    },
    valor_orcamento: {
        type: Sequelize.FLOAT,
        default: null,
        require: true
    },
    data_solicitacao: {
        type: Sequelize.DATE,
        allowNull: false,
        require: true
    },
    data_servico: {
        type: Sequelize.DATE,
        allowNull: false,
        require: true
    },
    horario: {
        type: Sequelize.TIME,
        default: null
    },
    data_pagamento: {
        type: Sequelize.DATE,
        default: null
    },
    cod_status: {
        type: Sequelize.INTEGER,
        default: null
    },
    status: {
        type: Sequelize.STRING,
        default: null
    },
    comprovante_pagamento: Sequelize.BLOB
});

//Agendamento.sync({ alter: true });

module.exports = Agendamento;