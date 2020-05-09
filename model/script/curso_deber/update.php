<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_deber/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_deberDao.php';
include './../../function/validation.php';
$_entity = new Curso_deberDao();
if (isset($_POST['curso_deber_descripcion']) and isset($_POST['curso_deber_link']) and isset($_POST['curso_deber_fecha_inicio']) and isset($_POST['curso_deber_fecha_fin']) and isset($_POST['curso_id']) and  isset($_POST['curso_deber_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_deber_descripcion = $_POST['curso_deber_descripcion'];
        $curso_deber_link = $_POST['curso_deber_link'];
        $curso_deber_fecha_inicio = $_POST['curso_deber_fecha_inicio'];
        $curso_deber_fecha_fin = $_POST['curso_deber_fecha_fin'];
        $curso_id = $_POST['curso_id'];
        $curso_deber_id = $_POST['curso_deber_id'];
        $_entity->update($curso_deber_descripcion, $curso_deber_link, $curso_deber_fecha_inicio, $curso_deber_fecha_fin, $curso_id, $curso_deber_id);

        if (isset($_FILES['curso_deber_foto'])) {
            $curso_deber_foto = $_FILES['curso_deber_foto'];
            if ($curso_deber_foto['tmp_name'] != "" or $curso_deber_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/curso_deber_foto')) {
                    mkdir("../../../view/src/files/curso_deber_foto", 0700);
                }

                $desde = $curso_deber_foto['tmp_name'];
                $hasta = "../../../view/src/files/curso_deber_foto/" . $curso_deber_id . ".png";
                copy($desde, $hasta);
                $_entity->updateCurso_deber_foto($curso_deber_id . ".png", $curso_deber_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
