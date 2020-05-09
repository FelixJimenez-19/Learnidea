<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/transaccion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/TransaccionDao.php';
include './../../function/validation.php';
$_entity = new TransaccionDao();
if (isset($_POST['transaccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $transaccion_id = $_POST['transaccion_id'];
        $rs = $_entity->selectById($transaccion_id);
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
