const db = require('./db');

const postCadastro = db.sequelize.define('usuarios', {
    COD_USUARIO: {
        type: db.Sequelize.INTEGER
    },
    REGIAO_ATUACAO: {
        type: db.Sequelize.STRING
    },
    EMAIL: {
        type: db.Sequelize.STRING
    },
    SENHA: {
        type: db.Sequelize.STRING
    },
    NOME: {
        type: db.Sequelize.STRING
    },
    CPF: {
        type: db.Sequelize.STRING
    },
    CNPJ: {
        type: db.Sequelize.STRING
    },
    DATA_NASC: {
        type: db.Sequelize.DATE
    },
    FOTO_PERFIL: {
        type: db.Sequelize.BLOB
    },
    DATA_CRIACAO: {
        type: db.Sequelize.DATE
    },
    COD_ENDERECO: {
        type: db.Sequelize.INTEGER
    },
    COD_TIPO: {
        type: db.Sequelize.INTEGER
    }
});

module.exports = {
    postCadastro: postCadastro
}