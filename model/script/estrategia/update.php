<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/estrategia/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EstrategiaDao.php';
include './../../function/validation.php';
$_entity = new EstrategiaDao();
if (isset($_POST['estrategia_descripcion']) and isset($_POST['curso_modelo_id']) and  isset($_POST['estrategia_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $estrategia_descripcion = $_POST['estrategia_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $estrategia_id = $_POST['estrategia_id'];
        $_entity->update($estrategia_descripcion, $curso_modelo_id, $estrategia_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
