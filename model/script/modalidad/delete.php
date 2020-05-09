<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/modalidad/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/ModalidadDao.php';
include './../../function/validation.php';
$_entity = new ModalidadDao();
if (isset($_POST['modalidad_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $modalidad_id = $_POST['modalidad_id'];
        $_entity->delete($modalidad_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
