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

#### Processo 1 - Cadastro e Login do Usuário

Para o cadastro do usuário, o usuário precisará escolher qual tipo de cadastro será realizado, para empresas, profissionais ou cliente. No caso do profisisonal, o usuário informará os dados pessoais além do tipo de serviço que será prestado, o contato, a localização, o raio de operação, etc. Para a empresa, além dos itens já citados, ela terá que informar os dados da empresa. E para o cliente, apenas os dados pessoais. Todos deverão inserir as informações de login como e-mail e senha. Após preencher o formulário, os dados serão registrados e o usuário poderá realizar o login.

#### Cadastro do Usuário
<img alt="Diagrama do Processo 1 (Cadastro)" title="Processo 1 - Cadastro do Usuário" src="/assets/dados/Diagrama_Cadastro-Profissional-Empresa-Cliente.png"/>

#### Login do Usuário
<img alt="Diagrama do Processo 1 (Login)" title="Processo 1 - Login" src="/assets/dados/loginbpmn.png"/>

---

#### Processo 2 - Escolhas do serviço, Orçamento e Agendamento

Processo em que o cliente escolhe qual serviço é do seu interesse requisitar, sendo disponibilizado uma determinada quantidade de opções como, por exemplo, marcenaria, elétrica, encanamento, entre outras, além de, posteriormente, o mesmo detalhar o problema enfrentado. Após a escolha do serviço, será retornada uma lista com os profissionais que prestam aquele serviço, além de suas informações básicas (nome, foto de perfil, etc), além de avaliações e localização do mesmo. Diante da escolha do profissional, o mesmo criará um orçamento que, após ser aceito pelo cliente, iniciará o agendamento, mediante a disponibilidade de ambas as partes.

<img alt="Diagrama do Processo 3" title="Processo 3 - Escolha do Serviço, Orçamento e Agendamento" src="/assets/dados/diagramaServiçosOrçamentoAgendamento.png"/>

---

#### Processo 3 - Realização do processo

Com o profissional e orçamento escolhidos, o cliente deverá agendar com o profissional a data e horário para realização do serviço. Tal agendamento será feito com o cliente visualizando uma lista com datas e horários vagos do profissional e escolher a que melhor lhe agradar
Com o serviço feito e confirmado na plataforma, cliente e profissional deverão combinar a forma de pagamento, confirmando também que o mesmo foi feito e que não há nenhuma pendência entre as partes.

<img alt="Diagrama do Processo 5" title="Processo 5 - Agendamento e Pagamento do serviço" src="/docs/imagens/processo_5.png"/>

---

#### Processo 4 - Avaliação

Após o serviço ser concluído, o usuário irá avalia-lo de acordo com sua satisfação com o prestador e com a qualidade do serviço prestado, e o profissional também avalia a recepção do usuário. Nessa avaliação o usuário e o profissional  escolhem de 1 à 5 estrelas, sendo: 1 - Muito Ruim, 2- Ruim, 3 - Mediano, pode melhorar, 4 - Bom!, 5  - Excelente.

<img alt="Diagrama do Processo 4" title="Processo 6 - Avaliação" src="/docs/imagens/diagram_avaliaçaochamanow.png"/>

---

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Login**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior.

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

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
