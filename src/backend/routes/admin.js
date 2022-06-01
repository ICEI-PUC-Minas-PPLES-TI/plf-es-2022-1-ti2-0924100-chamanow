// Importar do EXPRESS
const express = require("express");
const router = express.Router();
router.use(express.json());

// Importar o Método POST
const Usuario = require("../models/Usuario");
const Avaliacao = require("../models/Avaliacao");

// Rotas GET

router.get('/', async(req, res) => {
    res.render('home');
})

router.get('/login', async(req, res) => {
    res.render("admin/login", { pag: "true" });
})

router.get('/cadastro', async(req, res) => {
    res.render("admin/cadastro", { pag: "true" });
})

router.get('/perfil', async(req, res) => {
    /*const avaliacoes = await Avaliacao.findAll({
        raw: true,
        attributes: Usuario.all,
        include: {
            model: Usuario,
            required: true
        }
    }).then(() => {
        avaliacoes => console.table(avaliacoes);*/
    res.render("admin/perfil", { pag: "true" /*, avaliacoes*/ });
    /*}).catch((error) => {
        console.log("Error: " + error)
    })*/
})

// Rotas POST
router.post('/cadastro/novo-usuario', async(req, res) => {
    await Usuario.create(req.body)
        .then(() => {
            req.flash("success_msg", "Usuario cadastrado com sucesso!");
            res.redirect('/');
        }).catch(() => {
            req.flash("error_msg", "Erro: Usuario não cadastrado com sucesso!");
            res.redirect('/admin/cadastro');
        })
})

// Exportar rotas
module.exports = router;