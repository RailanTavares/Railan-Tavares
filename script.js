const meusProjetos = [
    {
        titulo: "Plate Editor Pro",
        descricao: "É uma aplicação web local desenvolvida em Flask (Python), HTML, CSS e JavaScript, projetada para facilitar a criação rápida e personalizável de placas de ofertas para supermercados. Ele permite aos usuários gerenciar informações de produtos, preços e detalhes de contato, além de exportar as placas em formatos PNG e PDF. Esta solução foi criada para otimizar o processo de comunicação visual e a agilidade na atualização de promoções.",
        tags: ["Python", "Flask", "Gestão/Negócios"],
        link: "https://github.com/RailanTavares/Plate-editor-pro" // Substitua pelo seu link real
    },
    {
        titulo: "Local Video Streaming System",
        descricao: "Plataforma de streaming local projetada para gerenciar e transmitir conteúdo de marketing multimídia diretamente para Smart TVs via rede local. Inclui recursos de automação como 'Hora Certa'.",
        tags: ["Python", "Redes Locais", "Multimídia"],
        link: "https://github.com/seu-usuario/local-video-streaming" // Substitua pelo seu link real
    }
];

const container = document.getElementById('container-projetos');

meusProjetos.forEach(projeto => {
    // Cria as tags em HTML baseado no array de tags de cada projeto
    const tagsHTML = projeto.tags.map(tag => `<span>${tag}</span>`).join('');

    const card = `
        <div class="card-projeto">
            <h3>${projeto.titulo}</h3>
            <div class="tags-projeto">
                ${tagsHTML}
            </div>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank" class="btn-link">Ver Repositório no GitHub &rarr;</a>
        </div>
    `;
    container.innerHTML += card;
});