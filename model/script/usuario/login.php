<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/login.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
$_entity = new UsuarioDao();
if (isset($_POST['usuario_email']) and isset($_POST['usuario_pass']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_email = $_POST['usuario_email'];
        $usuario_pass = $_POST['usuario_pass'];
        $rs = mysqli_fetch_assoc($_entity->login($usuario_email, $usuario_pass));
        if ($rs['usuario_email'] == $usuario_email and $rs['usuario_pass'] == $usuario_pass) {
            session_start();
            $_SESSION['usuario_id'] = $rs['usuario_id'];
            $_SESSION['usuario_nombre'] = $rs['usuario_nombre'];
            $_SESSION['usuario_cedula'] = $rs['usuario_cedula'];
            $_SESSION['usuario_nacimiento'] = $rs['usuario_nacimiento'];
            $_SESSION['usuario_indice'] = $rs['usuario_indice'];
            $_SESSION['usuario_celular'] = $rs['usuario_celular'];
            $_SESSION['usuario_telefono'] = $rs['usuario_telefono'];
            $_SESSION['usuario_email'] = $rs['usuario_email'];
            $_SESSION['usuario_pass'] = $rs['usuario_pass'];
            $_SESSION['usuario_foto'] = $rs['usuario_foto'];
            $_SESSION['usuario_portada'] = $rs['usuario_portada'];
            $_SESSION['usuario_firma'] = $rs['usuario_firma'];
            $_SESSION['usuario_curriculum'] = $rs['usuario_curriculum'];
            $_SESSION['usuario_sexo'] = $rs['usuario_sexo'];
            $_SESSION['usuario_nivel'] = $rs['usuario_nivel'];
            $_SESSION['usuario_calificacion'] = $rs['usuario_calificacion'];
            $_SESSION['usuario_direccion'] = $rs['usuario_direccion'];
            $_SESSION['usuario_descripcion'] = $rs['usuario_descripcion'];
            $_SESSION['usuario_empresa_nombre'] = $rs['usuario_empresa_nombre'];
            $_SESSION['usuario_empresa_actividad'] = $rs['usuario_empresa_actividad'];
            $_SESSION['usuario_empresa_direccion'] = $rs['usuario_empresa_direccion'];
            $_SESSION['usuario_empresa_telefono'] = $rs['usuario_empresa_telefono'];
            $_SESSION['usuario_tema_mode_dark'] = $rs['usuario_tema_mode_dark'];

            $_SESSION['usuario_tipo_id'] = $rs['usuario_tipo_id'];
            $_SESSION['usuario_tipo_nombre'] = $rs['usuario_tipo_nombre'];
            $_SESSION['usuario_tipo_super'] = $rs['usuario_tipo_super'];
            $_SESSION['usuario_tipo_admin'] = $rs['usuario_tipo_admin'];
            $_SESSION['usuario_tipo_coach'] = $rs['usuario_tipo_coach'];
            $_SESSION['usuario_tipo_user'] = $rs['usuario_tipo_user'];
            $_SESSION['usuario_tipo_descripcion'] = $rs['usuario_tipo_descripcion'];
            
            $_SESSION['usuario_tema_id'] = $rs['usuario_tema_id'];
            $_SESSION['usuario_tema_nombre'] = $rs['usuario_tema_nombre'];
            $_SESSION['usuario_tema_primary'] = $rs['usuario_tema_primary'];
            $_SESSION['usuario_tema_primary_hover'] = $rs['usuario_tema_primary_hover'];
            $_SESSION['usuario_tema_secondary'] = $rs['usuario_tema_secondary'];
            $_SESSION['usuario_tema_secondary_hover'] = $rs['usuario_tema_secondary_hover'];
            $_SESSION['usuario_tema_tertiary'] = $rs['usuario_tema_tertiary'];
            $_SESSION['usuario_tema_tertiary_hover'] = $rs['usuario_tema_tertiary_hover'];
            $_SESSION['usuario_tema_quaternary'] = $rs['usuario_tema_quaternary'];
            $_SESSION['usuario_tema_quaternary_hover'] = $rs['usuario_tema_quaternary_hover'];
            $_SESSION['usuario_tema_success'] = $rs['usuario_tema_success'];
            $_SESSION['usuario_tema_info'] = $rs['usuario_tema_info'];
            $_SESSION['usuario_tema_warning'] = $rs['usuario_tema_warning'];
            $_SESSION['usuario_tema_error'] = $rs['usuario_tema_error'];
            $_SESSION['usuario_tema_dark_primary'] = $rs['usuario_tema_dark_primary'];
            $_SESSION['usuario_tema_dark_primary_hover'] = $rs['usuario_tema_dark_primary_hover'];
            $_SESSION['usuario_tema_dark_secondary'] = $rs['usuario_tema_dark_secondary'];
            $_SESSION['usuario_tema_dark_secondary_hover'] = $rs['usuario_tema_dark_secondary_hover'];
            $_SESSION['usuario_tema_dark_tertiary'] = $rs['usuario_tema_dark_tertiary'];
            $_SESSION['usuario_tema_dark_tertiary_hover'] = $rs['usuario_tema_dark_tertiary_hover'];
            $_SESSION['usuario_tema_dark_quaternary_hover'] = $rs['usuario_tema_dark_quaternary_hover'];
            $_SESSION['usuario_tema_dark_quaternary'] = $rs['usuario_tema_dark_quaternary'];
            $_SESSION['usuario_tema_dark_success'] = $rs['usuario_tema_dark_success'];
            $_SESSION['usuario_tema_dark_info'] = $rs['usuario_tema_dark_info'];
            $_SESSION['usuario_tema_dark_warning'] = $rs['usuario_tema_dark_warning'];
            $_SESSION['usuario_tema_dark_error'] = $rs['usuario_tema_dark_error'];

            $_SESSION['usuario_pais_id'] = $rs['usuario_pais_id'];
            $_SESSION['usuario_pais_nombre'] = $rs['usuario_pais_nombre'];
            $_SESSION['usuario_pais_bandera'] = $rs['usuario_pais_bandera'];
            $_SESSION['usuario_pais_descripcion'] = $rs['usuario_pais_descripcion'];
            
            $_SESSION['usuario_chat'] = '';

            echo json_encode($rs);
        } else {
            echo json_encode([null]);
        }
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
