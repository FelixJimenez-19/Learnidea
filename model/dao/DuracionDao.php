<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/DuracionDao.php
*/
class DuracionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM duracion");
    }
    public function selectById($duracion_id)
    {
        return $this->conn->query("SELECT * FROM duracion WHERE duracion_id = $duracion_id");
    }
    public function insert($duracion_descripcion)
    {
        return $this->conn->query("INSERT INTO duracion SET duracion_descripcion='$duracion_descripcion' ");
    }
    public function update($duracion_descripcion, $duracion_id)
    {
        return $this->conn->query("UPDATE duracion SET duracion_descripcion='$duracion_descripcion' WHERE duracion_id = $duracion_id ");
    }
    public function delete($duracion_id)
    {
        return $this->conn->query("DELETE FROM duracion WHERE duracion_id = $duracion_id ");
    }
}
