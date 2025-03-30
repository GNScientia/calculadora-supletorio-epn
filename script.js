function calcularNota() {
    let notaParcial = parseFloat(document.getElementById("notaParcial").value);
    let notaFinal = parseFloat(document.getElementById("notaFinal").value);
    
    if (isNaN(notaParcial) || isNaN(notaFinal)) {
        document.getElementById("resultado").innerText = "Ingresa valores válidos.";
        return;
    }

    let notaNecesaria = (28 - (notaParcial * 0.35 + notaFinal * 0.35)) / 0.3;

    if (notaNecesaria > 10) {
        document.getElementById("resultado").innerText = "No es posible aprobar con supletorio.";
    } else if (notaNecesaria < 0) {
        document.getElementById("resultado").innerText = "¡Ya aprobaste la materia!";
    } else {
        document.getElementById("resultado").innerText = `Necesitas ${notaNecesaria.toFixed(2)} en el supletorio.`;
    }
}
