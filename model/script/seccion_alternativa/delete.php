<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/seccion_alternativa/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Seccion_alternativaDao.php';
include './../../function/validation.php';
$_entity = new Seccion_alternativaDao();
if (isset($_POST['seccion_alternativa_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $seccion_alternativa_id = $_POST['seccion_alternativa_id'];
        $_entity->delete($seccion_alternativa_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
