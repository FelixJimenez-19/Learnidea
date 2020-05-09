<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/deber_entrega/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Deber_entregaDao.php';
include './../../function/validation.php';
$_entity = new Deber_entregaDao();
if (isset($_POST['deber_entrega_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $deber_entrega_id = $_POST['deber_entrega_id'];
        $_entity->delete($deber_entrega_id);

        if (file_exists("../../../view/src/files/deber_entrega_foto/" . $deber_entrega_id . ".png")) {
            unlink("../../../view/src/files/deber_entrega_foto/" . $deber_entrega_id . ".png");
        }

        if (file_exists("../../../view/src/files/deber_entrega_pdf/" . $deber_entrega_id . ".pdf")) {
            unlink("../../../view/src/files/deber_entrega_pdf/" . $deber_entrega_id . ".pdf");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
