<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/alineacion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/AlineacionDao.php';
include './../../function/validation.php';
$_entity = new AlineacionDao();
if (isset($_POST['alineacion_id'])) {
    if (validation($_POST['key'])) {
        $alineacion_id = $_POST['alineacion_id'];
        $_entity->delete($alineacion_id);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
