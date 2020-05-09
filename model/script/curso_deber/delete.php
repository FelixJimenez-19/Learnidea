<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_deber/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Curso_deberDao.php';
include './../../function/validation.php';
$_entity = new Curso_deberDao();
if (isset($_POST['curso_deber_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_deber_id = $_POST['curso_deber_id'];
        $_entity->delete($curso_deber_id);

        if (file_exists("../../../view/src/files/curso_deber_foto/" . $curso_deber_id . ".png")) {
            unlink("../../../view/src/files/curso_deber_foto/" . $curso_deber_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
