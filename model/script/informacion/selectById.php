<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/informacion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/InformacionDao.php';
include './../../function/validation.php';
$_entity = new InformacionDao();
if (isset($_POST['informacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $informacion_id = $_POST['informacion_id'];
        $rs = $_entity->selectById($informacion_id);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
