
// ================= JUEGO =================
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 5;
let puntos = Number(localStorage.getItem("points")) || 0;

let bloqueo = false;

// ================= AUDIO STATE =================
let audioActivo = false;
let audioDesbloqueado = false;

// ================= ELEMENTOS =================
const input = document.getElementById("inputNumero");
const pista = document.getElementById("pista");
const resultado = document.getElementById("resultado");
const vidas = document.getElementById("vidas");
const puntosUI = document.getElementById("puntos");

// ================= AUDIO =================
const bgMusic = new Audio("audio/game-music-loop-6-144641.mp3");
const audioCorrecto = new Audio("audio/correct-6033.mp3");
const audioIncorrecto = new Audio("audio/negative_beeps-6008.mp3");
const audioFinal = new Audio("audio/game-over-arcade-6435.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.4;

// ================= DESBLOQUEO UNIFICADO =================
document.addEventListener("click", function iniciarAudio(){

    if(audioDesbloqueado) return;

    bgMusic.play()
    .then(() => {
        bgMusic.pause();
        bgMusic.currentTime = 0;

        audioDesbloqueado = true;
        audioActivo = false;
    })
    .catch(() => {
        console.log("Audio bloqueado por navegador");
    });

}, { once: true });

// ================= TOGGLE AUDIO =================
function toggleAudio(){

    if(!audioDesbloqueado){
        console.log("Esperando interacción inicial");
        return;
    }

    if(!audioActivo){
        bgMusic.play();
        audioActivo = true;
    }else{
        bgMusic.pause();
        audioActivo = false;
    }
}

// ================= INICIO =================
puntosUI.innerText = "⭐ " + puntos;
actualizarVidas();

// ================= VIDAS =================
function actualizarVidas(){

    let html = "";

    for(let i = 0; i < intentos; i++){
        html += "❤️";
    }

    for(let i = intentos; i < 5; i++){
        html += "🤍";
    }

    vidas.innerText = html;
}

// ================= MASCOTA =================
function hablarMascota(texto){

    const burbuja = document.getElementById("mensajeMascota");

    if(!burbuja) return;

    burbuja.innerText = texto;
    burbuja.classList.add("mostrar");

    clearTimeout(window.mascotaTimer);

    window.mascotaTimer = setTimeout(() => {
        burbuja.classList.remove("mostrar");
    }, 2500);
}

// ================= PISTA =================
function getPista(diff){

    if(diff <= 3) return "🔥 Muy caliente";
    if(diff <= 7) return "🌤️ Caliente";
    if(diff <= 15) return "🌥️ Tibio";
    if(diff <= 25) return "❄️ Frío";
    return "🧊 Muy frío";
}

// ================= VERIFICAR =================
function verificar(){

    if(bloqueo) return;

    let valor = Number(input.value);

    if(isNaN(valor) || valor < 1 || valor > 50){
        hablarMascota("⚠️ Número inválido");
        input.value = "";
        return;
    }

    bloqueo = true;
    setTimeout(() => bloqueo = false, 600);

    input.value = "";

    // ================= CORRECTO =================
    if(valor === numeroSecreto){

        audioCorrecto.play();

        puntos += 20;
        localStorage.setItem("points", puntos);
        puntosUI.innerText = "⭐ " + puntos;

        resultado.innerText = "🎉 ¡Correcto!";
        pista.innerText = "";

        hablarMascota("🎉 ¡Muy bien!");

        setTimeout(() => {
            window.location.href = "pantalla6.php";
        }, 2000);

        return;
    }

    // ================= ERROR =================
    intentos--;
    actualizarVidas();

    let diff = Math.abs(valor - numeroSecreto);

    let msg = getPista(diff);

    msg += (valor < numeroSecreto)
        ? ". Es mayor."
        : ". Es menor.";

    pista.innerText = msg;

    audioIncorrecto.play();
    hablarMascota("💡 Sigue intentando");

    // ================= GAME OVER =================
    if(intentos <= 0){

        audioFinal.play();

        resultado.innerHTML =
        "😢 Se acabaron los intentos.<br>Era: <b>" + numeroSecreto + "</b>";

        hablarMascota("😢 No te rindas");

        setTimeout(() => {
            window.location.href = "pantalla6.php";
        }, 3000);
    }
}

// ================= ENTER =================
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        verificar();
    }
});