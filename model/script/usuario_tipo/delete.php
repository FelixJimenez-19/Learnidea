<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_tipo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Usuario_tipoDao.php';
include './../../function/validation.php';
$_entity = new Usuario_tipoDao();
if (isset($_POST['usuario_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tipo_id = $_POST['usuario_tipo_id'];
        $_entity->delete($usuario_tipo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
