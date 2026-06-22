<?php
session_start();

// recibir puntaje de forma segura
$puntaje = isset($_GET['puntaje']) ? intval($_GET['puntaje']) : 0;

// guardar opcionalmente
$_SESSION['puntaje'] = $puntaje;

$meta = 100;
$ganaste = $puntaje >= $meta;

$mascota = $_SESSION['mascota'] ?? "🤖";
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resultado</title>

<!-- 👇 TU CSS ORIGINAL (NO LO BORRO) -->
<link rel="stylesheet" href="resultado.css">
</head>

<body>

<div class="fondo"></div>

<div class="contenedor">

    <div class="mascota"><?= htmlspecialchars($mascota) ?></div>

    <?php if ($ganaste): ?>

        <h1 class="titulo">🏆 ¡GANASTE!</h1>

        <div class="card">
            <p>⭐ Puntaje final:</p>
            <h2><?= $puntaje ?></h2>

            <p class="ok">🎉 ¡Excelente! Superaste el desafío.</p>

            <a href="nivel.php" class="btn btn-ok">🚀 Siguiente nivel</a>
        </div>

    <?php else: ?>

        <h1 class="titulo">💔 PERDISTE</h1>

        <div class="card">
            <p>⭐ Puntaje final:</p>
            <h2><?= $puntaje ?></h2>

            <p class="fail">😢 No alcanzaste los <?= $meta ?> puntos.</p>

            <a href="pantalla1.php" class="btn btn-fail">🔄 Intentar nuevamente</a>
        </div>

    <?php endif; ?>

</div>

</body>
</html>