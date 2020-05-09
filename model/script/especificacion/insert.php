<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/especificacion/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EspecificacionDao.php';
include './../../function/validation.php';
$_entity = new EspecificacionDao();
if (isset($_POST['especificacion_codigo']) and isset($_POST['especificacion_descripcion']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $especificacion_codigo = $_POST['especificacion_codigo'];
        $especificacion_descripcion = $_POST['especificacion_descripcion'];
        $_entity->insert($especificacion_codigo, $especificacion_descripcion);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
