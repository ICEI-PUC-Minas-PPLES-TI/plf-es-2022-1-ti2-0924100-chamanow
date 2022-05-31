// Importar do EXPRESS
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {});
})

// Exportar rotas
module.exports = router;