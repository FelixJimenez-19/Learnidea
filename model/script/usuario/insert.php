<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/usuario/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/UsuarioDao.php';
include './../../function/validation.php';
$_entity = new UsuarioDao();
if (isset($_POST['usuario_nombre']) and isset($_POST['usuario_cedula']) and isset($_POST['usuario_nacimiento']) and isset($_POST['usuario_indice']) and isset($_POST['usuario_celular']) and isset($_POST['usuario_telefono']) and isset($_POST['usuario_email']) and isset($_POST['usuario_pass']) and isset($_POST['usuario_sexo']) and isset($_POST['usuario_nivel']) and isset($_POST['usuario_calificacion']) and isset($_POST['usuario_direccion']) and isset($_POST['usuario_descripcion']) and isset($_POST['usuario_empresa_nombre']) and isset($_POST['usuario_empresa_actividad']) and isset($_POST['usuario_empresa_direccion']) and isset($_POST['usuario_empresa_telefono']) and isset($_POST['usuario_tema_mode_dark']) and isset($_POST['usuario_tipo_id']) and isset($_POST['usuario_tema_id']) and isset($_POST['usuario_pais_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $usuario_nombre = $_POST['usuario_nombre'];
        $usuario_cedula = $_POST['usuario_cedula'];
        $usuario_nacimiento = $_POST['usuario_nacimiento'];
        $usuario_indice = $_POST['usuario_indice'];
        $usuario_celular = $_POST['usuario_celular'];
        $usuario_telefono = $_POST['usuario_telefono'];
        $usuario_email = $_POST['usuario_email'];
        $usuario_pass = $_POST['usuario_pass'];
        $usuario_sexo = $_POST['usuario_sexo'];
        $usuario_nivel = $_POST['usuario_nivel'];
        $usuario_calificacion = $_POST['usuario_calificacion'];
        $usuario_direccion = $_POST['usuario_direccion'];
        $usuario_descripcion = $_POST['usuario_descripcion'];
        $usuario_empresa_nombre = $_POST['usuario_empresa_nombre'];
        $usuario_empresa_actividad = $_POST['usuario_empresa_actividad'];
        $usuario_empresa_direccion = $_POST['usuario_empresa_direccion'];
        $usuario_empresa_telefono = $_POST['usuario_empresa_telefono'];
        $usuario_tema_mode_dark = $_POST['usuario_tema_mode_dark'];
        $usuario_tipo_id = $_POST['usuario_tipo_id'];
        $usuario_tema_id = $_POST['usuario_tema_id'];
        $usuario_pais_id = $_POST['usuario_pais_id'];
        $_entity->insert($usuario_nombre, $usuario_cedula, $usuario_nacimiento, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_pais_id);

        if (isset($_FILES['usuario_foto'])) {
            $usuario_foto = $_FILES['usuario_foto'];
            if ($usuario_foto['tmp_name'] != "" or $usuario_foto['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/usuario_foto')) {
                    mkdir("../../../view/src/files/usuario_foto", 0700);
                }

                $usuario_id = mysqli_fetch_assoc($_entity->selectByAll($usuario_nombre, $usuario_cedula, $usuario_nacimiento, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_pais_id))['usuario_id'];

                $desde = $usuario_foto['tmp_name'];
                $hasta = "../../../view/src/files/usuario_foto/" . $usuario_id . ".png";
                copy($desde, $hasta);
                $_entity->updateUsuario_foto($usuario_id . ".png", $usuario_id);
            }
        }

        if (isset($_FILES['usuario_portada'])) {
            $usuario_portada = $_FILES['usuario_portada'];
            if ($usuario_portada['tmp_name'] != "" or $usuario_portada['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/usuario_portada')) {
                    mkdir("../../../view/src/files/usuario_portada", 0700);
                }

                $usuario_id = mysqli_fetch_assoc($_entity->selectByAll($usuario_nombre, $usuario_cedula, $usuario_nacimiento, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_pais_id))['usuario_id'];

                $desde = $usuario_portada['tmp_name'];
                $hasta = "../../../view/src/files/usuario_portada/" . $usuario_id . ".png";
                copy($desde, $hasta);
                $_entity->updateUsuario_portada($usuario_id . ".png", $usuario_id);
            }
        }

        if (isset($_FILES['usuario_firma'])) {
            $usuario_firma = $_FILES['usuario_firma'];
            if ($usuario_firma['tmp_name'] != "" or $usuario_firma['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/usuario_firma')) {
                    mkdir("../../../view/src/files/usuario_firma", 0700);
                }

                $usuario_id = mysqli_fetch_assoc($_entity->selectByAll($usuario_nombre, $usuario_cedula, $usuario_nacimiento, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_pais_id))['usuario_id'];

                $desde = $usuario_firma['tmp_name'];
                $hasta = "../../../view/src/files/usuario_firma/" . $usuario_id . ".png";
                copy($desde, $hasta);
                $_entity->updateUsuario_firma($usuario_id . ".png", $usuario_id);
            }
        }

        if (isset($_FILES['usuario_curriculum'])) {
            $usuario_curriculum = $_FILES['usuario_curriculum'];
            if ($usuario_curriculum['tmp_name'] != "" or $usuario_curriculum['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/usuario_curriculum')) {
                    mkdir("../../../view/src/files/usuario_curriculum", 0700);
                }

                $usuario_id = mysqli_fetch_assoc($_entity->selectByAll($usuario_nombre, $usuario_cedula, $usuario_nacimiento, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_pais_id))['usuario_id'];

                $desde = $usuario_curriculum['tmp_name'];
                $hasta = "../../../view/src/files/usuario_curriculum/" . $usuario_id . ".pdf";
                copy($desde, $hasta);
                $_entity->updateUsuario_curriculum($usuario_id . ".pdf", $usuario_id);
            }
        }

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
