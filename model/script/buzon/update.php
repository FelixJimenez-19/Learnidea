<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/buzon/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/BuzonDao.php';
include './../../function/validation.php';
$_entity = new BuzonDao();
if (isset($_POST['buzon_email']) and isset($_POST['buzon_descripcion']) and  isset($_POST['buzon_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $buzon_email = $_POST['buzon_email'];
        $buzon_descripcion = $_POST['buzon_descripcion'];
        $buzon_id = $_POST['buzon_id'];
        $_entity->update($buzon_email, $buzon_descripcion, $buzon_id);

        if (isset($_FILES['buzon_foto'])) {
            $buzon_foto = $_FILES['buzon_foto'];
            if ($buzon_foto['tmp_name'] != "" or $buzon_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/buzon_foto')) {
                    mkdir("../../../view/src/files/buzon_foto", 0700);
                }

                $desde = $buzon_foto['tmp_name'];
                $hasta = "../../../view/src/files/buzon_foto/" . $buzon_id . ".png";
                copy($desde, $hasta);
                $_entity->updateBuzon_foto($buzon_id . ".png", $buzon_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
