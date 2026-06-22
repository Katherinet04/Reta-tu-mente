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

<title>Nivel 4</title>

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
            Nivel 4
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
        src="images/img13.jpg"
        onclick="seleccionarImagen(this,'img13')">

        <p>Lupa</p>

    </div>

    <div class="card">

        <img
        src="images/img14.jpeg"
        onclick="seleccionarImagen(this,'img14')">

        <p>Ventana</p>

    </div>

    <div class="card">

        <img
        src="images/img15.jpg"
        onclick="seleccionarImagen(this,'img15')">

        <p>Vidrio</p>

    </div>

    <div class="card">

        <img
        src="images/img16.jpg"
        onclick="seleccionarImagen(this,'img16')">

        <p>Espejo</p>

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

    " Superficie que refleja imágenes y permite ver nuestro reflejo.",

    " Suele encontrarse en baños y dormitorios."

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

<script src="script4.js"></script>

</body>
</html>