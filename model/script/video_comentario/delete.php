<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/video_comentario/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Video_comentarioDao.php';
include './../../function/validation.php';
$_entity = new Video_comentarioDao();
if (isset($_POST['video_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $video_comentario_id = $_POST['video_comentario_id'];
        $_entity->delete($video_comentario_id);

        if (file_exists("../../../view/src/files/video_comentario_foto/" . $video_comentario_id . ".png")) {
            unlink("../../../view/src/files/video_comentario_foto/" . $video_comentario_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
