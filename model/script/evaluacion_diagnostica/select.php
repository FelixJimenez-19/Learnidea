<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_diagnostica/select.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_diagnosticaDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_diagnosticaDao();
if (isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $rs = $_entity->select();
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
