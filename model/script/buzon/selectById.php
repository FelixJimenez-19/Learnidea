<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/buzon/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/BuzonDao.php';
include './../../function/validation.php';
$_entity = new BuzonDao();
if (isset($_POST['buzon_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $buzon_id = $_POST['buzon_id'];
        $rs = $_entity->selectById($buzon_id);
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
