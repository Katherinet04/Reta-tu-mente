<?php

$nombre = $_GET['nombre'];

?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Bienvenido</title>
<link rel="stylesheet" href="estilos.css">
</head>
<body>

<div class="contenedor">

    <div class="robot">
        🦖
    </div>

    <h1>
        ¡Hola <?php echo $nombre; ?>!
    </h1>

    <h2>
        Tu aventura está por comenzar
    </h2>

    <a href="principal.html">
        <button>
            🎮 Entrar al Juego
        </button>
    </a>

</div>

</body>
</html>