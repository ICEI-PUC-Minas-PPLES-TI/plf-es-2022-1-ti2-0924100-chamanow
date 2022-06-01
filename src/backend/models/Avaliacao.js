const db = require('./db');
const Sequelize = require('sequelize');

const Avaliacao = db.define('avaliacao', {
    COD_AVALIADOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    COD_AVALIADO: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    NOTA: Sequelize.FLOAT,
    COMENTARIO: Sequelize.STRING,
    DATA_AVALIACAO: Sequelize.DATE
});

//Cadastro.sync({ alter: true });

module.exports = Avaliacao;