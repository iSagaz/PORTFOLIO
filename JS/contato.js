const formulario = document.getElementById("formulario")
const resposta = document.getElementById("resposta")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;
    resposta.textContent = `Obrigado ${nome}` ;
    const mensagem = document.querySelector("#mensagem").value.trim();
    
    if(mensagem.length < 10) {

    resposta.textContent = `Faltam ${10 - mensagem.length} letras.`;
    resposta.classList.add("erro");

    } else {
        resposta.textContent = `Obrigado ${nome}, Sua mensagem foi recebida com sucesso` ;
        resposta.classList.remove("erro");
        formulario.reset();

    }


});