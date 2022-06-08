function formLogin(data) {
    // Criação da div com o form de login
    const divFormLogin = document.createElement("div");
    divFormLogin.className = "info-login";

    // Criação do input do id
    const inputId = document.createElement('input');
    inputId.type = "hidden";
    inputId.name = "id";
    inputId.id = "idUser";
    inputId.className = "form-control";
    inputId.value = data.cod_user;

    // Criação do título do form
    const tituloFormLogin = document.createElement("h5");
    tituloFormLogin.className = "subtitulo";
    tituloFormLogin.innerText = "Informações de Login";

    // Criação do input do email
    const inputEmail = document.createElement('input');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "emailCadastro";
    inputEmail.className = "form-control";
    inputEmail.placeholder = "E-mail";
    inputEmail.setAttribute("required", "");
    inputEmail.value = data.email;

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
    inputConfirmarSenha.name = "confirmar_senha";
    inputConfirmarSenha.id = "confirmar-senhaCadastro";
    inputConfirmarSenha.className = "form-control";
    inputConfirmarSenha.placeholder = "Confirmar Senha";
    inputConfirmarSenha.minlength = "8";
    inputConfirmarSenha.maxlength = "50";
    inputConfirmarSenha.setAttribute("required", "");

    // Adicionar o formLogin dentro da divFormLogin
    divFormLogin.appendChild(tituloFormLogin);

    // Adicionar os inputs dentro do form
    divFormLogin.appendChild(inputId);
    divFormLogin.appendChild(inputEmail);
    divFormLogin.appendChild(inputSenha);
    divFormLogin.appendChild(inputConfirmarSenha);

    // Retornar divFormLogin
    return divFormLogin;
}

function formEnderecoTel(dataTel, dataAdress) {
    // Criação da div com o form de Endereço e Telefone
    const divFormTel = document.createElement("div");
    divFormTel.className = "endereco-tel";

    // Criação do título do form
    const tituloFormTel = document.createElement("h5");
    tituloFormTel.className = "subtitulo";
    tituloFormTel.innerText = "Endereço e Telefone";

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
    dataTel.then((data) => {
        inputTel.value = data.numero;
    })

    // Criação do input do id endereco
    const inputIdEndereco = document.createElement('input');
    inputIdEndereco.type = "hidden";
    inputIdEndereco.name = "idEndereco";
    inputIdEndereco.id = "idAdressUser";
    inputIdEndereco.className = "form-control";


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
    divTel.appendChild(inputIdEndereco);
    divTel.appendChild(inputRua);
    divTel.appendChild(inputBairro);
    divTel.appendChild(inputCidade);

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

    dataAdress.then((dataAdress) => {
        inputIdEndereco.value = dataAdress.cod_endereco;
        inputRua.value = dataAdress.rua;
        inputBairro.value = dataAdress.bairro;
        inputCidade.value = dataAdress.cidade;
        inputCEP.value = dataAdress.cep;
        inputNumero.value = dataAdress.numero;
        inputEstado.value = dataAdress.estado;
    })

    // Adicionar o select e a label dentro da div divEstado
    divEstado.appendChild(labelSelecaoEstado);
    divEstado.appendChild(inputEstado);

    // Adicionar os inputs dentro do form
    divCEP.appendChild(inputCEP);
    divCEP.appendChild(inputNumero);
    divCEP.appendChild(divEstado);

    // Adicionar o formTel dentro da divFormTel
    divFormTel.appendChild(tituloFormTel);
    divFormTel.appendChild(divTel);
    divFormTel.appendChild(divCEP);

    // Retornar divFormTel
    return divFormTel;
}

function formDadosPessoais(data) {
    // Criação da div com o form de Dados Pessoais
    const divFormDadosPessoais = document.createElement("div");
    divFormDadosPessoais.className = "dados-pessoais";

    // Criação do título do form
    const tituloFormDadosPessoais = document.createElement("h5");
    tituloFormDadosPessoais.className = "subtitulo";
    tituloFormDadosPessoais.innerText = "Dados Pessoais";

    // Criação do input do Nome
    const inputNome = document.createElement('input');
    inputNome.type = "text";
    inputNome.name = "nome";
    inputNome.id = "nomeUsuario";
    inputNome.className = "form-control";
    inputNome.placeholder = "Nome Completo";
    inputNome.minlength = "10";
    inputNome.maxlength = "50";
    inputNome.setAttribute("required", "");
    inputNome.value = data.nome;

    // Criação do input do Data de Nascimento
    const inputDataNasc = document.createElement('input');
    inputDataNasc.type = "date";
    inputDataNasc.name = "data_nascimento";
    inputDataNasc.id = "dataNasc";
    inputDataNasc.className = "form-control";
    inputDataNasc.placeholder = "Data de Nascimento";
    inputDataNasc.min = "1950-01-01";
    inputDataNasc.max = "2004-12-31";
    inputDataNasc.setAttribute("required", "");
    inputDataNasc.value = data.data_nasc.split("T")[0];

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
    inputCPF.value = data.cpf;

    // Adicionar o formDadosPessoais dentro da divFormDadosPessoais
    divFormDadosPessoais.appendChild(tituloFormDadosPessoais);

    // Adicionar os inputs dentro do form
    divFormDadosPessoais.appendChild(inputNome);
    divFormDadosPessoais.appendChild(inputDataNasc);
    divFormDadosPessoais.appendChild(inputCPF);

    // Retornar divFormDadosPessoais
    return divFormDadosPessoais;
}

function formDadosEmpresa(data) {
    // Criação da div com o form de Dados da Empresa
    const divFormDadosEmpresa = document.createElement("div");
    divFormDadosEmpresa.className = "dados-empresa";

    // Criação do título do form
    const tituloFormDadosEmpresa = document.createElement("h5");
    tituloFormDadosEmpresa.className = "subtitulo";
    tituloFormDadosEmpresa.innerText = "Dados da Empresa";

    // Criação do input do Nome da Empresa
    const inputNomeEmpresa = document.createElement('input');
    inputNomeEmpresa.type = "text";
    inputNomeEmpresa.name = "nome";
    inputNomeEmpresa.id = "nomeEmpresa";
    inputNomeEmpresa.className = "form-control";
    inputNomeEmpresa.placeholder = "Nome da Empresa";
    inputNomeEmpresa.minlength = "10";
    inputNomeEmpresa.maxlength = "50";
    inputNomeEmpresa.setAttribute("required", "");
    inputNomeEmpresa.value = data.nome;

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
    inputCNPJ.value = data.cnpj;

    // Adicionar o formDadosEmpresa dentro da divFformDadosEmpresa
    divFormDadosEmpresa.appendChild(tituloFormDadosEmpresa);

    // Adicionar os inputs dentro do form
    divFormDadosEmpresa.appendChild(inputNomeEmpresa);
    divFormDadosEmpresa.appendChild(inputCNPJ);

    // Retornar divFormDadosEmpresa
    return divFormDadosEmpresa;
}

function formAreaAtuacao(data) {
    // Criação da div com o form de Área de Atuação
    const divFormAreaAtuacao = document.createElement("div");
    divFormAreaAtuacao.className = "area-atuacao";

    // Criação do título do form
    const tituloFormAreaAtuacao = document.createElement("h5");
    tituloFormAreaAtuacao.className = "subtitulo";
    tituloFormAreaAtuacao.innerText = "Área de Atuação";

    // Criação do input do Região de Atuação
    const selectRegiaoAtuacao = document.createElement('select');
    selectRegiaoAtuacao.name = "regiao_atuacao";
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
    selectRegiaoAtuacao.value = data.regiao_atuacao;

    // Adicionar o formAreaAtuacao dentro da divFormAreaAtuacao
    divFormAreaAtuacao.appendChild(tituloFormAreaAtuacao);

    // Adicionar o input dentro do form
    divFormAreaAtuacao.appendChild(selectRegiaoAtuacao);

    // Retornar divFormAreaAtuacao
    return divFormAreaAtuacao;
}

function alterarCadastro(data, cod_user) {
    const dataTel = getUserTel(cod_user);
    const dataEndereco = getUserAdress(cod_user);

    // Armazenar o id do user
    const idUser = data.cod_user;

    // Apagar todos os elementos da seção
    $(".dadosMenu").html("");

    // Alterar o título da seção
    const tituloSecao = document.querySelector("h2.tituloSecao");
    tituloSecao.innerText = "Alterar Cadastro";

    // Alterar a descrição da seção
    const descricaoSecao = document.querySelector(".descricaoSecao");
    descricaoSecao.innerText = "";

    // Adicionar divFormLogin na divAlterarCadastro
    const formAlterarCadastro = document.createElement("form");
    formAlterarCadastro.className = "form";
    formAlterarCadastro.setAttribute("action", "/perfil/update-user");
    formAlterarCadastro.setAttribute("method", "post")

    // Form Login =====================================================
    const divFormLogin = formLogin(data);
    formAlterarCadastro.appendChild(divFormLogin);

    // Form Endereço ==================================================
    const divFormTelCadastro = formEnderecoTel(dataTel, dataEndereco);
    formAlterarCadastro.appendChild(divFormTelCadastro);

    // Form Dados Pessoais ============================================
    if (idUser.startsWith("1") || idUser.startsWith("2")) {
        const divFormDadosPessoaisCadastro = formDadosPessoais(data);
        formAlterarCadastro.appendChild(divFormDadosPessoaisCadastro);
    }

    // Form Dados da Empresa ==========================================
    if (idUser.startsWith("3")) {
        const divFormDadosEmpresa = formDadosEmpresa(data);
        formAlterarCadastro.appendChild(divFormDadosEmpresa);
    }

    // Form Area de Atuação ===========================================
    if (idUser.startsWith("2") || idUser.startsWith("3")) {
        const divFormAreaAtuacao = formAreaAtuacao(data);
        formAlterarCadastro.appendChild(divFormAreaAtuacao);
    }

    // Criação do btn submmit
    const btnSubmmit = document.createElement('button');
    btnSubmmit.id = "btnSubmmit";
    btnSubmmit.innerHTML = `Alterar <i class="fa-solid fa-check"></i>`;
    formAlterarCadastro.appendChild(btnSubmmit);

    // Retornar divAlterarCadastro
    return formAlterarCadastro;
}