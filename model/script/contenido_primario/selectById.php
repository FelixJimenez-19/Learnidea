<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contenido_primario/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Contenido_primarioDao.php';
include './../../function/validation.php';
$_entity = new Contenido_primarioDao();
if (isset($_POST['contenido_primario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $contenido_primario_id = $_POST['contenido_primario_id'];
        $rs = $_entity->selectById($contenido_primario_id);
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
