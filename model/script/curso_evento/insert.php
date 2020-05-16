<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_evento/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_eventoDao.php';
include './../../function/validation.php';
$_entity = new Curso_eventoDao();
if (isset($_POST['curso_evento_nombre']) and isset($_POST['curso_evento_fecha']) and isset($_POST['curso_evento_descripcion']) and isset($_POST['curso_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_evento_nombre = $_POST['curso_evento_nombre'];
        $curso_evento_fecha = $_POST['curso_evento_fecha'];
        $curso_evento_descripcion = $_POST['curso_evento_descripcion'];
        $curso_id = $_POST['curso_id'];
        $_entity->insert($curso_evento_nombre, $curso_evento_fecha, $curso_evento_descripcion, $curso_id);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
