const db = require('./db');
const Sequelize = require('sequelize');

const Usuario = db.define('usuario', {
    COD_USUARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    REGIAO_ATUACAO: {
        type: Sequelize.STRING,
        default: null
    },
    EMAIL: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    SENHA: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    NOME: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    CPF: {
        type: Sequelize.STRING,
        default: null
    },
    CNPJ: {
        type: Sequelize.STRING,
        default: null
    },
    DATA_NASC: {
        type: Sequelize.DATE,
        default: null
    },
    FOTO_PERFIL: {
        type: Sequelize.BLOB,
        default: null
    },
    DATA_CRIACAO: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Date.now()
    },
    COD_ENDERECO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    COD_TIPO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    }
});

//Cadastro.sync({ alter: true });

module.exports = Usuario;