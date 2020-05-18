<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_seccion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_seccionDao.php';
include './../../function/validation.php';
$_entity = new Curso_seccionDao();
if (isset($_POST['curso_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_id = $_POST['curso_id'];
        $rs = $_entity->selectByCurso_id($curso_id);
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
