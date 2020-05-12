<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/ObjetivoDao.php
*/
class ObjetivoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM objetivo");
    }
    public function selectById($objetivo_id)
    {
        return $this->conn->query("SELECT * FROM objetivo WHERE objetivo_id = $objetivo_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM objetivo WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($objetivo_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO objetivo SET objetivo_descripcion='$objetivo_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($objetivo_descripcion, $curso_modelo_id, $objetivo_id)
    {
        return $this->conn->query("UPDATE objetivo SET objetivo_descripcion='$objetivo_descripcion', curso_modelo_id=$curso_modelo_id WHERE objetivo_id = $objetivo_id ");
    }
    public function delete($objetivo_id)
    {
        return $this->conn->query("DELETE FROM objetivo WHERE objetivo_id = $objetivo_id ");
    }
}
