const Usuario = require("../models/Usuario");
const Telefone = require("../models/Telefone");
const Endereco = require("../models/Endereco.js");
const Agendamento = require("../models/Agendamento");
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
                estado: req.body.estado,
                cod_user: req.body.id
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
    },
    async updateUserData(req, res) {
        try {
            // Atualização dos dados do user
            const user = await Usuario.findOne({ where: { cod_user: req.body.id } });

            user.cod_user = req.body.id;
            user.email = req.body.email;
            user.senha = req.body.senha;
            user.nome = req.body.nome;
            user.data_nasc = req.body.data_nascimento;
            user.cpf = req.body.cpf;
            user.cnpj = req.body.cnpj;
            user.regiao_atuacao = req.body.regiao_atuacao;
            user.foto_perfil = null;
            user.cod_endereco = req.body.idEndereco;
            user.numero = req.body.telefone;
            user.cod_tipo = req.body.select_servicos

            // Se houver algum valor undefined, ele será null
            for (let atributo in user) {
                if (user[atributo] == undefined)
                    user[atributo] = null;
            }

            await user.save();

            // Atualização dos dados do telefone do user
            const userTel = await Telefone.findOne({ where: { cod_user: req.body.id } });

            userTel.numero = req.body.telefone;
            userTel.cod_user = req.body.id;

            await userTel.save();

            // Atualização dos dados do endereco do user
            const userAdress = await Endereco.findOne({ where: { cod_endereco: req.body.idEndereco } })

            userAdress.cod_user = req.body.id;
            userAdress.cep = req.body.cep;
            userAdress.numero = req.body.numero;
            userAdress.rua = req.body.rua;
            userAdress.bairro = req.body.bairro;
            userAdress.cidade = req.body.cidade;
            userAdress.estado = req.body.estado;

            userAdress.save().then(() => {
                res.redirect('/perfil');
            });
        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    },
    async descreverProblema(req, res) {
        try {
            const newAgendamento = {
                cod_servico: req.body.cod_servico,
                descricao: req.body.descricao,
                endereco: `${req.body.rua} N. ${req.body.numero}, ${req.body.bairro}, ${req.body.cidade} - ${req.body.cep}`,
                cod_contratante: req.body.cod_contratante,
                cod_prestador: req.body.cod_prestador,
                cod_tipo: req.body.cod_tipo,
                cod_status: 0,
                status: 'Pendente'
            }

            await Agendamento.create(newAgendamento).then(() => {
                console.log(newAgendamento)
                res.redirect('/');
            });

        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    },
    async detalharServico(req,res){
        try{
            const newDetalhe = {
                cod_servico: req.body.cod_servico,
                cod_contratante: req.body.cod_contratante,
                cod_prestador: req.body.cod_prestador,
                endereco: `${req.body.rua} N. ${req.body.numero}, ${req.body.bairro}, ${req.body.cidade} - ${req.body.cep}`,
                cod_tipo: req.body.cod_tipo,
                descricao: req.body.descricao,
                valor_orcamento: req.body.valor_orcamento,
                data_servico: req.body.data_servico,
                horario: req.body.horario,
                data_pagamento: req.body.data_pagamento,
                cod_status: 0,
                status: 'Pendente',
                comprovante_pagamento: req.body.comprovante_pagamento,
                created_at: req.body.created_at
            }

            await Agendamento.create(newDetalhe).then(() => {
                console.log(newDetalhe)
                res.redirect('/');
            });

        }catch(error){
            console.log(error);
            res.status(400).error;
        }
    }
}