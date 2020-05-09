<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_tema/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Usuario_temaDao.php';
include './../../function/validation.php';
$_entity = new Usuario_temaDao();
if (isset($_POST['usuario_tema_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tema_id = $_POST['usuario_tema_id'];
        $_entity->delete($usuario_tema_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
