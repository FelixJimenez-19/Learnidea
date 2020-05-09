<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/alineacion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/AlineacionDao.php';
include './../../function/validation.php';
$_entity = new AlineacionDao();
if (isset($_POST['alineacion_descripcion']) and  isset($_POST['alineacion_id'])) {
    if(validation($_POST['key'])) {
    $alineacion_descripcion = $_POST['alineacion_descripcion'];
    $alineacion_id = $_POST['alineacion_id'];
    $_entity->update($alineacion_descripcion, $alineacion_id);

    echo json_encode(["Success"]);
    }else{
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
