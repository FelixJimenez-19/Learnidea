<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_seccion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Curso_seccionDao.php';
include './../../function/validation.php';
$_entity = new Curso_seccionDao();
if (isset($_POST['curso_seccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_seccion_id = $_POST['curso_seccion_id'];
        $_entity->delete($curso_seccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
