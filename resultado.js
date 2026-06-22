window.addEventListener("DOMContentLoaded", () => {

    // =========================
    // INICIALIZAR PUNTAJE
    // =========================
    if (localStorage.getItem("points") === null) {
        localStorage.setItem("points", "0");
    }

    // =========================
    // SUMAR PUNTOS
    // =========================
    window.sumarPuntos = function (valor) {

        let puntos = Number(localStorage.getItem("points") || 0);

        puntos += Number(valor);

        localStorage.setItem("points", puntos);

        console.log("SUMA →", puntos);
    };

    // =========================
    // VER PUNTOS (DEBUG OPCIONAL)
    // =========================
    window.verPuntos = function () {
        alert("Puntos actuales: " + localStorage.getItem("points"));
    };

    // =========================
    // TERMINAR NIVEL (CRÍTICO)
    // =========================
    window.terminarNivel = function () {

        const puntos = Number(localStorage.getItem("points") || 0);

        console.log("🔥 PUNTAJE FINAL:", puntos);

        // aseguramos que no esté vacío
        if (isNaN(puntos)) {
            console.warn("Puntos inválidos, se corrige a 0");
        }

        const url = "resultado.php?puntaje=" + encodeURIComponent(puntos);

        console.log("➡ REDIRIGIENDO A:", url);

        // pequeña pausa opcional para asegurar logs
        setTimeout(() => {
            window.location.href = url;
        }, 200);
    };

    // =========================
    // REINICIAR (SOLO SI LO USAS)
    // =========================
    window.reiniciarJuego = function () {
        localStorage.setItem("points", "0");
    };

});
window.addEventListener("DOMContentLoaded", () => {

    console.log("INICIO LOCALSTORAGE:", localStorage.getItem("points"));

    window.terminarNivel = function () {

        const puntos = localStorage.getItem("points");

        console.log("🔥 AL TERMINAR NIVEL:", puntos);

        alert("PUNTOS QUE SE ENVÍAN: " + puntos);

        window.location.href = "resultado.php?puntaje=" + puntos;
    };

});