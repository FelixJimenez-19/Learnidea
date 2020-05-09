<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_pregunta/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_preguntaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_preguntaDao();
if (isset($_POST['seccion_pregunta_descripcion']) and isset($_POST['seccion_pregunta_tiempo']) and isset($_POST['seccion_pregunta_porcentaje']) and isset($_POST['seccion_leccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_pregunta_descripcion = $_POST['seccion_pregunta_descripcion'];
        $seccion_pregunta_tiempo = $_POST['seccion_pregunta_tiempo'];
        $seccion_pregunta_porcentaje = $_POST['seccion_pregunta_porcentaje'];
        $seccion_leccion_id = $_POST['seccion_leccion_id'];
        $_entity->insert($seccion_pregunta_descripcion, $seccion_pregunta_tiempo, $seccion_pregunta_porcentaje, $seccion_leccion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
