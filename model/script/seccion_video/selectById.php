<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_video/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_videoDao.php';
include './../../function/validation.php';
$_entity = new Seccion_videoDao();
if (isset($_POST['seccion_video_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_video_id = $_POST['seccion_video_id'];
        $rs = $_entity->selectById($seccion_video_id);
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
