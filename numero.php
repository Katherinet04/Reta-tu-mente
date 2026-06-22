<?php
session_start();

$mascota = $_SESSION['mascota'] ?? "🤖";
?>

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Adivina el Número</title>

<link rel="stylesheet" href="styles4.css">

</head>

<body>

<!-- ================= AUDIO ================= -->
<audio id="bgMusic" src="audio/game-music-loop-6-144641.mp3"></audio>
<audio id="audioCorrect" src="audio/correct-6033.mp3"></audio>
<audio id="audioWrong" src="audio/wronganswer-37702.mp3"></audio>
<audio id="audioLose" src="audio/game-over-arcade-6435.mp3"></audio>

<!-- ================= NAVBAR TRANSPARENTE ================= -->
<nav id="navbar">

    <div id="vidas">❤️❤️❤️❤️❤️</div>

    <div class="progreso-container">

        <div class="nivelTexto">Nivel 6 de 7</div>

        <div class="barra">
            <div id="progreso" class="progreso"></div>
        </div>

    </div>

    <div id="puntos">⭐ 0</div>

    <div id="audio-control" onclick="toggleAudio()">🔊</div>

</nav>

<!-- ================= JUEGO CENTRADO ================= -->
<main id="juego">

    <div class="card-juego">

        <h1> Adivina el número (1 - 50)</h1>

        <p id="info">Tienes 5 intentos</p>

        <input type="number" id="inputNumero" min="1" max="50">

        <button id="btnAdivinar" onclick="verificar()">Adivinar</button>

        <div id="pista"></div>
        <div id="resultado"></div>

    </div>

</main>

<!-- ================= MASCOTA ================= -->
<div class="mascota">

    <div class="burbuja" id="mensajeMascota"></div>

    <div class="emoji">
        <?php echo $mascota; ?>
    </div>

</div>

<!-- ================= SCRIPTS ================= -->
<script src="mascota.js"></script>
<script src="script3.js"></script>

</body>
</html>