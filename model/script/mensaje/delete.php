<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/mensaje/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/MensajeDao.php';
include './../../function/validation.php';
$_entity = new MensajeDao();
if (isset($_POST['mensaje_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $mensaje_id = $_POST['mensaje_id'];
        $_entity->delete($mensaje_id);

        if (file_exists("../../../view/src/files/mensaje_foto/" . $mensaje_id . ".png")) {
            unlink("../../../view/src/files/mensaje_foto/" . $mensaje_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
