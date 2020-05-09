<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/participante_tipo/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Participante_tipoDao.php';
include './../../function/validation.php';
$_entity = new Participante_tipoDao();
if (isset($_POST['participante_tipo_descripcion']) and  isset($_POST['participante_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $participante_tipo_descripcion = $_POST['participante_tipo_descripcion'];
        $participante_tipo_id = $_POST['participante_tipo_id'];
        $_entity->update($participante_tipo_descripcion, $participante_tipo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
