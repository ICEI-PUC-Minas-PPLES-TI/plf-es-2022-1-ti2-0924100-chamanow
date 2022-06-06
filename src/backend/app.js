// Importar modulos
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");

// Config
const app = express();
const admin = require("./routes/admin");
const apiRoutes = require("./routes/jsonRoutes");
const path = require("path");

(async() => {
    const db = require('./database');
    await db.sync();
})();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// Public
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use(admin);
app.use('/api', apiRoutes);

//Middleware
app.use((req, res, next) => {
    next();
})

// Outros
const PORT = 8786;
app.listen(PORT);