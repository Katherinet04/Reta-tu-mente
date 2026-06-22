<?php
session_start();

$nombre = $_SESSION['nombre'] ?? "Jugador";
$mascota = $_SESSION['mascota'] ?? "🤖";
?>

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Nivel 2</title>

<link rel="stylesheet"
href="pantalla1.css">

</head>

<body>

<!-- NAVBAR -->
<nav id="navbar">

    <div id="vidas">

        <span class="vida">❤️</span>
        <span class="vida">❤️</span>

    </div>

    <div class="progreso-container">

        <div class="nivelTexto">
            Nivel 2
        </div>

        <div class="barra">

            <div id="progreso"
            class="progreso"></div>

        </div>

    </div>

    <div id="puntos">
        ⭐ 0
    </div>

    <div id="audio-control"
    onclick="toggleAudio()">

        <span id="audio-icon">
            🔊
        </span>

    </div>

</nav>

<!-- PERGAMINO -->
<div id="pergamino">

    <h2>📜 Pista</h2>

    <p id="textoPergamino"></p>

    <button onclick="cerrarPergamino()">
        OK
    </button>

</div>

<!-- MENSAJE CENTRO -->
<div id="textoCentro"></div>
<!-- AVISO DE INTENTOS -->
<div id="avisoIntentos">
    ❤️ Tienes 2 intentos para responder
</div>
<!-- JUEGO -->
<div id="juego">

    <div class="card">

        <img
        src="images/img29.jpg"
        onclick="seleccionarImagen(this,'img29')">

        <p>Linterna</p>

    </div>

    <div class="card">

        <img
        src="images/img30.jpg"
        onclick="seleccionarImagen(this,'img30')">

        <p>Bombilla</p>

    </div>

    <div class="card">

        <img
        src="images/img31.jpg"
        onclick="seleccionarImagen(this,'img31')">

        <p>Farol</p>

    </div>

    <div class="card">

        <img
        src="images/img32.png"
        onclick="seleccionarImagen(this,'img32')">

        <p>Lámpara</p>

    </div>

</div>

<!-- MASCOTA -->
<div class="mascotaZona">

    <div id="mascota">

        <?php echo $mascota; ?>

    </div>

    <div id="mensaje"></div>

</div>

<footer id="footer">

    Selecciona una imagen

</footer>

<!-- CONFIGURACIÓN DEL NIVEL -->
<script>

const pistasNivel = [

    " Proporciona luz en la oscuridad.",

    "Puede colocarse sobre una mesa o en una esquina de la habitación."

];

let pistaActual = 0;

function mostrarPergamino(){

    const pergamino =
    document.getElementById(
        "pergamino"
    );

    const texto =
    document.getElementById(
        "textoPergamino"
    );

    if(
        !pergamino ||
        !texto
    ){
        return;
    }

    texto.innerHTML =
    pistasNivel[pistaActual];

    pergamino.style.display =
    "flex";

}

function cerrarPergamino(){

    const pergamino =
    document.getElementById(
        "pergamino"
    );

    if(pergamino){

        pergamino.style.display =
        "none";

    }

}

window.addEventListener(
"load",
() => {

    mostrarPergamino();

}
);

</script>

<script src="mascota.js"></script>

<script src="nivel2.js"></script>

</body>
</html>