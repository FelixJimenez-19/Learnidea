<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion_respuesta/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Publicacion_respuestaDao.php';
include './../../function/validation.php';
$_entity = new Publicacion_respuestaDao();
if (isset($_POST['publicacion_respuesta_descripcion']) and isset($_POST['publicacion_respuesta_fecha']) and isset($_POST['publicacion_comentario_id']) and  isset($_POST['publicacion_respuesta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_respuesta_descripcion = $_POST['publicacion_respuesta_descripcion'];
        $publicacion_respuesta_fecha = $_POST['publicacion_respuesta_fecha'];
        $publicacion_comentario_id = $_POST['publicacion_comentario_id'];
        $publicacion_respuesta_id = $_POST['publicacion_respuesta_id'];
        $_entity->update($publicacion_respuesta_descripcion, $publicacion_respuesta_fecha, $publicacion_comentario_id, $publicacion_respuesta_id);

        if (isset($_FILES['publicacion_respuesta_foto'])) {
            $publicacion_respuesta_foto = $_FILES['publicacion_respuesta_foto'];
            if ($publicacion_respuesta_foto['tmp_name'] != "" or $publicacion_respuesta_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/publicacion_respuesta_foto')) {
                    mkdir("../../../view/src/files/publicacion_respuesta_foto", 0700);
                }

                $desde = $publicacion_respuesta_foto['tmp_name'];
                $hasta = "../../../view/src/files/publicacion_respuesta_foto/" . $publicacion_respuesta_id . ".png";
                copy($desde, $hasta);
                $_entity->updatePublicacion_respuesta_foto($publicacion_respuesta_id . ".png", $publicacion_respuesta_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
