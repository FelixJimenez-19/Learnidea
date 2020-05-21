<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/slider/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/SliderDao.php';
include './../../function/validation.php';
$_entity = new SliderDao();
if (isset($_POST['slider_frase']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $slider_frase = $_POST['slider_frase'];
        $_entity->insert($slider_frase);
        if (isset($_FILES['slider_foto'])) {
            $slider_foto = $_FILES['slider_foto'];
            if ($slider_foto['tmp_name'] != "" or $slider_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/slider_foto')) {
                    mkdir("../../../view/src/files/slider_foto", 0700);
                }
                $slider_id = mysqli_fetch_assoc($_entity->selectByAll($slider_frase))['slider_id'];
                $desde = $slider_foto['tmp_name'];
                $hasta = "../../../view/src/files/slider_foto/" . $slider_id . ".png";
                copy($desde, $hasta);
                $_entity->updateSlider_foto($slider_id . ".png", $slider_id);
            }
        }
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
