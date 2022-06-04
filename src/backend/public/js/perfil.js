function getUserData() {
    try {
        const response = fetch('http://localhost:8786/api/user-datas/datas')
        const data = response.then(resp => resp.json())
        return data

    } catch (error) {
        console.error(error);
    }
}

async function getUserRating() {
    try {
        const response = await fetch('http://localhost:8786/api/user-datas/rating')
        const data = Promise.resolve(response.json());
        data.then((v) => {
            console.log(v);
        })

        //init();
    } catch (error) {
        console.error(error);
    }
}

async function getUserScheduling() {
    try {
        const response = await fetch('http://localhost:8786/api/user-datas/scheduling')
        const data = Promise.resolve(response.json());
        data.then((v) => {
            console.log(v);
        })

        //init();
    } catch (error) {
        console.error(error);
    }
}

function tabelaServicos(cod_user) {
    // Apagar todos os elementos da seção
    $(".dadosMenu").html("");

    // Alterar o título da seção
    const tituloSecao = document.querySelector("h2.tituloSecao");
    tituloSecao.innerText = "Serviços";

    // Alterar a descrição da seção
    const descricaoSecao = document.querySelector(".descricaoSecao");
    descricaoSecao.innerText = "Veja na tabela a seguir todos os seus serviços:";

    // Criação da div da tabela dos serviços
    const divTabelaServico = document.createElement('div');
    divTabelaServico.className = "divTebelaServico";

    // Criação da tabela dos serviços
    const tabelaServico = document.createElement("table");
    tabelaServico.id = "tabelaServico";

    // Criação do cabeçalho da tabela
    const cabecalhoTabela = document.createElement("tr");
    cabecalhoTabela.className = "cabecalho";

    // Criação das colunas do cabeçalho =======================

    // Criação da coluna do nome do cabeçalho
    const colunaNome = document.createElement("td");
    if (cod_user == "cliente")
        colunaNome.innerText = "Prestador";
    else
        colunaNome.innerText = "Cliente";


    // Criação da coluna do serviço do cabeçalho
    const colunaServico = document.createElement("td");
    colunaServico.innerText = "Serviço";

    // Criação da coluna do endereço do cabeçalho
    const colunaEndereco = document.createElement("td");
    colunaEndereco.innerText = "Endereço";

    // Criação da coluna da data do cabeçalho
    const colunaData = document.createElement("td");
    colunaData.innerText = "Data";

    // Criação da coluna do status do cabeçalho
    const colunaStatus = document.createElement("td");
    colunaStatus.innerText = "Status";

    // Adicionar as colunas dentro do cabeçalho
    cabecalhoTabela.appendChild(colunaNome);
    cabecalhoTabela.appendChild(colunaServico);
    cabecalhoTabela.appendChild(colunaEndereco);
    cabecalhoTabela.appendChild(colunaData);
    cabecalhoTabela.appendChild(colunaStatus);

    // Adicionar a cabeçalho na tabela
    tabelaServico.appendChild(cabecalhoTabela);

    //Criação das tuplas da tabela
    for (var i = 1; i <= 8; i++) {
        // Criação da linha
        const tupla = document.createElement("tr");
        tupla.id = `${i}`;

        // Criação das colunas da tupla =======================

        // Criação da coluna do nome do cabeçalho
        const colunaNomeTupla = document.createElement("td");
        colunaNomeTupla.id = `prestador-${i}`;
        colunaNomeTupla.innerText = `Nome prestador ${i}`;

        // Criação da coluna do serviço do cabeçalho
        const colunaServicoTupla = document.createElement("td");
        colunaServicoTupla.id = `serviço-${i}`;
        colunaServicoTupla.innerText = `Serviço ${i}`;

        // Criação da coluna do endereço do cabeçalho
        const colunaEnderecoTupla = document.createElement("td");
        colunaEnderecoTupla.id = `endereço-${i}`;
        colunaEnderecoTupla.innerText = `Endereço ${i}`;

        // Criação da coluna da data do cabeçalho
        const colunaDataTupla = document.createElement("td");
        colunaDataTupla.id = `data-${i}`;
        colunaDataTupla.innerText = `Data ${i}`;

        // Criação da coluna do status do cabeçalho
        const colunaStatusTupla = document.createElement("td");
        const spanStatus = document.createElement("span");
        spanStatus.id = `status-${i}`;
        spanStatus.innerText = `Status ${i}`;

        // Adicionar o spanStatus dentro da coluna status
        colunaStatusTupla.appendChild(spanStatus);

        // Adicionar as colunas dentro do cabeçalho
        tupla.appendChild(colunaNomeTupla);
        tupla.appendChild(colunaServicoTupla);
        tupla.appendChild(colunaEnderecoTupla);
        tupla.appendChild(colunaDataTupla);
        tupla.appendChild(colunaStatusTupla);

        // Adicionar a tupla na tabela
        tabelaServico.appendChild(tupla);
    }

    // Adicionar a tabela na divTabela
    divTabelaServico.appendChild(tabelaServico);

    // Retornar a tabela
    return divTabelaServico;
}

function alterarCadastro(cod_user) {
    // Apagar todos os elementos da seção
    $(".dadosMenu").html("");

    // Alterar o título da seção
    const tituloSecao = document.querySelector("h2.tituloSecao");
    tituloSecao.innerText = "Alterar Cadastro";

    // Alterar a descrição da seção
    const descricaoSecao = document.querySelector(".descricaoSecao");
    descricaoSecao.innerText = "";

    // Adicionar divFormLogin na divAlterarCadastro
    const divAlterarCadastro = document.createElement("div");
    divAlterarCadastro.className = "";

    // Form Login =====================================================
    const divFormLogin = formLogin(cod_user);
    divAlterarCadastro.appendChild(divFormLogin);

    // Form Endereço ==================================================
    const divFormTelCadastro = formEnderecoTel(cod_user);
    divAlterarCadastro.appendChild(divFormTelCadastro);

    // Form Dados Pessoais ============================================
    if (cod_user == "profissional" || cod_user == "cliente") {
        const divFormDadosPessoaisCadastro = formDadosPessoais(cod_user);
        divAlterarCadastro.appendChild(divFormDadosPessoaisCadastro);
    }

    // Form Dados da Empresa ==========================================
    if (cod_user == "empresa") {
        const divFormDadosEmpresa = formDadosEmpresa(cod_user);
        divAlterarCadastro.appendChild(divFormDadosEmpresa);
    }

    // Form Area de Atuação ===========================================
    if (cod_user == "profissional" || cod_user == "empresa") {
        const divFormAreaAtuacao = formAreaAtuacao(cod_user);
        divAlterarCadastro.appendChild(divFormAreaAtuacao);
    }

    // Criação do btn submmit
    const btnSubmmit = document.createElement('button');
    btnSubmmit.id = "btnSubmmit";
    btnSubmmit.innerHTML = `Alterar <i class="fa-solid fa-check"></i>`;
    divAlterarCadastro.appendChild(btnSubmmit);

    // Retornar divAlterarCadastro
    return divAlterarCadastro;
}

function formLogin(cod_user) {
    // Criação da div com o form de login
    const divFormLogin = document.createElement("div");
    divFormLogin.className = "info-login";

    // Criação do título do form
    const tituloFormLogin = document.createElement("h5");
    tituloFormLogin.className = "subtitulo";
    tituloFormLogin.innerText = "Informações de Login";

    // Criação do form de login
    const formLogin = document.createElement("form");
    formLogin.id = "formLogin";
    formLogin.className = "form";

    // Criação do input do email
    const inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "emailCadastro";
    inputEmail.className = "form-control";
    inputEmail.placeholder = "E-mail";
    inputEmail.setAttribute("required", "");

    // Criação do input do senha
    const inputSenha = document.createElement('input');
    inputSenha.type = "password";
    inputSenha.name = "senha";
    inputSenha.id = "senhaCadastro";
    inputSenha.className = "form-control";
    inputSenha.placeholder = "Senha";
    inputSenha.minlength = "8";
    inputSenha.maxlength = "50";
    inputSenha.setAttribute("required", "");

    // Criação do input do confirmar senha
    const inputConfirmarSenha = document.createElement('input');
    inputConfirmarSenha.type = "password";
    inputConfirmarSenha.name = "confirmar-senha";
    inputConfirmarSenha.id = "confirmar-senhaCadastro";
    inputConfirmarSenha.className = "form-control";
    inputConfirmarSenha.placeholder = "Confirmar Senha";
    inputConfirmarSenha.minlength = "8";
    inputConfirmarSenha.maxlength = "50";
    inputConfirmarSenha.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formLogin.appendChild(inputEmail);
    formLogin.appendChild(inputSenha);
    formLogin.appendChild(inputConfirmarSenha);

    // Adicionar o formLogin dentro da divFormLogin
    divFormLogin.appendChild(tituloFormLogin);
    divFormLogin.appendChild(formLogin);

    // Retornar divFormLogin
    return divFormLogin;
}

function formEnderecoTel(cod_user) {
    // Criação da div com o form de Endereço e Telefone
    const divFormTel = document.createElement("div");
    divFormTel.className = "endereco-tel";

    // Criação do título do form
    const tituloFormTel = document.createElement("h5");
    tituloFormTel.className = "subtitulo";
    tituloFormTel.innerText = "Endereço e Telefone";

    // Criação do form de Endereço e Telefone
    const formTel = document.createElement("form");
    formTel.id = "formTel";
    formTel.className = "form";

    // Div Telefone ============================================

    // Criar a div para os inputs telefone, rua, bairro e cidade
    const divTel = document.createElement('div');
    divTel.className = "divTel";

    // Criação do input do telefone
    const inputTel = document.createElement('input');
    inputTel.type = "number";
    inputTel.name = "telefone";
    inputTel.id = "telCadastro";
    inputTel.className = "form-control";
    inputTel.placeholder = "Telefone";
    inputTel.setAttribute("required", "");

    // Criação do input do rua
    const inputRua = document.createElement('input');
    inputRua.type = "text";
    inputRua.name = "rua";
    inputRua.id = "ruaCadastro";
    inputRua.className = "form-control";
    inputRua.placeholder = "Rua";
    inputRua.setAttribute("required", "");

    // Criação do input do bairro
    const inputBairro = document.createElement('input');
    inputBairro.type = "text";
    inputBairro.name = "bairro";
    inputBairro.id = "bairroCadastro";
    inputBairro.className = "form-control";
    inputBairro.placeholder = "Bairro";
    inputBairro.maxlength = "30";
    inputBairro.setAttribute("required", "");

    // Criação do input do cidade
    const inputCidade = document.createElement('input');
    inputCidade.type = "text";
    inputCidade.name = "cidade";
    inputCidade.id = "cidadeCadatro";
    inputCidade.className = "form-control";
    inputCidade.placeholder = "Cidade";
    inputCidade.maxlength = "30";
    inputCidade.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    divTel.appendChild(inputTel);
    divTel.appendChild(inputRua);
    divTel.appendChild(inputBairro);
    divTel.appendChild(inputCidade);
    formTel.appendChild(divTel);

    // Div CEP =================================================

    // Criar a div para os inputs CEP, Número e Estado
    const divCEP = document.createElement('div');
    divCEP.className = "divCEP";

    // Criação do input do CEP
    const inputCEP = document.createElement('input');
    inputCEP.type = "number";
    inputCEP.name = "cep";
    inputCEP.id = "cepCadastro";
    inputCEP.className = "form-control";
    inputCEP.placeholder = "CEP";
    inputCEP.mnilength = "8";
    inputCEP.maxlength = "8";
    inputCEP.setAttribute("required", "");

    // Criação do input do número
    const inputNumero = document.createElement('input');
    inputNumero.type = "number";
    inputNumero.name = "numero";
    inputNumero.id = "numeroCadastro";
    inputNumero.className = "form-control";
    inputNumero.placeholder = "Numero";
    inputNumero.maxlength = "5";

    // Criação da div para o select Estado
    const divEstado = document.createElement('div');
    divEstado.className = "divEstado";

    // Criação do select do Estado
    const inputEstado = document.createElement('select');
    inputEstado.type = "text";
    inputEstado.name = "estado";
    inputEstado.id = "estadoCadastro";
    inputEstado.form = "formDados";
    inputEstado.setAttribute("required", "");
    inputEstado.innerHTML = `<option value="" selected>Selecionar Estado</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>`;

    // Criação da label para a Seleção do estado
    const labelSelecaoEstado = document.createElement('label');
    labelSelecaoEstado.className = "labelSelecaoEstado";
    labelSelecaoEstado.setAttribute("for", inputEstado.id);
    labelSelecaoEstado.innerText = "Estado";

    // Adicionar o select e a label dentro da div divEstado
    divEstado.appendChild(labelSelecaoEstado);
    divEstado.appendChild(inputEstado);

    // Adicionar os inputs dentro do form
    divCEP.appendChild(inputCEP);
    divCEP.appendChild(inputNumero);
    divCEP.appendChild(divEstado);
    formTel.appendChild(divCEP);

    // Adicionar o formTel dentro da divFormTel
    divFormTel.appendChild(tituloFormTel);
    divFormTel.appendChild(formTel);

    // Retornar divFormTel
    return divFormTel;
}

function formDadosPessoais(cod_user) {
    // Criação da div com o form de Dados Pessoais
    const divFormDadosPessoais = document.createElement("div");
    divFormDadosPessoais.className = "dados-pessoais";

    // Criação do título do form
    const tituloFormDadosPessoais = document.createElement("h5");
    tituloFormDadosPessoais.className = "subtitulo";
    tituloFormDadosPessoais.innerText = "Dados Pessoais";

    // Criação do form de Dados Pessoais
    const formDadosPessoais = document.createElement("form");
    formDadosPessoais.id = "formDadosPessoais";
    formDadosPessoais.className = "form";

    // Criação do input do Nome
    const inputNome = document.createElement('input');
    inputNome.type = "text";
    inputNome.name = "nome-usuario";
    inputNome.id = "nomeUsuario";
    inputNome.className = "form-control";
    inputNome.placeholder = "Nome Completo";
    inputNome.minlength = "10";
    inputNome.maxlength = "50";
    inputNome.setAttribute("required", "");

    // Criação do input do Data de Nascimento
    const inputDataNasc = document.createElement('input');
    inputDataNasc.type = "date";
    inputDataNasc.name = "data-nascimento";
    inputDataNasc.id = "dataNasc";
    inputDataNasc.className = "form-control";
    inputDataNasc.placeholder = "Data de Nascimento";
    inputDataNasc.min = "2004-12-31";
    inputDataNasc.max = "1950-01-01";
    inputDataNasc.setAttribute("required", "");

    // Criação do input do CPF
    const inputCPF = document.createElement('input');
    inputCPF.type = "number";
    inputCPF.name = "cpf";
    inputCPF.id = "cpfCadastro";
    inputCPF.className = "form-control";
    inputCPF.placeholder = "CPF";
    inputCPF.minlength = "11";
    inputCPF.maxlength = "11";
    inputCPF.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formDadosPessoais.appendChild(inputNome);
    formDadosPessoais.appendChild(inputDataNasc);
    formDadosPessoais.appendChild(inputCPF);

    // Adicionar o formDadosPessoais dentro da divFormDadosPessoais
    divFormDadosPessoais.appendChild(tituloFormDadosPessoais);
    divFormDadosPessoais.appendChild(formDadosPessoais);

    // Retornar divFormDadosPessoais
    return divFormDadosPessoais;
}

function formDadosEmpresa(cod_user) {
    // Criação da div com o form de Dados da Empresa
    const divFormDadosEmpresa = document.createElement("div");
    divFormDadosEmpresa.className = "dados-empresa";

    // Criação do título do form
    const tituloFormDadosEmpresa = document.createElement("h5");
    tituloFormDadosEmpresa.className = "subtitulo";
    tituloFormDadosEmpresa.innerText = "Dados da Empresa";

    // Criação do form de Dados da Empresa
    const formDadosEmpresa = document.createElement("form");
    formDadosEmpresa.id = "formDadosEmpresa";
    formDadosEmpresa.className = "form";

    // Criação do input do Nome da Empresa
    const inputNomeEmpresa = document.createElement('input');
    inputNomeEmpresa.type = "text";
    inputNomeEmpresa.name = "nome-empresa";
    inputNomeEmpresa.id = "nomeEmpresa";
    inputNomeEmpresa.className = "form-control";
    inputNomeEmpresa.placeholder = "Nome da Empresa";
    inputNomeEmpresa.minlength = "10";
    inputNomeEmpresa.maxlength = "50";
    inputNomeEmpresa.setAttribute("required", "");

    // Criação do input do CNPJ
    const inputCNPJ = document.createElement('input');
    inputCNPJ.type = "number";
    inputCNPJ.name = "cnpj";
    inputCNPJ.id = "cnpjCadastro";
    inputCNPJ.className = "form-control";
    inputCNPJ.placeholder = "CNPJ";
    inputCNPJ.minlength = "18";
    inputCNPJ.maxlength = "18";
    inputCNPJ.setAttribute("required", "");

    // Adicionar os inputs dentro do form
    formDadosEmpresa.appendChild(inputNomeEmpresa);
    formDadosEmpresa.appendChild(inputCNPJ);

    // Adicionar o formDadosEmpresa dentro da divFformDadosEmpresa
    divFormDadosEmpresa.appendChild(tituloFormDadosEmpresa);
    divFormDadosEmpresa.appendChild(formDadosEmpresa);

    // Retornar divFormDadosEmpresa
    return divFormDadosEmpresa;
}

function formAreaAtuacao(cod_user) {
    // Criação da div com o form de Área de Atuação
    const divFormAreaAtuacao = document.createElement("div");
    divFormAreaAtuacao.className = "area-atuacao";

    // Criação do título do form
    const tituloFormAreaAtuacao = document.createElement("h5");
    tituloFormAreaAtuacao.className = "subtitulo";
    tituloFormAreaAtuacao.innerText = "Área de Atuação";

    // Criação do form de Área de Atuação
    const formAreaAtuacao = document.createElement("form");
    formAreaAtuacao.id = "formAreaAtuacao";
    formAreaAtuacao.className = "form";

    // Criação do input do Região de Atuação
    const selectRegiaoAtuacao = document.createElement('select');
    selectRegiaoAtuacao.name = "regiao-atuacao";
    selectRegiaoAtuacao.id = "regiaoAtuacao";
    selectRegiaoAtuacao.className = "form-control";
    selectRegiaoAtuacao.innerHTML = `<option value="" selected>Selecionar Raio de Atuação</option>`;

    for (var i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i * 10;
        option.innerText = `${i*10}km`;
        selectRegiaoAtuacao.appendChild(option);
    }
    selectRegiaoAtuacao.setAttribute("required", "");

    // Adicionar o input dentro do form
    formAreaAtuacao.appendChild(selectRegiaoAtuacao);

    // Adicionar o formAreaAtuacao dentro da divFormAreaAtuacao
    divFormAreaAtuacao.appendChild(tituloFormAreaAtuacao);
    divFormAreaAtuacao.appendChild(formAreaAtuacao);

    // Retornar divFormAreaAtuacao
    return divFormAreaAtuacao;
}

function criarListaAvaliacoes(cod_user) {

    // Referenciar div dadosMenu
    const divAvaliacoes = document.createElement("div");
    divAvaliacoes.className = "divAvaliacoes";

    // Div Nome e Data ====================================

    // Criação da div com o nome e data
    const divNomeData = document.createElement('div');
    divNomeData.className = "nome-data";

    // Criação do elemento para o nome do avaliador
    const nomeAvaliador = document.createElement('h5');
    nomeAvaliador.id = "nome-avaliador";
    nomeAvaliador.innerText = "Nome do Avaliador";

    // Criação do elemento para o hifen
    const hifen = document.createElement('span');
    hifen.className = "hifen";
    hifen.innerText = "-";

    // Criação do elemento para a data da publicação da avaliação
    const dataPublicacao = document.createElement('span');
    dataPublicacao.id = "data-publicacao";
    dataPublicacao.innerText = "Data da publicacao";

    // Colocando os elementos criados dentro de div nomeData
    divNomeData.appendChild(nomeAvaliador);
    divNomeData.appendChild(hifen);
    divNomeData.appendChild(dataPublicacao);

    // Div Avaliação ========================================

    // Criação da div com a nota da avaliação
    const divAvaliacao = document.createElement('div');
    divAvaliacao.className = "avaliacao-usuario";

    // Criação do elemento para a nota
    const notaAvaliacao = document.createElement('span');
    notaAvaliacao.id = "nota";
    notaAvaliacao.innerText = "4,5";

    // Criação do elemento para o ponto de separação
    const ponto = document.createElement('span');
    ponto.className = "ponto";

    // Criação do elemento que conterá as estrelas
    const listEstrelas = document.createElement('ul');
    listEstrelas.className = "avaliacao";

    // Criando e colocando os elementos estrela dentro da lista
    for (var i = 0; i < 5; i++) {
        // Criação do elemento para as estrelas
        const estrelas = document.createElement('li');
        estrelas.className = "star-icon";

        // Colocando os elementos estrela dentro da lista
        listEstrelas.appendChild(estrelas);
    }

    // Colocando os elementos criados dentro da divAvaliacao
    divAvaliacao.appendChild(notaAvaliacao);
    divAvaliacao.appendChild(ponto);
    divAvaliacao.appendChild(listEstrelas);

    // Comentario ============================================

    // Criação do elemento para o comentario da avaliação
    const comentarioAvaliacao = document.createElement('p');
    comentarioAvaliacao.id = "comentario";
    comentarioAvaliacao.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // Div Geral =============================================

    // Colocando todos as divs criadas dentro da divAvaliacoes
    divAvaliacoes.appendChild(divNomeData);
    divAvaliacoes.appendChild(divAvaliacao);
    divAvaliacoes.appendChild(comentarioAvaliacao);

    // Retornar divAvaliacoes
    return divAvaliacoes;
}

function init() {
    console.log()
    const cod_user = "profissional";

    // Referenciar a div com a tabela
    const divTabelaServico = tabelaServicos(cod_user);

    // Adicionar divTabelaServico na divDadosMenu
    const divDadosMenu = document.querySelector(".dadosMenu");
    divDadosMenu.appendChild(divTabelaServico);

    // Identifica se o btn alterar cadastro foi clicado
    $("#servicos").click(function() {
        // Referenciar a div com a tabela
        const divTabelaServico = tabelaServicos(cod_user);

        // Adicionar divTabelaServico na divDadosMenu
        divDadosMenu.appendChild(divTabelaServico);
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#alterarCadastro").click(function() {
        // Referenciar a div com a tabela
        const divAlterarCadastro = alterarCadastro(cod_user);

        // Adicionar divAlterarCadastro na divDadosMenu
        divDadosMenu.appendChild(divAlterarCadastro);
    })

    // Identifica se o btn alterar cadastro foi clicado
    $("#avaliacoes").click(function() {
        // Apagar todos os elementos da seção
        $(".dadosMenu").html("");

        for (var i = 0; i < 6; i++) {
            // Referenciar a div com a tabela
            const divAvaliacoes = criarListaAvaliacoes(cod_user);

            // Adicionar divAvaliacoeso na divDadosMenu
            divDadosMenu.appendChild(divAvaliacoes);
        }
    })

    // Identificar qual serviço da tabela foi clicado
    $('#tabelaServico tr').click(function() {
        var target = this.closest('[id]');
        setTimeout(function() {
            window.location.href = `../detalhe-servico/index.html?cod-servico=${String(target.id)}`;
        }, 50);
    });
}

$(document).ready(() => {
    const response = getUserData();
    response.then(result => {
        //console.log(result)
        init(result);
    })
})