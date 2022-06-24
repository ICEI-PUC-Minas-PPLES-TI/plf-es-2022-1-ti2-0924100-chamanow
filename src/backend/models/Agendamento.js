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
    data_servico: {
        type: Sequelize.DATE,
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
<<<<<<< HEAD

    data_solicitacao: {
        type: Sequelize.DATE,
        require: true
    },
    comprovante_pagamento: Sequelize.BLOB
=======
    comprovante_pagamento: Sequelize.TEXT('long'),
    orcamento: Sequelize.TEXT('long'),
    data_inicio: Sequelize.DATE,
    data_fim: Sequelize.DATE,
    horario_inicio: Sequelize.TIME,
    horario_fim: Sequelize.TIME
>>>>>>> 2a594c959aaff450ef709b50406c9f8c6dea99e9
});

//Agendamento.sync({ alter: true });

module.exports = Agendamento;