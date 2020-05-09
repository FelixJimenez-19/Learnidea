<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/estrategia/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/EstrategiaDao.php';
include './../../function/validation.php';
$_entity = new EstrategiaDao();
if (isset($_POST['estrategia_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $estrategia_id = $_POST['estrategia_id'];
        $_entity->delete($estrategia_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
