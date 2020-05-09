<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/alineacion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/AlineacionDao.php';

include './../../function/validation.php';
if (isset($_POST['alineacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $_entity = new AlineacionDao();
        $alineacion_id = $_POST['alineacion_id'];
        $rs = $_entity->selectById($alineacion_id);
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
