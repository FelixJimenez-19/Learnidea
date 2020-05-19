<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Seccion_preguntaDao.php
*/
class Seccion_preguntaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM seccion_pregunta");
    }
    public function selectById($seccion_pregunta_id)
    {
        return $this->conn->query("SELECT * FROM seccion_pregunta WHERE seccion_pregunta_id = $seccion_pregunta_id");
    }
    public function selectBySeccion_leccion_id($seccion_leccion_id)
    {
        return $this->conn->query("SELECT * FROM seccion_pregunta WHERE seccion_leccion_id = $seccion_leccion_id");
    }
    public function insert($seccion_pregunta_descripcion, $seccion_pregunta_porcentaje, $seccion_leccion_id)
    {
        return $this->conn->query("INSERT INTO seccion_pregunta SET seccion_pregunta_descripcion='$seccion_pregunta_descripcion', seccion_pregunta_porcentaje='$seccion_pregunta_porcentaje', seccion_leccion_id=$seccion_leccion_id ");
    }
    public function update($seccion_pregunta_descripcion, $seccion_pregunta_porcentaje, $seccion_leccion_id, $seccion_pregunta_id)
    {
        return $this->conn->query("UPDATE seccion_pregunta SET seccion_pregunta_descripcion='$seccion_pregunta_descripcion', seccion_pregunta_porcentaje='$seccion_pregunta_porcentaje', seccion_leccion_id=$seccion_leccion_id WHERE seccion_pregunta_id = $seccion_pregunta_id ");
    }
    public function delete($seccion_pregunta_id)
    {
        return $this->conn->query("DELETE FROM seccion_pregunta WHERE seccion_pregunta_id = $seccion_pregunta_id ");
    }
}
