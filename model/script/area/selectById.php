<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/area/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/AreaDao.php';
include './../../function/validation.php';
$_entity = new AreaDao();
if (isset($_POST['area_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $area_id = $_POST['area_id'];
        $rs = $_entity->selectById($area_id);
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
