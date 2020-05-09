<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/duracion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/DuracionDao.php';
include './../../function/validation.php';
$_entity = new DuracionDao();
if (isset($_POST['duracion_descripcion']) and  isset($_POST['duracion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $duracion_descripcion = $_POST['duracion_descripcion'];
        $duracion_id = $_POST['duracion_id'];
        $_entity->update($duracion_descripcion, $duracion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
