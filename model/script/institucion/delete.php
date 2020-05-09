<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/institucion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/InstitucionDao.php';
include './../../function/validation.php';
$_entity = new InstitucionDao();
if (isset($_POST['institucion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $institucion_id = $_POST['institucion_id'];
        $_entity->delete($institucion_id);

        if (file_exists("../../../view/src/files/institucion_logo/" . $institucion_id . ".png")) {
            unlink("../../../view/src/files/institucion_logo/" . $institucion_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
