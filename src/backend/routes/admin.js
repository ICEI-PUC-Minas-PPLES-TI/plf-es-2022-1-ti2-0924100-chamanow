// Importar do EXPRESS
const express = require("express");
const router = express.Router();
router.use(express.json());

// Importar o Método POST
const Cadastro = require('../models/Cadastro');

// Rotas GET

router.get('/', async(req, res) => {
    res.render('home');
})

router.get('/login', async(req, res) => {
    res.render("admin/login");
})

router.get('/cadastro', async(req, res) => {
    res.render("admin/cadastro");
})

router.get('/perfil', async(req, res) => {
    await Cadastro.findAll().then((usuarios) => {
        req.flash("pag", "perfil");
        res.render("admin/perfil", { usuarios: usuarios });
    }).catch(() => {
        req.flash("error_msg", "Não foi possível acessar o perfil");
        res.redirect("/admin");
    })
})

// Rotas POST
router.post('/cadastro/novo-usuario', async(req, res) => {
    await Cadastro.create(req.body)
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