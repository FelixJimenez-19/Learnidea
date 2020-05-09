<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/transaccion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/TransaccionDao.php';
include './../../function/validation.php';
$_entity = new TransaccionDao();
if (isset($_POST['transaccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $transaccion_id = $_POST['transaccion_id'];
        $_entity->delete($transaccion_id);

        if (file_exists("../../../view/src/files/transaccion_foto/" . $transaccion_id . ".png")) {
            unlink("../../../view/src/files/transaccion_foto/" . $transaccion_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
