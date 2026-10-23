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
titulo.textContent = saudação + ", Eu sou o " + nome, "Seja Bem vindo ao meu Portfólio" ;
