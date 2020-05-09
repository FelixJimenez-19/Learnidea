<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_video/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_videoDao.php';
include './../../function/validation.php';
$_entity = new Seccion_videoDao();
if (isset($_POST['seccion_video_nombre']) and isset($_POST['seccion_video_material']) and isset($_POST['seccion_video_iframe']) and isset($_POST['seccion_video_descripcion']) and isset($_POST['curso_seccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_video_nombre = $_POST['seccion_video_nombre'];
        $seccion_video_material = $_POST['seccion_video_material'];
        $seccion_video_iframe = $_POST['seccion_video_iframe'];
        $seccion_video_descripcion = $_POST['seccion_video_descripcion'];
        $curso_seccion_id = $_POST['curso_seccion_id'];
        $_entity->insert($seccion_video_nombre, $seccion_video_material, $seccion_video_iframe, $seccion_video_descripcion, $curso_seccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
