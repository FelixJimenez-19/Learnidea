<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/RequisitoDao.php
*/
class RequisitoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM requisito");
    }
    public function selectById($requisito_id)
    {
        return $this->conn->query("SELECT * FROM requisito WHERE requisito_id = $requisito_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM requisito WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($requisito_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO requisito SET requisito_descripcion='$requisito_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($requisito_descripcion, $curso_modelo_id, $requisito_id)
    {
        return $this->conn->query("UPDATE requisito SET requisito_descripcion='$requisito_descripcion', curso_modelo_id=$curso_modelo_id WHERE requisito_id = $requisito_id ");
    }
    public function delete($requisito_id)
    {
        return $this->conn->query("DELETE FROM requisito WHERE requisito_id = $requisito_id ");
    }
}
