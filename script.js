function calcularNota() {
    var notaSemestre = parseFloat(document.getElementById("notaParcial").value);

    if (isNaN(notaSemestre)) {
        document.getElementById("resultado").innerText = "Ingresa una nota válida.";
        return;
    }

    var notaSupletorio = Math.max(24, (24 * 2) - notaSemestre);

    document.getElementById("resultado").innerText =
        "El estudiante necesita sacar al menos una nota de " + notaSupletorio.toFixed(2) + " en el supletorio para pasar.";
}
