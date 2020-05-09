<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_tipo/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Usuario_tipoDao.php';
include './../../function/validation.php';
$_entity = new Usuario_tipoDao();
if (isset($_POST['usuario_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tipo_id = $_POST['usuario_tipo_id'];
        $rs = $_entity->selectById($usuario_tipo_id);
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
