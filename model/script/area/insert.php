<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/area/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/AreaDao.php';
include './../../function/validation.php';
$_entity = new AreaDao();
if (isset($_POST['area_codigo']) and isset($_POST['area_descripcion']) and isset($_POST['key']) ) {
    if(validation($_POST['key'])) {
    $area_codigo = $_POST['area_codigo'];
    $area_descripcion = $_POST['area_descripcion'];
    $_entity->insert($area_codigo, $area_descripcion);
    echo json_encode(["Success"]);
    }else{
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
