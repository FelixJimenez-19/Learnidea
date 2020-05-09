<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion_leccion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Inscripcion_leccionDao.php';
include './../../function/validation.php';
$_entity = new Inscripcion_leccionDao();
if (isset($_POST['inscripcion_leccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_leccion_id = $_POST['inscripcion_leccion_id'];
        $_entity->delete($inscripcion_leccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
