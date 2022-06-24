function escolherData(servico, tipoUser) {
    // Criação do título da seção
    const titulo = criarElementos("h2", null, "titulo-escolher-data", "Escolher Datas");

    // Criação da descrição da seção
    const pText = "Defina o intervalo de datas e horários e escolha o dia em será realizado o serviço";
    const descricao = criarElementos("p", "descricao-escolher-data", null, pText);

    // Adição dos elementos criados na div 
    const divEscolherData = document.querySelector(".escolher-data");
    divEscolherData.appendChild(titulo);
    divEscolherData.appendChild(descricao);

    if (!servico.data_servico) {
        // Criação dos inputs e labels =================================================

        if (tipoUser == "1") {
            // Input Date ====================================================

            // Criação da div para conter os inputs e labels da data
            const divInputDate = criarElementos("div", null, "divInputDate");

            // Criação da label para o input de data
            const labelData = criarLabels("labelData", "inputEscolherData");

            // Adicionar a label  para escolher a data na divInputDate
            divInputDate.appendChild(labelData);

            if (servico.data_inicio) {

                // Criação do input para escolher a data
                const inputEscolherDatas = criarInputs("inputEscolherData", "datetime-local", null);

                // Adicionando o atributos de required para todos os inputs
                inputEscolherDatas.name = "data_escolhida";

                // Criar o atributo min e max do input

                labelData.innerText = "Datas Disponíveis";

                const dataInicio = servico.data_inicio.split("T")[0] + "T" + servico.horario_inicio;
                const dataFim = servico.data_fim.split("T")[0] + "T" + servico.horario_fim;

                // Alterando o limite mín, max do input e required
                inputEscolherDatas.setAttribute('min', dataInicio);
                inputEscolherDatas.setAttribute('max', dataFim);

                // Quando o cliente escolher a data do servico, é decrementado 3 horas do horário

                // Referenciar o btn eviar
                const btnEnviar = document.querySelector("#btn-aceitar-servico");

                // Adicionar o input para escolher a data na divInputDate
                divInputDate.appendChild(labelData);
                divInputDate.appendChild(inputEscolherDatas);

                // Pega o evento de click
                btnEnviar.onclick = () => {
                    // Decrementa 3 horas do horário escolhido
                    inputEscolherDatas.stepDown(180);
                };
            } else {
                // Caso o prestador ainda não tenha escolhido o intervalo das datas, o input fica oculto

                // Mudar o conteúdo da label
                labelData.innerText = "Nenhuma data foi escolhida ainda";
            }

            // AppendChild ===================================================

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

            if (servico.data_inicio && servico.cod_status == 1) {
                // Se o prestador já estiver escolhido o intervalo de datas, elas são exibidas no input porém não será possível alterá-las
                inputEscolherDataInicio.value = servico.data_inicio.split("T")[0];
                inputEscolherDataFim.value = servico.data_fim.split("T")[0];
                inputEscolherHorarioInicio.value = servico.horario_inicio;
                inputEscolherHorarioFim.value = servico.horario_fim;

                // Desabilita todos os inputs
                inputEscolherDataInicio.setAttribute("disabled", true);
                inputEscolherDataFim.setAttribute("disabled", true);
                inputEscolherHorarioInicio.setAttribute("disabled", true);
                inputEscolherHorarioFim.setAttribute("disabled", true);

                // Referencia od hud btn
                const btnEnviar = document.querySelector("#btn-aceitar-servico");

                // Oculta o hud btn
                btnEnviar.style = "display: none";
            }
        }
    } else {
        // Se o usuário for prestador, os btns são ocultos
        if (tipoUser != '1' && servico.cod_status == 2) {
            // Referencia od hud btn
            const btnEnviar = document.querySelector("#btn-aceitar-servico");

            // Oculta o hud btn
            btnEnviar.style = "display: none";
        }
        // Formatar a data e horário do serviço
        const stringDataEscolhida = formatarDataHora(servico.data_servico, servico.data_servico.split("T")[1]);

        // Criar o elemento
        const pDataEscolhida = criarElementos("p", "data-escolhida", null, stringDataEscolhida);

        // Adicionar o elemento criado na página
        divEscolherData.appendChild(pDataEscolhida);
    }
}