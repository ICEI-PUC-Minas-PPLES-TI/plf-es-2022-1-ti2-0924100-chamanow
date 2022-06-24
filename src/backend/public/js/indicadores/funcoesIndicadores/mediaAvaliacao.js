function criarListaAvaliacoes(data) {
    // Adicionar elementos na página =====================

    // Referenciar ul na página
    const ulAvaliacao = document.querySelector("#avaliacoesPrestadores");

    // Criação da tabela dos serviços
    const tabelaServico = document.createElement("table");
    tabelaServico.id = "tabelaAvaliacao";

    // Criação do cabeçalho da tabela
    const cabecalhoTabela = document.createElement("thead");
    cabecalhoTabela.className = "cabecalho";

    const contentTabela = document.createElement("th");

    // Criação das colunas do cabeçalho =======================

    // Criação da coluna do tipo de prestador do cabeçalho
    const colunaTipo = document.createElement("td");
    colunaTipo.id = "tipo";
    colunaTipo.innerText = "Tipo";

    // Criação da coluna do nome do cabeçalho
    const colunaNome = document.createElement("td");
    colunaNome.id = "nome"
    colunaNome.innerText = "Prestador";

    // Criação da coluna do serviço do cabeçalho
    const colunaNota = document.createElement("td");
    colunaNota.id = "nota";
    colunaNota.innerText = "Nota";

    // Criação da coluna do email do cabeçalho
    const colunaEmail = document.createElement("td");
    colunaEmail.id = "email";
    colunaEmail.innerText = "Email";

    // Criação da coluna da data nascimento do cabeçalho
    const colunaDataNasc = document.createElement("td");
    colunaDataNasc.id = "dataNasc";
    colunaDataNasc.innerText = "Data Nascimento";

    // Criação da coluna do CPF do cabeçalho
    const colunaCPFCNPJ = document.createElement("td");
    colunaCPFCNPJ.id = "cpf-cnpj";
    colunaCPFCNPJ.innerText = "CPF/CNPJ";

    // Criação da coluna da serviço do cabeçalho
    const colunaServico = document.createElement("td");
    colunaServico.id = "servico";
    colunaServico.innerText = "Serviço";

    // Adicionar as colunas dentro do cabeçalho
    contentTabela.appendChild(colunaTipo);
    contentTabela.appendChild(colunaNota);
    contentTabela.appendChild(colunaNome);
    contentTabela.appendChild(colunaServico);
    contentTabela.appendChild(colunaEmail);
    contentTabela.appendChild(colunaDataNasc);
    contentTabela.appendChild(colunaCPFCNPJ);

    // Adicionar a cabeçalho na tabela
    cabecalhoTabela.appendChild(contentTabela);
    tabelaServico.appendChild(cabecalhoTabela);

    // Criação do corpo da tabela
    const tbody = document.createElement("tbody");
    tbody.className = "corpoTabela";

    // Criação das tuplas da tabela
    data.forEach(data => {
        // Criação da linha
        const tupla = document.createElement("tr");

        // Criação das colunas da tupla =======================

        // Criação da coluna do tipo de usuario do cabeçalho
        const tipo_user = data.cod_usuario.split("-")[0];
        const colunaTipoTupla = document.createElement("td");
        colunaTipoTupla.id = `tipo-${tipo_user}`;
        const spanTipo = document.createElement("span");
        spanTipo.id = tipo_user;
        if (tipo_user == 2)
            spanTipo.innerText = "Profissional";
        else
            spanTipo.innerText = "Empresa";

        // Adicionar o spanServico dentro da coluna do serviço
        colunaTipoTupla.appendChild(spanTipo);

        // Criação da coluna do nome do cabeçalho
        const colunaNomeTupla = document.createElement("td");
        colunaNomeTupla.id = `nome-${data.cod_usuario}`;
        colunaNomeTupla.innerText = data.nome;

        // Criação da coluna da nota do cabeçalho
        const colunaNotaTupla = document.createElement("td");
        colunaNotaTupla.id = `nota-${data.cod_usuario}`;
        colunaNotaTupla.innerText = data.nota_media_prestador.toFixed(2);

        // Criação da coluna do email do cabeçalho
        const colunaEmailTupla = document.createElement("td");
        colunaEmailTupla.id = `email-${data.cod_usuario}`;
        colunaEmailTupla.innerText = data.email;

        // Criação da coluna da data de nascimento do cabeçalho
        const colunaDataNascTupla = document.createElement("td");
        colunaDataNascTupla.id = `dataNasc-${data.cod_usuario}`;
        if (data.data_nascimento)
            colunaDataNascTupla.innerText = formatarDataHora(data.data_nascimento);
        else
            colunaDataNascTupla.innerText = "-";

        // Criação da coluna do CPF e CNPJ do cabeçalho
        const colunaCPFTupla = document.createElement("td");
        colunaCPFTupla.id = `cpf-cnpj-${data.cod_usuario}`;
        if (tipo_user == 2)
            colunaCPFTupla.innerText = data.CPF;
        else
            colunaCPFTupla.innerText = data.CNPJ;

        // Criação da coluna do serviço do cabeçalho
        const colunaServicoTupla = document.createElement("td");
        colunaServicoTupla.id = `servico-${data.cod_servico}`;
        const spanServico = document.createElement("span");
        spanServico.id = data.cod_servico;
        spanServico.innerText = data.servico;

        // Adicionar o spanServico dentro da coluna do serviço
        colunaServicoTupla.appendChild(spanServico);

        // Adicionar as colunas dentro do cabeçalho
        tupla.appendChild(colunaTipoTupla);
        tupla.appendChild(colunaNotaTupla);
        tupla.appendChild(colunaNomeTupla);
        tupla.appendChild(colunaServicoTupla);
        tupla.appendChild(colunaEmailTupla);
        tupla.appendChild(colunaDataNascTupla);
        tupla.appendChild(colunaCPFTupla);

        // Adicionar a tupla na tabela
        tbody.appendChild(tupla);
    })

    tabelaServico.appendChild(tbody);

    // Adicionar a tabela na divTabela
    ulAvaliacao.appendChild(tabelaServico);
}

/*function criarListaAvaliacoes(data) {
    // Adicionar elementos na página =====================

    // Referenciar ul na página
    const ulAvaliacao = document.querySelector("#avaliacoesPrestadores");

    // Criação da tabela dos serviços
    const tabelaServico = document.createElement("table");
    tabelaServico.id = "tabelaAvaliacao";

    // Criação do corpo da tabela
    const tbody = document.createElement("tbody");
    tbody.className = "corpoTabela";

    // Criação das tuplas da tabela
    data.forEach(data => {
        // Criação da linha
        const tupla = document.createElement("tr");

        // Criação das colunas da tupla =======================

        // Criação da coluna do tipo de usuario do cabeçalho
        const tipo_user = data.cod_usuario.split("-")[0];
        const colunaTipoTupla = document.createElement("td");
        colunaTipoTupla.id = `tipo-${tipo_user}`;
        const spanTipo = document.createElement("span");
        spanTipo.id = tipo_user;
        spanTipo.innerText = tipo_user;

        // Adicionar o spanServico dentro da coluna do serviço
        colunaTipoTupla.appendChild(spanTipo);

        // Criação da coluna do nome do cabeçalho
        const colunaNomeTupla = document.createElement("td");
        colunaNomeTupla.id = `nome-${data.cod_usuario}`;
        colunaNomeTupla.innerText = data.nome;

        // Criação da coluna da nota do cabeçalho
        const colunaNotaTupla = document.createElement("td");
        colunaNotaTupla.id = `nota-${data.cod_usuario}`;
        colunaNotaTupla.innerText = data.nota_media_prestador.toFixed(2);

        // Criação da coluna do email do cabeçalho
        const colunaEmailTupla = document.createElement("td");
        colunaEmailTupla.id = `email-${data.cod_usuario}`;
        colunaEmailTupla.innerText = data.email;

        // Criação da coluna da data de nascimento do cabeçalho
        const colunaDataNascTupla = document.createElement("td");
        colunaDataNascTupla.id = `dataNasc-${data.cod_usuario}`;
        if (data.data_nascimento)
            colunaDataNascTupla.innerText = formatarData(data.data_nascimento);
        else
            colunaDataNascTupla.innerText = "-";

        // Criação da coluna do CPF e CNPJ do cabeçalho
        const colunaCPFTupla = document.createElement("td");
        colunaCPFTupla.id = `cpf-cnpj-${data.cod_usuario}`;
        if (tipo_user == 2)
            colunaCPFTupla.innerText = data.CPF;
        else
            colunaCPFTupla.innerText = data.CNPJ;

        // Criação da coluna do serviço do cabeçalho
        const colunaServicoTupla = document.createElement("td");
        colunaServicoTupla.id = `servico-${data.cod_servico}`;
        const spanServico = document.createElement("span");
        spanServico.id = data.cod_servico;
        spanServico.innerText = data.servico;

        // Adicionar o spanServico dentro da coluna do serviço
        colunaServicoTupla.appendChild(spanServico);

        // Adicionar as colunas dentro do cabeçalho
        tupla.appendChild(colunaTipoTupla);
        tupla.appendChild(colunaNomeTupla);
        tupla.appendChild(colunaNotaTupla);
        tupla.appendChild(colunaEmailTupla);
        tupla.appendChild(colunaDataNascTupla);
        tupla.appendChild(colunaCPFTupla);
        tupla.appendChild(colunaServicoTupla);

        // Adicionar a tupla na tabela
        tbody.appendChild(tupla);
    })

    tabelaServico.appendChild(tbody);

    // Adicionar a tabela na divTabela
    ulAvaliacao.appendChild(tabelaServico);
}*/