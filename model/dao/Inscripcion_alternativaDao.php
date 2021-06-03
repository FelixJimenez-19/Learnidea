<?php

class Inscripcion_alternativaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM inscripcion_alternativa");
    }
    public function selectById($inscripcion_alternativa_id)
    {
        return $this->conn->query("SELECT * FROM inscripcion_alternativa WHERE inscripcion_alternativa_id = $inscripcion_alternativa_id");
    }
    public function insert($inscripcion_pregunta_id, $seccion_alternativa_id)
    {
        return $this->conn->query("INSERT INTO inscripcion_alternativa SET inscripcion_pregunta_id=$inscripcion_pregunta_id, seccion_alternativa_id=$seccion_alternativa_id ");
    }
    public function update($inscripcion_pregunta_id, $seccion_alternativa_id, $inscripcion_alternativa_id)
    {
        return $this->conn->query("UPDATE inscripcion_alternativa SET inscripcion_pregunta_id=$inscripcion_pregunta_id, seccion_alternativa_id=$seccion_alternativa_id WHERE inscripcion_alternativa_id = $inscripcion_alternativa_id ");
    }
    public function delete($inscripcion_alternativa_id)
    {
        return $this->conn->query("DELETE FROM inscripcion_alternativa WHERE inscripcion_alternativa_id = $inscripcion_alternativa_id ");
    }
}
