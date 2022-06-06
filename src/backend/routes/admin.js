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

router.get('/', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/home.html"));
})

router.get('/login', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/login.html"));
})

router.get('/cadastro', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/cadastro.html"));
})

// Rota para acessar o perfil
router.get('/perfil', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/perfil.html"))
})

// Rotas POST
router.post('/cadastro/user-data', userController.cadastroUser);

// Rotas POST
router.post('/perfil/update-user', userController.updateUserData);

// Exportar rotas
module.exports = router;