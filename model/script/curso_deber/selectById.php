<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_deber/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_deberDao.php';
include './../../function/validation.php';
$_entity = new Curso_deberDao();

if (isset($_POST['curso_deber_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_deber_id = $_POST['curso_deber_id'];
        $rs = $_entity->selectById($curso_deber_id);
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
