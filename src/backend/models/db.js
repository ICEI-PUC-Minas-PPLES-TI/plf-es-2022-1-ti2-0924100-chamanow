// Instalação do SEQUELIZE
const Sequelize = require('sequelize');

// Conexão com o Banco de Dados
const sequelize = new Sequelize('dbchamanow', 'root', 'ChamanowBD()', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
    console.log("Conexão com o banco de dados não realizada com sucesso! Erro: " + error);
});

// Exportar as funções
module.exports = sequelize;