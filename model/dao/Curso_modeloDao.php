<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Curso_modeloDao.php
*/
class Curso_modeloDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM curso_modelo");
    }
    public function selectById($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM curso_modelo WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($curso_modelo_nombre, $curso_modelo_hora_teorica, $curso_modelo_hora_practica, $area_id, $especificacion_id, $alineacion_id, $participante_tipo_id, $modalidad_id, $duracion_id, $usuario_id)
    {
        return $this->conn->query("INSERT INTO curso_modelo SET curso_modelo_nombre='$curso_modelo_nombre', curso_modelo_hora_teorica=$curso_modelo_hora_teorica, curso_modelo_hora_practica=$curso_modelo_hora_practica, area_id=$area_id, especificacion_id=$especificacion_id, alineacion_id=$alineacion_id, participante_tipo_id=$participante_tipo_id, modalidad_id=$modalidad_id, duracion_id=$duracion_id, usuario_id=$usuario_id ");
    }
    public function update($curso_modelo_nombre, $curso_modelo_hora_teorica, $curso_modelo_hora_practica, $area_id, $especificacion_id, $alineacion_id, $participante_tipo_id, $modalidad_id, $duracion_id, $usuario_id, $curso_modelo_id)
    {
        return $this->conn->query("UPDATE curso_modelo SET curso_modelo_nombre='$curso_modelo_nombre', curso_modelo_hora_teorica=$curso_modelo_hora_teorica, curso_modelo_hora_practica=$curso_modelo_hora_practica, area_id=$area_id, especificacion_id=$especificacion_id, alineacion_id=$alineacion_id, participante_tipo_id=$participante_tipo_id, modalidad_id=$modalidad_id, duracion_id=$duracion_id, usuario_id=$usuario_id WHERE curso_modelo_id = $curso_modelo_id ");
    }
    public function delete($curso_modelo_id)
    {
        return $this->conn->query("DELETE FROM curso_modelo WHERE curso_modelo_id = $curso_modelo_id ");
    }
}
