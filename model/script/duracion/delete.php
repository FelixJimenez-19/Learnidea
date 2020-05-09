<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/duracion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/DuracionDao.php';
include './../../function/validation.php';
$_entity = new DuracionDao();

if (isset($_POST['duracion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $duracion_id = $_POST['duracion_id'];
        $_entity->delete($duracion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
