
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/InscripcionDao.php
*/
class InscripcionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM inscripcion");
    }
    public function selectById($inscripcion_id)
    {
        return $this->conn->query("SELECT * FROM inscripcion WHERE inscripcion_id = $inscripcion_id");
    }
    public function insert($inscripcion_estado, $inscripcion_certificado_participante_nombre, $inscripcion_certificado_participante_cedula, $inscripcion_certificado_empresa_nombre, $inscripcion_certificado_empresa_ciudad, $inscripcion_certificado_empresa_gerente, $inscripcion_certificado_empresa_docente, $inscripcion_certificado_curso_nombre, $inscripcion_certificado_curso_fecha_inicio, $inscripcion_certificado_curso_fecha_fin, $inscripcion_certificado_curso_horas, $inscripcion_certificado_emision, $inscripcion_certificado_codigo, $inscripcion_curso_calificacion, $inscripcion_curso_opinion, $inscripcion_pago_live, $inscripcion_pago_record, $usuario_id, $curso_id)
    {
        return $this->conn->query("INSERT INTO inscripcion SET inscripcion_estado='$inscripcion_estado', inscripcion_certificado_participante_nombre='$inscripcion_certificado_participante_nombre', inscripcion_certificado_participante_cedula='$inscripcion_certificado_participante_cedula', inscripcion_certificado_empresa_nombre='$inscripcion_certificado_empresa_nombre', inscripcion_certificado_empresa_ciudad='$inscripcion_certificado_empresa_ciudad', inscripcion_certificado_empresa_gerente='$inscripcion_certificado_empresa_gerente', inscripcion_certificado_empresa_docente='$inscripcion_certificado_empresa_docente', inscripcion_certificado_curso_nombre='$inscripcion_certificado_curso_nombre', inscripcion_certificado_curso_fecha_inicio='$inscripcion_certificado_curso_fecha_inicio', inscripcion_certificado_curso_fecha_fin='$inscripcion_certificado_curso_fecha_fin', inscripcion_certificado_curso_horas=$inscripcion_certificado_curso_horas, inscripcion_certificado_emision='$inscripcion_certificado_emision', inscripcion_certificado_codigo='$inscripcion_certificado_codigo', inscripcion_curso_calificacion=$inscripcion_curso_calificacion, inscripcion_curso_opinion='$inscripcion_curso_opinion', inscripcion_pago_live=$inscripcion_pago_live, inscripcion_pago_record=$inscripcion_pago_record, usuario_id=$usuario_id, curso_id=$curso_id ");
    }
    public function update($inscripcion_estado, $inscripcion_certificado_participante_nombre, $inscripcion_certificado_participante_cedula, $inscripcion_certificado_empresa_nombre, $inscripcion_certificado_empresa_ciudad, $inscripcion_certificado_empresa_gerente, $inscripcion_certificado_empresa_docente, $inscripcion_certificado_curso_nombre, $inscripcion_certificado_curso_fecha_inicio, $inscripcion_certificado_curso_fecha_fin, $inscripcion_certificado_curso_horas, $inscripcion_certificado_emision, $inscripcion_certificado_codigo, $inscripcion_curso_calificacion, $inscripcion_curso_opinion, $inscripcion_pago_live, $inscripcion_pago_record, $usuario_id, $curso_id, $inscripcion_id)
    {
        return $this->conn->query("UPDATE inscripcion SET inscripcion_estado='$inscripcion_estado', inscripcion_certificado_participante_nombre='$inscripcion_certificado_participante_nombre', inscripcion_certificado_participante_cedula='$inscripcion_certificado_participante_cedula', inscripcion_certificado_empresa_nombre='$inscripcion_certificado_empresa_nombre', inscripcion_certificado_empresa_ciudad='$inscripcion_certificado_empresa_ciudad', inscripcion_certificado_empresa_gerente='$inscripcion_certificado_empresa_gerente', inscripcion_certificado_empresa_docente='$inscripcion_certificado_empresa_docente', inscripcion_certificado_curso_nombre='$inscripcion_certificado_curso_nombre', inscripcion_certificado_curso_fecha_inicio='$inscripcion_certificado_curso_fecha_inicio', inscripcion_certificado_curso_fecha_fin='$inscripcion_certificado_curso_fecha_fin', inscripcion_certificado_curso_horas=$inscripcion_certificado_curso_horas, inscripcion_certificado_emision='$inscripcion_certificado_emision', inscripcion_certificado_codigo='$inscripcion_certificado_codigo', inscripcion_curso_calificacion=$inscripcion_curso_calificacion, inscripcion_curso_opinion='$inscripcion_curso_opinion', inscripcion_pago_live=$inscripcion_pago_live, inscripcion_pago_record=$inscripcion_pago_record, usuario_id=$usuario_id, curso_id=$curso_id WHERE inscripcion_id = $inscripcion_id ");
    }
    public function delete($inscripcion_id)
    {
        return $this->conn->query("DELETE FROM inscripcion WHERE inscripcion_id = $inscripcion_id ");
    }
}
?>

