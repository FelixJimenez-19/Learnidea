<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/certificado/selectById.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CertificadoDao.php';
include './../../function/validation.php';
$_entity = new CertificadoDao();
if (isset($_POST['certificado_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $certificado_id = $_POST['certificado_id'];
        $rs = $_entity->selectById($certificado_id);
        $array = array();
        while ($r = mysqli_fetch_assoc($rs)) {
            $array[] = $r;
        }
        echo json_encode($array);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
