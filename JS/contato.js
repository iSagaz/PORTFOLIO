const formulario = document.getElementById("formulario")
const resposta = document.getElementById("resposta")

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;
    resposta.textContent = "Obrigado " + nome + ", " + "Sua Mensagem foi recebida com sucesso!" ;
    const mensagem = document.querySelector("#mensagem").value.trim();
    
    if(mensagem.length < 10) {

    resposta.textContent = "Escreva pelo menos 10 caracteres";
    resposta.classList.add("erro");

    } else {
        resposta.textContent = "Obrigado " + nome + ", " + "Sua Mensagem foi recebida com sucesso!" ;
        resposta.classList.remove("erro");
        formulario.reset();

    }


});