<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/participante_tipo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Participante_tipoDao.php';
include './../../function/validation.php';
$_entity = new Participante_tipoDao();
if (isset($_POST['participante_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $participante_tipo_id = $_POST['participante_tipo_id'];
        $_entity->delete($participante_tipo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
