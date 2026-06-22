<?php
session_start();

$puntaje = $_SESSION['puntaje'] ?? 0;
$mascota = $_SESSION['mascota'] ?? "🐶";
$nivel = $_SESSION['nivel'] ?? 1;
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Siguiente Nivel</title>
<link rel="stylesheet" href="nivel.css">
</head>

<body>

<div class="contenedor">

    <div class="mascota"><?= $mascota ?></div>

    <div class="card">

        <h1>🌟 Siguiente Nivel</h1>

        <p class="felicitaciones">🎉 ¡Felicitaciones</p>

        <p class="puntaje">⭐ <?= $puntaje ?> puntos</p>


        <div class="botones">
            <a class="btn" href="siguientenivel.php"> ¡Vamos!</a>
            <button class="btn2" onclick="abrirModal()">ℹ️ Información</button>
        </div>

    </div>

</div>

<div class="modal" id="modal">
    <div class="modal-content">
        <h2>📊 Información del nivel</h2>
        <p>⭐ Puntaje: <?= $puntaje ?></p>
        <p>🐶 Mascota: <?= $mascota ?></p>
        <p>🎮 Nivel: <?= $nivel ?></p>
        <button onclick="cerrarModal()">Cerrar</button>
    </div>
</div>

<script src="nivel.js"></script>

</body>
</html>