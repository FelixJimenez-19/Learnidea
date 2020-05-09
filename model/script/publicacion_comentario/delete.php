<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion_comentario/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Publicacion_comentarioDao.php';
include './../../function/validation.php';
$_entity = new Publicacion_comentarioDao();
if (isset($_POST['publicacion_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_comentario_id = $_POST['publicacion_comentario_id'];
        $_entity->delete($publicacion_comentario_id);

        if (file_exists("../../../view/src/files/publicacion_comentario_foto/" . $publicacion_comentario_id . ".png")) {
            unlink("../../../view/src/files/publicacion_comentario_foto/" . $publicacion_comentario_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
