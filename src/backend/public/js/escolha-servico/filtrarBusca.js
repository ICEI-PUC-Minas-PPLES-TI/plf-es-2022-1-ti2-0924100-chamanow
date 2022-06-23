function filtroPerguntas(resultParam) {
    const inputSearch = document.querySelector('#pesquisar');
    const filterList = document.querySelector('#servicos');
    const posts = document.querySelectorAll(".searchResults div");

    filterList.addEventListener('click', event => {
        const inputValue = event.target.textContent.toLocaleLowerCase();

        posts.forEach(showPostIfMatchInputValue(inputValue));

        inputSearch.value = event.target.textContent;
    });

    const filterResults = (results, inputValue, returnMatchedResults) => results
        .filter(result => {
            const matchedResults = result.textContent.toLowerCase().includes(inputValue);
            return returnMatchedResults ? matchedResults : !matchedResults;
        });

    const hideResults = (results, inputValue) => {
        filterResults(results, inputValue, false)
            .forEach(result => {
                result.classList.remove('block');
                result.classList.add('hidden');
            });
    }

    const showResults = (results, inputValue) => {
        filterResults(results, inputValue, true)
            .forEach(result => {
                result.classList.remove('hidden');
                result.classList.add('block');
            });
    }

    const showPostIfMatchInputValue = inputValue => post => {
        const postTitle = post.querySelector('.result-title').textContent.toLocaleLowerCase();
        const postBody = post.querySelector('.result-description').textContent.toLocaleLowerCase();
        const postContainsInputValue = postTitle.includes(inputValue) ||
            postBody.includes(inputValue);

        if (postContainsInputValue) {
            post.style.display = 'block';
            return
        }

        post.style.display = 'none';
    }

    const handleInputValue = event => {
        const inputValue = event.target.value.trim().toLowerCase();
        const results = Array.from(filterList.children);


        posts.forEach(showPostIfMatchInputValue(inputValue));

        hideResults(results, inputValue);
        showResults(results, inputValue);
    }

    filterList.addEventListener('click', event => {
        const inputValue = event.target.textContent.toLocaleLowerCase();

        posts.forEach(showPostIfMatchInputValue(inputValue));

        inputSearch.value = event.target.textContent;
    });


    // Caso haja um resultado na barra de pesquisa, o código irá filtrar automaticamente
    if (resultParam)
        posts.forEach(showPostIfMatchInputValue(resultParam));

    inputSearch.addEventListener('input', handleInputValue);
}