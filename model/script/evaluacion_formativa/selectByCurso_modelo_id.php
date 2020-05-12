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
if (isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $rs = $_entity->selectByCurso_modelo_id($curso_modelo_id);
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
