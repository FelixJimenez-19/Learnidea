<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/entorno_aprendizaje/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Entorno_aprendizajeDao.php';
include './../../function/validation.php';
$_entity = new Entorno_aprendizajeDao();
if (isset($_POST['entorno_aprendizaje_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $entorno_aprendizaje_id = $_POST['entorno_aprendizaje_id'];
        $rs = $_entity->selectById($entorno_aprendizaje_id);
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
