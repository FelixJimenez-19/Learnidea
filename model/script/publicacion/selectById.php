<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/PublicacionDao.php';
include './../../function/validation.php';
$_entity = new PublicacionDao();
if (isset($_POST['publicacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_id = $_POST['publicacion_id'];
        $rs = $_entity->selectById($publicacion_id);
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
