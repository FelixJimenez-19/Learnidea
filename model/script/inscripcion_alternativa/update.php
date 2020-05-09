<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_alternativa/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_alternativaDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_alternativaDao();
if (isset($_POST['inscripcion_pregunta_id']) and isset($_POST['seccion_alternativa_id']) and  isset($_POST['inscripcion_alternativa_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_pregunta_id = $_POST['inscripcion_pregunta_id'];
        $seccion_alternativa_id = $_POST['seccion_alternativa_id'];
        $inscripcion_alternativa_id = $_POST['inscripcion_alternativa_id'];
        $_entity->update($inscripcion_pregunta_id, $seccion_alternativa_id, $inscripcion_alternativa_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
