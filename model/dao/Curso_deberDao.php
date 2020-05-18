
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Curso_deberDao.php
*/
class Curso_deberDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM curso_deber");
    }
    public function selectById($curso_deber_id)
    {
        return $this->conn->query("SELECT * FROM curso_deber WHERE curso_deber_id = $curso_deber_id");
    }
    public function selectByCurso_id($curso_id)
    {
        return $this->conn->query("SELECT * FROM curso_deber WHERE curso_id = $curso_id");
    }
    public function insert($curso_deber_descripcion, $curso_deber_link, $curso_deber_fecha_inicio, $curso_deber_fecha_fin, $curso_id)
    {
        return $this->conn->query("INSERT INTO curso_deber SET curso_deber_descripcion='$curso_deber_descripcion', curso_deber_link='$curso_deber_link', curso_deber_fecha_inicio='$curso_deber_fecha_inicio', curso_deber_fecha_fin='$curso_deber_fecha_fin', curso_id=$curso_id ");
    }
    public function update($curso_deber_descripcion, $curso_deber_link, $curso_deber_fecha_inicio, $curso_deber_fecha_fin, $curso_id, $curso_deber_id)
    {
        return $this->conn->query("UPDATE curso_deber SET curso_deber_descripcion='$curso_deber_descripcion', curso_deber_link='$curso_deber_link', curso_deber_fecha_inicio='$curso_deber_fecha_inicio', curso_deber_fecha_fin='$curso_deber_fecha_fin', curso_id=$curso_id WHERE curso_deber_id = $curso_deber_id ");
    }
    public function delete($curso_deber_id)
    {
        return $this->conn->query("DELETE FROM curso_deber WHERE curso_deber_id = $curso_deber_id ");
    }

    public function selectByAll($curso_deber_descripcion, $curso_deber_link, $curso_deber_fecha_inicio, $curso_deber_fecha_fin, $curso_id)
    {
        return $this->conn->query("SELECT * FROM curso_deber WHERE curso_deber_descripcion='$curso_deber_descripcion' AND curso_deber_link='$curso_deber_link' AND curso_deber_fecha_inicio='$curso_deber_fecha_inicio' AND curso_deber_fecha_fin='$curso_deber_fecha_fin' AND curso_id=$curso_id ");
    }

    public function updateCurso_deber_foto($curso_deber_foto, $curso_deber_id)
    {
        return $this->conn->query("UPDATE curso_deber SET curso_deber_foto='$curso_deber_foto' WHERE curso_deber_id = $curso_deber_id ");
    }
}
?>

