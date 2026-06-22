// ===============================
// ⭐ PUNTAJE (CORREGIDO)
// ===============================
let puntos = parseInt(localStorage.getItem('points')) || 0;

// ===============================
// 🎮 INTENTOS
// ===============================
let intentos = 2;

// ===============================
// 🔊 AUDIO MUSICAL GLOBAL
// ===============================
const audio = new Audio('audio/8bittownthemesong-59266.mp3');
audio.loop = true;

let isAudioPlaying = localStorage.getItem('isAudioPlaying') === 'true';

// ===============================
// 🔊 TOGGLE AUDIO
// ===============================
function toggleAudio() {

    const audioIcon = document.getElementById('audio-icon');

    if (!audioIcon) return;

    if (isAudioPlaying) {

        audio.pause();
        audioIcon.innerText = '🔇';

    } else {

        audio.play();
        audioIcon.innerText = '🔊';

    }

    isAudioPlaying = !isAudioPlaying;
    localStorage.setItem('isAudioPlaying', isAudioPlaying);
}

// ===============================
// ⭐ MENSAJE CENTRO
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
// 📊 PROGRESO
// ===============================
function actualizarProgreso() {

    const barra = document.getElementById("progreso");

    if (!barra) return;

    barra.style.width = "100%";
}

// ===============================
// ❤️ VIDAS
// ===============================
function actualizarVidas() {

    const vidas = document.getElementsByClassName('vida');

    for (let i = 0; i < vidas.length; i++) {

        if (i >= intentos) {
            vidas[i].style.visibility = 'hidden';
        }

    }
}

// ===============================
// 🎯 RESPUESTAS
// ===============================
const respuestas = {
    'nivel2pantalla5.php': 'img38'
};

const nombresRespuestas = {
    'img38': 'Sombrero'
};

// ===============================
// 🔊 EFECTOS
// ===============================
const audioCorrecto = new Audio('audio/correct-6033.mp3');
const audioIncorrecto = new Audio('audio/wronganswer-37702.mp3');

// ===============================
// 🎮 SELECCIÓN DE IMAGEN
// ===============================
function seleccionarImagen(element, id) {

    try {

        const paginaActual = window.location.pathname.split('/').pop();
        const respuestaCorrecta = respuestas[paginaActual];

        if (!respuestaCorrecta) return;

        const nombreRespuestaCorrecta = nombresRespuestas[respuestaCorrecta];

        if (intentos <= 0) return;

        // =======================
        // ✔ CORRECTA
        // =======================
        if (id === respuestaCorrecta) {

            document.body.classList.add('correcto');
            document.getElementById('footer').innerText = "¡Correcto!";

            puntos += 20;
            localStorage.setItem('points', puntos);

            const puntosHTML = document.getElementById('puntos');
            if (puntosHTML) {
                puntosHTML.innerHTML = "⭐ " + puntos;
            }

            audioCorrecto.play();

            mostrarMensajeCentro("🎉 ¡Correcto!");

            setTimeout(() => {
                redireccionar();
            }, 2000);

        }

        // =======================
        // ❌ INCORRECTA
        // =======================
        else {

            intentos--;

            document.body.classList.add('incorrecto');
            document.getElementById('footer').innerText = "Incorrecto. Intenta de nuevo.";

            audioIncorrecto.play();

            mostrarMensajeCentro("❌ Incorrecto");

            actualizarVidas();

            // sin vidas
            if (intentos <= 0) {

                document.getElementById('footer').innerText =
                    `Perdiste. La respuesta era ${nombreRespuestaCorrecta}.`;

                mostrarMensajeCentro("💔 Sin vidas");

                setTimeout(() => {
                    redireccionar();
                }, 2500);

            }

        }

    } catch (error) {
        console.error("Error en seleccionarImagen:", error);
    }
}

// ===============================
// 🔵 REDIRECCIÓN
// ===============================
function redireccionar() {
    window.location.href = "final.php?puntos=" + puntos;
}

// ===============================
// 🚫 BLOQUEAR ATRÁS
// ===============================
function preventBackNavigation() {

    window.history.pushState(null, null, window.location.href);

    window.onpopstate = function () {
        window.history.pushState(null, null, window.location.href);
    };

}

// ===============================
// 🚀 INICIO
// ===============================
window.onload = () => {

    // mostrar puntos guardados
    const puntosHTML = document.getElementById('puntos');
    if (puntosHTML) {
        puntosHTML.innerHTML = "⭐ " + puntos;
    }

    actualizarProgreso();
    actualizarVidas();
    preventBackNavigation();

    // audio estado
    const icon = document.getElementById('audio-icon');

    if (isAudioPlaying) {
        audio.play();
        if (icon) icon.innerText = '🔊';
    } else {
        if (icon) icon.innerText = '🔇';
    }

};