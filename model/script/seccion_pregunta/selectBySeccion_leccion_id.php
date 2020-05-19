<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_pregunta/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_preguntaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_preguntaDao();
if (isset($_POST['seccion_leccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {

        $seccion_leccion_id = $_POST['seccion_leccion_id'];
        $rs = $_entity->selectBySeccion_leccion_id($seccion_leccion_id);
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
