<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/InstitucionDao.php
*/
class InstitucionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM institucion");
    }
    public function selectById($institucion_id)
    {
        return $this->conn->query("SELECT * FROM institucion WHERE institucion_id = $institucion_id");
    }
    public function insert($institucion_nombre, $institucion_siglas)
    {
        return $this->conn->query("INSERT INTO institucion SET institucion_nombre='$institucion_nombre', institucion_siglas='$institucion_siglas' ");
    }
    public function update($institucion_nombre, $institucion_siglas, $institucion_id)
    {
        return $this->conn->query("UPDATE institucion SET institucion_nombre='$institucion_nombre', institucion_siglas='$institucion_siglas' WHERE institucion_id = $institucion_id ");
    }
    public function delete($institucion_id)
    {
        return $this->conn->query("DELETE FROM institucion WHERE institucion_id = $institucion_id ");
    }

    public function selectByAll($institucion_nombre, $institucion_siglas)
    {
        return $this->conn->query("SELECT * FROM institucion WHERE institucion_nombre='$institucion_nombre' AND institucion_siglas='$institucion_siglas' ");
    }

    public function updateInstitucion_logo($institucion_logo, $institucion_id)
    {
        return $this->conn->query("UPDATE institucion SET institucion_logo='$institucion_logo' WHERE institucion_id = $institucion_id ");
    }
}
?>

