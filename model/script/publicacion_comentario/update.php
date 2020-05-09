<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion_comentario/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Publicacion_comentarioDao.php';
include './../../function/validation.php';
$_entity = new Publicacion_comentarioDao();
if (isset($_POST['publicacion_comentario_descripcion']) and isset($_POST['publicacion_comentario_fecha']) and isset($_POST['publicacion_id']) and  isset($_POST['publicacion_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_comentario_descripcion = $_POST['publicacion_comentario_descripcion'];
        $publicacion_comentario_fecha = $_POST['publicacion_comentario_fecha'];
        $publicacion_id = $_POST['publicacion_id'];
        $publicacion_comentario_id = $_POST['publicacion_comentario_id'];
        $_entity->update($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id, $publicacion_comentario_id);

        if (isset($_FILES['publicacion_comentario_foto'])) {
            $publicacion_comentario_foto = $_FILES['publicacion_comentario_foto'];
            if ($publicacion_comentario_foto['tmp_name'] != "" or $publicacion_comentario_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/publicacion_comentario_foto')) {
                    mkdir("../../../view/src/files/publicacion_comentario_foto", 0700);
                }

                $desde = $publicacion_comentario_foto['tmp_name'];
                $hasta = "../../../view/src/files/publicacion_comentario_foto/" . $publicacion_comentario_id . ".png";
                copy($desde, $hasta);
                $_entity->updatePublicacion_comentario_foto($publicacion_comentario_id . ".png", $publicacion_comentario_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
