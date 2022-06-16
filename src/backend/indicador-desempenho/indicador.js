// Instalação do SEQUELIZE
const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbchamanow', 'root', 'ChamanowBD()', {
    host: 'localhost',
    dialect: 'mysql'
});

const connection = new Sequelize(configDB);

const { QueryTypes } = require('sequelize');


/*"1-" para cliente, "2-" para profissional e "3-" para empresa*/

/*Avaliação do Prestador*/
const avalPrestador = '';
connection.query("SELECT A.cod_avaliado, B.cod_user, AVG(A.nota) AS nota_media_prestador, B.nome FROM avaliacaos AS A JOIN usuarios AS B ON A.cod_avaliado =  B.cod_user WHERE cod_avaliado LIKE '2%' GROUP BY A.cod_avaliado ORDER BY AVG(A.nota) DESC LIMIT 3", { type: QueryTypes.SELECT }).then(avalPrestador => { console.log("AVALIACÃOO PRESTADOR", avalPrestador) });

/*Tempo para a realização do serviço*/
const tempoServico = '';
connection.query("SELECT SUM(DATEDIFF (data_pagamento,data_servico)) / COUNT(data_servico) AS tempo_servico_media FROM agendamentos GROUP BY MONTH(data_pagamento)", { type: QueryTypes.SELECT }).then(tempoServico => { console.log("TEMPO MEDIO SERVIÇOS", tempoServico) });

/*cancelamento*/
const cancel = '';
connection.query("SELECT COUNT(CASE WHEN status LIKE 'Cancelado' THEN 1 END) / COUNT(CASE WHEN status LIKE 'Concluído' THEN 1 END) *100  AS cancelamento FROM agendamentos GROUP BY MONTH(created_at)", { type: QueryTypes.SELECT }).then(cancel => { console.log("SERVIÇOS CANCELADOS", cancel) });

/*Cadastro de Usuários*/
const cadastroUser = '';
connection.query("SELECT MONTH(created_at), YEAR(created_at), COUNT(created_at) AS cadastro_usuarios FROM usuarios GROUP BY MONTH(created_at), YEAR(created_at) ORDER BY 1,2", { type: QueryTypes.SELECT }).then(cadastroUser => { console.log("CADASTRO DE USUÁRIOS", cadastroUser) });

/*Cadastro de Prestadores*/
const cadastroPrest = '';
connection.query("SELECT MONTH(created_at), YEAR(created_at), COUNT(CASE WHEN cod_tipo IS NOT NULL THEN 1 END)  AS cadastro_prestadores FROM usuarios GROUP BY MONTH(created_at) , YEAR(created_at) ORDER BY 1,2", { type: QueryTypes.SELECT }).then(cadastroPrest => { console.log("CADASTRO DE PRESTADORES", cadastroPrest) });

/*Serviços mais contratados */
const servMaisContrat = '';
connection.query("SELECT B.nome, COUNT(CASE WHEN A.cod_tipo IS NOT NULL THEN 1 END) AS servicos_MAIS_CONTRATADOS FROM agendamentos AS A JOIN servicos AS B ON A.cod_tipo = B.cod_tipo GROUP BY A.cod_tipo ORDER BY COUNT(CASE WHEN cod_tipo IS NOT NULL THEN 1 END) DESC LIMIT 3", { type: QueryTypes.SELECT }).then(servMaisContrat => { console.log("SERVIÇOS MAIS CONTRATADOS", servMaisContrat) });

/*Preço médio dos serviços*/
const precoMedio = '';
connection.query("SELECT B.nome, SUM(A.valor_orcamento) / COUNT(CASE WHEN A.cod_tipo IS NOT NULL THEN 1 END) AS PRECO_MEDIO_SERVICO FROM agendamentos AS A JOIN servicos AS B ON A.cod_tipo = B.cod_tipo WHERE A.valor_orcamento IS NOT NULL GROUP BY A.cod_tipo", { type: QueryTypes.SELECT }).then(precoMedio => { console.log("PREÇO MÉDIO", precoMedio) });

/*Quantidade de serviços pendentes*/
const servPendente = '';
connection.query("SELECT COUNT(CASE WHEN status LIKE 'Pendente' THEN 1 END) / COUNT(CASE WHEN cod_tipo IS NOT NULL THEN 1 END) *100 AS servicod_pendentes FROM agendamentos GROUP BY MONTH(created_at)", { type: QueryTypes.SELECT }).then(servPendente => { console.log("SERVIÇOS PENDENTES", servPendente) });

/*Quantidade de serviços não pagos*/
const servNaoPagos = '';
connection.query("SELECT COUNT(CASE WHEN status LIKE 'Não Pago' THEN 1 END) / COUNT(CASE WHEN cod_tipo IS NOT NULL THEN 1 END) *100 AS NAO_PAGO FROM agendamentos GROUP BY MONTH(created_at)", { type: QueryTypes.SELECT }).then(servNaoPagos => { console.log("SERVIÇOS NÃO PAGOS", servNaoPagos) });