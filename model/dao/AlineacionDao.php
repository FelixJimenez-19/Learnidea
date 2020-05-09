<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/AlineacionDao.php
*/
class AlineacionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM alineacion");
    }
    public function selectById($alineacion_id)
    {
        return $this->conn->query("SELECT * FROM alineacion WHERE alineacion_id = $alineacion_id");
    }
    public function insert($alineacion_descripcion)
    {
        return $this->conn->query("INSERT INTO alineacion SET alineacion_descripcion='$alineacion_descripcion' ");
    }
    public function update($alineacion_descripcion, $alineacion_id)
    {
        return $this->conn->query("UPDATE alineacion SET alineacion_descripcion='$alineacion_descripcion' WHERE alineacion_id = $alineacion_id ");
    }
    public function delete($alineacion_id)
    {
        return $this->conn->query("DELETE FROM alineacion WHERE alineacion_id = $alineacion_id ");
    }
}
