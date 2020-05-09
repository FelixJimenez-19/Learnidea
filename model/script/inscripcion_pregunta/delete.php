<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_pregunta/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_preguntaDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_preguntaDao();
if (isset($_POST['inscripcion_pregunta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_pregunta_id = $_POST['inscripcion_pregunta_id'];
        $_entity->delete($inscripcion_pregunta_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
