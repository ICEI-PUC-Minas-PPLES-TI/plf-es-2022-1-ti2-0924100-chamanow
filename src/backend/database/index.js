// Instalação do SEQUELIZE
const Sequelize = require('sequelize');
const configDB = require('../config/database');

const connetion = new Sequelize(configDB);


connetion.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
    console.log("Conexão com o banco de dados não realizada com sucesso! Erro: " + error);
});

// Exportar as funções
module.exports = connetion;