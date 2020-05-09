<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/entorno_aprendizaje/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Entorno_aprendizajeDao.php';
include './../../function/validation.php';
$_entity = new Entorno_aprendizajeDao();
if (isset($_POST['entorno_aprendizaje_instalaciones']) and isset($_POST['entorno_aprendizaje_teorica']) and isset($_POST['entorno_aprendizaje_practica']) and isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $entorno_aprendizaje_instalaciones = $_POST['entorno_aprendizaje_instalaciones'];
        $entorno_aprendizaje_teorica = $_POST['entorno_aprendizaje_teorica'];
        $entorno_aprendizaje_practica = $_POST['entorno_aprendizaje_practica'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->insert($entorno_aprendizaje_instalaciones, $entorno_aprendizaje_teorica, $entorno_aprendizaje_practica, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
