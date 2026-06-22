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

<title>Nivel 6</title>

<link rel="stylesheet"
href="pantalla1.css">

</head>

<body>

<nav id="navbar">

    <div id="vidas">

        <span class="vida">❤️</span>
        <span class="vida">❤️</span>

    </div>

    <div class="progreso-container">

        <div class="nivelTexto">

            Nivel 6

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

<div id="pergamino">

    <h2>📜 Pista</h2>

    <p id="textoPergamino"></p>

    <button onclick="cerrarPergamino()">

        OK

    </button>

</div>

<div id="textoCentro"></div>
<!-- AVISO DE INTENTOS -->
<div id="avisoIntentos">
    ❤️ Tienes 2 intentos para responder
</div>
<div id="juego">

    <div class="card">

        <img
        src="images/img17.jpg"
        onclick="seleccionarImagen(this,'img17')">

        <p>Bote</p>

    </div>

    <div class="card">

        <img
        src="images/img18.jpg"
        onclick="seleccionarImagen(this,'img18')">

        <p>Barco</p>

    </div>

    <div class="card">

        <img
        src="images/img19.jpg"
        onclick="seleccionarImagen(this,'img19')">

        <p>Submarino</p>

    </div>

    <div class="card">

        <img
        src="images/img20.jpg"
        onclick="seleccionarImagen(this,'img20')">

        <p>Yate</p>

    </div>

</div>

<div class="mascotaZona">

    <div id="mascota">

        <?php echo $mascota; ?>

    </div>

    <div id="mensaje"></div>

</div>

<footer id="footer">

    Selecciona una imagen

</footer>

<script>

const pistasNivel = [

    " Navega sobre el agua.",

    " Transporta personas o mercancías."

];

let pistaActual = 0;

function mostrarPergamino(){

    document.getElementById(
        "textoPergamino"
    ).innerHTML =
    pistasNivel[pistaActual];

    document.getElementById(
        "pergamino"
    ).style.display =
    "flex";

}

function cerrarPergamino(){

    document.getElementById(
        "pergamino"
    ).style.display =
    "none";

}

window.addEventListener(
"load",
() => {

    mostrarPergamino();

}
);

</script>

<script src="mascota.js"></script>
<script src="script.js"></script>

</body>
</html>