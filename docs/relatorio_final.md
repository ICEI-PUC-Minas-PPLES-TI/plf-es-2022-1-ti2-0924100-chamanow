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

O ChamaNow é uma aplicação desenvolvida para web que, buscando agilizar processos, virtualiza a contratação de prestadores de serviços de pequenos reparos por pessoas comuns. Procurando rapidez e facilidade, os clientes utilizam a ferramenta como um meio de resolver problemas estruturais em seus domicílios, entrando em contato direto com um prestador escolhido pelo mesmo, com base nos seus próprios requisitos, estimulando, dessa forma, a confiança do cliente.

## 1. Introdução

### Contextualização

Atualmente há um crescente número de aplicativos que auxiliam o encontro profissional/cliente, aplicativos de entregas, corridas de passageiros e compra e venda, por exemplo. Contudo, quando se tratam de aplicações para serviços domésticos, percebe-se pobreza de opções. Existe também a dificuldade de encontrar profissionais sérios com rapidez, normalmente isso tomaria muito tempo do cliente, além do trabalhador que precisa prestar seus serviços e não consegue ter uma plataforma para isso.

---

### Problema

Um grande problema enfrentado por pessoas é a dificuldade de realizar reparos em casa. Não é raro ter algum conhecido (ou até mesmo ter passado por essa situação) de não conseguir reparar algo. Algumas causas para essa situação são falta de tempo, falta de ferramentas adequadas e conhecimentos necessários para realização do conserto.
Em outra ponta, temos prestadores de reparos com dificuldade em prospectar clientes. Tais profissionais são encontrados pelo popular "boca a boca", ou seja, indicação de clientes para outros clientes. Porém tal forma de indicação pode não ser eficiente para manter a agenda do prestador em um nível satisfatório de ocupação.

---

### Objetivo geral

O objetivo geral do trabalho é elaborar um sistema que ao ser aplicado, agilize processos de contratação direta (autônomos) e indireta (mediado por empresas) de trabalhadores para reparos em domicílios e demais estabelecimentos.

---

### Objetivos específicos

Os objetivos específicos do trabalho consistem em:

* Estrutura visual aplicada em web;
* Desenvolvimento da modelagem de processos de negócios;
* Produção de um sistema de pequenos reparos, com foco na interatividade entre os usuários, prestadores e empresas, sendo a plataforma uma atuante mediadora desses processos.

---

### Justificativas

Como supracitado, a ideia originou-se a partir da dificuldade das pessoas de encontrar bons profissionais e de confiança para serviços de reparo e reforma de suas respectivas residências ou estabelecimentos, por não terem ferramentas ou conhecimento necessários para realizar tal ação, além da escassez de tempo. Por esse motivo e afim de solucionar esse problema, a ChamaNow foi criada para facilitar e agilizar a contratação desses serviços, sejam eles profissionais autônomos ou empresas especializadas em construção, marcenarias, vidraceiras, reformas, etc. E para facilitar a escolha do usuário/cliente, será possível visualizar a reputação dos serviços prestados e dos profissionais/empresas a partir da avaliação de outros usuários, além de informações adicionais deles.

## 2. Participantes do processo

As possíveis partes interessas pelo nosso projeto são profissionais autônomos e empresas especializadas em prestação de serviços de pequenos reparos e reformas. Outra parte interessada é o próprio cliente, que deseja reformar ou realizar um reparo de alguma item da sua casa. Dessa forma, entende-se que o público alvo do projeto são pessoas  de ambos os sexos, maiores de idade e com casa própria ou aluguel.

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

A proposta da equipe é construir uma plataforma que facilite o encontro entre pessoas que precisam de pequenos reparos em suas residências e prestadores disponíveis, sejam eles autônomos ou vinculados à alguma empresa.
Nesse sentido, o fluxo da aplicação iniciará com o cadastramento do usuário, seja ele o cliente ou o prestador:

* Sendo prestadores, autônomos e/ou vinculados à alguma empresa, o cadastro no ChamaNow irá ocorrer registrando seus dados básicos de usuário, suas especialidades em serviços e em qual região atua, a fim de encontrar oportunidades de serviços.
* Sendo clientes, irão se cadastrar no site com seus dados básicos, endereço e, posteriormente, buscar por um determinado serviço de reparo em domícilio, considerando as opções ofertadas em sua região.
* Após a escolha do serviço, o cliente irá receber um formulário para ser preenchido e, sequencialmente, receber um orçamento junto aos dados básicos do prestador.
* Após a aceitação da proposta, ambos os usuários receberão mensagens de confirmação com os dados primários, como nome, endereço, horário e o tipo de serviço.
* O pagamento do serviço é combinado entre o cliente e o prestador, não sendo mediado pelo ChamaNow.
* Finalizado o serviço, ambas as partes precisam confirmar que o processo foi devidamente finalizado.  
* O cliente recebe um formulário de avaliação do prestador, com intuito de contribuir para o estabelecimento de um processo mais seguro.

Dessa forma, aproveita-se da situação favorável desse mercado e contribuí-se financeiramente na renda de uma parcela da população. Sendo assim, a aplicação otimizará o usual "boca a boca", transformando essa situação em um processo padrão e sistematizado de negócio.

---

### Modelagem dos Processos

#### Processo 1 - Cadastro do Usuário

Para o cadastro do usuário, o usuário precisará escolher qual tipo de cadastro será realizado, para empresas, profissionais ou cliente. No caso do profisisonal, o usuário informará os dados pessoais além do tipo de serviço que será prestado, o contato, a localização, o região de atuação, etc. Para a empresa, além dos itens já citados, ela terá que informar os dados da empresa. E para o cliente, apenas os dados pessoais. Todos deverão inserir as informações de login como e-mail e senha. Após preencher o formulário, os dados serão registrados e o usuário poderá realizar o login.

#### Cadastro do Usuário

<img alt="Diagrama do Processo 1 (Cadastro)" title="Processo 1 - Cadastro do Usuário" src="/assets/processos/cadastro-usuario.png"/>

---

#### Processo 2 - Escolha do serviço e prestador

Processo em que o cliente escolhe qual serviço é do seu interesse requisitar, sendo disponibilizado uma determinada quantidade de opções como, por exemplo, marcenaria, elétrica, encanamento, entre outras. Após a escolha do serviço, será retornada uma lista com os profissionais que prestam aquele serviço, além de suas informações básicas (nome, foto de perfil, etc), além de avaliações e localização do mesmo.

<img alt="Diagrama do Processo 2" title="Processo 2 - Escolha do serviço e prestador" src="/assets/processos/escolha-servico.png"/>

---

#### Processo 3 - Agendamento do serviço

Processo em que o prestador calcula o orçamento do serviço e envia para o cliente pelo sistema, além de escolher o intervalo de datas e horários mais adequados para a realização do serviço de acordo com a sua agenda. Após isso, o cliente recebe o orçamento e esolhe a data dentro do intervalo estabelecido pelo prestador que atenda suas necessidades. Caso o cliente queira encerrar o serviço, é possível realizá-lo.

<img alt="Diagrama do Processo 3" title="Processo 3 - Agendamento do serviço" src="/assets/processos/agendamento.png"/>

---

#### Processo 4 - Realização do Serviço

O processo é ativado no dia da data escolhida pelo usuário. Após a realização do serviço e do pagamento, ambos fora da plataforma, o cliente envia para o prestador o comprovante de pagamento e o mesmo o recebe. Após isso, o prestador conclui o serviço ou não dependendo das circunstâncias.

<img alt="Diagrama do Processo 4" title="Processo 4 - Realização do serviço" src="/assets/processos/realizacao-servico.png"/>

---

#### Processo 5 - Avaliação dos usuários

Após o serviço ser concluído, o cliente irá avaliar o prestador de acordo com sua satisfação e com a qualidade do serviço prestado, e o prestador também avalia a recepção do usuário. Nessa avaliação o usuário e o prestador escolhem de 1 à 5 estrelas, sendo: 1 - Muito Ruim, 2- Ruim, 3 - Mediano, pode melhorar, 4 - Bom!, 5  - Excelente.

<img alt="Diagrama do Processo 5" title="Processo 5 - Avaliação dos usuários" src="/assets/processos/avaliacao.png"/>

---

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Segue abaixo o detalhamento das atividades dos processos estipulados:

### Processo 1 – Cadastro do Usuário

**Escolher tipo de usuario**
| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Tipo de Usuário | Seleção única |  |  |

**Inserir informações de login**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Email | Caixa de Texto | Pelo menos dois nomes |  |
|  Senha  |  Caixa de Texto  | Mínimo 8 caracteres |  |
|  Confirmar Senha  |  Caixa de Texto  | Valor igual ao da senha |  |

**Inserir endereço e contato**
| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Telefone  |  Número  |  |  |
| CEP | Número |  |  |
| Rua | Caixa de Texto |  |  |
| Número | Número |  |  |
| Bairro | Caixa de Texto |  |  |
| Cidade | Caixa de Texto |  |  |
| Estado | Seleção única |  |  |

**Inserir dados pessoais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome completo | Caixa de Texto |  |  |
| Data de Nascimento | Data | Mínimo 18 anos |  |
| CPF | Número |  |  |

**Inserir dados da Empresa**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome da Empresa | Caixa de Texto | Máximo 100 caracteres |  |
| CNPJ |  Número  |  |  |

**Selecionar serviços e área de atuação**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Selecionar serviços | Multipla escolha | Selecionar pelo menos uma opção |  |
| Área de atuação | Seleção única |  |  |

---

### Processo 2 – Escolha do Serviço

**Escolher serviço**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Pesquisar serviço | Caixa de texto |  |  |
| Escolher serviço | Seleção única |  |  |

**Escolher profissional**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Escolher profissional | Seleção única |  |  |

**Descrever o problema**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| CEP | Número |  |  |
| Rua | Caixa de Texto |  |  |
| Número | Número |  |  |
| Bairro | Caixa de Texto |  |  |
| Cidade | Caixa de Texto |  |  |
| Detalhar problema | Área de texto | Máximo 500 caracteres |  |

---

### Processo 3 – Agendamento do Serviço

**Enviar orçamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Valor do orçamento | Número |  | 00,00 |
| Enviar arquivo | Arquivo | .pdf, .png, .jpeg de até 50KB |  |

**Selecionar datas disponíveis - Prestador**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Data Início | Data | Data atual |  |
| Data Fim | Data | Data atual |  |
| Horário Início | Horário | 00:00 |  |
| Horário Fim | Horário | 23:59 |  |

**Escolher data - Cliente**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Datas Disponíveis | Data e Horário | Intervalo estabelecido pelo prestador |  |

---

### Processo 4 - Realização do serviço

**Enviar o comprovante**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Fazer upload do comprovante | Arquivo | .pdf, .png, .jpeg de até 50KB |  |

---

### Processo 5 - Avaliação do usuário

**Avaliar o usuário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Avaliar Usuário | Seleção única |  |  |

**Enviar comentário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Escrever comentário | Área de texto |  |  |

### Tecnologias

As tecnologias utilizadas durante o desenvolvimento do projeto incluem ferramentas de modelagem como o Camunda Modeler e o Draw.io, as linguagens voltadas à criação de páginas web como HTML5, CSS3 e o JavaScript, além do Node.js e suas bibliotecas, express e sequelize, como framework. A IDE que utilizaremos para o desenvolvimento será o Visual Studio Code. O SGBD escolhido foi o MYSQL, sendo utilizada a linguagem SQL. As informações e o código serão documentados pelo GitHub.

## 5. Modelo de dados

#### Modelo Relacional ChamaNow

<img alt="Modelo Relacional ChamaNow" title="Modelo Relacional - ChamaNow" src="/assets/dados/ModeloRelacional-ChamaNow.png"/>

## 6. Indicadores de desempenho

Segue abaixo os indicadores da plataforma:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Avaliação do Prestador | Identificar os prestadores mais bem avaliados | Calcula a média de avaliações de cada prestador  | ∑(avaliacao_usuario(nota)) / COUNT(avalicao_usuario(nota))  | avaliacao_usuario e usuario | Cliente |
| Tempo para a realização do serviço |  Indentificar o tempo médio para realização dos serviços mensalmente | Tempo corrido desde o início do serviço até o fim do serviço | ∑((agendamento(data_pagamento)) - (agendamento(data_servico))) / COUNT(agendamento(data_servico))  | agendamento | Cliente |
| Cadastro de Usuários | Avaliar o crescimento da plataforma | Mede o número de novos cadastros mensalmente | COUNT(usuario(data_criacao)) | usuario | Processos internos |
| Cadastro de prestadores |  Avaliar a taxa de adesão de prestadores na plataforma | Calcula o total de cadastro de prestadores mensalmente |  COUNT(usuario(cod_tipo) ≠ nulo) | usuario | Processos internos |
| Serviços mais contratados  |  Analisar quais são os serviços mais contratados | Conta a quantidade de serviços contratados de cada tipo pelos usuário | COUNT(agendamento(cod_tipo) ≠ nulo) | agendamento | Cliente |
| Preço médio dos serviços | Analisar o preço médio dos serviços contratados na plataforma | Calcula a média do preço de todos os serviços contratados mensalmente |  ∑(agendamento(valor_orcamento) ≠ nulo) / COUNT(agendamento(cod_tipo) ≠ nulo) | agendamento | Processos internos |
| Quantidade de serviços pendentes | Analisar se existem muitos serviços pendentes | Conta o total de serviços cujo status é pendentes | COUNT(agendamento(status) = pendente) | agendamento | Processos internos |

## 7. Sistema desenvolvido

Nosso sistemas une simplicidade de uso com funcionalidades para resolver os problemas do usuário.

# Tela Inicial

Nossa tela inicial apresenta um catálogo dos serviços disponibilizados em nossa plataforma, seguida pelos três serviços mais contratados. Abaixo dessa seção, podemos ver os três profissionais mais bem avaliados do Chamanow. Finalizada essas apresentações, temos algumas informações sobre nós e como trabalhamos.

![Tela Inicial](../assets/telas/1-tela_inicial.png)

# Cadastro do Cliente

É necessário criar uma conta para usar nossa plataforma. No cadastro de usuário, pede-se algumas informações comuns e básicas para criação de contas em sites.

![Cadastro do Cliente](../assets/telas/2-tela_de_cadastro_cliente.png)

# Cadastro do Profissional

O profissional também precisa ter uma conta para oferecer seus serviços. As informações solicitadas são praticamente as mesmas que as do cliente, mas com a adição dos campos de serviços a serem prestados e o raio de atuação.

![Cadastro do Profissional](../assets/telas/3-tela_de_cadastro_profissional.png)

# Escolha do Serviço

Nesta tela são listados os mesmos serviços do catálogo da tela inicial são listados novamente, mas com mais detalhes e com a descrição do serviço.

![Escolha do Serviço](../assets/telas/4-escolha-servico.png)

# Escolha do Serviço Específico

Após ver todos os serviços, o usuário pode selecionar um em especifico e ver todos os seus detalhes. Além disso, são exibidos todos os profissionais que prestam aquele serviço; com nome, avaliação na plataforma, contato do prestador e a possibilidade de contratá-lo.

![Escolha do Serviço Específico](../assets/telas/5-escolha-servico-especifico.png)

# Descrição do Problema

Com o serviço e profissional escolhidos, o cliente pode detalhar o problema fazendo sua descrição e colocando detalhes do serviço a ser prestado, como data e horários desejados.

![Descrição do Problema](../assets/telas/6-descrever-problema.png)

Após o cliente detalhar o problema e mandar para o profissional, ele aguarda a resposta do profissional que pode aceitar ou recusar o serviço.

# Envio do Orçamento Pelo Profissional

![Envio do Orçamento Pelo Profissional](../assets/telas/7-envio-do-orçamento-pelo-profissional.png)

Caso aceite, o profissional irá mandar um orçamento para o cliente que poderá aceitar ou recusar. Caso aceite, o serviço será feito na data e horário previamente combinados.
Com o serviço prestado, o cliente faz upload do comprovante de pagamento e avalia o profissional. O orçamento e comprovante ficam disponíveis para serem consultados a qualquer momento através do download dos arquivos.

# Enviar Comprovante

![Enviar Comprovante](../assets/telas/8-enviar-comprovante.png)

# Serviços Agendados

O cliente pode, ainda, ver todos os seus serviços que foram agendados e o status que eles se encontram.

![Serviços Agendados](../assets/telas/9-perfil_servicos_agendados.png)

## 8. Conclusão

O grupo concluiu que para conseguirmos atingir nosso objetivo, precisaríamos estabelecer metas tangíveis para alinharmos os conhecimentos dos integrantes e, assim, podermos desenvolver novas habilidades.

Inicialmente, o grupo propôs o desenvolvimento de uma ferramenta que agilizasse um processo de contratação de serviços de reparos domiciliares, estabelecendo um contato direto entre o contratante e o prestador, seguindo um fluxo de negócio e entregas predeterminadas.

Apesar dos conhecimentos de front-end que o grupo possuía, precisamos buscar por novos aprendizados, sendo o curso de Node.js disponibilizado pelo repositório da Universidade Livre a base para a criação do back-end do sistema.

Não obstante, o projeto estimulou o desenvolvimento também de competências relacionais, aproximando os integrantes do grupo e atiçando debates ricos e variados, necessitando que todos compreendessem o lado um do outro e entrassem em um consenso, além de ouvir as críticas ofertadas pelos professores, Hugo e Joyce, entendê-las e nos aperfeiçoar.

Portanto, o trabalho interdisciplinar foi essencial para aproximar os integrantes do grupo de um ambiente real de trabalho, com prazos de entrega, discussões em grupo, manejo de software em âmbito coletivo e o desenvolvimento pessoal, agregando experiência e refinamento para cada membro do ChamaNow.

Para trabalhos futuros, o grupo pretende hospedar o banco de dados, para que assim a ferramenta possa se tornar de fato pública, além da hospedagem do site em si e a inserção de mais serviços na plataforma.

# REFERÊNCIAS

**[1.1]** - _STAGGEMEIER, Caroline; MARTINS, Alexandre. **SERVIÇOS DOMÉSTICOS: UMA NECESSIDADE DE PROFISSIONALIZAÇÃO**. Revista interativa, 2 fev. 2021. Disponível em: <https://revistainterativa.org/2021/02/servicos-domesticos-uma-necessidade-de-profissionalizacao/>. Acesso em: 16 fev. 2022_

**[1.2]** - _RIBAS, Raphaela. Serviços de casa já podem ser contratados via apps. O Globo, 13 nov. 2017. Disponível em: <https://oglobo.globo.com/economia/imoveis/servicos-de-casa-ja-podem-ser-contratados-via-apps-22060750>. Acesso em: 16 fev. 2022._

# APÊNDICES

Links importantes

* [***Código do projeto***](../src/)
* [***Artefatos***](../assets/)
* [***Apresentação Final***](../assets/apresentacoes/)
* [***Vídeo de Apresentação***](../assets/apresentacoes/Video-Apresentacao-Final.mp4)
