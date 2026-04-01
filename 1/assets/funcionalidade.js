const celulas = document.querySelectorAll("td");

celulas.forEach(celula => {
    celula.addEventListener("click", function() {
        const valor = this.innerText;
        
        let mensagem = `Você clicou na célula com o valor: ${valor}`;
        
        if (isNaN(valor)) {
            mensagem = `Aluno(a) selecionado(a): ${valor}`;
        } else {
            mensagem = `O valor numérico registrado é: ${valor}`;
        }

        alert(mensagem);
    });
});