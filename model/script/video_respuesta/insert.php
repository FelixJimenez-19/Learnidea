<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/video_respuesta/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Video_respuestaDao.php';
include './../../function/validation.php';
$_entity = new Video_respuestaDao();
if (isset($_POST['video_respuesta_descripcion']) and isset($_POST['video_respuesta_fecha']) and isset($_POST['video_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $video_respuesta_descripcion = $_POST['video_respuesta_descripcion'];
        $video_respuesta_fecha = $_POST['video_respuesta_fecha'];
        $video_comentario_id = $_POST['video_comentario_id'];
        $_entity->insert($video_respuesta_descripcion, $video_respuesta_fecha, $video_comentario_id);

        if (isset($_FILES['video_respuesta_foto'])) {
            $video_respuesta_foto = $_FILES['video_respuesta_foto'];
            if ($video_respuesta_foto['tmp_name'] != "" or $video_respuesta_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/video_respuesta_foto')) {
                    mkdir("../../../view/src/files/video_respuesta_foto", 0700);
                }

                $video_respuesta_id = mysqli_fetch_assoc($_entity->selectByAll($video_respuesta_descripcion, $video_respuesta_fecha, $video_comentario_id))['video_respuesta_id'];

                $desde = $video_respuesta_foto['tmp_name'];
                $hasta = "../../../view/src/files/video_respuesta_foto/" . $video_respuesta_id . ".png";
                copy($desde, $hasta);
                $_entity->updateVideo_respuesta_foto($video_respuesta_id . ".png", $video_respuesta_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
