<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/curso_modelo/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/Curso_modeloDao.php';
include './../../function/validation.php';
$_entity = new Curso_modeloDao();
if (isset($_POST['curso_modelo_nombre']) and isset($_POST['curso_modelo_hora_teorica']) and isset($_POST['curso_modelo_hora_practica']) and isset($_POST['area_id']) and isset($_POST['especificacion_id']) and isset($_POST['alineacion_id']) and isset($_POST['participante_tipo_id']) and isset($_POST['modalidad_id']) and isset($_POST['duracion_id']) and isset($_POST['usuario_id']) and  isset($_POST['curso_modelo_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $curso_modelo_nombre = $_POST['curso_modelo_nombre'];
        $curso_modelo_hora_teorica = $_POST['curso_modelo_hora_teorica'];
        $curso_modelo_hora_practica = $_POST['curso_modelo_hora_practica'];
        $area_id = $_POST['area_id'];
        $especificacion_id = $_POST['especificacion_id'];
        $alineacion_id = $_POST['alineacion_id'];
        $participante_tipo_id = $_POST['participante_tipo_id'];
        $modalidad_id = $_POST['modalidad_id'];
        $duracion_id = $_POST['duracion_id'];
        $usuario_id = $_POST['usuario_id'];
        $curso_modelo_id = $_POST['curso_modelo_id'];
        $_entity->update($curso_modelo_nombre, $curso_modelo_hora_teorica, $curso_modelo_hora_practica, $area_id, $especificacion_id, $alineacion_id, $participante_tipo_id, $modalidad_id, $duracion_id, $usuario_id, $curso_modelo_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
