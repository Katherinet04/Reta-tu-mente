<?php
session_start();

$nombre = $_SESSION['nombre'] ?? "Jugador";
$mascota = $_SESSION['mascota'] ?? "🤖";
?>

<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Encuentra el Gato</title>

<link rel="stylesheet" href="styles1.css">
</head>

<body>

<!-- NAVBAR -->
<div id="navbar">
    <div class="progreso-container">
        <div class="nivelTexto">Nivel 5 de 7</div>
        <div class="barra">
            <div class="progreso" id="progress-fill"></div>
        </div>
    </div>

    <div id="puntos">⭐ <span id="points">0</span></div>
</div>

<!-- TITULO -->
<div id="tituloJuego">
    <h1>😺 Encuentra el Gato</h1>
    <p>Observa atentamente dónde se esconde.</p>
</div>

<!-- JUEGO -->
<div id="juego">

    <?php for ($i = 0; $i < 9; $i++): ?>
        <div class="card" data-index="<?= $i ?>">
            <div class="card-inner">
                <div class="card-front">❓</div>
                <div class="card-back"></div>
            </div>
        </div>
    <?php endfor; ?>

</div>

<!-- MENSAJE -->
<div id="textoCentro"></div>

<!-- RESULTADO -->
<div id="footer">
    <div id="result"></div>
</div>

<!-- MASCOTA -->
<div class="mascotaZona">
    <div id="mascota"><?php echo $mascota; ?></div>
    <div id="mensaje"></div>
</div>

<!-- AUDIO -->
<audio id="background-audio"
src="audio/game-music-loop-6-144641.mp3"
autoplay loop></audio>

<script src="mascota.js"></script>
<script src="cartas2.js"></script>

</body>
</html>