const servico = {
    servico0 : {
        "nome_servico": "Reparo de canos",
        "descricao": "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, accusamus! Vitae, temporibus fugiat suscipit delectus molestiae aliquid esse doloribus consectetur velit, harum ratione, soluta architecto doloremque dolore inventore exercitationem rerum."
    },
    servico1 : {
        "nome_servico": "Reparo elétrico",
        "descricao": "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, accusamus! Vitae, temporibus fugiat suscipit delectus molestiae aliquid esse doloribus consectetur velit, harum ratione, soluta architecto doloremque dolore inventore exercitationem rerum."
    },
    servico2 : {
        "nome_servico": "Faxina",
        "descricao": "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, accusamus! Vitae, temporibus fugiat suscipit delectus molestiae aliquid esse doloribus consectetur velit, harum ratione, soluta architecto doloremque dolore inventore exercitationem rerum."
    },
    servico3 : {
        "nome_servico": "Assistencia Técnica",
        "descricao": "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, accusamus! Vitae, temporibus fugiat suscipit delectus molestiae aliquid esse doloribus consectetur velit, harum ratione, soluta architecto doloremque dolore inventore exercitationem rerum."
    },

    
}

const profissional = {
    profissional0 : {
        "nome_prof": "Marcos II Arraial",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    },

    profissional1 : {
        "nome_prof": "Igor Pamp",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    },

    profissional2 : {
        "nome_prof": "Nicolau Maquiavélico",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    },

    profissional3 : {
        "nome_prof": "Frederico Twitterboy",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    },

    profissional4 : {
        "nome_prof": "Daniel Sheirado",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    },

    profissional5 : {
        "nome_prof": "Tortugo Airpods",
        "descricao_prof": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, rerum. Cupiditate maxime earum ipsam, autem ut voluptatem laboriosam reiciendis optio? Voluptates repudiandae a perspiciatis sunt quasi, adipisci iure error in!"
    }

}

/*Constantes globais----------- */

const tudo = document.querySelector('.tudo');

/*As funções a seguir criam elementos da página de escolha de serviço----------- */

function criaBanner(){
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const titulo_banner = document.createElement('h1');
    titulo_banner.innerHTML = `O melhor <span class="corLaranja"> serviço </span> pelo melhor <span class="corLaranja"> preço</span>`;
    titulo_banner.classList.add('titulo');
    const img_banner = new Image;
    img_banner.src = 'imgs/gustavo.png';
    banner.appendChild(titulo_banner);
    banner.appendChild(img_banner);
    return banner;
}

function criaPesquisar(){
    const search = document.createElement('div');
    search.classList.add('search');
    const pesquisar = document.createElement('input');
    pesquisar.classList.add('pesquisar');
    const verServicos = document.createElement('button');
    verServicos.innerHTML = 'Ver Serviços';
    verServicos.classList.add('verServicos');
    search.appendChild(pesquisar);
    search.appendChild(verServicos);
    return search;
}


function criaServicos(id){
    const listServico = document.createElement(`div`);
    const div_id = `servico${id}`;
    listServico.classList.add('servico');
    listServico.id = div_id;
    const titulo_servico = document.createElement('h3');
    titulo_servico.innerHTML = servico[div_id].nome_servico;
    const p_servico = document.createElement('p');
    p_servico.innerHTML = servico[div_id].descricao;
    listServico.appendChild(titulo_servico);
    listServico.appendChild(p_servico);
    tudo.appendChild(listServico);
    return listServico;
}

/*As funções a seguir criam elementos da página de escolha do profissional----------- */

function criaServicoNP(e){
    console.log(e.id);
    const div_servicoNP = document.createElement('div');
    div_servicoNP.classList.add('servicoNP');
    const div_tit_servicoNP = document.createElement('div');
    div_tit_servicoNP.classList.add('tit_servicoNP');
    const tit_servicoNP = document.createElement('h1');
    tit_servicoNP.innerHTML = servico[e.id].nome_servico;
    div_tit_servicoNP.appendChild(tit_servicoNP);
    const div_avaliacao = document.createElement('div');
    div_avaliacao.classList.add('avaliacao_usuario');
    const avaliacao = document.createElement('ul');
    avaliacao.classList.add('avaliacao');
    const estrela = document.createElement('li');
    estrela.classList.add('star-icon');
    avaliacao.appendChild(estrela);
    div_avaliacao.appendChild(avaliacao);
    div_tit_servicoNP.appendChild(div_avaliacao);
    const btn_voltar = document.createElement('button');
    btn_voltar.innerHTML = 'Voltar';
    btn_voltar.classList.add('voltar');
    btn_voltar.addEventListener('click', function(e){
        tudo.innerHTML = ``;
        mostraServicos();
    })
    div_tit_servicoNP.appendChild(btn_voltar);
    const p_servicoNP = document.createElement('p');
    p_servicoNP.innerHTML = servico[e.id].descricao;
    p_servicoNP.classList.add('p_servicoNP');
    div_servicoNP.appendChild(div_tit_servicoNP);
    div_servicoNP.appendChild(p_servicoNP);
    tudo.appendChild(div_servicoNP);
}

function criaCardsNP(id){
    const div_id = `profissional${id}`;
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = div_id;
    const img_prof = new Image;
    img_prof.src = 'imgs/3329962-corpo-do-cantor-gusttavo-lima-foi-elogia-opengraph_1200-3.jpg';
    const card_text = document.createElement('div');
    card_text.classList.add('card_text');
    const card_title = document.createElement('h1');
    card_text.innerHTML = profissional[div_id].nome_prof;
    const div_avaliacao = document.createElement('div');
    div_avaliacao.classList.add('avaliacao_usuario');
    const avaliacao = document.createElement('ul');
    avaliacao.classList.add('avaliacao');
    const estrela = document.createElement('li');
    estrela.classList.add('star-icon');
    avaliacao.appendChild(estrela);
    div_avaliacao.appendChild(avaliacao);
    const card_p = document.createElement('p');
    card_p.innerHTML = profissional[div_id].descricao_prof;
    const card_button = document.createElement('button');
    card_button.innerText = 'Acessar Perfil';
    card_button.id = 'card_button';
    card_text.appendChild(card_title);
    card_text.appendChild(div_avaliacao);
    card_text.appendChild(card_p);
    card_text.appendChild(card_button);
    card.appendChild(img_prof);    
    card.appendChild(card_text);
    return card;
    
}



/*A função a seguir cria a página de escolha de serviço----------- */

function mostraServicos(){
    const banner = criaBanner();
    tudo.appendChild(banner);
    const search = criaPesquisar();
    tudo.appendChild(search);
    for (let index = 0; index < Object.keys(servico).length; index++) {
        const divServicos = criaServicos(index);
        divServicos.addEventListener('click', function(){
            tudo.innerHTML = ``;
            criaServicoNP(divServicos);
            const profissionais = document.createElement('div');
            profissionais.classList.add('profissionais');
            tudo.appendChild(profissionais);
            for (let i = 0; i < Object.keys(profissional).length; i++) {
                const card = criaCardsNP(i);
                profissionais.appendChild(card);
            }
        });
        tudo.appendChild(divServicos);
    }
}

/*A função a seguir carrega a página de escolha de serviço----------- */

function carregarPagina(){
    window.addEventListener('load', function(e){
        e.preventDefault();
        mostraServicos();
    })
}

/*Chamando funções----------- */

carregarPagina();

