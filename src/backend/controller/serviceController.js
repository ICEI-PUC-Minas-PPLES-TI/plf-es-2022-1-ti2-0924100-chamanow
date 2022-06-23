const Agendamento = require("../models/Agendamento");

module.exports = {
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

            // Se houver algum valor undefined, ele será null
            for (let atributo in newAgendamento) {
                if (newAgendamento[atributo] == undefined)
                    newAgendamento[atributo] = null;
            }
            await Agendamento.create(newAgendamento).then(() => {
                res.redirect('/');
            });

        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    },
    async detalharServico(req, res) {
        try {
            // Busca o serviço desejado
            const servico = await Agendamento.findOne({ where: { cod_servico: req.query.cod_servico } });

            // Atualiza os dados coletados
            servico.valor_orcamento = req.body.valor_orcamento;
            servico.orcamento = req.body.orcamento_pdf;
            servico.data_inicio = req.body.data_inicio;
            servico.data_fim = req.body.data_fim;
            servico.horario_inicio = req.body.horario_inicio;
            servico.horario_fim = req.body.horario_fim;
            servico.data_servico = req.body.data_escolhida;

            if (req.body.comprovante_pdf != "")
                servico.comprovante_pagamento = req.body.comprovante_pdf;

            // Se houver comprovante, a data do pagamento é salva no banco de dados
            if (req.body.comprovante_pdf)
                servico.data_pagamento = new Date().toISOString();

            // Verifica o cod do status
            if (servico.cod_status <= 2) {
                // Se for menor do que 4, ele é apenas incrementado
                servico.cod_status += 1;
            } else {
                // Se for igual a 4, o status é alterado para 'Concluído'
                servico.cod_status += 1;
                servico.status = "Concluído";
            }

            // Salva os registros alterados no banco de dados
            await servico.save().then(() => {
                // Redireciona para a página principal
                res.redirect('/perfil');
            })
        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    },
    async cancelarServico(req, res) {
        try {
            // Busca o serviço desejado
            const servico = await Agendamento.findOne({ where: { cod_servico: req.query.cod_servico } });

            // Atualiza o cod do status para -1
            servico.cod_status = -1;
            servico.status = "Cancelado";

            // Salva os registros alterados no banco de dados
            await servico.save().then(() => {
                // Redireciona para a página principal
                res.redirect('/');
            })
        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    }
}