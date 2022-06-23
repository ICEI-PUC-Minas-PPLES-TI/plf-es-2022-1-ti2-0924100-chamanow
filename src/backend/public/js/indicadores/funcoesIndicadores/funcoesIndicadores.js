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