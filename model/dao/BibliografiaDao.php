<?php

class BibliografiaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM bibliografia");
    }
    public function selectById($bibliografia_id)
    {
        return $this->conn->query("SELECT * FROM bibliografia WHERE bibliografia_id = $bibliografia_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM bibliografia WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($bibliografia_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO bibliografia SET bibliografia_descripcion='$bibliografia_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($bibliografia_descripcion, $curso_modelo_id, $bibliografia_id)
    {
        return $this->conn->query("UPDATE bibliografia SET bibliografia_descripcion='$bibliografia_descripcion', curso_modelo_id=$curso_modelo_id WHERE bibliografia_id = $bibliografia_id ");
    }
    public function delete($bibliografia_id)
    {
        return $this->conn->query("DELETE FROM bibliografia WHERE bibliografia_id = $bibliografia_id ");
    }
}
