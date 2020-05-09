<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/CursoDao.php';
include './../../function/validation.php';
$_entity = new CursoDao();
if (isset($_POST['curso_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_id = $_POST['curso_id'];
        $_entity->delete($curso_id);

        if (file_exists("../../../view/src/files/curso_foto/" . $curso_id . ".png")) {
            unlink("../../../view/src/files/curso_foto/" . $curso_id . ".png");
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
