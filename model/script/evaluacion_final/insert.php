<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_final/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_finalDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_finalDao();
if (isset($_POST['evaluacion_final_tecnica']) and isset($_POST['evaluacion_final_instrumento']) and isset($_POST['evaluacion_final_descripcion']) and isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_final_tecnica = $_POST['evaluacion_final_tecnica'];
        $evaluacion_final_instrumento = $_POST['evaluacion_final_instrumento'];
        $evaluacion_final_descripcion = $_POST['evaluacion_final_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->insert($evaluacion_final_tecnica, $evaluacion_final_instrumento, $evaluacion_final_descripcion, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
