<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Inscripcion_preguntaDao.php
*/
class Inscripcion_preguntaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM inscripcion_pregunta");
    }
    public function selectById($inscripcion_pregunta_id)
    {
        return $this->conn->query("SELECT * FROM inscripcion_pregunta WHERE inscripcion_pregunta_id = $inscripcion_pregunta_id");
    }
    public function insert($inscripcion_leccion_id, $seccion_pregunta_id)
    {
        return $this->conn->query("INSERT INTO inscripcion_pregunta SET inscripcion_leccion_id=$inscripcion_leccion_id, seccion_pregunta_id=$seccion_pregunta_id ");
    }
    public function update($inscripcion_leccion_id, $seccion_pregunta_id, $inscripcion_pregunta_id)
    {
        return $this->conn->query("UPDATE inscripcion_pregunta SET inscripcion_leccion_id=$inscripcion_leccion_id, seccion_pregunta_id=$seccion_pregunta_id WHERE inscripcion_pregunta_id = $inscripcion_pregunta_id ");
    }
    public function delete($inscripcion_pregunta_id)
    {
        return $this->conn->query("DELETE FROM inscripcion_pregunta WHERE inscripcion_pregunta_id = $inscripcion_pregunta_id ");
    }
}
