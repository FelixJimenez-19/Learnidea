<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/objetivo/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ObjetivoDao.php';
include './../../function/validation.php';
$_entity = new ObjetivoDao();
if (isset($_POST['objetivo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $objetivo_id = $_POST['objetivo_id'];
        $rs = $_entity->selectById($objetivo_id);
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
