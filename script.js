// ===============================
// PUNTOS (FIX PRINCIPAL)
// ===============================
let puntos = parseInt(localStorage.getItem("points")) || 0;

// ===============================
// AUDIO
// ===============================
const audio = new Audio("audio/8bittownthemesong-59266.mp3");
audio.loop = true;

let isAudioPlaying = localStorage.getItem("isAudioPlaying") === "true";

function toggleAudio() {
    const audioIcon = document.getElementById("audio-icon");

    if (audio.paused) {
        audio.play().catch(err => console.log("Audio bloqueado:", err));
        if (audioIcon) audioIcon.innerHTML = "🔊";
        isAudioPlaying = true;
    } else {
        audio.pause();
        if (audioIcon) audioIcon.innerHTML = "🔇";
        isAudioPlaying = false;
    }

    localStorage.setItem("isAudioPlaying", isAudioPlaying);
}

// ===============================
// MENSAJE CENTRO
// ===============================
function mostrarMensajeCentro(texto) {
    const mensaje = document.getElementById("textoCentro");
    if (!mensaje) return;

    mensaje.innerHTML = texto;
    mensaje.classList.add("mostrar");

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 1800);
}

// ===============================
// PROGRESO
// ===============================
function actualizarProgreso() {
    const barra = document.getElementById("progreso");
    if (!barra) return;

    barra.style.width = "0%";
}

// ===============================
// INTENTOS
// ===============================
let intentos = 2;

// ===============================
// RESPUESTA CORRECTA
// ===============================
const respuestaCorrecta = "img18";
const nombreRespuesta = "Barco";

// ===============================
// AUDIOS EFECTOS
// ===============================
const audioCorrecto = new Audio("audio/correct-6033.mp3");
const audioIncorrecto = new Audio("audio/wronganswer-37702.mp3");

// ===============================
// INICIO
// ===============================
window.onload = () => {

    // aviso intentos
    setTimeout(() => {
        const aviso = document.getElementById("avisoIntentos");
        if (aviso) {
            aviso.style.transition = "opacity 0.5s";
            aviso.style.opacity = "0";

            setTimeout(() => aviso.remove(), 500);
        }
    }, 4000);

    // audio estado
    const icon = document.getElementById("audio-icon");

    if (isAudioPlaying) {
        audio.play().catch(() => {});
        if (icon) icon.innerHTML = "🔊";
    } else {
        if (icon) icon.innerHTML = "🔇";
    }

    // mostrar puntos SIEMPRE desde localStorage
    const puntosHTML = document.getElementById("puntos");
    if (puntosHTML) {
        puntosHTML.innerHTML = "⭐ " + puntos;
    }

    actualizarProgreso();
};

// ===============================
// SELECCIONAR IMAGEN
// ===============================
function seleccionarImagen(element, id) {

    try {

        if (intentos <= 0) return;

        // =========================
        // CORRECTA
        // =========================
        if (id === respuestaCorrecta) {

            puntos += 20;
            localStorage.setItem("points", puntos);

            const puntosHTML = document.getElementById("puntos");
            if (puntosHTML) {
                puntosHTML.innerHTML = "⭐ " + puntos;
            }

            document.getElementById("footer").innerHTML = "¡Correcto!";
            audioCorrecto.play();

            mostrarMensajeCentro("🎉 ¡Correcto!");

            const barra = document.getElementById("progreso");
            if (barra) barra.style.width = "100%";

            setTimeout(() => {
                redireccionar();
            }, 2000);

        }

        // =========================
        // INCORRECTA
        // =========================
        else {

            intentos--;
            audioIncorrecto.play();

            document.getElementById("footer").innerHTML =
                "Incorrecto. Intenta de nuevo.";

            actualizarVidas();
            mostrarMensajeCentro("❌ Incorrecto");

            if (intentos === 0) {

                document.getElementById("footer").innerHTML =
                    "Perdiste. La respuesta era " + nombreRespuesta;

                mostrarMensajeCentro("💔 Sin vidas");

                setTimeout(() => {
                    redireccionar();
                }, 2500);
            }
        }

    } catch (error) {
        console.error(error);
    }
}

// ===============================
// VIDAS
// ===============================
function actualizarVidas() {
    const vidas = document.getElementsByClassName("vida");

    for (let i = 0; i < vidas.length; i++) {
        if (i >= intentos) {
            vidas[i].style.visibility = "hidden";
        }
    }
}

// ===============================
// REDIRECCIÓN
// ===============================
function redireccionar() {

    const puntos = localStorage.getItem("points") || 0;

    console.log("ENVIANDO PUNTAJE:", puntos);

    window.location.href = "resultado.php?puntaje=" + encodeURIComponent(puntos);
}
// ===============================
// BLOQUEO ATRÁS
// ===============================
function preventBackNavigation() {
    window.history.pushState(null, null, window.location.href);

    window.onpopstate = function () {
        window.history.pushState(null, null, window.location.href);
    };
}

preventBackNavigation();