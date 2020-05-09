<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_modelo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Curso_modeloDao.php';
include './../../function/validation.php';
$_entity = new Curso_modeloDao();
if (isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->delete($curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
