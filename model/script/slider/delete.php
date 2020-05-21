<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/slider/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/SliderDao.php';
include './../../function/validation.php';
$_entity = new SliderDao();
if (isset($_POST['slider_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $slider_id = $_POST['slider_id'];
        $_entity->delete($slider_id);
        if (file_exists("../../../view/src/files/slider_foto/" . $slider_id . ".png")) {
            unlink("../../../view/src/files/slider_foto/" . $slider_id . ".png");
        }
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
