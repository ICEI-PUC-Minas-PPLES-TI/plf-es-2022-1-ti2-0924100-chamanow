const express = require("express");
const app = express();
const port = 8786;

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