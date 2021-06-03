<?php

class Contenido_primarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM contenido_primario");
    }
    public function selectById($contenido_primario_id)
    {
        return $this->conn->query("SELECT * FROM contenido_primario WHERE contenido_primario_id = $contenido_primario_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM contenido_primario WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($contenido_primario_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO contenido_primario SET contenido_primario_descripcion='$contenido_primario_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($contenido_primario_descripcion, $curso_modelo_id, $contenido_primario_id)
    {
        return $this->conn->query("UPDATE contenido_primario SET contenido_primario_descripcion='$contenido_primario_descripcion', curso_modelo_id=$curso_modelo_id WHERE contenido_primario_id = $contenido_primario_id ");
    }
    public function delete($contenido_primario_id)
    {
        return $this->conn->query("DELETE FROM contenido_primario WHERE contenido_primario_id = $contenido_primario_id ");
    }
}
