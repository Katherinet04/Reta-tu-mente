<?php

$servidor = "127.0.0.1";
$usuario = "root";
$password = "";
$bd = "juego_ninos";

$conexion = mysqli_connect(
    $servidor,
    $usuario,
    $password,
    $bd
);

if(!$conexion){
    die("Error de conexión: " . mysqli_connect_error());
}

?>