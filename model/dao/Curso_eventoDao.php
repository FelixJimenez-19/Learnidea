<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Curso_eventoDao.php
*/
class Curso_eventoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM curso_evento");
    }
    public function selectById($curso_evento_id)
    {
        return $this->conn->query("SELECT * FROM curso_evento WHERE curso_evento_id = $curso_evento_id");
    }
    public function insert($curso_evento_nombre, $curso_evento_fecha, $curso_evento_descripcion, $curso_id)
    {
        return $this->conn->query("INSERT INTO curso_evento SET curso_evento_nombre='$curso_evento_nombre', curso_evento_fecha='$curso_evento_fecha', curso_evento_descripcion='$curso_evento_descripcion', curso_id=$curso_id ");
    }
    public function update($curso_evento_nombre, $curso_evento_fecha, $curso_evento_descripcion, $curso_id, $curso_evento_id)
    {
        return $this->conn->query("UPDATE curso_evento SET curso_evento_nombre='$curso_evento_nombre', curso_evento_fecha='$curso_evento_fecha', curso_evento_descripcion='$curso_evento_descripcion', curso_id=$curso_id WHERE curso_evento_id = $curso_evento_id ");
    }
    public function delete($curso_evento_id)
    {
        return $this->conn->query("DELETE FROM curso_evento WHERE curso_evento_id = $curso_evento_id ");
    }
}
?>

