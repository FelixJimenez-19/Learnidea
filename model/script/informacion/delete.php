<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/informacion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/InformacionDao.php';
include './../../function/validation.php';
$_entity = new InformacionDao();
if (isset($_POST['informacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $informacion_id = $_POST['informacion_id'];
        $_entity->delete($informacion_id);

        if (file_exists("../../../view/src/files/informacion_empresa_logo/" . $informacion_id . ".png")) {
            unlink("../../../view/src/files/informacion_empresa_logo/" . $informacion_id . ".png");
        }

        if (file_exists("../../../view/src/files/informacion_pagina_logo/" . $informacion_id . ".png")) {
            unlink("../../../view/src/files/informacion_pagina_logo/" . $informacion_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
