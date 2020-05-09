<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/certificado/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CertificadoDao.php';
include './../../function/validation.php';
$_entity = new CertificadoDao();
if (isset($_POST['certificado_codigo']) and isset($_POST['certificado_tipo_id']) and isset($_POST['usuario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $certificado_codigo = $_POST['certificado_codigo'];
        $certificado_tipo_id = $_POST['certificado_tipo_id'];
        $usuario_id = $_POST['usuario_id'];
        $_entity->insert($certificado_codigo, $certificado_tipo_id, $usuario_id);

        if (isset($_FILES['certificado_pdf'])) {
            $certificado_pdf = $_FILES['certificado_pdf'];
            if ($certificado_pdf['tmp_name'] != "" or $certificado_pdf['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/certificado_pdf')) {
                    mkdir("../../../view/src/files/certificado_pdf", 0700);
                }

                $certificado_id = mysqli_fetch_assoc($_entity->selectByAll($certificado_codigo, $certificado_tipo_id, $usuario_id))['certificado_id'];

                $desde = $certificado_pdf['tmp_name'];
                $hasta = "../../../view/src/files/certificado_pdf/" . $certificado_id . ".pdf";
                copy($desde, $hasta);
                $_entity->updateCertificado_pdf($certificado_id . ".pdf", $certificado_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
