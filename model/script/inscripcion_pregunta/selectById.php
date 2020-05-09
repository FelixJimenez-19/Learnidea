<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_pregunta/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_preguntaDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_preguntaDao();
if (isset($_POST['inscripcion_pregunta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_pregunta_id = $_POST['inscripcion_pregunta_id'];
        $rs = $_entity->selectById($inscripcion_pregunta_id);
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
