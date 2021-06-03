<?php

class Contenido_secundarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM contenido_secundario");
    }
    public function selectById($contenido_secundario_id)
    {
        return $this->conn->query("SELECT * FROM contenido_secundario WHERE contenido_secundario_id = $contenido_secundario_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM contenido_secundario WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($contenido_secundario_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO contenido_secundario SET contenido_secundario_descripcion='$contenido_secundario_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($contenido_secundario_descripcion, $curso_modelo_id, $contenido_secundario_id)
    {
        return $this->conn->query("UPDATE contenido_secundario SET contenido_secundario_descripcion='$contenido_secundario_descripcion', curso_modelo_id=$curso_modelo_id WHERE contenido_secundario_id = $contenido_secundario_id ");
    }
    public function delete($contenido_secundario_id)
    {
        return $this->conn->query("DELETE FROM contenido_secundario WHERE contenido_secundario_id = $contenido_secundario_id ");
    }
}
