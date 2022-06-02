// Importar do EXPRESS
const express = require("express");
const router = express.Router();
router.use(express.json());

// Rotas GET

router.get('/', (req, res) => {
    return res.json([{ message: "ola" }]);
})

router.get('/login', (req, res) => {
    res.render("admin/login", { pag: "true" });
})

router.get('/cadastro', (req, res) => {
    res.render("", { pag: "true" });
})

// Rota para acessar o perfil
router.get('/perfil', async(req, res) => {
    res.sendFile(__dirname.replace("routes", "html/perfil.html"))
})

// Rotas POST
/*router.post('/cadastro/novo-usuario', (req, res) => {
    await Usuario.create(req.body)
        .then(() => {
            req.flash("success_msg", "Usuario cadastrado com sucesso!");
            res.redirect('/');
        }).catch(() => {
            req.flash("error_msg", "Erro: Usuario não cadastrado com sucesso!");
            res.redirect('/admin/cadastro');
        })
})*/

// Exportar rotas
module.exports = router;