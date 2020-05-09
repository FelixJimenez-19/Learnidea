<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/informacion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/InformacionDao.php';
include './../../function/validation.php';
$_entity = new InformacionDao();
if (isset($_POST['informacion_empresa_nombre']) and isset($_POST['informacion_empresa_siglas']) and isset($_POST['informacion_empresa_ciudad']) and isset($_POST['informacion_empresa_mision']) and isset($_POST['informacion_empresa_vision']) and isset($_POST['informacion_gerente_nombre']) and isset($_POST['informacion_gerente_celular']) and isset($_POST['informacion_gerente_nivel_nombre']) and isset($_POST['informacion_gerente_nivel_siglas']) and isset($_POST['informacion_pagina_nombre']) and isset($_POST['informacion_pagina_mision']) and isset($_POST['informacion_pagina_vision']) and isset($_POST['informacion_pagina_copyright']) and isset($_POST['informacion_ubicacion']) and isset($_POST['informacion_api_key']) and  isset($_POST['informacion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $informacion_empresa_nombre = $_POST['informacion_empresa_nombre'];
        $informacion_empresa_siglas = $_POST['informacion_empresa_siglas'];
        $informacion_empresa_ciudad = $_POST['informacion_empresa_ciudad'];
        $informacion_empresa_mision = $_POST['informacion_empresa_mision'];
        $informacion_empresa_vision = $_POST['informacion_empresa_vision'];
        $informacion_gerente_nombre = $_POST['informacion_gerente_nombre'];
        $informacion_gerente_celular = $_POST['informacion_gerente_celular'];
        $informacion_gerente_nivel_nombre = $_POST['informacion_gerente_nivel_nombre'];
        $informacion_gerente_nivel_siglas = $_POST['informacion_gerente_nivel_siglas'];
        $informacion_pagina_nombre = $_POST['informacion_pagina_nombre'];
        $informacion_pagina_mision = $_POST['informacion_pagina_mision'];
        $informacion_pagina_vision = $_POST['informacion_pagina_vision'];
        $informacion_pagina_copyright = $_POST['informacion_pagina_copyright'];
        $informacion_ubicacion = $_POST['informacion_ubicacion'];
        $informacion_api_key = $_POST['informacion_api_key'];
        $informacion_id = $_POST['informacion_id'];
        $_entity->update($informacion_empresa_nombre, $informacion_empresa_siglas, $informacion_empresa_ciudad, $informacion_empresa_mision, $informacion_empresa_vision, $informacion_gerente_nombre, $informacion_gerente_celular, $informacion_gerente_nivel_nombre, $informacion_gerente_nivel_siglas, $informacion_pagina_nombre, $informacion_pagina_mision, $informacion_pagina_vision, $informacion_pagina_copyright, $informacion_ubicacion, $informacion_api_key, $informacion_id);

        if (isset($_FILES['informacion_empresa_logo'])) {
            $informacion_empresa_logo = $_FILES['informacion_empresa_logo'];
            if ($informacion_empresa_logo['tmp_name'] != "" or $informacion_empresa_logo['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/informacion_empresa_logo')) {
                    mkdir("../../../view/src/files/informacion_empresa_logo", 0700);
                }

                $desde = $informacion_empresa_logo['tmp_name'];
                $hasta = "../../../view/src/files/informacion_empresa_logo/" . $informacion_id . ".png";
                copy($desde, $hasta);
                $_entity->updateInformacion_empresa_logo($informacion_id . ".png", $informacion_id);
            }
        }

        if (isset($_FILES['informacion_pagina_logo'])) {
            $informacion_pagina_logo = $_FILES['informacion_pagina_logo'];
            if ($informacion_pagina_logo['tmp_name'] != "" or $informacion_pagina_logo['tmp_name'] != null) {
                if (!file_exists('../../../view/src/files/informacion_pagina_logo')) {
                    mkdir("../../../view/src/files/informacion_pagina_logo", 0700);
                }

                $desde = $informacion_pagina_logo['tmp_name'];
                $hasta = "../../../view/src/files/informacion_pagina_logo/" . $informacion_id . ".png";
                copy($desde, $hasta);
                $_entity->updateInformacion_pagina_logo($informacion_id . ".png", $informacion_id);
            }
        }
        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
