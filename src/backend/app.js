// Instalação do EXPRESS
const express = require("express");
const app = express();
const port = 8786;

// Instalação do SEQUELIZE
const Sequelize = require('sequelize');

// Instalação do HANDLEBARS
const handlebars = require('express-handlebars');

// Instalação do BODY-PARSE
const bodyParser = require('body-parser');

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Conexão com o Banco de Dados
const sequelize = new Sequelize('dbchamanow', 'root', 'ChamanowBD()', {
    host: "localhost",
    dialect: "mysql"
})

// Rotas
const urlTelaInicial = "Tela Inicial/index.html";
const urlPerfil = "perfil/index.html";

app.get("/", function(req, res) {
    res.sendFile(__dirname.replace("backend", urlTelaInicial));
});
app.get("/perfil/:cod_user", function(req, res) {
    res.sendFile(__dirname.replace("backend", urlPerfil));
});

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(error) {
    console.log("Erro ao se conectar: " + error);
});

app.listen(port, function() {
    console.log(`Servidor Rodando na url http://localhost:${port}`);
});