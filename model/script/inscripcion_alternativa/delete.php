<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_alternativa/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_alternativaDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_alternativaDao();
if (isset($_POST['inscripcion_alternativa_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_alternativa_id = $_POST['inscripcion_alternativa_id'];
        $_entity->delete($inscripcion_alternativa_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
