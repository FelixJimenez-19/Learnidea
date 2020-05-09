<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_formativa/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_formativaDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_formativaDao();
if (isset($_POST['evaluacion_formativa_tecnica']) and isset($_POST['evaluacion_formativa_instrumento']) and isset($_POST['evaluacion_formativa_descripcion']) and isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_formativa_tecnica = $_POST['evaluacion_formativa_tecnica'];
        $evaluacion_formativa_instrumento = $_POST['evaluacion_formativa_instrumento'];
        $evaluacion_formativa_descripcion = $_POST['evaluacion_formativa_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->insert($evaluacion_formativa_tecnica, $evaluacion_formativa_instrumento, $evaluacion_formativa_descripcion, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
