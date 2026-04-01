function msg(el) {
    alert("Célula: " + el.innerText);
}

const celulas = document.querySelectorAll("[class*='col-']");

celulas.forEach(celula => {
    celula.addEventListener("mouseover", function() {
        const classeColuna = Array.from(this.classList).find(c => c.startsWith("col-"));
        
        if (classeColuna) {
            document.querySelectorAll("." + classeColuna).forEach(el => {
                el.classList.add("destaque-coluna");
            });
        }
    });

    celula.addEventListener("mouseout", function() {
        document.querySelectorAll(".destaque-coluna").forEach(el => {
            el.classList.remove("destaque-coluna");
        });
    });
});