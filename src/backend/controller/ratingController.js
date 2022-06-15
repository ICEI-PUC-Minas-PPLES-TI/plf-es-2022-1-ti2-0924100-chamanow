const Avaliacao = require("../models/Avaliacao");

module.exports = {
    async addAvaliacao(req, res) {
        try {
            const newRating = {
                cod_avaliado: req.body.cod_avaliado,
                cod_avaliador: req.body.cod_avaliador,
                cod_agendamento: req.body.cod_agendamento,
                nota: req.body.nota,
                comentario: req.body.comentario
            }

            for (let atributo in newRating) {
                if (newRating[atributo] == undefined)
                    newRating[atributo] = null;
            }

            await Avaliacao.create(newRating).then(async() => {
                res.redirect('/perfil');
            });
        } catch (error) {
            console.log(error)
            res.status(400).error;
        }
    }
}