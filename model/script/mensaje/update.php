<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/mensaje/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/MensajeDao.php';
include './../../function/validation.php';
$_entity = new MensajeDao();
if (isset($_POST['mensaje_texto']) and isset($_POST['usuario_id1']) and isset($_POST['usuario_id2']) and  isset($_POST['mensaje_id'])) {
    if (validation($_POST['key'])) {
    $mensaje_texto = $_POST['mensaje_texto'];
    $usuario_id1 = $_POST['usuario_id1'];
    $usuario_id2 = $_POST['usuario_id2'];
    $mensaje_id = $_POST['mensaje_id'];
    $_entity->update($mensaje_texto, $usuario_id1, $usuario_id2, $mensaje_id);

    if (isset($_FILES['mensaje_foto'])) {
        $mensaje_foto = $_FILES['mensaje_foto'];
        if ($mensaje_foto['tmp_name'] != "" or $mensaje_foto['tmp_name'] != null) {
            if (!file_exists('../../../view/src/files/mensaje_foto')) {
                mkdir("../../../view/src/files/mensaje_foto", 0700);
            }

            $desde = $mensaje_foto['tmp_name'];
            $hasta = "../../../view/src/files/mensaje_foto/" . $mensaje_id . ".png";
            copy($desde, $hasta);
            $_entity->updateMensaje_foto($mensaje_id . ".png", $mensaje_id);
        }
    }

    echo json_encode(["Success"]);
} else {
    echo json_encode(['DENIED']);
}
} else {
    echo json_encode([null]);
}
