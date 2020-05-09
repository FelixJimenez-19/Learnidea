<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
$_entity = new UsuarioDao();
if (isset($_POST['usuario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_id = $_POST['usuario_id'];
        $fecha = $_entity->updateFechaConexion($usuario_id);
        $array = array();
        $array['servidor_fecha'] = $fecha;
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
