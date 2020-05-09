<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Participante_tipoDao.php
*/
class Participante_tipoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM participante_tipo");
    }
    public function selectById($participante_tipo_id)
    {
        return $this->conn->query("SELECT * FROM participante_tipo WHERE participante_tipo_id = $participante_tipo_id");
    }
    public function insert($participante_tipo_descripcion)
    {
        return $this->conn->query("INSERT INTO participante_tipo SET participante_tipo_descripcion='$participante_tipo_descripcion' ");
    }
    public function update($participante_tipo_descripcion, $participante_tipo_id)
    {
        return $this->conn->query("UPDATE participante_tipo SET participante_tipo_descripcion='$participante_tipo_descripcion' WHERE participante_tipo_id = $participante_tipo_id ");
    }
    public function delete($participante_tipo_id)
    {
        return $this->conn->query("DELETE FROM participante_tipo WHERE participante_tipo_id = $participante_tipo_id ");
    }
}
