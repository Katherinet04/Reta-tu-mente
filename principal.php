<?php

session_start();

$nombre =
$_SESSION['nombre']
?? "Jugador";

$mascota =
$_SESSION['mascota']
?? "🤖";

?>

<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0">

<title>Reta tu mente</title>

<link rel="stylesheet"
href="principal.css">

</head>

<body>

<h1 class="titulo">

Reta tu mente

</h1>

<div class="contenedor">

<div class="tarjeta">

<h2>

Hola
<?php echo htmlspecialchars($nombre); ?>


</h2>

<p>

¿Estás listo para jugar?

</p>

<button
class="raise"
id="start-button">

Empezar

</button>

</div>

</div>

<!-- MASCOTA -->

<div class="mascotaZona">

<div id="mascota">

<?php echo htmlspecialchars($mascota); ?>

</div>

<div class="burbuja">

¡Hola <?php echo htmlspecialchars($nombre); ?>!<br>

Estoy aquí para ayudarte 😊

</div>

</div>

<script src="script5.js"></script>

</body>

</html>