<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contacto/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/ContactoDao.php';
include './../../function/validation.php';
$_entity = new ContactoDao();
if (isset($_POST['contacto_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $contacto_id = $_POST['contacto_id'];
        $_entity->delete($contacto_id);

        if (file_exists("../../../view/src/files/contacto_icon/" . $contacto_id . ".png")) {
            unlink("../../../view/src/files/contacto_icon/" . $contacto_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
