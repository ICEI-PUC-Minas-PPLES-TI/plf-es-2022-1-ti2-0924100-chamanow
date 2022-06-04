const Usuario = require("../models/Usuario");
const Telefone = require("../models/Usuario");
const bcrypt = require("bcryptjs");

module.exports = {
    async createUser(req, res) {
        try {
            const { cod_user, regiao_atuacao, email, senha, nome, cpf, cnpj, data_nasc, foto_perfil, cod_endereco, cod_tipo } = req.body

            const user = await Usuario.findOne({ where: { email } });

            if (user)
                res.status(200).json({ message: "Email já cadastrado" })
            else {

                Usuario.create({ cod_user, regiao_atuacao, email, senha, nome, cpf, cnpj, data_nasc, foto_perfil, cod_endereco, cod_tipo })
                    .then(() => {
                        res.sendFile(__dirname.replace("routes", "html/cadastroTel.html"));
                    })
            }
        } catch (error) {
            res.status(400);
        }
    },
    async telUser(req, res) {
        try {
            const {} = req.body

            Telefone.create({})
                .then(() => {
                    res.redirect('/');
                })
        } catch (error) {
            res.status(400);
        }
    }
}