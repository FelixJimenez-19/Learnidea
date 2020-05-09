<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/especificacion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EspecificacionDao.php';
include './../../function/validation.php';
$_entity = new EspecificacionDao();
if (isset($_POST['especificacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $especificacion_id = $_POST['especificacion_id'];
        $rs = $_entity->selectById($especificacion_id);
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
