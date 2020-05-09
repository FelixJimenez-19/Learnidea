<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contenido_secundario/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Contenido_secundarioDao.php';
include './../../function/validation.php';
$_entity = new Contenido_secundarioDao();
if (isset($_POST['contenido_secundario_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $contenido_secundario_id = $_POST['contenido_secundario_id'];
        $_entity->delete($contenido_secundario_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
