<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/AreaDao.php
*/
class AreaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM area");
    }
    public function selectById($area_id)
    {
        return $this->conn->query("SELECT * FROM area WHERE area_id = $area_id");
    }
    public function insert($area_codigo, $area_descripcion)
    {
        return $this->conn->query("INSERT INTO area SET area_codigo='$area_codigo', area_descripcion='$area_descripcion' ");
    }
    public function update($area_codigo, $area_descripcion, $area_id)
    {
        return $this->conn->query("UPDATE area SET area_codigo='$area_codigo', area_descripcion='$area_descripcion' WHERE area_id = $area_id ");
    }
    public function delete($area_id)
    {
        return $this->conn->query("DELETE FROM area WHERE area_id = $area_id ");
    }
}
