<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_seccion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_seccionDao.php';
include './../../function/validation.php';
$_entity = new Curso_seccionDao();
if (isset($_POST['curso_seccion_nombre']) and isset($_POST['curso_seccion_descripcion']) and isset($_POST['curso_id']) and  isset($_POST['curso_seccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_seccion_nombre = $_POST['curso_seccion_nombre'];
        $curso_seccion_descripcion = $_POST['curso_seccion_descripcion'];
        $curso_id = $_POST['curso_id'];
        $curso_seccion_id = $_POST['curso_seccion_id'];
        $_entity->update($curso_seccion_nombre, $curso_seccion_descripcion, $curso_id, $curso_seccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
