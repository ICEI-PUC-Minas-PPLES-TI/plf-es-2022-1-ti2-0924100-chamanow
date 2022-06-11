function escolherUsuario() {
    // Limpa o conteúdo do form
    $("#formDados").html("");

    // Limpa os btns de escolha do tipo de usuario
    $(".escolherUsuario").html("");

    // Atualização do subtitulo
    const subtitulo = document.querySelector(".subtituloDados");
    subtitulo.innerText = "Escolha o tipo de usuario";

    // Referenciar o form do escolherUsuario
    const divEscolherUsuario = document.querySelector(".escolherUsuario");

    // Criar botão Cliente
    const btnCliente = document.createElement('button');
    btnCliente.id = "cliente";
    btnCliente.innerHTML = `Sou Cliente`;

    // Criar botão Profissa
    const btnProfissa = document.createElement('button');
    btnProfissa.id = "profissional";
    btnProfissa.innerHTML = `Sou Profissa`;

    // Criar botão Empresa
    const btnEmpresa = document.createElement('button');
    btnEmpresa.id = "empresa";
    btnEmpresa.innerHTML = `Sou Empresa`;

    // Adicionar os btns dentro da div
    divEscolherUsuario.appendChild(btnCliente);
    divEscolherUsuario.appendChild(btnProfissa);
    divEscolherUsuario.appendChild(btnEmpresa);

    // Identificar o btn clicado para carregar a tela de login
    $('.escolherUsuario button').click(function(e) {
        formGeral(String(e.target.id));
    });
}

function formGeral(tipoUsuario) {
    // Gerar ids aleatórios
    const idUser = Math.floor(Date.now() * Math.random()).toString(36);
    const idEndereco = Math.floor(Date.now() * Math.random()).toString(36);

    // Referenciar a div do form
    const dadosContent = document.querySelector(".dadosContent");

    // Mostrar a div do form
    dadosContent.style = "display: block";

    // Atualização do subtitulo
    const subtitulo = document.querySelector(".subtituloDados");
    subtitulo.innerText = "Preencha os campos corretamente";

    // Limpa os btns de escolha do tipo de usuario
    $(".escolherUsuario").html("");

    // Referenciar o form do login
    const formDados = document.querySelector("#formUser");

    // Limpa o conteúdo do form
    $("#formUser").html("");

    // Disparar animação para o form aparecer
    formDados.style = "opacity: 0";
    setTimeout(() => formDados.style = "animation: surgir .3s ease-out", 5);

    // Criação do input do id
    const inputId = document.createElement('input');
    inputId.type = "hidden";
    inputId.name = "id";
    inputId.id = "idUser";
    inputId.className = "form-control";
    switch (tipoUsuario) {
        case "cliente":
            inputId.value = `1-${idUser}`;
            break;

        case "profissional":
            inputId.value = `2-${idUser}`;
            break;

        case "empresa":
            inputId.value = `3-${idUser}`;
            break;
    }

    const dataExpiresCookie = new Date();
    dataExpiresCookie.setTime(dataExpiresCookie.getTime() + (1000 * 24 * 60 * 60 * 1000));
    document.cookie = `idUser=${inputId.value}; expires=${dataExpiresCookie.toGMTString()}`;

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
    formDados.appendChild(inputId);
    formDados.appendChild(inputEmail);
    formDados.appendChild(inputSenha);
    formDados.appendChild(inputConfirmarSenha);

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

    // Criação do input do id endereco
    const inputIdEndereco = document.createElement('input');
    inputIdEndereco.type = "hidden";
    inputIdEndereco.name = "idEndereco";
    inputIdEndereco.id = "idAdressUser";
    inputIdEndereco.className = "form-control";
    switch (tipoUsuario) {
        case "cliente":
            inputIdEndereco.value = `1-${idEndereco}`;
            break;

        case "profissional":
            inputIdEndereco.value = `2-${idEndereco}`;
            break;

        case "empresa":
            inputIdEndereco.value = `3-${idEndereco}`;
            break;
    }

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
    formDados.appendChild(divTel);

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
    formDados.appendChild(divCEP);

    if (tipoUsuario != "empresa")
        dadosPessoais(tipoUsuario);
    else
        dadosEmpresa();
}

function dadosPessoais(tipoUsuario) {
    // Referenciar o form do dadosPessoais
    const formDados = document.querySelector("#formUser");

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
    formDados.appendChild(inputNome);
    formDados.appendChild(inputDataNasc);
    formDados.appendChild(inputCPF);

    if (tipoUsuario != "cliente")
        regiaoAtuacao();
    else {
        const btnConfirmar = criarBtnConfirmar();
        formDados.appendChild(btnConfirmar);
    }
}

function dadosEmpresa() {
    // Referenciar o form do dadosEmpresa
    const formDados = document.querySelector("#formUser");

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
    formDados.appendChild(inputNomeEmpresa);
    formDados.appendChild(inputCNPJ);

    regiaoAtuacao();
}

function regiaoAtuacao() {
    // Referenciar o form do regiaoAtuacao
    const formDados = document.querySelector("#formUser");

    // Criação do input do Selecionar Serviços
    const selectServico = document.createElement('select');
    selectServico.name = "select_servicos";
    selectServico.id = "selectServico";
    selectServico.className = "form-control";
    selectServico.innerHTML = `<option value="" selected>Selecionar Servico(s)</option>`;
    selectServico.setAttribute("required", "");

    for (var i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i * 10;
        option.innerText = `Item ${i}`;
        selectServico.appendChild(option);
    }

    // Criação da label para a Seleção doS Serviço
    const labelSelecaoServico = document.createElement('label');
    labelSelecaoServico.setAttribute("for", selectServico.id);
    labelSelecaoServico.innerText = "Selecionar Serviço(s)";

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

    // Criação da label para a Seleção da Região de Atuação
    const labelRegiaoAtuacao = document.createElement('label');
    labelRegiaoAtuacao.setAttribute("for", selectRegiaoAtuacao.id);
    labelRegiaoAtuacao.innerText = "Raio de Atuação";

    // Adicionar os inputs e labels dentro do form
    formDados.appendChild(labelSelecaoServico);
    formDados.appendChild(selectServico);
    formDados.appendChild(labelRegiaoAtuacao);
    formDados.appendChild(selectRegiaoAtuacao);

    const btnConfirmar = criarBtnConfirmar();
    formDados.appendChild(btnConfirmar);
}

function criarBtnConfirmar() {
    const btnConfirmar = document.createElement('button');
    btnConfirmar.id = "confirmar";
    btnConfirmar.setAttribute("type", "submit");
    btnConfirmar.innerHTML = `Confirmar <i class="fa-solid fa-check"></i>`;
    return btnConfirmar;
}

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('user');

    // Carregar os btns de esolher o usuario
    if (!searchParam)
        escolherUsuario();
    else
        formGeral(searchParam);

    $("#confirmar").click = () => {
        var date = new Date();
        date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();

        const idUsuario = document.querySelector("#idUser");
        document.cookie = `idUser = ${idUsuario.id}; expires: ${expires}`;
    }
})