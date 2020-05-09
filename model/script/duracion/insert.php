<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/duracion/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/DuracionDao.php';
include './../../function/validation.php';
$_entity = new DuracionDao();
if (isset($_POST['duracion_descripcion']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $duracion_descripcion = $_POST['duracion_descripcion'];
        $_entity->insert($duracion_descripcion);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
