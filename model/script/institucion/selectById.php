<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/institucion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/InstitucionDao.php';
include './../../function/validation.php';
$_entity = new InstitucionDao();
if (isset($_POST['institucion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $institucion_id = $_POST['institucion_id'];
        $rs = $_entity->selectById($institucion_id);
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
