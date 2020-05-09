<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_diagnostica/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_diagnosticaDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_diagnosticaDao();
if (isset($_POST['evaluacion_diagnostica_tecnica']) and isset($_POST['evaluacion_diagnostica_instrumento']) and isset($_POST['evaluacion_diagnostica_descripcion']) and isset($_POST['curso_modelo_id']) and  isset($_POST['evaluacion_diagnostica_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_diagnostica_tecnica = $_POST['evaluacion_diagnostica_tecnica'];
        $evaluacion_diagnostica_instrumento = $_POST['evaluacion_diagnostica_instrumento'];
        $evaluacion_diagnostica_descripcion = $_POST['evaluacion_diagnostica_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $evaluacion_diagnostica_id = $_POST['evaluacion_diagnostica_id'];
        $_entity->update($evaluacion_diagnostica_tecnica, $evaluacion_diagnostica_instrumento, $evaluacion_diagnostica_descripcion, $curso_modelo_id, $evaluacion_diagnostica_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
