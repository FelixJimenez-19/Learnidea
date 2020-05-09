<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_pregunta/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Seccion_preguntaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_preguntaDao();
if (isset($_POST['seccion_pregunta_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_pregunta_id = $_POST['seccion_pregunta_id'];
        $_entity->delete($seccion_pregunta_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
