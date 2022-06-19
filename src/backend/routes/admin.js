// Importar do EXPRESS
const express = require("express");
const app = express();
const router = express.Router();
router.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const userController = require("../controller/userController");
const ratingController = require("..//controller/ratingController");
const serviceController = require("../controller/serviceController");

// Rotas GET ===============================

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
router.get('/descrever-problema/', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/descrever-problema.html"))
})

// Página com os detalhes do servico
router.get('/perfil/servicos/', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/detalhe-servico.html"))
})

// Página com escolha do serviço
router.get('/escolha-servico', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/escolha-servico.html"))
})

// Rotas POST ==============================

// POST do cadastro de novos usuarios
router.post('/cadastro/user-data', userController.cadastroUser);

// POST para alterar os dados do usuario no perfil
router.post('/perfil/update-user', userController.updateUserData);

// POST para adicionar nova avaliação de serviço
router.post('/perfil/avaliacao', ratingController.addAvaliacao);

// POST da descrição do problema do cliente
router.post('/agendamento/novo-servico', serviceController.descreverProblema);

// POST para atualizar os registros da tabela de agendamento
router.post('/agendamento/atualizar-servico', serviceController.detalharServico);

// POST para cancelar o cervico
router.post('/agendamento/cancelar-servico', serviceController.cancelarServico);

// Indicadores =============================

// Rota para a página de indicadores
router.get('/admin/indicadores', (req, res) => {
    res.sendFile(__dirname.replace("routes", "html/indicadores.html"))
})

// Exportar rotas
module.exports = router;