function criarListaAvaliacoes(data) {
    console.log(data);

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
    contentTabela.appendChild(colunaNome);
    contentTabela.appendChild(colunaNota);
    contentTabela.appendChild(colunaEmail);
    contentTabela.appendChild(colunaDataNasc);
    contentTabela.appendChild(colunaCPFCNPJ);
    contentTabela.appendChild(colunaServico);

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
}

const config = {
    responsive: true,
    displayModeBar: false
}

function graficoTimeService(data) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Adiciona o nome dos serviços na variável row
    var row = [];
    array.forEach(element => {
        row.push(element[1]);
    });

    // Adiciona a média de tempo dos serviços na variável columns
    var column = [];
    array.forEach(element => {
        column.push(element[0]);
    });

    var garf_1 = {
        x: row,
        y: column,
        mode: 'lines+markers',
        type: 'bar',
        marker: {
            color: ['green', 'orange', 'blue', 'red']
        }
    }

    const layout = {
        title: 'Média de tempo para a <br>realização do serviço',
        font: {
            family: 'Poppins'
        },
        showlegend: false,
        xaxis: {
            showgrid: false
        },
        yaxis: {
            title: 'Dias',
            showline: false
        }
    };

    var time = [garf_1];
    Plotly.newPlot('timeService', time, layout, config)
}

function graficoTaxaCancelamento(data) {
    console.log(data)
        // Transforma o JSON data em array
        /*const array = data.map(obj => {
            return Object.keys(obj).map(key => {
                return obj[key];
            });
        });

        // Adiciona o nome dos serviços na variável row
        var row = [];
        array.forEach(element => {
            row.push(element[1]);
        });

        // Adiciona a média de tempo dos serviços na variável columns
        var column = [];
        array.forEach(element => {
            column.push(element[0]);
        });

        var garf_1 = {
            x: row,
            y: column,
            mode: 'lines+markers',
            type: 'bar',
        }

        const layout = {
        title: 'Quantidade de usuarios cadastrados por ano',
        font: {
            family: 'Poppins'
        },
        showlegend: false
    };

        var time = [garf_1];
        Plotly.newPlot('cancellationRate', time)*/
}

function graficoCadastroUsuario(data) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Separa os anos num array
    var anos = [];
    array.forEach(element => {
        anos.push(element[1]);
    });

    // Filtra os valores repetidos
    const filteredAno = anos.filter((ele, pos) => {
        return anos.indexOf(ele) == pos;
    })

    var dados = [];
    filteredAno.forEach(ano => {
        meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

        // Adiciona todos os meses em que foram cadastrados novos usuarios na variável row
        var row = [];
        array.forEach(element => {
            if (element[1] == ano)
                row.push(meses[element[0] - 1])
        });

        // Adiciona a quantidade de usuarios novos cadastrados na variável column
        var column = [];
        array.forEach(element => {
            if (element[1] == ano)
                column.push(element[2]);
        });

        // Cria uma linha no gráfico do ano correspondente
        var lines = {
            x: row,
            y: column,
            name: ano,
            mode: 'lines+markers',
            type: 'scatter',
            xaxis: {
                title: '',
                showgrid: false,
            },
            yaxis: {
                title: 'Serviços Pendentes',
                showline: false
            }
        }

        // Adiciona o array da linha
        dados.push(lines);
    })

    const layout = {
        title: 'Quantidade de usuarios <br>cadastrados por mês',
        font: {
            family: 'Poppins'
        },
        yaxis: {
            title: 'Quantidade'
        }
    };

    Plotly.newPlot('userRegister', dados, layout, config)
}

function graficoCadastroPrestador(data) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Separa os anos num array
    var anos = [];
    array.forEach(element => {
        anos.push(element[1]);
    });

    // Filtra os valores repetidos
    const filteredAno = anos.filter((ele, pos) => {
        return anos.indexOf(ele) == pos;
    })

    var dados = [];
    filteredAno.forEach(ano => {
        meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

        // Adiciona todos os meses em que foram cadastrados novos usuarios na variável row
        var row = [];
        array.forEach(element => {
            if (element[1] == ano)
                row.push(meses[element[0] - 1])
        });

        // Adiciona a quantidade de usuarios novos cadastrados na variável column
        var column = [];
        array.forEach(element => {
            if (element[1] == ano)
                column.push(element[2]);
        });

        // Cria uma linha no gráfico do ano correspondente
        var lines = {
            x: row,
            y: column,
            name: ano,
            mode: 'lines+markers',
            type: 'scatter'
        }

        // Adiciona o array da linha
        dados.push(lines);
    })

    const layout = {
        title: 'Quantidade de prestadores <br>cadastrados por mês',
        font: {
            family: 'Poppins'
        },
        yaxis: {
            title: 'Quantidade'
        }
    };

    Plotly.newPlot('providerRegister', dados, layout, config)
}

function graficoServicosMaisContratados(data) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Adiciona todos os serviços na variável row
    var value = [];
    array.forEach(element => {
        value.push(element[1])
    });

    // Adiciona a quantidade de serviços contratados na variável column
    var label = [];
    array.forEach(element => {
        label.push(element[0]);
    });

    // Adiciona os valores e labels correspondentes ao serviço
    const dados = [{
        values: value,
        labels: label,
        type: 'pie'
    }]

    const layout = {
        title: 'Porcentagem de serviços contratados',
        font: {
            family: 'Poppins'
        }
    };

    Plotly.newPlot('mostContractedServices', dados, layout, config)
}

function graficoPrecoMedio(data) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Adiciona o nome dos serviços na variável row
    var row = [];
    array.forEach(element => {
        row.push(element[0]);
    });

    // Adiciona a média de tempo dos serviços na variável columns
    var column = [];
    array.forEach(element => {
        column.push(element[1]);
    });

    const barra = [{
        x: row,
        y: column,
        type: 'bar',
        marker: {
            color: ['red', 'blue', 'green', 'orange']
        }
    }]

    const layout = {
        title: 'Preço médio de cada serviço',
        font: {
            family: 'Poppins'
        },
        yaxis: {
            title: 'Preço (R$)',
        }
    };

    Plotly.newPlot('avgPriceService', barra, layout, config)
}

function graficoServicosPendentes(data, nomeServico) {
    // Transforma o JSON data em array
    const array = data.map(obj => {
        return Object.keys(obj).map(key => {
            return obj[key];
        });
    });

    // Separa os anos num array
    var anos = [];
    array.forEach(element => {
        anos.push(element[2]);
    });

    // Filtra os valores repetidos
    const filteredAno = anos.filter((ele, pos) => {
        return anos.indexOf(ele) == pos;
    })

    var dados = [];
    filteredAno.forEach(ano => {
        meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

        // Adiciona todos os meses em que foram cadastrados novos usuarios na variável row
        var row = [];
        array.forEach(element => {
            if (element[2] == ano)
                row.push(meses[element[1] - 1])
        });

        // Adiciona a quantidade de usuarios novos cadastrados na variável column
        var column = [];
        array.forEach(element => {
            if (element[2] == ano)
                column.push(element[3]);
        });

        // Cria uma linha no gráfico do ano correspondente
        var lines = {
            x: row,
            y: column,
            name: ano,
            mode: 'lines+markers',
            type: 'scatter'
        }

        // Adiciona o array da linha
        dados.push(lines);
    })

    const layout = {
        title: `Agendamentos pendentes <br>relativo à ${nomeServico}`,
        font: {
            family: 'Poppins'
        },
        yaxis: {
            title: 'Serviços Pendentes'
        }
    };

    Plotly.newPlot('pendingServices', dados, layout, config, { responsive: true });
}