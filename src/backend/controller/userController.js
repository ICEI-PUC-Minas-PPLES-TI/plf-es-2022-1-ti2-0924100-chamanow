const Usuario = require("../models/Usuario");
const Telefone = require("../models/Telefone");
const Endereco = require("../models/Endereco.js");
const bcrypt = require("bcryptjs");

module.exports = {
    async cadastroUser(req, res) {
        try {
            const novoUser = {
                cod_user: req.body.id,
                email: req.body.email,
                senha: req.body.senha,
                nome: req.body.nome,
                data_nasc: req.body.data_nascimento,
                cpf: req.body.cpf,
                cnpj: req.body.cnpj,
                regiao_atuacao: req.body.regiao_atuacao,
                foto_perfil: null,
                cod_endereco: req.body.idEndereco,
                numero: req.body.telefone,
                cod_tipo: req.body.select_servicos
            }

            for (let atributo in novoUser) {
                if (novoUser[atributo] == undefined)
                    novoUser[atributo] = null;
            }

            const novoTel = {
                numero: req.body.telefone,
                cod_user: req.body.id
            }

            const novoEndereco = {

                cod_endereco: req.body.idEndereco,
                cep: req.body.cep,
                numero: req.body.numero,
                rua: req.body.rua,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado
            }

            const user = await Usuario.findOne({ where: { email: req.body.email } });

            if (user)
                res.status(200).json({ message: "Email já cadastrado" })
            else {
                await Usuario.create(novoUser).then(async() => {
                    await Telefone.create(novoTel).then(async() => {
                        await Endereco.create(novoEndereco).then(() => {
                            res.redirect('/');
                        })
                    });
                });

            }
        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    }
}