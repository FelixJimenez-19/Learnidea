<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/area/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/AreaDao.php';
include './../../function/validation.php';
$_entity = new AreaDao();
if (isset($_POST['area_id']) and isset($_POST['key'])) {
    if(validation($_POST['key'])) {
    $area_id = $_POST['area_id'];
    $_entity->delete($area_id);

    echo json_encode(["Success"]);
    }else{
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
