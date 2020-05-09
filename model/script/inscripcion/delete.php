<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/InscripcionDao.php';
include './../../function/validation.php';
$_entity = new InscripcionDao();
if (isset($_POST['inscripcion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_id = $_POST['inscripcion_id'];
        $_entity->delete($inscripcion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
