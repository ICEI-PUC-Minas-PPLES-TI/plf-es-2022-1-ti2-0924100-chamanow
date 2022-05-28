function validacaoForm() {
    //Verificar os campos do formulário das perguntas individualmente
    const fields = document.querySelectorAll("[required]");

    function validateField(field) {
        //Lógica para verificar se existem erros
        function verifyErrors() {
            let foundError = false;

            for (key in field.validity) {
                if (field.validity[key] && !field.validity.valid)
                    foundError = key;
            }

            return foundError;
        }

        function setCustomMessage(message) {
            if (message) {
                $(field).attr('placeholder', field.placeholder + message);
            }
        }

        return function() {
            if (verifyErrors())
                if (!asterisco) {
                    setCustomMessage("*");
                    asterisco = true;
                } else
                    setCustomMessage();
        }
    }

    function customValidation(event) {
        const field = event.target;
        const validation = validateField(field);
        if (field.placeholder == "Email" || field.placeholder == "Senha")
            asterisco = false;
        else asterisco = true;

        const inputEmail = document.querySelector("#email");
        inputEmail.style.border = "1.5px #fa2929 solid";

        const inputSenha = document.querySelector("#senha");
        inputSenha.style.border = "1.5px #fa2929 solid";

        validation();
    }

    for (field of fields) {
        field.addEventListener("invalid", event => {
            //Tirar o bubble
            event.preventDefault();

            customValidation(event);
        })

        field.addEventListener("blur", customValidation);
    }
}