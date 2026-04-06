// ===============================
// DADOS DOS PROJETOS
// ===============================
const meusProjetos = [
    {
        titulo: "Plate Editor Pro",
        descricao: "É uma aplicação web local desenvolvida em Flask (Python), HTML, CSS e JavaScript, projetada para facilitar a criação rápida e personalizável de placas de ofertas para supermercados. Ele permite aos usuários gerenciar informações de produtos, preços e detalhes de contato, além de exportar as placas em formatos PNG e PDF. Esta solução foi criada para otimizar o processo de comunicação visual e a agilidade na atualização de promoções.",
        tags: ["Python", "Flask", "JavaScript"],
        link: "https://github.com/RailanTavares/Plate-editor-pro",
        imagem: "plate-editor-pro.png" // Adicione o arquivo de imagem correspondente na sua pasta
    },
    {
        titulo: "Local Video Streaming System",
        descricao: "Plataforma de streaming local projetada para gerenciar e transmitir conteúdo multimídia de marketing diretamente para Smart TVs via rede local. Diferente de soluções baseadas em nuvem, o sistema opera inteiramente via rede local, garantindo estabilidade e zero dependência de internet para a exibição de conteúdos. Com um painel administrativo centralizado, é possível gerenciar playlists de vídeo, anúncios programados e automações sonoras, como o recurso de 'Hora Certa' e vinhetas personalizadas, elevando a experiência de vendas no varejo.",
        tags: ["Python", "Flask", "Redes"],
        link: "https://github.com/RailanTavares/Local-Video-Streaming-System",
        imagem: "local-video-styreaming.png" // Imagem fornecida por você
    }
];

// ===============================
// FUNÇÃO PARA CRIAR TAGS
// ===============================
function criarTags(tags) {
    return tags.map(tag => {
        const span = document.createElement("span");
        span.textContent = tag;
        // Adicionando uma classe simples para estilo se necessário
        span.style.background = "#eff6ff";
        span.style.padding = "4px 8px";
        span.style.borderRadius = "4px";
        span.style.fontSize = "0.8rem";
        span.style.marginRight = "5px";
        return span;
    });
}

// ===============================
// FUNÇÃO PARA CRIAR CARD
// ===============================
function criarCard(projeto) {

    const card = document.createElement("div");
    card.classList.add("card-projeto");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const containerTags = document.createElement("div");
    containerTags.classList.add("tags-projeto");
    containerTags.style.marginBottom = "15px";

    const tags = criarTags(projeto.tags);
    tags.forEach(tag => containerTags.appendChild(tag));

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    // NOVO: Adicionando a imagem do projeto
    const imagem = document.createElement("img");
    imagem.src = projeto.imagem;
    imagem.alt = `Imagem do projeto ${projeto.titulo}`;
    imagem.classList.add("img-projeto");

    const link = document.createElement("a");
    link.href = projeto.link;
    link.target = "_blank";
    link.classList.add("btn-link");
    link.textContent = "Ver Repositório →";

    // Montagem (A imagem agora entra logo após a descrição)
    card.appendChild(titulo);
    card.appendChild(containerTags);
    card.appendChild(descricao);
    card.appendChild(imagem);
    card.appendChild(link);

    return card;
}

// ===============================
// RENDERIZAÇÃO
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

// ===============================
// MENU ATIVO AO CLICAR
// ===============================
function configurarMenuAtivo() {
    const linksMenu = document.querySelectorAll('.nav-links a');

    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            linksMenu.forEach(l => l.classList.remove('active'));
            
            // Adiciona a classe 'active' apenas no link que foi clicado
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
});