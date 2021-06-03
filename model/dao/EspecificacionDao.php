<?php

class EspecificacionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM especificacion");
    }
    public function selectById($especificacion_id)
    {
        return $this->conn->query("SELECT * FROM especificacion WHERE especificacion_id = $especificacion_id");
    }
    public function insert($especificacion_codigo, $especificacion_descripcion)
    {
        return $this->conn->query("INSERT INTO especificacion SET especificacion_codigo='$especificacion_codigo', especificacion_descripcion='$especificacion_descripcion' ");
    }
    public function update($especificacion_codigo, $especificacion_descripcion, $especificacion_id)
    {
        return $this->conn->query("UPDATE especificacion SET especificacion_codigo='$especificacion_codigo', especificacion_descripcion='$especificacion_descripcion' WHERE especificacion_id = $especificacion_id ");
    }
    public function delete($especificacion_id)
    {
        return $this->conn->query("DELETE FROM especificacion WHERE especificacion_id = $especificacion_id ");
    }
}
