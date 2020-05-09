<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_leccion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_leccionDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_leccionDao();
if (isset($_POST['inscripcion_leccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_leccion_id = $_POST['inscripcion_leccion_id'];
        $rs = $_entity->selectById($inscripcion_leccion_id);
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
