<?php

class Seccion_leccionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM seccion_leccion");
    }
    public function selectById($seccion_leccion_id)
    {
        return $this->conn->query("SELECT * FROM seccion_leccion WHERE seccion_leccion_id = $seccion_leccion_id");
    }
    public function selectByCurso_seccion_id($curso_seccion_id)
    {
        return $this->conn->query("SELECT * FROM seccion_leccion WHERE curso_seccion_id = $curso_seccion_id");
    }
    public function insert($seccion_leccion_descripcion, $seccion_leccion_puntaje, $seccion_leccion_intento, $seccion_leccion_tiempo, $curso_seccion_id)
    {
        return $this->conn->query("INSERT INTO seccion_leccion SET seccion_leccion_descripcion='$seccion_leccion_descripcion', seccion_leccion_puntaje=$seccion_leccion_puntaje, seccion_leccion_intento=$seccion_leccion_intento, seccion_leccion_tiempo='$seccion_leccion_tiempo', curso_seccion_id=$curso_seccion_id ");
    }
    public function update($seccion_leccion_descripcion, $seccion_leccion_puntaje, $seccion_leccion_intento, $seccion_leccion_tiempo, $curso_seccion_id, $seccion_leccion_id)
    {
        return $this->conn->query("UPDATE seccion_leccion SET seccion_leccion_descripcion='$seccion_leccion_descripcion', seccion_leccion_puntaje=$seccion_leccion_puntaje, seccion_leccion_intento=$seccion_leccion_intento, seccion_leccion_tiempo='$seccion_leccion_tiempo', curso_seccion_id=$curso_seccion_id WHERE seccion_leccion_id = $seccion_leccion_id ");
    }
    public function delete($seccion_leccion_id)
    {
        return $this->conn->query("DELETE FROM seccion_leccion WHERE seccion_leccion_id = $seccion_leccion_id ");
    }
}
