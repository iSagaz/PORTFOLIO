const projetos = [

    {
        titulo: "Portfólio",
        descricao: "Site pessoal desenvolvido com HTML, CSS e JavaScript para apresentar meus projetos, habilidades, tecnologias e certificados. Possui navegação entre páginas, layout responsivo e funcionalidade de alternância entre modo claro e escuro."
    },

    {
        titulo: "Nexora AI",
        descricao: "Aplicação web que utiliza inteligência artificial para gerar landing pages a partir de comandos do usuário. Desenvolvida com HTML, CSS, JavaScript, Node.js, Express e integração com a API da Groq."
    },
    {
        titulo: "GTA 6",
        descricao: "Projeto de página web temática do jogo GTA VI, desenvolvido utilizando HTML, CSS e JavaScript, com elementos interativos, personalização visual e alteração dinâmica do plano de fundo."
    },

    {
        titulo: "Codefix",
        descricao: "Projeto desenvolvido utilizando HTML, CSS, JavaScript e inteligência artificial."
    },
    {
        titulo: "JavaFundations",
        descricao: "Projetos e exercícios desenvolvidos em Java durante o curso Java Foundations do SENAI, utilizando conceitos de lógica de programação, variáveis, operadores, estruturas condicionais, entrada de dados com Scanner e fundamentos de programação orientada a objetos."

    },
    {
        titulo: "Quiz--Python",
        descricao: "Projeto de perguntas e respostas desenvolvido em Python."
    },
    {
        titulo: "Calculadora",
        descricao: "Programa desenvolvido para realizar operações matemáticas."
    },
    {
        titulo: "Meu Primeiro Bot",
        descricao: "Jogo desenvolvido pela Mimo com 4 perguntas e respostas."
    }
];

const listaProjetos = document.querySelector("#lista-projetos")

function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    const titulo = document.createElement("h2");
    titulo.textContent = projeto.titulo;
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

for (const projeto of projetos) {
    criarCard(projeto);
}


