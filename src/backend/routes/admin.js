// Importar do EXPRESS
const express = require("express");
const app = express();
const router = express.Router();
router.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const userController = require("../controller/userController");
const Usuario = require("../models/Usuario");

// Rotas GET

// Página Principal
router.get('/', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/home.html"));
})

// Página de Login
router.get('/login', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/login.html"));
})

// Página de cadastro
router.get('/cadastro', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/cadastro.html"));
})

// Página de perfil
router.get('/perfil', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/perfil.html"))
})

// Página de descrever o problema para o agendamento do serviço
router.get('/descrever-problema', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/descrever-problema.html"))
})

// Página com os detalhes do servico
router.get('perfil/servicos/:servicoId', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/detalhe-servico.html"))
})



// Rotas POST

// POST do cadastro de novos usuarios
router.post('/cadastro/user-data', userController.cadastroUser);

// POST para alterar os dados do usuario no perfil
router.post('/perfil/update-user', userController.updateUserData);

// Exportar rotas
module.exports = router;