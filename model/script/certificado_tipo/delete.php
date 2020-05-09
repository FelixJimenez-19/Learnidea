<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/certificado_tipo/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Certificado_tipoDao.php';
include './../../function/validation.php';
$_entity = new Certificado_tipoDao();
if (isset($_POST['certificado_tipo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $certificado_tipo_id = $_POST['certificado_tipo_id'];
        $_entity->delete($certificado_tipo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
