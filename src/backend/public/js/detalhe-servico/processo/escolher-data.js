function escolherData(servico, tipoUser) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-escolher-data", "Escolher Datas");

    // Criação da descrição da seção
    const pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const descricao = criarElementos("p", "descricao-escolher-data", null, pText);

    // Adição dos elementos criados na div 
    const divEscolherData = document.querySelector(".escolher-data");
    divEscolherData.appendChild(titulo);
    divEscolherData.appendChild(descricao);

    if (!servico.data_servico) {

        // Criação dos inputs e labels =================================================
        if (tipoUser == "1") {
            // Input Date ====================================================

            // Criação da label para o input de data
            const labelData = criarLabels("labelData", "inputEscolherData", "Datas Disponíveis");

            // Criação do input para escolher a data
            const inputEscolherDatas = criarInputs("inputEscolherData", "datetime-local", null);

            // Adicionando o atributos de required para todos os inputs
            inputEscolherDatas.name = "data_escolhida";

            // Criar o atributo min e max do input
            const dataInicio = servico.data_inicio.split("T")[0] + "T" + servico.horario_inicio;
            const dataFim = servico.data_fim.split("T")[0] + "T" + servico.horario_fim;

            // Alterando o limite mín, max do input e required
            inputEscolherDatas.setAttribute("min", dataInicio);
            inputEscolherDatas.setAttribute("max", dataFim);

            // AppendChild ===================================================

            // Criação da div para conter os inputs e labels da data
            const divInputDate = criarElementos("div", null, "divInputDate");

            // Adicionar os inputs e as labels para escolher a data na divInputDate
            divInputDate.appendChild(labelData);
            divInputDate.appendChild(inputEscolherDatas);

            // Adicionar os inputs e as labels para escolher o horário na divEscolherData
            divEscolherData.appendChild(divInputDate);
        } else {
            // Salvar a data atual
            const today = new Date().toISOString();

            // Input Date ====================================================

            // Criação da label para o input de data
            const labelData = criarLabels("labelData", "inputDataInicio", "Escolha o intervalo de datas:");

            // Input Inicio =====================

            // Criação do input para escolher a data de inicio
            const inputEscolherDataInicio = criarInputs("inputDataInicio", "date", null);

            // Alterando o limite min do inputEscolherDataFim para a data atual
            inputEscolherDataInicio.setAttribute("min", today.split('T')[0]);

            // Adicionando o atributo nome
            inputEscolherDataInicio.name = "data_inicio";

            // Input FIM ========================

            // Criação do input para escolher a data de fim
            const inputEscolherDataFim = criarInputs("inputDataFim", "date", null);

            // Alterando o limite min do inputEscolherDatas para a data atual
            inputEscolherDataInicio.setAttribute("min", today.split('T')[0]);

            // Adicionando o atributo nome
            inputEscolherDataFim.name = "data_fim";

            // Input Hour ====================================================

            // Alterar conteúdo de labelHorario
            const labelHorario = criarLabels("labelData", "inputDataInicio", "Informe o horário disponível:");

            // Input Inicio =====================

            // Criação do input escolher horário
            const inputEscolherHorarioInicio = criarInputs("inputHorarioInicio", "time", null);

            // Adicionando o atributo nome
            inputEscolherHorarioInicio.name = "horario_inicio";

            // Input FIM ========================

            // Criando um input para escolher intervalo de horários
            const inputEscolherHorarioFim = criarInputs("inputHorarioFim", "time", null);

            // Adicionando o atributo nome
            inputEscolherHorarioFim.name = "horario_fim";

            // AppendChild ===================================================

            // Criação da div para conter os inputs e labels da data
            const divInputDate = criarElementos("div", null, "divInputDate");

            // Criação da div para conter os inputs e labels do horario
            const divInputHour = criarElementos("div", null, "divInputDate");

            // Adicionar os inputs e as labels para escolher a data na divInputDate
            divInputDate.appendChild(labelData);
            divInputDate.appendChild(inputEscolherDataInicio);

            // Adicionar os inputs e as labels na divEscolherData
            divInputDate.appendChild(inputEscolherDataFim);

            // Adicionar os inputs e as labels para escolher a data na divInputHour
            divInputHour.appendChild(labelHorario);
            divInputHour.appendChild(inputEscolherHorarioInicio);
            divInputHour.appendChild(inputEscolherHorarioFim);

            // Adicionar os inputs e as labels para escolher o horário na divEscolherData
            divEscolherData.appendChild(divInputDate);
            divEscolherData.appendChild(divInputHour);
        }
    } else {
        // Formatar a data e horário do serviço
        var data_escolhida = formatarData(servico.data_servico, "dd/mm/aaaa");
        var horario_escolhido = formatarHorario(servico.horario, "hh:mm");

        // Criar uma string para sr adicionada na página
        const stringDataEscolhida = data_escolhida + " às " + horario_escolhido;

        // Criar o elemento
        const pDataEscolhida = criarElementos("p", "data-escolhida", null, stringDataEscolhida);

        // Adicionar o elemento criado na página
        divEscolherData.appendChild(pDataEscolhida);
    }
}