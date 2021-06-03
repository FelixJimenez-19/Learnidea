<?php

class Contenido_transversalDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM contenido_transversal");
    }
    public function selectById($contenido_transversal_id)
    {
        return $this->conn->query("SELECT * FROM contenido_transversal WHERE contenido_transversal_id = $contenido_transversal_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM contenido_transversal WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($contenido_transversal_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO contenido_transversal SET contenido_transversal_descripcion='$contenido_transversal_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($contenido_transversal_descripcion, $curso_modelo_id, $contenido_transversal_id)
    {
        return $this->conn->query("UPDATE contenido_transversal SET contenido_transversal_descripcion='$contenido_transversal_descripcion', curso_modelo_id=$curso_modelo_id WHERE contenido_transversal_id = $contenido_transversal_id ");
    }
    public function delete($contenido_transversal_id)
    {
        return $this->conn->query("DELETE FROM contenido_transversal WHERE contenido_transversal_id = $contenido_transversal_id ");
    }
}
