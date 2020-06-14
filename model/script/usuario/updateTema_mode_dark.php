<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/update.php
*/
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
$_entity = new UsuarioDao();
if (isset($_POST['usuario_tema_mode_dark']) and  isset($_POST['usuario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tema_mode_dark = $_POST['usuario_tema_mode_dark'];
        $usuario_id = $_POST['usuario_id'];
        $_entity->updateTema_mode_dark($usuario_tema_mode_dark, $usuario_id);
        $_SESSION['usuario_tema_mode_dark'] = $usuario_tema_mode_dark;
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
