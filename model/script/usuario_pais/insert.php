<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_pais/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Usuario_paisDao.php';
$_entity = new Usuario_paisDao();
if (isset($_POST['usuario_pais_nombre']) and isset($_POST['usuario_pais_descripcion'])) {
    $usuario_pais_nombre = $_POST['usuario_pais_nombre'];
    $usuario_pais_descripcion = $_POST['usuario_pais_descripcion'];
    $_entity->insert($usuario_pais_nombre, $usuario_pais_descripcion);

    if (isset($_FILES['usuario_pais_bandera'])) {
        $usuario_pais_bandera = $_FILES['usuario_pais_bandera'];
        if ($usuario_pais_bandera['tmp_name'] != "" or $usuario_pais_bandera['tmp_name'] != null) {
            if (!file_exists('../../../view/src/files/usuario_pais_bandera')) {
                mkdir("../../../view/src/files/usuario_pais_bandera", 0700);
            }

            $usuario_pais_id = mysqli_fetch_assoc($_entity->selectByAll($usuario_pais_nombre, $usuario_pais_descripcion))['usuario_pais_id'];

            $desde = $usuario_pais_bandera['tmp_name'];
            $hasta = "../../../view/src/files/usuario_pais_bandera/" . $usuario_pais_id . ".png";
            copy($desde, $hasta);
            $_entity->updateUsuario_pais_bandera($usuario_pais_id . ".png", $usuario_pais_id);
        }
    }

    echo json_encode(["Success"]);
} else {
    echo json_encode([null]);
}
