const listaProjetos = document.querySelector("#lista-projetos")
const criarCard = (projeto) => {
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

const mostrar = (lista) => {
    listaProjetos.innerHTML = "";
    for (const projeto of lista) {
        criarCard(projeto);
    }

    const titulo = lista.map((projeto) => projeto.titulo);
    contagem.textContent = `${lista.length} projetos: ${titulo.join(", ")}`;

};

const filtrar = (categoria) => {
    const listaFiltrada = todos.filter((projeto) => projeto.categoria === categoria);
    mostrar(listaFiltrada);
}

let todos = [];
fetch("projeto.json")
    .then((resposta) => resposta.json())
    .then((projetos) => {
        todos = projetos;
        mostrar(todos);


    });

const botaoTodos = document.querySelector("#filtro-todos");
const botaoPortfólio = document.querySelector("#filtro-Portfólio");
const botaoNexum = document.querySelector("#filtro-Nexum");
const botaoNexoraAI = document.querySelector("#filtro-Nexora-AI");
const botaoCodeFix = document.querySelector("#filtro-CodeFix");
const botaoGTA6 = document.querySelector("#filtro-GTA-6");
const botaoJavaFundations = document.querySelector("#filtro-JavaFundations");
const botaoCalculadoraSimples = document.querySelector("#filtro-Calculadora-Simples");
const botaoQuizPython = document.querySelector("#filtro-Quiz-Python");
const botaoMeuPrimeiroBot = document.querySelector("#filtro-Meu-Primeiro-Bot");
const contagem = document.querySelector("#contagem");


botaoTodos.addEventListener("click", () => mostrar(todos));
botaoPortfólio.addEventListener("click", () => filtrar("Portfólio"));
botaoNexum.addEventListener("click", () => filtrar("Nexum"));
botaoNexoraAI.addEventListener("click", () => filtrar("Nexora-AI"));
botaoCodeFix.addEventListener("click", () => filtrar("CodeFix"));
botaoGTA6.addEventListener("click", () => filtrar("GTA-6"));
botaoJavaFundations.addEventListener("click", () => filtrar("JavaFundations"));
botaoCalculadoraSimples.addEventListener("click", () => filtrar("Calculadora-Simples"));
botaoQuizPython.addEventListener("click", () => filtrar("Quiz-Python"));
botaoMeuPrimeiroBot.addEventListener("click", () => filtrar("Meu-Primeiro-Bot"));

