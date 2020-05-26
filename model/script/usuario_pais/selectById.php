<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_pais/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Usuario_paisDao.php';
$_entity = new Usuario_paisDao();
if (isset($_POST['usuario_pais_id'])) {
    $usuario_pais_id = $_POST['usuario_pais_id'];
    $rs = $_entity->selectById($usuario_pais_id);
    $array = array();
    while ($r = mysqli_fetch_assoc($rs)) {
        $array[] = $r;
    }
    echo json_encode($array);
} else {
    echo json_encode([null]);
}
