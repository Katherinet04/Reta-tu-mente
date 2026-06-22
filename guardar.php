<?php

session_start();

include("conexion.php");

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$grado = $_POST['grado'];
$mascota = $_POST['mascota'];

$_SESSION['nombre'] = $nombre;
$_SESSION['mascota'] = $mascota;

$sql = "INSERT INTO jugadores
(nombre,edad,grado)
VALUES
('$nombre','$edad','$grado')";

if(mysqli_query($conexion,$sql)){

header("Location: principal.php");

exit();

}

echo "Error al guardar";

?>