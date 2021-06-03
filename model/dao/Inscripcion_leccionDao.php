<?php

class Inscripcion_leccionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM inscripcion_leccion");
    }
    public function selectById($inscripcion_leccion_id)
    {
        return $this->conn->query("SELECT * FROM inscripcion_leccion WHERE inscripcion_leccion_id = $inscripcion_leccion_id");
    }
    public function insert($inscripcion_leccion_nota, $inscripcion_id, $seccion_leccion_id)
    {
        return $this->conn->query("INSERT INTO inscripcion_leccion SET inscripcion_leccion_nota=$inscripcion_leccion_nota, inscripcion_id=$inscripcion_id, seccion_leccion_id=$seccion_leccion_id ");
    }
    public function update($inscripcion_leccion_nota, $inscripcion_id, $seccion_leccion_id, $inscripcion_leccion_id)
    {
        return $this->conn->query("UPDATE inscripcion_leccion SET inscripcion_leccion_nota=$inscripcion_leccion_nota, inscripcion_id=$inscripcion_id, seccion_leccion_id=$seccion_leccion_id WHERE inscripcion_leccion_id = $inscripcion_leccion_id ");
    }
    public function delete($inscripcion_leccion_id)
    {
        return $this->conn->query("DELETE FROM inscripcion_leccion WHERE inscripcion_leccion_id = $inscripcion_leccion_id ");
    }
}
