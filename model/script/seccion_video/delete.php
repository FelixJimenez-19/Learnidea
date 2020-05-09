<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_video/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Seccion_videoDao.php';
include './../../function/validation.php';
$_entity = new Seccion_videoDao();
if (isset($_POST['seccion_video_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_video_id = $_POST['seccion_video_id'];
        $_entity->delete($seccion_video_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
