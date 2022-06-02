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

app.use(cors());

// Public
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use('/admin', admin);
app.use('/api', apiRoutes);

//Middleware
app.use((req, res, next) => {
    next();
})

// Outros
const PORT = 8786;
app.listen(PORT);