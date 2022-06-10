const db = require('../database');
const Sequelize = require('sequelize');

const Avaliacao_Usuario = db.define('avaliacao_usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Avaliacao_Usuario;