<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_evento/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Curso_eventoDao.php';
include './../../function/validation.php';
$_entity = new Curso_eventoDao();
if (isset($_POST['key']) and isset($_POST['curso_evento_id'])) {
    if (validation($_POST['key'])) {
        $curso_evento_id = $_POST['curso_evento_id'];
        $_entity->delete($curso_evento_id);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
