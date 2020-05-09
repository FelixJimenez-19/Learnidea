<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/modalidad/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ModalidadDao.php';
include './../../function/validation.php';
$_entity = new ModalidadDao();
if (isset($_POST['modalidad_descripcion']) and  isset($_POST['modalidad_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $modalidad_descripcion = $_POST['modalidad_descripcion'];
        $modalidad_id = $_POST['modalidad_id'];
        $_entity->update($modalidad_descripcion, $modalidad_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
