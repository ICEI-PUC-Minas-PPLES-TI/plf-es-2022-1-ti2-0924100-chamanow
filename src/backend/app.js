// Importar do EXPRESS
const express = require("express");

// Importar o HANDLEBARS
const handlebars = require('express-handlebars');

// Importar o BODY-PARSE
const bodyParser = require('body-parser');

// Importar o Método POST
const Post = require('./models/Post');

// Config
const app = express();
const admin = require("./routes/admin");

// Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.use('/admin', admin);



// Rotas POST
/*app.post('/add', function(req, res) {
    Post.create({
        //COD_USUARIO: ,
        //REGIAO_ATUACAO: req.body.,
        EMAIL: req.body.email,
        SENHA: req.body.senha,
        NOME: req.body.nome,
        CPF: req.body.cpf,
        CNPJ: req.body.cnpj,
        DATA_NASC: req.body.dataNascimento,
        FOTO_PERFIL: req.body.regiaoAtuacao,
        //DATA_CRIACAO: ,
        //COD_ENDERECO: ,
        //COD_TIPO:
    }).then(() => {
        res.redirect('/');
    }).cacth((error) => {
        res.send("Houve um erro: " + error);
    })
})*/

// Outros
const PORT = 8786;
app.listen(PORT, () => {
    console.log(`Servidor Rodando na url http://localhost:${PORT}`);
});