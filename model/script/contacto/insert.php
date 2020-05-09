<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contacto/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ContactoDao.php';
include './../../function/validation.php';
$_entity = new ContactoDao();
if (isset($_POST['contacto_nombre']) and isset($_POST['contacto_url']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $contacto_nombre = $_POST['contacto_nombre'];
        $contacto_url = $_POST['contacto_url'];
        $_entity->insert($contacto_nombre, $contacto_url);

        if (isset($_FILES['contacto_icon'])) {
            $contacto_icon = $_FILES['contacto_icon'];
            if ($contacto_icon['tmp_name'] != "" or $contacto_icon['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/contacto_icon')) {
                    mkdir("../../../view/src/files/contacto_icon", 0700);
                }

                $contacto_id = mysqli_fetch_assoc($_entity->selectByAll($contacto_nombre, $contacto_url))['contacto_id'];

                $desde = $contacto_icon['tmp_name'];
                $hasta = "../../../view/src/files/contacto_icon/" . $contacto_id . ".png";
                copy($desde, $hasta);
                $_entity->updateContacto_icon($contacto_id . ".png", $contacto_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
