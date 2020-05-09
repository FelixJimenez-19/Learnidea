<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/ModalidadDao.php
*/
class ModalidadDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM modalidad");
    }
    public function selectById($modalidad_id)
    {
        return $this->conn->query("SELECT * FROM modalidad WHERE modalidad_id = $modalidad_id");
    }
    public function insert($modalidad_descripcion)
    {
        return $this->conn->query("INSERT INTO modalidad SET modalidad_descripcion='$modalidad_descripcion' ");
    }
    public function update($modalidad_descripcion, $modalidad_id)
    {
        return $this->conn->query("UPDATE modalidad SET modalidad_descripcion='$modalidad_descripcion' WHERE modalidad_id = $modalidad_id ");
    }
    public function delete($modalidad_id)
    {
        return $this->conn->query("DELETE FROM modalidad WHERE modalidad_id = $modalidad_id ");
    }
}
