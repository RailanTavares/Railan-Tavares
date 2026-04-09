// ===============================
// DADOS DOS PROJETOS
// ===============================
const meusProjetos = [
    {
        titulo: "Plate Editor Pro",
        descricao: "É uma aplicação web local desenvolvida em Flask (Python), HTML, CSS e JavaScript, projetada para facilitar a criação rápida e personalizável de placas de ofertas para supermercados. Ele permite aos usuários gerenciar informações de produtos, preços e detalhes de contato, além de exportar as placas em formatos PNG e PDF. Esta solução foi criada para otimizar o processo de comunicação visual e a agilidade na atualização de promoções.",
        tags: ["Python", "Flask", "JavaScript"],
        link: "https://github.com/RailanTavares/Plate-editor-pro",
        imagem: "plate-editor-pro.png" 
    },
    {
        titulo: "Local Video Streaming System",
        descricao: "Plataforma de streaming local projetada para gerenciar e transmitir conteúdo multimídia de marketing diretamente para Smart TVs via rede local. Diferente de soluções baseadas em nuvem, o sistema opera inteiramente via rede local, garantindo estabilidade e zero dependência de internet para a exibição de conteúdos. Com um painel administrativo centralizado, é possível gerenciar playlists de vídeo, anúncios programados e automações sonoras, como o recurso de 'Hora Certa' e vinhetas personalizadas, elevando a experiência de vendas no varejo.",
        tags: ["Python", "Flask", "Redes"],
        link: "https://github.com/RailanTavares/Local-Video-Streaming-System",
        imagem: "local-video-styreaming.png" 
    }
];

// ===============================
// FUNÇÕES DE CRIAÇÃO (DOM)
// ===============================
function criarCard(projeto) {
    const card = document.createElement("div");
    card.classList.add("card-projeto", "oculto"); // Adicionado 'oculto' para a animação

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const containerTags = document.createElement("div");
    containerTags.classList.add("tags-tecnologias");
    projeto.tags.forEach(tag => {
        const span = document.createElement("span");
        span.textContent = tag;
        containerTags.appendChild(span);
    });

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    const imagem = document.createElement("img");
    imagem.src = projeto.imagem;
    imagem.alt = `Imagem do projeto ${projeto.titulo}`;
    imagem.classList.add("img-projeto");

    const link = document.createElement("a");
    link.href = projeto.link;
    link.target = "_blank";
    link.classList.add("btn-link");
    link.textContent = "Ver Repositório →";

    card.appendChild(titulo);
    card.appendChild(containerTags);
    card.appendChild(descricao);
    card.appendChild(imagem);
    card.appendChild(link);

    return card;
}

// ===============================
// RENDERIZAÇÃO E ANIMAÇÕES (SCROLL REVEAL)
// ===============================
function renderizarProjetos() {
    const container = document.getElementById("container-projetos");

    if (!container) {
        console.error("Container de projetos não encontrado.");
        return;
    }

    meusProjetos.forEach(projeto => {
        const card = criarCard(projeto);
        container.appendChild(card);
    });
}

function iniciarAnimacoesScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revelado');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, { 
        threshold: 0.15, // Aciona quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    });

    // Seleciona elementos que não foram criados dinamicamente para adicionar a classe oculta
    const elementosParaAnimar = document.querySelectorAll('.sessao-conteudo .container, .card-servico, .timeline-item, .habilidades-container');
    
    elementosParaAnimar.forEach(el => {
        el.classList.add('oculto');
        observer.observe(el);
    });

    // Observar os projetos criados dinamicamente
    setTimeout(() => {
        const cardsProjetos = document.querySelectorAll('.card-projeto');
        cardsProjetos.forEach(card => observer.observe(card));
    }, 100);
}

// ===============================
// MENU ATIVO AO CLICAR
// ===============================
function configurarMenuAtivo() {
    const linksMenu = document.querySelectorAll('.nav-links a');

    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            linksMenu.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ===============================
// INICIALIZAÇÃO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    renderizarProjetos();
    configurarMenuAtivo();
    iniciarAnimacoesScroll(); // Inicializa o motor de animações
});
