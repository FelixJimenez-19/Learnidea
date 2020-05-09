<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/alineacion/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/AlineacionDao.php';
include './../../function/validation.php';
$_entity = new AlineacionDao();
if (isset($_POST['alineacion_descripcion'])) {
    if(validation($_POST['key'])) {
    $alineacion_descripcion = $_POST['alineacion_descripcion'];
    $_entity->insert($alineacion_descripcion);

    echo json_encode(["Success"]);
    }else{
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
