<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/mensaje/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/MensajeDao.php';
include './../../function/validation.php';
$_entity = new MensajeDao();
if (isset($_POST['usuario_id']) and isset($_POST['mensaje_visto']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_id = $_POST['usuario_id'];
        $mensaje_visto = $_POST['mensaje_visto'];
        $rs = $_entity->selectByUsuario_idMensaje_visto($usuario_id, $mensaje_visto);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
