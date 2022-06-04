const db = require('../database');
const Sequelize = require('sequelize');

const Endereco = db.define('endereco', {
    cod_endereco: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cep: {
        type: Sequelize.STRING,
        default: null
    },
    numero: {
        type: Sequelize.STRING,
        default: null
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    estado: {
        type: Sequelize.STRING(2),
        default: null
    }
});

//Endereco.sync({ alter: true });

module.exports = Endereco;