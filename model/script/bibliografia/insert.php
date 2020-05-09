<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/bibliografia/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/BibliografiaDao.php';
include './../../function/validation.php';
$_entity = new BibliografiaDao();
if (isset($_POST['bibliografia_descripcion']) and isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {

    if (validation($_POST['key'])) {
        $bibliografia_descripcion = $_POST['bibliografia_descripcion'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->insert($bibliografia_descripcion, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
