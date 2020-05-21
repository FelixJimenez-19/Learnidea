<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/slider/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/SliderDao.php';
include './../../function/validation.php';
$_entity = new SliderDao();
if (isset($_POST['slider_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $slider_id = $_POST['slider_id'];
        $rs = $_entity->selectById($slider_id);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
