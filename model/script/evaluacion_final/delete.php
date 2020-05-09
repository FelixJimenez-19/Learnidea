<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/evaluacion_final/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Evaluacion_finalDao.php';
include './../../function/validation.php';
$_entity = new Evaluacion_finalDao();
if (isset($_POST['evaluacion_final_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $evaluacion_final_id = $_POST['evaluacion_final_id'];
        $_entity->delete($evaluacion_final_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
