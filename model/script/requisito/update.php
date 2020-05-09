<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/requisito/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/RequisitoDao.php';
include './../../function/validation.php';
$_entity = new RequisitoDao();
if (isset($_POST['requisito_descripcion']) and isset($_POST['curso_modelo_id']) and  isset($_POST['requisito_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $requisito_descripcion = $_POST['requisito_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $requisito_id = $_POST['requisito_id'];
        $_entity->update($requisito_descripcion, $curso_modelo_id, $requisito_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
