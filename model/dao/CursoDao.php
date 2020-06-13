<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/CursoDao.php
*/
class CursoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("
            SELECT * FROM curso
                INNER JOIN curso_modelo ON curso_modelo.curso_modelo_id = curso.curso_modelo_id

                INNER JOIN usuario ON usuario.usuario_id = curso.usuario_id
                INNER JOIN usuario_pais ON usuario_pais.usuario_pais_id = usuario.usuario_pais_id
        ");
    }
    public function selectById($curso_id)
    {
        return $this->conn->query("
            SELECT * FROM curso
                INNER JOIN curso_modelo ON curso_modelo.curso_modelo_id = curso.curso_modelo_id
                INNER JOIN area ON curso_modelo.area_id = area.area_id
                INNER JOIN especificacion ON curso_modelo.especificacion_id = especificacion.especificacion_id
                INNER JOIN alineacion ON curso_modelo.alineacion_id = alineacion.alineacion_id
                INNER JOIN participante_tipo ON curso_modelo.participante_tipo_id = participante_tipo.participante_tipo_id
                INNER JOIN modalidad ON curso_modelo.modalidad_id = modalidad.modalidad_id
                INNER JOIN duracion ON curso_modelo.duracion_id = duracion.duracion_id

                INNER JOIN usuario ON usuario.usuario_id = curso.usuario_id
                INNER JOIN usuario_pais ON usuario_pais.usuario_pais_id = usuario.usuario_pais_id
            WHERE curso_id = $curso_id
        ");
    }
    public function insert($curso_nombre, $curso_fecha_inicio, $curso_fecha_fin, $curso_cupos, $curso_whatsapp, $curso_calificacion, $curso_proximo, $curso_visible, $curso_precio_live, $curso_precio_record, $curso_certificado_live, $curso_certificado_record, $curso_certificacion_live, $curso_modelo_id, $usuario_id)
    {
        return $this->conn->query("INSERT INTO curso SET curso_nombre='$curso_nombre', curso_fecha_inicio='$curso_fecha_inicio', curso_fecha_fin='$curso_fecha_fin', curso_cupos=$curso_cupos, curso_whatsapp='$curso_whatsapp', curso_calificacion=$curso_calificacion, curso_proximo=$curso_proximo, curso_visible=$curso_visible, curso_precio_live=$curso_precio_live, curso_precio_record=$curso_precio_record, curso_certificado_live=$curso_certificado_live, curso_certificado_record=$curso_certificado_record, curso_certificacion_live=$curso_certificacion_live, curso_modelo_id=$curso_modelo_id, usuario_id=$usuario_id ");
    }
    public function update($curso_nombre, $curso_fecha_inicio, $curso_fecha_fin, $curso_cupos, $curso_whatsapp, $curso_calificacion, $curso_proximo, $curso_visible, $curso_precio_live, $curso_precio_record, $curso_certificado_live, $curso_certificado_record, $curso_certificacion_live, $curso_modelo_id, $usuario_id, $curso_id)
    {
        return $this->conn->query("UPDATE curso SET curso_nombre='$curso_nombre', curso_fecha_inicio='$curso_fecha_inicio', curso_fecha_fin='$curso_fecha_fin', curso_cupos=$curso_cupos, curso_whatsapp='$curso_whatsapp', curso_calificacion=$curso_calificacion, curso_proximo=$curso_proximo, curso_visible=$curso_visible, curso_precio_live=$curso_precio_live, curso_precio_record=$curso_precio_record, curso_certificado_live=$curso_certificado_live, curso_certificado_record=$curso_certificado_record, curso_certificacion_live=$curso_certificacion_live, curso_modelo_id=$curso_modelo_id, usuario_id=$usuario_id WHERE curso_id = $curso_id ");
    }
    public function delete($curso_id)
    {
        return $this->conn->query("DELETE FROM curso WHERE curso_id = $curso_id ");
    }

    public function selectByAll($curso_nombre, $curso_fecha_inicio, $curso_fecha_fin, $curso_cupos, $curso_whatsapp, $curso_calificacion, $curso_proximo, $curso_visible, $curso_precio_live, $curso_precio_record, $curso_certificado_live, $curso_certificado_record, $curso_certificacion_live, $curso_modelo_id, $usuario_id)
    {
        return $this->conn->query("SELECT * FROM curso WHERE curso_nombre='$curso_nombre' AND curso_fecha_inicio='$curso_fecha_inicio' AND curso_fecha_fin='$curso_fecha_fin' AND curso_cupos=$curso_cupos AND curso_whatsapp='$curso_whatsapp' AND curso_calificacion=$curso_calificacion AND curso_proximo=$curso_proximo AND curso_visible=$curso_visible AND curso_precio_live=$curso_precio_live AND curso_precio_record=$curso_precio_record AND curso_certificado_live=$curso_certificado_live AND curso_certificado_record=$curso_certificado_record AND curso_certificacion_live=$curso_certificacion_live AND curso_modelo_id=$curso_modelo_id AND usuario_id=$usuario_id ");
    }

    public function updateCurso_foto($curso_foto, $curso_id)
    {
        return $this->conn->query("UPDATE curso SET curso_foto='$curso_foto' WHERE curso_id = $curso_id ");
    }
}
