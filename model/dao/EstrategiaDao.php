<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/EstrategiaDao.php
*/
class EstrategiaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM estrategia");
    }
    public function selectById($estrategia_id)
    {
        return $this->conn->query("SELECT * FROM estrategia WHERE estrategia_id = $estrategia_id");
    }
    public function insert($estrategia_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO estrategia SET estrategia_descripcion='$estrategia_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($estrategia_descripcion, $curso_modelo_id, $estrategia_id)
    {
        return $this->conn->query("UPDATE estrategia SET estrategia_descripcion='$estrategia_descripcion', curso_modelo_id=$curso_modelo_id WHERE estrategia_id = $estrategia_id ");
    }
    public function delete($estrategia_id)
    {
        return $this->conn->query("DELETE FROM estrategia WHERE estrategia_id = $estrategia_id ");
    }
}
