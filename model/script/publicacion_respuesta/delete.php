<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion_respuesta/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Publicacion_respuestaDao.php';
include './../../function/validation.php';
$_entity = new Publicacion_respuestaDao();
if (isset($_POST['publicacion_respuesta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_respuesta_id = $_POST['publicacion_respuesta_id'];
        $_entity->delete($publicacion_respuesta_id);

        if (file_exists("../../../view/src/files/publicacion_respuesta_foto/" . $publicacion_respuesta_id . ".png")) {
            unlink("../../../view/src/files/publicacion_respuesta_foto/" . $publicacion_respuesta_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
