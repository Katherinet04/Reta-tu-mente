<?php
session_start();

$puntaje = $_SESSION['puntaje'] ?? 0;
$mascota = $_SESSION['mascota'] ?? "🐶";
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Game Over</title>
<link rel="stylesheet" href="game_over.css">
</head>

<body>

<div class="contenedor">

<div class="mascota"><?= $mascota ?></div>

<h1>🎮 GAME OVER</h1>

<p>¡No te rindas! Cada intento te hace más fuerte.</p>

<h2>⭐ <?= $puntaje ?></h2>

<div class="botones">

<a href="nivel_actual.php" class="btn">🔄 Reintentar</a>
<a href="index.php" class="btn2">🚪 Salir</a>

</div>

</div>

</body>
</html>