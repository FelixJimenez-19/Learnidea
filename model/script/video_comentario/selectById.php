<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/video_comentario/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Video_comentarioDao.php';
include './../../function/validation.php';
$_entity = new Video_comentarioDao();
if (isset($_POST['video_comentario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $video_comentario_id = $_POST['video_comentario_id'];
        $rs = $_entity->selectById($video_comentario_id);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
