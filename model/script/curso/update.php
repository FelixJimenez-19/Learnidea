<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CursoDao.php';
include './../../function/validation.php';
$_entity = new CursoDao();
if (isset($_POST['curso_nombre']) and isset($_POST['curso_fecha_inicio']) and isset($_POST['curso_fecha_fin']) and isset($_POST['curso_cupos']) and isset($_POST['curso_whatsapp']) and isset($_POST['curso_calificacion']) and isset($_POST['curso_proximo']) and isset($_POST['curso_visible']) and isset($_POST['curso_precio_live']) and isset($_POST['curso_precio_record']) and isset($_POST['curso_certificado_live']) and isset($_POST['curso_certificado_record']) and isset($_POST['curso_certificacion_live']) and isset($_POST['curso_modelo_id']) and  isset($_POST['curso_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_nombre = $_POST['curso_nombre'];
        $curso_fecha_inicio = $_POST['curso_fecha_inicio'];
        $curso_fecha_fin = $_POST['curso_fecha_fin'];
        $curso_cupos = $_POST['curso_cupos'];
        $curso_whatsapp = $_POST['curso_whatsapp'];
        $curso_calificacion = $_POST['curso_calificacion'];
        $curso_proximo = $_POST['curso_proximo'];
        $curso_visible = $_POST['curso_visible'];
        $curso_precio_live = $_POST['curso_precio_live'];
        $curso_precio_record = $_POST['curso_precio_record'];
        $curso_certificado_live = $_POST['curso_certificado_live'];
        $curso_certificado_record = $_POST['curso_certificado_record'];
        $curso_certificacion_live = $_POST['curso_certificacion_live'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $curso_id = $_POST['curso_id'];
        $_entity->update($curso_nombre, $curso_fecha_inicio, $curso_fecha_fin, $curso_cupos, $curso_whatsapp, $curso_calificacion, $curso_proximo, $curso_visible, $curso_precio_live, $curso_precio_record, $curso_certificado_live, $curso_certificado_record, $curso_certificacion_live, $curso_modelo_id, $curso_id);

        if (isset($_FILES['curso_foto'])) {
            $curso_foto = $_FILES['curso_foto'];
            if ($curso_foto['tmp_name'] != "" or $curso_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/curso_foto')) {
                    mkdir("../../../view/src/files/curso_foto", 0700);
                }

                $desde = $curso_foto['tmp_name'];
                $hasta = "../../../view/src/files/curso_foto/" . $curso_id . ".png";
                copy($desde, $hasta);
                $_entity->updateCurso_foto($curso_id . ".png", $curso_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
