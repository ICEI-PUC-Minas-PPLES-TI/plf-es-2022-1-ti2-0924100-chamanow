const db = require('../database');
const Sequelize = require('sequelize');

const Usuario = require("../models/Usuario");
const Avaliacao_Usuario = require("../models/Avaliacao_Usuario");

const Avaliacao = db.define('avaliacao', {
    cod_avaliador: {
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

Avaliacao.belongsToMany(Usuario, {
    through: {
        model: Avaliacao_Usuario
    },
    foreignKey: 'idAvaliacao_Usuario',
    constraint: true
});

//Avaliacao.sync({ alter: true })

module.exports = Avaliacao;