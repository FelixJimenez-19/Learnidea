<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/transaccion_tipo/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Transaccion_tipoDao.php';
include './../../function/validation.php';
$_entity = new Transaccion_tipoDao();
if (isset($_POST['transaccion_tipo_nombre']) and isset($_POST['transaccion_tipo_numero']) and isset($_POST['transaccion_tipo_descripcion']) and isset($_POST['transaccion_tipo_credito']) and isset($_POST['transaccion_tipo_entrada']) and isset($_POST['transaccion_tipo_salida']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $transaccion_tipo_nombre = $_POST['transaccion_tipo_nombre'];
        $transaccion_tipo_numero = $_POST['transaccion_tipo_numero'];
        $transaccion_tipo_descripcion = $_POST['transaccion_tipo_descripcion'];
        $transaccion_tipo_credito = $_POST['transaccion_tipo_credito'];
        $transaccion_tipo_entrada = $_POST['transaccion_tipo_entrada'];
        $transaccion_tipo_salida = $_POST['transaccion_tipo_salida'];
        $_entity->insert($transaccion_tipo_nombre, $transaccion_tipo_numero, $transaccion_tipo_descripcion, $transaccion_tipo_credito, $transaccion_tipo_entrada, $transaccion_tipo_salida);

        if (isset($_FILES['transaccion_tipo_logo'])) {
            $transaccion_tipo_logo = $_FILES['transaccion_tipo_logo'];
            if ($transaccion_tipo_logo['tmp_name'] != "" or $transaccion_tipo_logo['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/transaccion_tipo_logo')) {
                    mkdir("../../../view/src/files/transaccion_tipo_logo", 0700);
                }

                $transaccion_tipo_id = mysqli_fetch_assoc($_entity->selectByAll($transaccion_tipo_nombre, $transaccion_tipo_numero, $transaccion_tipo_descripcion, $transaccion_tipo_credito, $transaccion_tipo_entrada, $transaccion_tipo_salida))['transaccion_tipo_id'];

                $desde = $transaccion_tipo_logo['tmp_name'];
                $hasta = "../../../view/src/files/transaccion_tipo_logo/" . $transaccion_tipo_id . ".png";
                copy($desde, $hasta);
                $_entity->updateTransaccion_tipo_logo($transaccion_tipo_id . ".png", $transaccion_tipo_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
