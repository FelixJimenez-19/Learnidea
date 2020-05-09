<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_formativa/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_formativaDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_formativaDao();
if (isset($_POST['evaluacion_formativa_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_formativa_id = $_POST['evaluacion_formativa_id'];
        $rs = $_entity->selectById($evaluacion_formativa_id);
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
