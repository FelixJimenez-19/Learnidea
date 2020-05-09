<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/PublicacionDao.php';
include './../../function/validation.php';
$_entity = new PublicacionDao();
if (isset($_POST['publicacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_id = $_POST['publicacion_id'];
        $_entity->delete($publicacion_id);

        if (file_exists("../../../view/src/files/publicacion_foto/" . $publicacion_id . ".png")) {
            unlink("../../../view/src/files/publicacion_foto/" . $publicacion_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
