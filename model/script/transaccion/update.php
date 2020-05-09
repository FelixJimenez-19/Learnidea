<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/transaccion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/TransaccionDao.php';
include './../../function/validation.php';
$_entity = new TransaccionDao();
if (isset($_POST['transaccion_descripcion']) and isset($_POST['transaccion_valor']) and isset($_POST['transaccion_fecha']) and isset($_POST['transaccion_tipo_id']) and  isset($_POST['transaccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $transaccion_descripcion = $_POST['transaccion_descripcion'];
        $transaccion_valor = $_POST['transaccion_valor'];
        $transaccion_fecha = $_POST['transaccion_fecha'];
        $transaccion_tipo_id = $_POST['transaccion_tipo_id'];
        $transaccion_id = $_POST['transaccion_id'];
        $_entity->update($transaccion_descripcion, $transaccion_valor, $transaccion_fecha, $transaccion_tipo_id, $transaccion_id);

        if (isset($_FILES['transaccion_foto'])) {
            $transaccion_foto = $_FILES['transaccion_foto'];
            if ($transaccion_foto['tmp_name'] != "" or $transaccion_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/transaccion_foto')) {
                    mkdir("../../../view/src/files/transaccion_foto", 0700);
                }

                $desde = $transaccion_foto['tmp_name'];
                $hasta = "../../../view/src/files/transaccion_foto/" . $transaccion_id . ".png";
                copy($desde, $hasta);
                $_entity->updateTransaccion_foto($transaccion_id . ".png", $transaccion_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
