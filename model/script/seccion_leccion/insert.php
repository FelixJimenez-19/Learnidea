<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_leccion/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Seccion_leccionDao.php';
include './../../function/validation.php';
$_entity = new Seccion_leccionDao();
if (isset($_POST['seccion_leccion_descripcion']) and isset($_POST['seccion_leccion_puntaje']) and isset($_POST['seccion_leccion_intento']) and isset($_POST['seccion_leccion_tiempo']) and isset($_POST['curso_seccion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_leccion_descripcion = $_POST['seccion_leccion_descripcion'];
        $seccion_leccion_puntaje = $_POST['seccion_leccion_puntaje'];
        $seccion_leccion_intento = $_POST['seccion_leccion_intento'];
        $seccion_leccion_tiempo = $_POST['seccion_leccion_tiempo'];
        $curso_seccion_id = $_POST['curso_seccion_id'];
        $_entity->insert($seccion_leccion_descripcion, $seccion_leccion_puntaje, $seccion_leccion_intento, $seccion_leccion_tiempo, $curso_seccion_id);
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
