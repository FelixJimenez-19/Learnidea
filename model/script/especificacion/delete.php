<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/especificacion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/EspecificacionDao.php';
include './../../function/validation.php';
$_entity = new EspecificacionDao();
if (isset($_POST['especificacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $especificacion_id = $_POST['especificacion_id'];
        $_entity->delete($especificacion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
