<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/bibliografia/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/BibliografiaDao.php';
include './../../function/validation.php';
$_entity = new BibliografiaDao();
if (isset($_POST['bibliografia_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $bibliografia_id = $_POST['bibliografia_id'];
        $_entity->delete($bibliografia_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
