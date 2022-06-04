const db = require('../database');
const Sequelize = require('sequelize');

const Usuario = db.define('usuario', {
    cod_user: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    regiao_atuacao: {
        type: Sequelize.STRING,
        default: null
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    cpf: {
        type: Sequelize.STRING,
        default: null
    },
    cnpj: {
        type: Sequelize.STRING,
        default: null
    },
    data_nasc: {
        type: Sequelize.DATE,
        default: null
    },
    foto_perfil: {
        type: Sequelize.BLOB,
        default: null
    },
    cod_endereco: Sequelize.STRING,
    cod_tipo: Sequelize.STRING
});

//Usuario.sync({ alter: true });

module.exports = Usuario;