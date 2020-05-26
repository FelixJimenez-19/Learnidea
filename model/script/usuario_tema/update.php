<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario_tema/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Usuario_temaDao.php';
include './../../function/validation.php';
$_entity = new Usuario_temaDao();
if (isset($_POST['usuario_tema_nombre']) and isset($_POST['usuario_tema_primary']) and isset($_POST['usuario_tema_primary_hover']) and isset($_POST['usuario_tema_secondary']) and isset($_POST['usuario_tema_secondary_hover']) and isset($_POST['usuario_tema_tertiary']) and isset($_POST['usuario_tema_tertiary_hover']) and isset($_POST['usuario_tema_quaternary']) and isset($_POST['usuario_tema_quaternary_hover']) and isset($_POST['usuario_tema_success']) and isset($_POST['usuario_tema_info']) and isset($_POST['usuario_tema_warning']) and isset($_POST['usuario_tema_error']) and isset($_POST['usuario_tema_dark_primary']) and isset($_POST['usuario_tema_dark_primary_hover']) and isset($_POST['usuario_tema_dark_secondary']) and isset($_POST['usuario_tema_dark_secondary_hover']) and isset($_POST['usuario_tema_dark_tertiary']) and isset($_POST['usuario_tema_dark_tertiary_hover']) and isset($_POST['usuario_tema_dark_quaternary']) and isset($_POST['usuario_tema_dark_quaternary_hover']) and isset($_POST['usuario_tema_dark_success']) and isset($_POST['usuario_tema_dark_info']) and isset($_POST['usuario_tema_dark_warning']) and isset($_POST['usuario_tema_dark_error']) and  isset($_POST['usuario_tema_id']) and isset($_POST['usuario_tema_default']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_tema_nombre = $_POST['usuario_tema_nombre'];
        $usuario_tema_primary = $_POST['usuario_tema_primary'];
        $usuario_tema_primary_hover = $_POST['usuario_tema_primary_hover'];
        $usuario_tema_secondary = $_POST['usuario_tema_secondary'];
        $usuario_tema_secondary_hover = $_POST['usuario_tema_secondary_hover'];
        $usuario_tema_tertiary = $_POST['usuario_tema_tertiary'];
        $usuario_tema_tertiary_hover = $_POST['usuario_tema_tertiary_hover'];
        $usuario_tema_quaternary = $_POST['usuario_tema_quaternary'];
        $usuario_tema_quaternary_hover = $_POST['usuario_tema_quaternary_hover'];
        $usuario_tema_success = $_POST['usuario_tema_success'];
        $usuario_tema_info = $_POST['usuario_tema_info'];
        $usuario_tema_warning = $_POST['usuario_tema_warning'];
        $usuario_tema_error = $_POST['usuario_tema_error'];
        $usuario_tema_dark_primary = $_POST['usuario_tema_dark_primary'];
        $usuario_tema_dark_primary_hover = $_POST['usuario_tema_dark_primary_hover'];
        $usuario_tema_dark_secondary = $_POST['usuario_tema_dark_secondary'];
        $usuario_tema_dark_secondary_hover = $_POST['usuario_tema_dark_secondary_hover'];
        $usuario_tema_dark_tertiary = $_POST['usuario_tema_dark_tertiary'];
        $usuario_tema_dark_tertiary_hover = $_POST['usuario_tema_dark_tertiary_hover'];
        $usuario_tema_dark_quaternary = $_POST['usuario_tema_dark_quaternary'];
        $usuario_tema_dark_quaternary_hover = $_POST['usuario_tema_dark_quaternary_hover'];
        $usuario_tema_dark_success = $_POST['usuario_tema_dark_success'];
        $usuario_tema_dark_info = $_POST['usuario_tema_dark_info'];
        $usuario_tema_dark_warning = $_POST['usuario_tema_dark_warning'];
        $usuario_tema_dark_error = $_POST['usuario_tema_dark_error'];
        $usuario_tema_default = $_POST['usuario_tema_default'];
        $usuario_tema_id = $_POST['usuario_tema_id'];
        $_entity->updateAllUsuario_tema_default(0);
        $_entity->update($usuario_tema_nombre, $usuario_tema_primary, $usuario_tema_primary_hover, $usuario_tema_secondary, $usuario_tema_secondary_hover, $usuario_tema_tertiary, $usuario_tema_tertiary_hover, $usuario_tema_quaternary, $usuario_tema_quaternary_hover, $usuario_tema_success, $usuario_tema_info, $usuario_tema_warning, $usuario_tema_error, $usuario_tema_dark_primary, $usuario_tema_dark_primary_hover, $usuario_tema_dark_secondary, $usuario_tema_dark_secondary_hover, $usuario_tema_dark_tertiary, $usuario_tema_dark_tertiary_hover, $usuario_tema_dark_quaternary, $usuario_tema_dark_quaternary_hover, $usuario_tema_dark_success, $usuario_tema_dark_info, $usuario_tema_dark_warning, $usuario_tema_dark_error, $usuario_tema_default, $usuario_tema_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
