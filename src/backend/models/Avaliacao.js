const db = require('./db');
const Sequelize = require('sequelize');

const Avaliacao = db.define('avaliacao', {
    COD_AVALIADOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    COD_AVALIADO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    NOTA: Sequelize.FLOAT,
    COMENTARIO: Sequelize.STRING,
    DATA_AVALIACAO: Sequelize.DATE
});

//Cadastro.sync({ alter: true });

module.exports = Avaliacao;