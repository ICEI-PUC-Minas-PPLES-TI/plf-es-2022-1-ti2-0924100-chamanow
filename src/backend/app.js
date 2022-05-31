// Instalação do EXPRESS
const express = require("express");
const app = express();
const port = 8786;

// Instalação do SEQUELIZE
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbchamanow', 'root', 'ChamanowBD()', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(error) {
    console.log("Erro ao se conectar: " + error);
});

const urlTelaInicial = "Tela Inicial/index.html";
const urlPerfil = "perfil/index.html";

app.get("/", function(req, res) {
    res.sendFile(__dirname.replace("backend", urlTelaInicial));
});
app.get("/perfil/:cod_user", function(req, res) {
    res.sendFile(__dirname.replace("backend", urlPerfil));
});

app.listen(port, function() {
    console.log(`Servidor Rodando na url http://localhost:${port}`);
});