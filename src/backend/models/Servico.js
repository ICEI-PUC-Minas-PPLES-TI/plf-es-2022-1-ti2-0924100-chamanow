const db = require('../database');
const Sequelize = require('sequelize');

const Servico = db.define('servico', {
    cod_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

//Servico.sync({ alter: true });

module.exports = Servico;