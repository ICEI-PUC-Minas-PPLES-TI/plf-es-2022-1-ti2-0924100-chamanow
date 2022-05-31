// Instalação do SEQUELIZE
const Sequelize = require('sequelize');

// Conexão com o Banco de Dados
const sequelize = new Sequelize('dbchamanow', 'root', 'ChamanowBD()', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((error) => {
    console.log("Erro ao se conectar: " + error);
});

// Exportar as funções
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}