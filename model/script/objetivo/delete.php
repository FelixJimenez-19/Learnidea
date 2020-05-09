<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/objetivo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/ObjetivoDao.php';
include './../../function/validation.php';
$_entity = new ObjetivoDao();
if (isset($_POST['objetivo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $objetivo_id = $_POST['objetivo_id'];
        $_entity->delete($objetivo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
