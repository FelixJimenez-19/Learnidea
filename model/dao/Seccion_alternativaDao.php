<?php

class Seccion_alternativaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM seccion_alternativa");
    }
    public function selectById($seccion_alternativa_id)
    {
        return $this->conn->query("SELECT * FROM seccion_alternativa WHERE seccion_alternativa_id = $seccion_alternativa_id");
    }
    public function selectBySeccion_pregunta_id($seccion_pregunta_id)
    {
        return $this->conn->query("SELECT * FROM seccion_alternativa WHERE seccion_pregunta_id = $seccion_pregunta_id");
    }
    public function insert($seccion_alternativa_descripcion, $seccion_alternativa_correta, $seccion_pregunta_id)
    {
        return $this->conn->query("INSERT INTO seccion_alternativa SET seccion_alternativa_descripcion='$seccion_alternativa_descripcion', seccion_alternativa_correta=$seccion_alternativa_correta, seccion_pregunta_id=$seccion_pregunta_id ");
    }
    public function update($seccion_alternativa_descripcion, $seccion_alternativa_correta, $seccion_pregunta_id, $seccion_alternativa_id)
    {
        return $this->conn->query("UPDATE seccion_alternativa SET seccion_alternativa_descripcion='$seccion_alternativa_descripcion', seccion_alternativa_correta=$seccion_alternativa_correta, seccion_pregunta_id=$seccion_pregunta_id WHERE seccion_alternativa_id = $seccion_alternativa_id ");
    }
    public function delete($seccion_alternativa_id)
    {
        return $this->conn->query("DELETE FROM seccion_alternativa WHERE seccion_alternativa_id = $seccion_alternativa_id ");
    }
}
