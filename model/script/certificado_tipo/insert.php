<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/certificado_tipo/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Certificado_tipoDao.php';
include './../../function/validation.php';
$_entity = new Certificado_tipoDao();
if (isset($_POST['certificado_tipo_nombre']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $certificado_tipo_nombre = $_POST['certificado_tipo_nombre'];
        $_entity->insert($certificado_tipo_nombre);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
