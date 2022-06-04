const db = require('../database');
const Sequelize = require('sequelize');

const Telefone = db.define('telefone', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    cod_user: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Telefone.sync({ alter: true });

module.exports = Telefone;