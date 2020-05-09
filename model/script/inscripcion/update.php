<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/inscripcion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/InscripcionDao.php';
include './../../function/validation.php';
$_entity = new InscripcionDao();
if (isset($_POST['inscripcion_estado']) and isset($_POST['inscripcion_certificado_participante_nombre']) and isset($_POST['inscripcion_certificado_participante_cedula']) and isset($_POST['inscripcion_certificado_empresa_nombre']) and isset($_POST['inscripcion_certificado_empresa_ciudad']) and isset($_POST['inscripcion_certificado_empresa_gerente']) and isset($_POST['inscripcion_certificado_empresa_docente']) and isset($_POST['inscripcion_certificado_curso_nombre']) and isset($_POST['inscripcion_certificado_curso_fecha_inicio']) and isset($_POST['inscripcion_certificado_curso_fecha_fin']) and isset($_POST['inscripcion_certificado_curso_horas']) and isset($_POST['inscripcion_certificado_emision']) and isset($_POST['inscripcion_certificado_codigo']) and isset($_POST['inscripcion_curso_calificacion']) and isset($_POST['inscripcion_curso_opinion']) and isset($_POST['inscripcion_pago_live']) and isset($_POST['inscripcion_pago_record']) and isset($_POST['usuario_id']) and isset($_POST['curso_id']) and  isset($_POST['inscripcion_id']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        $inscripcion_estado = $_POST['inscripcion_estado'];
        $inscripcion_certificado_participante_nombre = $_POST['inscripcion_certificado_participante_nombre'];
        $inscripcion_certificado_participante_cedula = $_POST['inscripcion_certificado_participante_cedula'];
        $inscripcion_certificado_empresa_nombre = $_POST['inscripcion_certificado_empresa_nombre'];
        $inscripcion_certificado_empresa_ciudad = $_POST['inscripcion_certificado_empresa_ciudad'];
        $inscripcion_certificado_empresa_gerente = $_POST['inscripcion_certificado_empresa_gerente'];
        $inscripcion_certificado_empresa_docente = $_POST['inscripcion_certificado_empresa_docente'];
        $inscripcion_certificado_curso_nombre = $_POST['inscripcion_certificado_curso_nombre'];
        $inscripcion_certificado_curso_fecha_inicio = $_POST['inscripcion_certificado_curso_fecha_inicio'];
        $inscripcion_certificado_curso_fecha_fin = $_POST['inscripcion_certificado_curso_fecha_fin'];
        $inscripcion_certificado_curso_horas = $_POST['inscripcion_certificado_curso_horas'];
        $inscripcion_certificado_emision = $_POST['inscripcion_certificado_emision'];
        $inscripcion_certificado_codigo = $_POST['inscripcion_certificado_codigo'];
        $inscripcion_curso_calificacion = $_POST['inscripcion_curso_calificacion'];
        $inscripcion_curso_opinion = $_POST['inscripcion_curso_opinion'];
        $inscripcion_pago_live = $_POST['inscripcion_pago_live'];
        $inscripcion_pago_record = $_POST['inscripcion_pago_record'];
        $usuario_id = $_POST['usuario_id'];
        $curso_id = $_POST['curso_id'];
        $inscripcion_id = $_POST['inscripcion_id'];
        $_entity->update($inscripcion_estado, $inscripcion_certificado_participante_nombre, $inscripcion_certificado_participante_cedula, $inscripcion_certificado_empresa_nombre, $inscripcion_certificado_empresa_ciudad, $inscripcion_certificado_empresa_gerente, $inscripcion_certificado_empresa_docente, $inscripcion_certificado_curso_nombre, $inscripcion_certificado_curso_fecha_inicio, $inscripcion_certificado_curso_fecha_fin, $inscripcion_certificado_curso_horas, $inscripcion_certificado_emision, $inscripcion_certificado_codigo, $inscripcion_curso_calificacion, $inscripcion_curso_opinion, $inscripcion_pago_live, $inscripcion_pago_record, $usuario_id, $curso_id, $inscripcion_id);

        echo json_encode(["Success"]);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode([null]);
}
