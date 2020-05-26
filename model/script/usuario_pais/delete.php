<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_pais/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Usuario_paisDao.php';
$_entity = new Usuario_paisDao();
if (isset($_POST['usuario_pais_id'])) {
    $usuario_pais_id = $_POST['usuario_pais_id'];
    $_entity->delete($usuario_pais_id);

    if (file_exists("../../../view/src/files/usuario_pais_bandera/" . $usuario_pais_id . ".png")) {
        unlink("../../../view/src/files/usuario_pais_bandera/" . $usuario_pais_id . ".png");
    }

    echo json_encode(["Success"]);
} else {
    echo json_encode([null]);
}
