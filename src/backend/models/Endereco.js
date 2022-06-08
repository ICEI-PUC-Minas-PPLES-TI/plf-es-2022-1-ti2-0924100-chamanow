const db = require('../database');
const Sequelize = require('sequelize');

const Endereco = db.define('endereco', {
    cod_endereco: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cod_user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.INTEGER,
        default: null
    },
    numero: {
        type: Sequelize.INTEGER,
        default: null
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    bairro: {
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