<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_alternativa/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_alternativaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_alternativaDao();
if (isset($_POST['seccion_alternativa_descripcion']) and isset($_POST['seccion_alternativa_correta']) and isset($_POST['seccion_pregunta_id']) and  isset($_POST['seccion_alternativa_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_alternativa_descripcion = $_POST['seccion_alternativa_descripcion'];
        $seccion_alternativa_correta = $_POST['seccion_alternativa_correta'];
        $seccion_pregunta_id = $_POST['seccion_pregunta_id'];
        $seccion_alternativa_id = $_POST['seccion_alternativa_id'];
        $_entity->update($seccion_alternativa_descripcion, $seccion_alternativa_correta, $seccion_pregunta_id, $seccion_alternativa_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
