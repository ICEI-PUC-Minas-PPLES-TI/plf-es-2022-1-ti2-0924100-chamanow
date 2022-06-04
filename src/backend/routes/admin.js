// Importar do EXPRESS
const express = require("express");
const router = express.Router();
router.use(express.json());

// Rotas GET

router.get('/', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/home.html"));
})

router.get('/login', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/login.html"));
})

router.get('/cadastro', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/cadastroUser.html"));
})

// Rota para acessar o perfil
router.get('/perfil', async(req, res) => {
    res.sendFile(__dirname.replace("routes", "html/perfil.html"))
})

// Exportar rotas
module.exports = router;