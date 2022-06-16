

/*const profissional = {
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

}*/

/*Constantes globais----------- */

const tudo = document.querySelector('.tudo');

/*As funções a seguir criam elementos da página de escolha de serviço----------- */

function criaBanner() {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const titulo_banner = document.createElement('h1');
    titulo_banner.innerHTML = `O melhor <span class="corLaranja"> serviço </span> pelo melhor <span class="corLaranja"> preço</span>`;
    titulo_banner.classList.add('titulo');
    const img_banner = new Image;
    iamg_banner.src = '/img/gustvo.png';
    banner.appendChild(titulo_banner);
    banner.appendChild(img_banner);
    return banner;
}

function criaPesquisar() {
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


function criaServicos(servico) {
    const listServico = document.createElement(`div`);
    listServico.classList.add('servico');
    const titulo_servico = document.createElement('h3');
    titulo_servico.innerHTML = servico.nome;
    const p_servico = document.createElement('p');
    p_servico.innerHTML = servico.descricao;
    listServico.appendChild(titulo_servico);
    listServico.appendChild(p_servico);
    listServico.id = servico.cod_tipo;
    tudo.appendChild(listServico);
    console.log(servico);
    return listServico;
}

/*As funções a seguir criam elementos da página de escolha do profissional----------- */

function criaServicoNP(e, servico) {
    console.log(e.id);
    const div_servicoNP = document.createElement('div');
    div_servicoNP.classList.add('servicoNP');
    const div_tit_servicoNP = document.createElement('div');
    div_tit_servicoNP.classList.add('tit_servicoNP');
    const tit_servicoNP = document.createElement('h1');
    tit_servicoNP.innerHTML = servico.nome;
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
    btn_voltar.addEventListener('click', function (e) {
        tudo.innerHTML = ``;
        mostraServicos();
    })
    div_tit_servicoNP.appendChild(btn_voltar);
    const p_servicoNP = document.createElement('p');
    p_servicoNP.innerHTML = servico.descricao;
    p_servicoNP.classList.add('p_servicoNP');
    div_servicoNP.appendChild(div_tit_servicoNP);
    div_servicoNP.appendChild(p_servicoNP);
    tudo.appendChild(div_servicoNP);
}

function criaCardsNP(profissional) {
    const card = document.createElement('div');
    card.classList.add('card');
    const img_prof = new Image;
    img_prof.src = '/img/3329962-corpo-do-cantor-gusttavo-lima-foi-elogia-opengraph_1200-3.jpg';
    const card_text = document.createElement('div');
    card_text.classList.add('card_text');
    const card_title = document.createElement('h1');
    card_text.innerHTML = profissional.nome;
    const div_avaliacao = document.createElement('div');
    div_avaliacao.classList.add('avaliacao_usuario');
    const avaliacao = document.createElement('ul');
    avaliacao.classList.add('avaliacao');
    const estrela = document.createElement('li');
    estrela.classList.add('star-icon');
    avaliacao.appendChild(estrela);
    div_avaliacao.appendChild(avaliacao);
    const card_p = document.createElement('p');
    card_p.innerHTML = profissional.email;
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

function mostraServicos() {
    const banner = criaBanner();
    tudo.appendChild(banner);
    const search = criaPesquisar();
    tudo.appendChild(search);
    const servicos = getAllServices();
    servicos.then(servico => {
        console.log(servico);
        const div_servicos = document.createElement('div');
        div_servicos.className = 'div_servicos';
        servico.forEach(element => {
            const divServicos = criaServicos(element, servico);
            divServicos.addEventListener('click', function (e) {
                tudo.innerHTML = ``;
                criaServicoNP(divServicos, element);
                const elemento = e.target;
                const nodeElement = elemento.closest("div");
                console.log(nodeElement.id);
                const prestador_servico = getSpecProfessional(nodeElement.id);
                prestador_servico.then(profissional => {
                    const profissionais = document.createElement('div');
                    profissionais.classList.add('profissionais');

                    tudo.appendChild(profissionais);
                
                    profissional.forEach(element =>  {
                    const card = criaCardsNP(element);
                    profissionais.appendChild(card);
                    });
                }) 
                console.log(e.target);
                
                
                
            });
            div_servicos.appendChild(divServicos);
            
        });
        tudo.appendChild(div_servicos);
       /* $('.div_servico div').click((e) => {
            const element = e.target;
            const nodeElement = element.closest("div");
            console.log(nodeElement);
            
        })*/
        
    })

}

/*A função a seguir carrega a página de escolha de serviço----------- */

function carregarPagina() {
    window.addEventListener('load', function (e) {
        e.preventDefault();
        mostraServicos();
    })
}

/*Chamando funções----------- */

carregarPagina();

