<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/objetivo/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ObjetivoDao.php';
include './../../function/validation.php';
$_entity = new ObjetivoDao();
if (isset($_POST['objetivo_descripcion']) and isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {

    if (validation($_POST['key'])) {
        $objetivo_descripcion = $_POST['objetivo_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->insert($objetivo_descripcion, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
