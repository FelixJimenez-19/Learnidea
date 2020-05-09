<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Certificado_tipoDao.php
*/
class Certificado_tipoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM certificado_tipo");
    }
    public function selectById($certificado_tipo_id)
    {
        return $this->conn->query("SELECT * FROM certificado_tipo WHERE certificado_tipo_id = $certificado_tipo_id");
    }
    public function insert($certificado_tipo_nombre)
    {
        return $this->conn->query("INSERT INTO certificado_tipo SET certificado_tipo_nombre='$certificado_tipo_nombre' ");
    }
    public function update($certificado_tipo_nombre, $certificado_tipo_id)
    {
        return $this->conn->query("UPDATE certificado_tipo SET certificado_tipo_nombre='$certificado_tipo_nombre' WHERE certificado_tipo_id = $certificado_tipo_id ");
    }
    public function delete($certificado_tipo_id)
    {
        return $this->conn->query("DELETE FROM certificado_tipo WHERE certificado_tipo_id = $certificado_tipo_id ");
    }
}
