<?php
session_start();

$puntaje = $_SESSION['puntaje'] ?? 0;

// lógica del juego
$ganaste = $puntaje >= 100;
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resultado Final</title>
<link rel="stylesheet" href="final.css">
</head>

<body>

<div class="contenedor">

    <div class="card">

        <?php if($ganaste): ?>

            <div class="icono">🏆</div>
            <h1>¡GANASTE!</h1>
            <h2>🎉 Completaste el juego</h2>
            <p>Lograste superar los 100 puntos</p>

        <?php else: ?>

            <div class="icono">💔</div>
            <h1>PERDISTE</h1>
            <h2> Inténtalo nuevamente</h2>
            <p>No alcanzaste el puntaje necesario (100)</p>

        <?php endif; ?>

        <div class="botones">

            <a href="principal.php" class="btn">🔄 Jugar de nuevo</a>

            <a href="login.html" class="btn2">🏠 Volver al menú</a>

        </div>

    </div>

</div>

<script src="final.js"></script>

</body>
</html>