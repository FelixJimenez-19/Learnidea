<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contenido_transversal/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/Contenido_transversalDao.php';
include './../../function/validation.php';
$_entity = new Contenido_transversalDao();
if (isset($_POST['contenido_transversal_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $contenido_transversal_id = $_POST['contenido_transversal_id'];
        $_entity->delete($contenido_transversal_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
