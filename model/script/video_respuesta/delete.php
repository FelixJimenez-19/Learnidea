<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/video_respuesta/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Video_respuestaDao.php';
include './../../function/validation.php';
$_entity = new Video_respuestaDao();
if (isset($_POST['video_respuesta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $video_respuesta_id = $_POST['video_respuesta_id'];
        $_entity->delete($video_respuesta_id);

        if (file_exists("../../../view/src/files/video_respuesta_foto/" . $video_respuesta_id . ".png")) {
            unlink("../../../view/src/files/video_respuesta_foto/" . $video_respuesta_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
