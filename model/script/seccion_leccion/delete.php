<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_leccion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Seccion_leccionDao.php';
include './../../function/validation.php';
$_entity = new Seccion_leccionDao();
if (isset($_POST['seccion_leccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_leccion_id = $_POST['seccion_leccion_id'];
        $_entity->delete($seccion_leccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
