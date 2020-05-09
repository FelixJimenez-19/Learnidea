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
if (isset($_POST['usuario_id1']) and isset($_POST['usuario_id2']) and isset($_POST['mensaje_visto']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_id1 = $_POST['usuario_id1'];
        $usuario_id2 = $_POST['usuario_id2'];
        $mensaje_visto = $_POST['mensaje_visto'];
        $_entity->updateMensaje_visto($usuario_id1, $usuario_id2, $mensaje_visto);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
