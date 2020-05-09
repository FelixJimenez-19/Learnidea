<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/transaccion_tipo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Transaccion_tipoDao.php';
include './../../function/validation.php';
$_entity = new Transaccion_tipoDao();
if (isset($_POST['transaccion_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $transaccion_tipo_id = $_POST['transaccion_tipo_id'];
        $_entity->delete($transaccion_tipo_id);

        if (file_exists("../../../view/src/files/transaccion_tipo_logo/" . $transaccion_tipo_id . ".png")) {
            unlink("../../../view/src/files/transaccion_tipo_logo/" . $transaccion_tipo_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
