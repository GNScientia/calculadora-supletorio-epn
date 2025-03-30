function calcularNota() {
    var notaSemestre = parseFloat(document.getElementById("nota_semestre").value);

    if (isNaN(notaSemestre) || notaSemestre < 0 || notaSemestre > 40) {
        document.getElementById("resultado").innerText = "Por favor ingresa una nota válida entre 0 y 40.";
        return;
    }

    if (notaSemestre >= 28) {
        // Si la nota del semestre es 28 o mayor
        document.getElementById("resultado").innerText = "¡Aprobaste el semestre!";
    } else if (notaSemestre < 18) {
        // Si la nota del semestre es menor a 18
        document.getElementById("resultado").innerText = "No alcanzaste el supletorio y lamentablemente perdiste la asignatura.";
    } else {
        // Si la nota es entre 18 y 27
        var notaSupletorio = Math.max(24, (24 * 2) - notaSemestre);
        document.getElementById("resultado").innerText =
            "El estudiante necesita sacar al menos una nota de " + notaSupletorio.toFixed(2) + " en el supletorio para pasar.";
    }
}
