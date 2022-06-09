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
connection.query("SELECT A.COD_AVALIADO, B.COD_USUARIO, AVG(A.NOTA)  AS NOTA_MEDIA_PRESTADOR, B.NOME FROM AVALIACAO_USUARIO AS A JOIN USUARIO AS B ON A.COD_AVALIADO =  B.COD_USUARIO WHERE COD_AVALIADO LIKE '2%' GROUP BY A.COD_AVALIADO ORDER BY AVG(A.NOTA) DESC LIMIT 3", { type: QueryTypes.SELECT}).then(avalPrestador=>{console.log("AVALIACÃOO PRESTADOR",avalPrestador)});

/*Avaliação do Cliente*/
 const avalClientes = '';
connection.query("SELECT AVG(NOTA) AS NOTA_MEDIA_CLIENTE FROM AVALIACAO_USUARIO WHERE COD_AVALIADO LIKE '1%'", { type: QueryTypes.SELECT}).then(avalClientes=>{console.log("AVALIAÇÃO CLIENTES",avalClientes)});
 

/*Tempo para a realização do serviço*/
  const tempoServico = '';
connection.query("SELECT SUM(DATEDIFF (DATA_PAGAMENTO,DATA_SERVICO)) / COUNT(DATA_SERVICO) AS TEMPO_SERVICO_MEDIO FROM AGENDAMENTO GROUP BY MONTH(DATA_PAGAMENTO)", { type: QueryTypes.SELECT}).then(tempoServico=>{console.log("TEMPO MEDIO SERVIÇOS",tempoServico)});
  
/*Serviços agendados*/
  const servAgendados = '';
connection.query("SELECT COUNT(DATA_SOLICITACAO) / COUNT(COD_SERVICO)* 100 AS SERVIÇOS_AGENDADOS FROM AGENDAMENTO GROUP BY MONTH(DATA_SOLICITACAO) AND COD_SERVICO", { type: QueryTypes.SELECT}).then(servAgendados=>{console.log("SERVIÇOS AGENDADOS",servAgendados)});

/*Cancelamento*/
  const cancel = '';
connection.query("SELECT COUNT(CASE WHEN STATUS LIKE 'Cancelado' THEN 1 END) / COUNT(CASE WHEN STATUS LIKE 'Concluído' THEN 1 END) *100  AS CANCELAMENTO FROM AGENDAMENTO GROUP BY MONTH(DATA_SOLICITACAO)", { type: QueryTypes.SELECT}).then(cancel=>{console.log("SERVIÇOS CANCELADOS",cancel)}); 

/*Cadastro de Usuários*/
  const cadastroUser = '';
connection.query("SELECT MONTH(DATA_CRIACAO), YEAR(DATA_CRIACAO), COUNT(DATA_CRIACAO) AS CADASTRO_USUARIOS FROM USUARIO GROUP BY MONTH(DATA_CRIACAO), YEAR(DATA_CRIACAO) ORDER BY 1,2", { type: QueryTypes.SELECT}).then(cadastroUser=>{console.log("CADASTRO DE USUÁRIOS",cadastroUser)});

/*Cadastro de Prestadores*/
  const cadastroPrest = '';
connection.query("SELECT MONTH(DATA_CRIACAO), YEAR(DATA_CRIACAO), COUNT(CASE WHEN COD_TIPO IS NOT NULL THEN 1 END)  AS CADASTRO_PRESTADORES FROM USUARIO GROUP BY MONTH(DATA_CRIACAO) , YEAR(DATA_CRIACAO) ORDER BY 1,2", { type: QueryTypes.SELECT}).then(cadastroPrest=>{console.log("CADASTRO DE PRESTADORES",cadastroPrest)});

/*Serviços mais contratados */
const servMaisContrat = '';
connection.query("SELECT B.NOME, COUNT(CASE WHEN A.COD_TIPO IS NOT NULL THEN 1 END) AS SERVICOS_MAIS_CONTRATADOS FROM AGENDAMENTO AS A JOIN TIPO_SERVICO AS B ON A.COD_TIPO = B.COD_TIPO GROUP BY A.COD_TIPO ORDER BY COUNT(CASE WHEN COD_TIPO IS NOT NULL THEN 1 END) DESC LIMIT 3", { type: QueryTypes.SELECT}).then(servMaisContrat=>{console.log("SERVIÇOS MAIS CONTRATADOS",servMaisContrat)});

/*Preço médio dos serviços*/
const precoMedio = '';
connection.query("SELECT B.NOME, SUM(CASE WHEN A.VALOR_ORCAMENTO IS NOT NULL THEN 1 END) / COUNT(CASE WHEN A.COD_TIPO IS NOT NULL THEN 1 END) AS PRECO_MEDIO_SERVICO FROM AGENDAMENTO AS A JOIN TIPO_SERVICO AS B ON A.COD_TIPO = B.COD_TIPO WHERE A.VALOR_ORCAMENTO IS NOT NULL GROUP BY A.COD_TIPO", { type: QueryTypes.SELECT}).then(precoMedio=>{console.log("PREÇO MÉDIO",precoMedio)});

/*Quantidade de serviços pendentes*/
const servPendente = '';
connection.query("SELECT COUNT(CASE WHEN STATUS LIKE 'Pendente' THEN 1 END) / COUNT(CASE WHEN COD_TIPO IS NOT NULL THEN 1 END) *100 AS CANCELAMENTO FROM AGENDAMENTO GROUP BY MONTH(DATA_SOLICITACAO)", { type: QueryTypes.SELECT}).then(servPendente=>{console.log("SERVIÇOS PENDENTES",servPendente)});

/*Quantidade de serviços não pagos*/
const servNaoPagos = '';
connection.query("SELECT COUNT(CASE WHEN STATUS LIKE 'Nâo Pago' THEN 1 END) / COUNT(CASE WHEN COD_TIPO IS NOT NULL THEN 1 END) *100 AS NAO_PAGO FROM AGENDAMENTO GROUP BY MONTH(DATA_SOLICITACAO)", { type: QueryTypes.SELECT}).then(servNaoPagos=>{console.log("SERVIÇOS NÃO PAGOS",servNaoPagos)});



