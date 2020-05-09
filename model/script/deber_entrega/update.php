<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/deber_entrega/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Deber_entregaDao.php';
include './../../function/validation.php';
$_entity = new Deber_entregaDao();
if (isset($_POST['deber_entrega_descripcion']) and isset($_POST['deber_entrega_link']) and isset($_POST['deber_entrega_fecha_inicio']) and isset($_POST['deber_entrega_fecha_fin']) and isset($_POST['curso_deber_id']) and isset($_POST['inscripcion_id']) and  isset($_POST['deber_entrega_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $deber_entrega_descripcion = $_POST['deber_entrega_descripcion'];
        $deber_entrega_link = $_POST['deber_entrega_link'];
        $deber_entrega_fecha_inicio = $_POST['deber_entrega_fecha_inicio'];
        $deber_entrega_fecha_fin = $_POST['deber_entrega_fecha_fin'];
        $curso_deber_id = $_POST['curso_deber_id'];
        $inscripcion_id = $_POST['inscripcion_id'];
        $deber_entrega_id = $_POST['deber_entrega_id'];
        $_entity->update($deber_entrega_descripcion, $deber_entrega_link, $deber_entrega_fecha_inicio, $deber_entrega_fecha_fin, $curso_deber_id, $inscripcion_id, $deber_entrega_id);

        if (isset($_FILES['deber_entrega_foto'])) {
            $deber_entrega_foto = $_FILES['deber_entrega_foto'];
            if ($deber_entrega_foto['tmp_name'] != "" or $deber_entrega_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/deber_entrega_foto')) {
                    mkdir("../../../view/src/files/deber_entrega_foto", 0700);
                }

                $desde = $deber_entrega_foto['tmp_name'];
                $hasta = "../../../view/src/files/deber_entrega_foto/" . $deber_entrega_id . ".png";
                copy($desde, $hasta);
                $_entity->updateDeber_entrega_foto($deber_entrega_id . ".png", $deber_entrega_id);
            }
        }

        if (isset($_FILES['deber_entrega_pdf'])) {
            $deber_entrega_pdf = $_FILES['deber_entrega_pdf'];
            if ($deber_entrega_pdf['tmp_name'] != "" or $deber_entrega_pdf['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/deber_entrega_pdf')) {
                    mkdir("../../../view/src/files/deber_entrega_pdf", 0700);
                }

                $desde = $deber_entrega_pdf['tmp_name'];
                $hasta = "../../../view/src/files/deber_entrega_pdf/" . $deber_entrega_id . ".pdf";
                copy($desde, $hasta);
                $_entity->updateDeber_entrega_pdf($deber_entrega_id . ".pdf", $deber_entrega_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
