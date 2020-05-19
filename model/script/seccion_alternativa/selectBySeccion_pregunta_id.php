<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_alternativa/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_alternativaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_alternativaDao();
if (isset($_POST['seccion_pregunta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_pregunta_id = $_POST['seccion_pregunta_id'];
        $rs = $_entity->selectBySeccion_pregunta_id($seccion_pregunta_id);
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
