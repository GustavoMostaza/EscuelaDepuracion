<?php

// Configuración de la base de datos
$servername = "localhost"; // Cambia esto por tu servidor de base de datos
$username = "root"; // Cambia esto por tu nombre de usuario de MySQL
$password = ""; // Cambia esto por tu contraseña de MySQL
$database = "baseaviones"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos
$sql = "SELECT Destino, Descripcion, Precio FROM destinoss";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Array para almacenar los resultados
    $destinos = array();

    // Recorrer los resultados y almacenarlos en el array
    while($row = $result->fetch_assoc()) {
        $destinos[] = $row;
    }

    // Devolver los resultados en formato JSON con el encabezado Access-Control-Allow-Origin
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://127.0.0.1:5501'); // Cambia esto por la URL de tu aplicación web
    echo json_encode($destinos);
} else {
    // Si no hay resultados
    echo "No se encontraron resultados";
}

// Cerrar conexión
$conn->close();

?>
