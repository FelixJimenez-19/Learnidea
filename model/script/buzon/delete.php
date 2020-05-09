<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/buzon/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/BuzonDao.php';
include './../../function/validation.php';
$_entity = new BuzonDao();
if (isset($_POST['buzon_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $buzon_id = $_POST['buzon_id'];
        $_entity->delete($buzon_id);

        if (file_exists("../../../view/src/files/buzon_foto/" . $buzon_id . ".png")) {
            unlink("../../../view/src/files/buzon_foto/" . $buzon_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
