<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/modalidad/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ModalidadDao.php';
include './../../function/validation.php';
$_entity = new ModalidadDao();
if (isset($_POST['modalidad_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $modalidad_id = $_POST['modalidad_id'];
        $rs = $_entity->selectById($modalidad_id);
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
