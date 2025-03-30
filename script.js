function calcularNota() {
    var notaSemestre = parseFloat(document.getElementById("nota_semestre").value);

    if (isNaN(notaSemestre) || notaSemestre < 0 || notaSemestre > 40) {
        document.getElementById("resultado").innerText = "Por favor ingresa una nota válida entre 0 y 40.";
        return;
    }

    var notaSupletorio = Math.max(24, (24 * 2) - notaSemestre);

    document.getElementById("resultado").innerText =
        "El estudiante necesita sacar al menos una nota de " + notaSupletorio.toFixed(2) + " en el supletorio para pasar.";
}
