<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/estrategia/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EstrategiaDao.php';
include './../../function/validation.php';
$_entity = new EstrategiaDao();
if (isset($_POST['estrategia_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $estrategia_id = $_POST['estrategia_id'];
        $rs = $_entity->selectById($estrategia_id);
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
