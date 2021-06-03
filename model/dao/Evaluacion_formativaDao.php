<?php

class Evaluacion_formativaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM evaluacion_formativa");
    }
    public function selectById($evaluacion_formativa_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_formativa WHERE evaluacion_formativa_id = $evaluacion_formativa_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_formativa WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($evaluacion_formativa_tecnica, $evaluacion_formativa_instrumento, $evaluacion_formativa_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO evaluacion_formativa SET evaluacion_formativa_tecnica='$evaluacion_formativa_tecnica', evaluacion_formativa_instrumento='$evaluacion_formativa_instrumento', evaluacion_formativa_descripcion='$evaluacion_formativa_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($evaluacion_formativa_tecnica, $evaluacion_formativa_instrumento, $evaluacion_formativa_descripcion, $curso_modelo_id, $evaluacion_formativa_id)
    {
        return $this->conn->query("UPDATE evaluacion_formativa SET evaluacion_formativa_tecnica='$evaluacion_formativa_tecnica', evaluacion_formativa_instrumento='$evaluacion_formativa_instrumento', evaluacion_formativa_descripcion='$evaluacion_formativa_descripcion', curso_modelo_id=$curso_modelo_id WHERE evaluacion_formativa_id = $evaluacion_formativa_id ");
    }
    public function delete($evaluacion_formativa_id)
    {
        return $this->conn->query("DELETE FROM evaluacion_formativa WHERE evaluacion_formativa_id = $evaluacion_formativa_id ");
    }
}
