<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/requisito/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/RequisitoDao.php';
include './../../function/validation.php';
$_entity = new RequisitoDao();
if (isset($_POST['requisito_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $requisito_id = $_POST['requisito_id'];
        $_entity->delete($requisito_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
