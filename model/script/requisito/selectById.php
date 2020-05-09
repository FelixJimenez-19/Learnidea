<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/requisito/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/RequisitoDao.php';
include './../../function/validation.php';
$_entity = new RequisitoDao();
if (isset($_POST['requisito_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $requisito_id = $_POST['requisito_id'];
        $rs = $_entity->selectById($requisito_id);
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
