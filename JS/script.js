console.log("Olá, Meu nome é Enzo Sagaz, mas pode me chamar de Sagaz")

const nome = "Enzo";
let hora = new Date().getHours();
console.log(hora);

let saudação;
if (hora < 12) {
    saudação = "Bom Dia";

} else if (hora < 18) {
    saudação = "Boa Tarde"

} else {
    saudação = "Boa Noite"
}
console.log(saudação)

const titulo = document.querySelector(".Titulo");
if (titulo) {
    titulo.textContent = saudação + ", Eu sou o " + nome;
}

const botao = document.getElementById("tema");
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});

