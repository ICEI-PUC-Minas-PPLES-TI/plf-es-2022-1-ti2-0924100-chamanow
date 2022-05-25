function tabelaServicos() {
    // Apagar todos os elementos da página
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
    //if(cod_user == "prestador")
    colunaNome.innerText = "Prestador";
    /*
    else
        colunaNome.innerText = "Cliente";
    */

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

    // Adicionar divTabelaServico na divDadosMenu
    const divDadosMenu = document.querySelector(".dadosMenu");
    divDadosMenu.appendChild(divTabelaServico);
}

function alterarCadastro() {

}

$(document).ready(function() {
    // Carregar os btns de esolher o usuario
    tabelaServicos();
})