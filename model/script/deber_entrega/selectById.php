<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/deber_entrega/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Deber_entregaDao.php';
include './../../function/validation.php';
$_entity = new Deber_entregaDao();
if (isset($_POST['deber_entrega_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $deber_entrega_id = $_POST['deber_entrega_id'];
        $rs = $_entity->selectById($deber_entrega_id);
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
