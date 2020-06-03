<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/publicacion/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/PublicacionDao.php';
include './../../function/validation.php';
$_entity = new PublicacionDao();
if (isset($_POST['publicacion_descripcion']) and isset($_POST['usuario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $publicacion_descripcion = $_POST['publicacion_descripcion'];
        date_default_timezone_set('America/Guayaquil');
        $publicacion_fecha = date('Y-m-d H:i:s');
        $usuario_id = $_POST['usuario_id'];
        $publicacion_key = uniqid($usuario_id . uniqid($publicacion_fecha . uniqid($usuario_id . uniqid($publicacion_fecha))));
        $_entity->insert($publicacion_descripcion, $publicacion_fecha, $usuario_id, $publicacion_key);

        if (isset($_FILES['publicacion_foto'])) {
            $publicacion_foto = $_FILES['publicacion_foto'];
            if ($publicacion_foto['tmp_name'] != "" or $publicacion_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/publicacion_foto')) {
                    mkdir("../../../view/src/files/publicacion_foto", 0700);
                }

                $publicacion_id = mysqli_fetch_assoc($_entity->selectByAll($publicacion_descripcion, $publicacion_fecha, $usuario_id, $publicacion_key))['publicacion_id'];

                $desde = $publicacion_foto['tmp_name'];
                $hasta = "../../../view/src/files/publicacion_foto/" . $publicacion_id . ".png";
                copy($desde, $hasta);
                $_entity->updatePublicacion_foto($publicacion_id . ".png", $publicacion_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
