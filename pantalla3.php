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

<title>Nivel 3</title>

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
            Nivel 3
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
        src="images/img9.jpg"
        onclick="seleccionarImagen(this,'img9')">

        <p>Comics</p>

    </div>

    <div class="card">

        <img
        src="images/img10.jpg"
        onclick="seleccionarImagen(this,'img10')">

        <p>Revista</p>

    </div>

    <div class="card">

        <img
        src="images/img11.jpg"
        onclick="seleccionarImagen(this,'img11')">

        <p>Libro</p>

    </div>

    <div class="card">

        <img
        src="images/img12.jpg"
        onclick="seleccionarImagen(this,'img12')">

        <p>Manual</p>

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

    " Tiene muchas páginas y se usa para leer historias o aprender.",

    " Se puede encontrar en bibliotecas y librerías."

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