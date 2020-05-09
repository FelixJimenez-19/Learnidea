<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_diagnostica/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_diagnosticaDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_diagnosticaDao();
if (isset($_POST['evaluacion_diagnostica_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_diagnostica_id = $_POST['evaluacion_diagnostica_id'];
        $_entity->delete($evaluacion_diagnostica_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
