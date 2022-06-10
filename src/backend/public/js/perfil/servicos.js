function tabelaServicos(cod_user, data) {
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
    const cabecalhoTabela = document.createElement("thead");
    cabecalhoTabela.className = "cabecalho";

    const contentTabela = document.createElement("th");

    // Criação das colunas do cabeçalho =======================

    // Criação da coluna do nome do cabeçalho
    const colunaNome = document.createElement("td");
    if (cod_user.charAt(0) == '1')
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
    contentTabela.appendChild(cabecalhoTabela);
    tabelaServico.appendChild(contentTabela);

    const tbody = document.createElement("tbody");

    //Criação das tuplas da tabela
    for (var i = 0; i < data.length; i++) {
        // Criação da linha
        const tupla = document.createElement("tr");
        tupla.id = `${data[i].cod_servico}`;
        tupla.setAttribute('data-toggle', 'modal');
        tupla.setAttribute('data-target', '#servico-modal');
        tupla.setAttribute('data-dismiss', 'modal');

        // Criação das colunas da tupla =======================

        // Criação da coluna do nome do cabeçalho
        const colunaNomeTupla = document.createElement("td");
        if (cod_user.charAt(0) == '1') {
            colunaNomeTupla.id = `prestador.${data[i].cod_prestador}`;

            const nomeUsuario = getUserData(data[i].cod_prestador);
            nomeUsuario.then((user) => {
                colunaNomeTupla.innerText = `${user.nome}`;
            })
        } else {
            colunaNomeTupla.id = `cliente.${data[i].cod_contratante}`;
            const nomeUsuario = getUserData(data[i].cod_contratante);
            nomeUsuario.then((user) => {
                colunaNomeTupla.innerText = `${user.nome}`;
            })
        }

        // Criação da coluna do serviço do cabeçalho
        const colunaServicoTupla = document.createElement("td");
        colunaServicoTupla.id = `serviço.${data[i].cod_tipo}`;

        const nomeServico = getService(data[i].cod_tipo);
        nomeServico.then((service) => {
            colunaServicoTupla.innerText = `${service.nome}`;
        })

        // Criação da coluna do endereço do cabeçalho
        const colunaEnderecoTupla = document.createElement("td");
        colunaEnderecoTupla.id = `endereco.${data[i].cod_endereco}`;
        colunaEnderecoTupla.innerText = `${data[i].endereco}`;


        // Criação da coluna da data do cabeçalho
        const colunaDataTupla = document.createElement("td");
        colunaDataTupla.id = `data-${data[i].data_servico}`;
        colunaDataTupla.innerText = formatarData(data[i].data_servico, data[i].horario);

        // Criação da coluna do status do cabeçalho
        const colunaStatusTupla = document.createElement("td");
        const spanStatus = document.createElement("span");
        spanStatus.id = `status.${data[i].cod_status}`;
        spanStatus.innerText = `${data[i].status}`;

        // Adicionar o spanStatus dentro da coluna status
        colunaStatusTupla.appendChild(spanStatus);

        // Adicionar as colunas dentro do cabeçalho
        tupla.appendChild(colunaNomeTupla);
        tupla.appendChild(colunaServicoTupla);
        tupla.appendChild(colunaEnderecoTupla);
        tupla.appendChild(colunaDataTupla);
        tupla.appendChild(colunaStatusTupla);

        // Adicionar a tupla na tabela
        tbody.appendChild(tupla);
    }

    tabelaServico.appendChild(tbody);

    // Adicionar a tabela na divTabela
    divTabelaServico.appendChild(tabelaServico);

    // Retornar a tabela
    return divTabelaServico;
}