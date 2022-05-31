// Importar do EXPRESS
const express = require("express");

// Importar o HANDLEBARS
const handlebars = require('express-handlebars');

// Importar o BODY-PARSE
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("connect-flash");

// Config
const app = express();
const admin = require("./routes/admin");
const path = require("path");

// Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Public
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use('/admin', admin);

// Session
app.use(session({
    secret: "chamanowApplication",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("sucess_msg");
    res.locals.error_msg = req.flash("error_msg");
    req.locals.pagina = req.flash("pag");
    next();
})

// Outros
const PORT = 8786;
app.listen(PORT, () => {
    console.log(`Servidor Rodando na url http://localhost:${PORT}`);
});