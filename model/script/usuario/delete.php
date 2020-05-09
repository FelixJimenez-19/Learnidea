<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
$_entity = new UsuarioDao();
if (isset($_POST['usuario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_id = $_POST['usuario_id'];
        $_entity->delete($usuario_id);

        if (file_exists("../../../view/src/files/usuario_foto/" . $usuario_id . ".png")) {
            unlink("../../../view/src/files/usuario_foto/" . $usuario_id . ".png");
        }

        if (file_exists("../../../view/src/files/usuario_firma/" . $usuario_id . ".png")) {
            unlink("../../../view/src/files/usuario_firma/" . $usuario_id . ".png");
        }

        if (file_exists("../../../view/src/files/usuario_curriculum/" . $usuario_id . ".pdf")) {
            unlink("../../../view/src/files/usuario_curriculum/" . $usuario_id . ".pdf");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
