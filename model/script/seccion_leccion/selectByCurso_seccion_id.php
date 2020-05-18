<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_leccion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_leccionDao.php';
include './../../function/validation.php';
$_entity = new Seccion_leccionDao();
if (isset($_POST['curso_seccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_seccion_id = $_POST['curso_seccion_id'];
        $rs = $_entity->selectByCurso_seccion_id($curso_seccion_id);
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
