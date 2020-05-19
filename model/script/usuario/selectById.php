<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/select.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
if (isset($_POST['usuario_id']) && isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $_entity = new UsuarioDao();
        $usuario_id = $_POST['usuario_id'];
        $rs = $_entity->selectById($usuario_id);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
