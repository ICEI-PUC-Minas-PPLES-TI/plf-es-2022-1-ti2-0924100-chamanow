# ChamaNow

**Daniel Jost Andrade, daniel.jost@sga.pucminas.br**

**Douglas Viana Fernandes, douglas.fernandes.1267130@sga.pucminas.br**

**Frederico dos Santos Ferreira de Andrade, frederico.andrade.1318112@sga.pucminas.br**

**Igor De Oliveira Martins Dos Santos, igor.santos.1362951@sga.pucminas.br**

**Nikolas Augusto Vieira Louret, navlouret@sga.pucminas.br**

## Professores

* Prof. Hugo Bastos De Paula
* Prof. Joyce Christina De Paiva Carvalho

---

Curso de Engenharia de Software, Unidade Praça da Liberdade_

Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final,
mostrar algum resultado relevante do trabalho (até 10 linhas)._

## 1. Introdução

### Contextualização

Atualmente há um crescente número de aplicativos que auxiliam o encontro profissional/cliente, aplicativos de entregas, corridas de passageiros e compra e venda, por exemplo não param de surgir. Contudo, quando se tratam de aplicações para serviços domésticos, percebe-se pobreza de opções. Existe também a dificuldade de encontrar profissionais sérios com rapidez, normalmente isso tomaria muito tempo do cliente, além do trabalhador que precisa prestar seus serviços e não consegue ter uma plataforma para isso.

---

### Problema

Um grande problema enfrentado por pessoas é a dificuldade de realizar reparos em casa. Não é raro ter algum conhecido (ou até mesmo ter passado por essa situação) de não conseguir reparar algo. Algumas causas para essa situação são falta de tempo, falta de ferramentas adequadas e conhecimentos necessários para realização do conserto.
Em outra ponta, temos profissionais de reparos com dificuldade em prospectar clientes. Tais profissionais são encontrados pelo popular "boca a boca", ou seja, indicação de clientes para outros clientes. Porém tal forma de indicação pode não ser eficiente para manter a agenda do profissional em um nível satisfatório de ocupação.

---

### Objetivo geral

O objetivo geral do trabalho é elaborar um sistema que ao ser aplicado, agilize processos de contratação direta (autônomos) e indireta (mediado por empresas) de trabalhadores para reparos em domicílios e demais estabelecimentos.

---

### Objetivos específicos

Os objetivos específicos do trabalho consistem em:

* Estrutura visual aplicada em web;
* Desenvolvimento da modelagem de processos de negócios, especificamente de pequenos reparos, com foco na interatividade entre os usuários, trabalhadores e empresas, sendo a plataforma uma atuante mediadora desses processos.

---

### Justificativas

Como supracitado anteriormente, a ideia originou-se a partir da dificuldade das pessoas de encontrar bons profissionais e de confiança para serviços de reparo e reforma de suas respectivas residências ou estabelecimentos, por não terem ferramentas ou conhecimento necessários para realizar tal ação, além da escassez de tempo. Por esse motivo e afim de solucionar esse problema, a ChamaNow foi criada para facilitar e agilizar a contratação desses serviços, sejam eles profissionais autônomos ou empresas especializadas em construção, marcenarias, vidraceiras, reformas, etc. E para facilitar a escolha do usuário/cliente, será possível visualizar a reputação dos serviços prestados e dos profissionais/empresas a partir da avaliação de outros usuários, além de informações adicionais deles.

## 2. Participantes do processo

As possíveis partes interessas pelo nosso projeto são profissionais autônomos e empresas especializadas em prestação de serviços de pequenos reparos e reformas. Outra parte interessada é o próprio usuário, que deseja reformar ou realizar um reparo de alguma item da sua casa. Dessa forma, entende-se que o público alvo do projeto são pessoas  de ambos os sexos, maiores de idade e com casa própria ou aluguel.

## 3. Modelagem do processo de negócio

### Análise da situação atual

As formas encontradas de como as pessoas realizam a contratação de serviços no ano de 2022 é por meio de:

* **Indicação de conhecidos** que necessitaram de algum serviço anteriormente, em que o agendamento se dá por meio de mensagens de texto pelo WhatsApp ou outro aplicativo de mesma função, ligação por telefone ou até mesmo encontros pessoais. O mesmo acontece para cancelar o agendamento. Em relação à forma de pagamento, ela é feita por transferência bancária, PIX, ou dinheiro vivo; e as informações da conta bancária do profissional e a chave do PIX são compartilhadas junto com o agendamento;

* Quando o cliente é **familiar ou amigo do profissional**, dessa forma a comunicação é mais fácil e é semelhante à descrita anteriormente;

* **Pesquisa na internet**, e isso inclui redes sociais, como o Facebook, Instagram, YouTube, etc; e ferramentas de busca, como o próprio Google, para encontrar algum site, contato ou endereço que o profissional ou empresa possua para que o cliente possa entrar em contato ou ir até o local. O agendamento e o pagamento do serviço são realizados pela própria plataforma, no caso das redes sociais, com o compartilhamento das informações de ambas as partes. Entretanto, apesar da pesquisa na internet ser a forma mais utilizada, ela não é a mais interessante para as partes por ser mais difícil do profissional ou empresa ser encontrado, principalmente quando é uma empresa pequena e o profissional iniciante, e demandar mais tempo de pesquisa para o cliente;

Em relação ao profissional ou empresa especializada em serviços domiciliares, as formas encontradas para que estes sejam encontrados e contratados são:

* **Criação de site e/ou perfis em redes sociais**, e no caso de empresas profissionais, utilização de publicidade paga para ter maior alcance de público alvo. Para ocorrer o agendamento e pagamento do serviço, é necessário o desenvolvimento dessas funcionalidades, no caso de um site. Entretanto, com a utilização das redes sociais, essas ações podem ocorrer na própria plataforma, em que ambas as partes combinam os detalhes. O mesmo vale para o cancelamento do agendamento e para possíveis alterações no contrato;
* **Utilização de ferramentas na internet como Google Meu Negócio e semelhantes** mais voltadas para empresas com estabelecimentos físicos. Após adicionado o perfil da empresa, ela aparecerá como resultado de buscas de potenciais clientes, sendo possível visualizar informações importantes da empresa, como o contato, site, endereço, avaliações, comentários, etc;
* **Utilização de _banners_ e placas** distribuídos nas ruas com informações de contato e qual tipo de serviço prestado. O agendamento, cancelamento e forma de pagamento são combinados normalmente por telefone ou pelo WhatsApp.

---

### Descrição Geral da proposta

A proposta da equipe é construir uma plataforma que facilite o encontro entre pessoas que precisam de pequenos reparos em suas residências e trabalhadores disponíveis nessa mesma região, sejam eles autônomos ou vinculados à alguma empresa.
Nesse sentido, o fluxo da aplicação iniciará com o cadastramento do usuário, seja ele o cliente ou o trabalhador:

* Sendo trabalhadores, autônomos e/ou vinculados à alguma empresa, o cadastro no ChamaNow irá ocorrer registrando seus dados básicos de usuário, suas especialidades em serviços e em qual região atua, a fim de encontrar oportunidades de serviços.
* Sendo clientes, irão se cadastrar no site com seus dados básicos, endereço e, posteriormente, buscar por um determinado serviço de reparo em domícilio, considerando as opções ofertadas em sua região.
* Após a escolha do serviço, o cliente irá receber um formulário para ser preenchido e, sequencialmente, receber um orçamento junto aos dados básicos do trabalhador.
* Após a aceitação da proposta, ambos os usuários receberão mensagens de confirmação com os dados primários, como nome, endereço, horário e o tipo de serviço.
* O pagamento do serviço é combinado entre o cliente e o trabalhador, não sendo mediado pelo ChamaNow.
* Finalizado o serviço, ambas as partes precisam confirmar que o processo foi devidamente finalizado.  
* O cliente recebe um formulário de avaliação do trabalhador, com intuito de contribuir para o estabelecimento de um processo mais seguro.

Dessa forma, aproveita-se da situação favorável desse mercado e contribuí-se financeiramente na renda de uma parcela da população. Sendo assim, a aplicação otimizará o usual "boca a boca", transformando essa situação em um processo padrão e sistematizado de negócio.

---

### Modelagem dos Processos

#### Processo 1 - Cadastro do Usuário

Para o cadastro do usuário, o usuário precisará escolher qual tipo de cadastro será realizado, para empresas, profissionais ou cliente. No caso do profisisonal, o usuário informará os dados pessoais além do tipo de serviço que será prestado, o contato, a localização, o raio de operação, etc. Para a empresa, além dos itens já citados, ela terá que informar os dados da empresa. E para o cliente, apenas os dados pessoais. Todos deverão inserir as informações de login como e-mail e senha. Após preencher o formulário, os dados serão registrados e o usuário poderá realizar o login.

#### Cadastro do Usuário
<img alt="Diagrama do Processo 1 (Cadastro)" title="Processo 1 - Cadastro do Usuário" src="/assets/processos/Diagrama_Cadastro-Usuario.png"/>

---

#### Processo 2 - Contratação de serviço

Processo em que o cliente escolhe qual serviço é do seu interesse requisitar, sendo disponibilizado uma determinada quantidade de opções como, por exemplo, marcenaria, elétrica, encanamento, entre outras, além de, posteriormente, o mesmo detalhar o problema enfrentado. Após a escolha do serviço, será retornada uma lista com os profissionais que prestam aquele serviço, além de suas informações básicas (nome, foto de perfil, etc), além de avaliações e localização do mesmo. Diante da escolha do profissional, o mesmo criará um orçamento que, após ser aceito pelo cliente, iniciará o agendamento, mediante a disponibilidade de ambas as partes.

<img alt="Diagrama do Processo 3" title="Processo 3 - Contratação de serviço" src="/assets/processos/diagramaContratacaoServicos.png"/>

---

#### Processo 3 - Realização do Serviço

Com o profissional e orçamento escolhidos, o cliente deverá agendar com o profissional a data e horário para realização do serviço. Tal agendamento será feito com o cliente visualizando uma lista com datas e horários vagos do profissional e escolher a que melhor lhe agradar
Com o serviço feito e confirmado na plataforma, cliente e profissional deverão combinar a forma de pagamento, confirmando também que o mesmo foi feito e que não há nenhuma pendência entre as partes.

<img alt="Diagrama do Processo 3" title="Processo 3 - Agendamento e Pagamento do serviço" src="/assets/processos/processo_3-Realizacao_Servico.png"/>

---

#### Processo 4 - Avaliação

Após o serviço ser concluído, o usuário irá avalia-lo de acordo com sua satisfação com o prestador e com a qualidade do serviço prestado, e o profissional também avalia a recepção do usuário. Nessa avaliação o usuário e o profissional  escolhem de 1 à 5 estrelas, sendo: 1 - Muito Ruim, 2- Ruim, 3 - Mediano, pode melhorar, 4 - Bom!, 5  - Excelente.

<img alt="Diagrama do Processo 4" title="Processo 6 - Avaliação" src="/assets/processos/diagram_avaliaçaochamanowfinal.png"/>

---

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

### Processo 1 – Cadastro do Usuário

**Inserir informações de login**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Email | Caixa de Texto | Pelo menos dois nomes |  |
|  Senha  |  Caixa de Texto  | Mínimo 8 caracteres |  |
|  Confirmar Senha  |  Caixa de Texto  | Valor igual ao da senha |  |

**Inserir endereço e contato**
| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
|  Telefone  |  Número  | Formato de celular |  |
| CEP | Número | Formato CEP |  |
| Rua | Caixa de Texto |  |  |
| Número | Número |  |  |
| Bairro | Caixa de Texto |  |  |
| Cidade | Caixa de Texto |  |  |
| Estado | Seleção única |  |  |
| Tipo de Usuário | Seleção única |  |  |

**Inserir dados pessoais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome completo | Caixa de Texto | Pelo menos dois nomes |  |
| Data de Nascimento | Data | Mínimo 18 anos |  |
| CPF | Número | Formato de CPF |  |

**Inserir dados da Empresa**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome da Empresa | Caixa de Texto | Máximo 100 caracteres |  |
| CNPJ |  Número  | Formato CNPJ |  |

**Selecionar serviços e área de atuação**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Selecionar serviços | Multipla escolha | Selecionar pelo menos uma opção |  |
| Área de atuação | Seleção única |  |  |

---

### Processo 2 – Contratação de Serviço

**Escolher serviço**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Pesquisar serviço | Caixa de texto |  |  |
| Escolher serviço | Seleção única |  |  |


**Escolher profissional**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Escolher profissional | Seleção única |  |  |
| Detalhar problema | Área de texto | Máximo 500 caracteres |  |


**Receber informações do usuário e o problema**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Aceitar serviço? | Link | SIM/NÃO |  |


**Receber mensagem de cancelamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Refazer escolha? | Link | SIM/NÃO |  |


**Enviar orçamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Preço | Número |  | 00,00 |
| Detalhar orçamento | Área de texto | Máximo 500 caracteres |  |
| Enviar arquivo | Arquivo | PDF,PNG,JPEG - até 10mb  |  |


**Receber orcamento do profissional**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Aceitar orçamento? | Link | SIM/NÃO |  |


**Selecionar datas disponíveis**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Data | Múltipla escolha | DD/MM/AA |  |
| Horário | Número | 00:00 |  |


**Escolher data**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Data | Seleção única | DD/MM/AA |  |
| Horário | Seleção única | 00:00  |  |

 ---
 
### Processo 3 - Realização do Serviço

**Receber lembrete de serviço agendado**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Serviço agendado. Cancelar? | Link |  |  |

**Enviar o comprovante**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Fazer upload do comprovante | Arquivo | Arquivo de até 10MB |  |

**Confirmar que não há pendências**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Existe alguma pendência? | Seleção única |  |  |

### Processo 4 - Avaliação do usuário

**Avaliar o usuário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Avaliar Usuário | Seleção única |  |  |

**Enviar comentário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Escrever comentário | Área de texto |  |  |


### Tecnologias

As tecnologias utilizadas durante o desenvolvimento do projeto incluem ferramentas de modelagem como o Camunda Modeler e o Draw.io, as linguagens voltadas à criação de páginas web como HTML5, CSS3 e o JavaScript, além do Bootstrap como framework auxiliar. A IDE que utilizaremos para o desenvolvimento será o Visual Studio Code. O SGBD escolhido foi o Microsoft SQL Server, sendo utilizada a linguagem SQL. As informações e o código serão documentados pelo GitHub.

## 5. Modelo de dados

#### Modelo Relacional ChamaNow

<img alt="Modelo Relacional ChamaNow" title="Modelo Relacional - ChamaNow" src="/assets/dados/ModeloRelacional-ChamaNow.png"/>

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Nota de Avaliação | Indentificar a avaliação individual de cada usuário | Nota de avaliação ao final de cada serviço (Profissional e Cliente) | Média de todas as avaliações de cada usuário  | Avaliações de cada usuário | Cliente/Profissional |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Nota de Avaliação | Indentificar a avaliação individual de cada usuário | Nota de avaliação ao final de cada serviço (Profissional e Cliente) | Média de todas as avaliações de cada usuário  | Avaliações de cada usuário | Cliente/Profissional |
| Tempo para a realização do serviço |  Indentificar o tempo médio para realização dos serviços | Tempo corrido desde o início do serviço até o fim do serviço |  (Somatório(DataConclusao - DataContratação ))/ServiçosConcluidosrealizados  | Tempo de cada serviço | Cliente |
| Serviços agendados |  Avaliar o crescimento da plataforma | Total de serviços agendados mês à mês |  ∑(Agendamento(Status=Agendado)  | Agendamento | Processos internos |
| Cancelamento |  Identificar processos pássiveis de melhorias | Percentual de processos cancelados em relação ao total de serviços executados |  (∑(Agendamento(Status=Concluido)) / ∑(Agendamento(Status=Cancelado)) * 100  | Agendamento | Otimização de processos |
| Novos usuários | Avaliar o crescimento da plataforma | Mede o número de novos cadastros mensalmente | ∑(usuario(data_criacao)) | usuario | Departamento de Marketing 
| Cadastro de prestadores |  Avaliar a taxa de adesão de prestadores na plataforma | Mede a média de cadastro de prestadores mensalmente |  ∑(usuario(cod_tipo) ≠ nulo) / ∑(usuario(cod_usuario)) * 100 | usuario | Departamento de Marketing |
| Serviços mais contratados  |  Analisar quais são os serviços mais contratados  | Conta a quantidade de serviços contratados de cada tipo pelos usuários e armazena esses dados |  ∑(agendamento(cod_tipo) ≠ nulo | usuario | Cliente |
| Preço médio dos serviços  |  Analisar o preço médio dos serviços contratados na plataforma  |Faz uma média somando o preço de todos os serviços contratados e divide pela quantidade de serviços prestados |   (∑(agendamento(valor_orcamento) ≠ nulo)) /  (∑(agendamento(cod_tipo) ≠ nulo)) | agendamento | Processos internos |



Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf

**[1.1]** - _STAGGEMEIER, Caroline; MARTINS, Alexandre. **SERVIÇOS DOMÉSTICOS: UMA NECESSIDADE DE PROFISSIONALIZAÇÃO**. Revista interativa, 2 fev. 2021. Disponível em: <https://revistainterativa.org/2021/02/servicos-domesticos-uma-necessidade-de-profissionalizacao/>. Acesso em: 16 fev. 2022_

**[1.2]** - _RIBAS, Raphaela. Serviços de casa já podem ser contratados via apps. O Globo, 13 nov. 2017. Disponível em: <https://oglobo.globo.com/economia/imoveis/servicos-de-casa-ja-podem-ser-contratados-via-apps-22060750>. Acesso em: 16 fev. 2022._

**[1.3]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.4]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.5]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.6]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._

# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).
