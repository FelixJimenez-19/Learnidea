<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/video_comentario/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Video_comentarioDao.php';
include './../../function/validation.php';
$_entity = new Video_comentarioDao();
if (isset($_POST['video_comentario_descripcion']) and isset($_POST['video_comentario_fecha']) and isset($_POST['seccion_video_id']) and  isset($_POST['video_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $video_comentario_descripcion = $_POST['video_comentario_descripcion'];
        $video_comentario_fecha = $_POST['video_comentario_fecha'];
        $seccion_video_id = $_POST['seccion_video_id'];
        $video_comentario_id = $_POST['video_comentario_id'];
        $_entity->update($video_comentario_descripcion, $video_comentario_fecha, $seccion_video_id, $video_comentario_id);

        if (isset($_FILES['video_comentario_foto'])) {
            $video_comentario_foto = $_FILES['video_comentario_foto'];
            if ($video_comentario_foto['tmp_name'] != "" or $video_comentario_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/video_comentario_foto')) {
                    mkdir("../../../view/src/files/video_comentario_foto", 0700);
                }

                $desde = $video_comentario_foto['tmp_name'];
                $hasta = "../../../view/src/files/video_comentario_foto/" . $video_comentario_id . ".png";
                copy($desde, $hasta);
                $_entity->updateVideo_comentario_foto($video_comentario_id . ".png", $video_comentario_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
