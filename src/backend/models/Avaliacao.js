const db = require('../database');
const Sequelize = require('sequelize');

const Avaliacao = db.define('avaliacao', {
    cod_avaliacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cod_avaliado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cod_avaliado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nota: Sequelize.FLOAT,
    comentario: Sequelize.TEXT,
});

//Avaliacao.sync({ alter: true });

module.exports = Avaliacao;