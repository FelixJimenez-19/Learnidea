<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/entorno_aprendizaje/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Entorno_aprendizajeDao.php';
include './../../function/validation.php';
$_entity = new Entorno_aprendizajeDao();
if (isset($_POST['entorno_aprendizaje_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $entorno_aprendizaje_id = $_POST['entorno_aprendizaje_id'];
        $_entity->delete($entorno_aprendizaje_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
