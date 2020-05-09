<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_tipo/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Usuario_tipoDao.php';
include './../../function/validation.php';
$_entity = new Usuario_tipoDao();
if (isset($_POST['usuario_tipo_nombre']) and isset($_POST['usuario_tipo_super']) and isset($_POST['usuario_tipo_admin']) and isset($_POST['usuario_tipo_coach']) and isset($_POST['usuario_tipo_user']) and isset($_POST['usuario_tipo_descripcion']) and  isset($_POST['usuario_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tipo_nombre = $_POST['usuario_tipo_nombre'];
        $usuario_tipo_super = $_POST['usuario_tipo_super'];
        $usuario_tipo_admin = $_POST['usuario_tipo_admin'];
        $usuario_tipo_coach = $_POST['usuario_tipo_coach'];
        $usuario_tipo_user = $_POST['usuario_tipo_user'];
        $usuario_tipo_descripcion = $_POST['usuario_tipo_descripcion'];
        $usuario_tipo_id = $_POST['usuario_tipo_id'];
        $_entity->update($usuario_tipo_nombre, $usuario_tipo_super, $usuario_tipo_admin, $usuario_tipo_coach, $usuario_tipo_user, $usuario_tipo_descripcion, $usuario_tipo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
