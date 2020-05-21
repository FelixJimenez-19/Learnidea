<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/institucion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/InstitucionDao.php';
include './../../function/validation.php';
$_entity = new InstitucionDao();
if (isset($_POST['institucion_nombre']) and isset($_POST['institucion_siglas']) and isset($_POST['institucion_link']) and  isset($_POST['institucion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $institucion_nombre = $_POST['institucion_nombre'];
        $institucion_siglas = $_POST['institucion_siglas'];
        $institucion_link = $_POST['institucion_link'];
        $institucion_id = $_POST['institucion_id'];
        $_entity->update($institucion_nombre, $institucion_siglas, $institucion_link, $institucion_id);
        if (isset($_FILES['institucion_logo'])) {
            $institucion_logo = $_FILES['institucion_logo'];
            if ($institucion_logo['tmp_name'] != "" or $institucion_logo['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/institucion_logo')) {
                    mkdir("../../../view/src/files/institucion_logo", 0700);
                }
                $desde = $institucion_logo['tmp_name'];
                $hasta = "../../../view/src/files/institucion_logo/" . $institucion_id . ".png";
                copy($desde, $hasta);
                $_entity->updateInstitucion_logo($institucion_id . ".png", $institucion_id);
            }
        }
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
