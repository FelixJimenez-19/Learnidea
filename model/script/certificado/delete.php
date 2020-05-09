<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/certificado/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/CertificadoDao.php';
include './../../function/validation.php';
$_entity = new CertificadoDao();
if (isset($_POST['certificado_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $certificado_id = $_POST['certificado_id'];
        $_entity->delete($certificado_id);

        if (file_exists("../../../view/src/files/certificado_pdf/" . $certificado_id . ".pdf")) {
            unlink("../../../view/src/files/certificado_pdf/" . $certificado_id . ".pdf");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
