/* ================= SONIDO + REDIRECCIÓN ================= */
function sonidoYRedirigir(event, url) {
    event.preventDefault();

    const audio = document.getElementById("clic");

    if (!audio) {
        window.location.href = url;
        return;
    }

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

/* ================= CALCULAR NOTA QUIZ ================= */
function calcularNota() {
    const total = 10;

    const correctas = document.querySelectorAll(
        'input[type="radio"][data-correct]:checked'
    ).length;

    const resultado = document.getElementById("resultado");

    if (resultado) {
        resultado.innerHTML =
            "Tu nota final es: <strong>" + correctas + " / " + total + "</strong>";
    }
}


