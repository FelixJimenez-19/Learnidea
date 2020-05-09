
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Deber_entregaDao.php
*/
class Deber_entregaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM deber_entrega");
    }
    public function selectById($deber_entrega_id)
    {
        return $this->conn->query("SELECT * FROM deber_entrega WHERE deber_entrega_id = $deber_entrega_id");
    }
    public function insert($deber_entrega_descripcion, $deber_entrega_link, $deber_entrega_fecha_inicio, $deber_entrega_fecha_fin, $curso_deber_id, $inscripcion_id)
    {
        return $this->conn->query("INSERT INTO deber_entrega SET deber_entrega_descripcion='$deber_entrega_descripcion', deber_entrega_link='$deber_entrega_link', deber_entrega_fecha_inicio='$deber_entrega_fecha_inicio', deber_entrega_fecha_fin='$deber_entrega_fecha_fin', curso_deber_id=$curso_deber_id, inscripcion_id=$inscripcion_id ");
    }
    public function update($deber_entrega_descripcion, $deber_entrega_link, $deber_entrega_fecha_inicio, $deber_entrega_fecha_fin, $curso_deber_id, $inscripcion_id, $deber_entrega_id)
    {
        return $this->conn->query("UPDATE deber_entrega SET deber_entrega_descripcion='$deber_entrega_descripcion', deber_entrega_link='$deber_entrega_link', deber_entrega_fecha_inicio='$deber_entrega_fecha_inicio', deber_entrega_fecha_fin='$deber_entrega_fecha_fin', curso_deber_id=$curso_deber_id, inscripcion_id=$inscripcion_id WHERE deber_entrega_id = $deber_entrega_id ");
    }
    public function delete($deber_entrega_id)
    {
        return $this->conn->query("DELETE FROM deber_entrega WHERE deber_entrega_id = $deber_entrega_id ");
    }

    public function selectByAll($deber_entrega_descripcion, $deber_entrega_link, $deber_entrega_fecha_inicio, $deber_entrega_fecha_fin, $curso_deber_id, $inscripcion_id)
    {
        return $this->conn->query("SELECT * FROM deber_entrega WHERE deber_entrega_descripcion='$deber_entrega_descripcion' AND deber_entrega_link='$deber_entrega_link' AND deber_entrega_fecha_inicio='$deber_entrega_fecha_inicio' AND deber_entrega_fecha_fin='$deber_entrega_fecha_fin' AND curso_deber_id=$curso_deber_id AND inscripcion_id=$inscripcion_id ");
    }

    public function updateDeber_entrega_foto($deber_entrega_foto, $deber_entrega_id)
    {
        return $this->conn->query("UPDATE deber_entrega SET deber_entrega_foto='$deber_entrega_foto' WHERE deber_entrega_id = $deber_entrega_id ");
    }

    public function updateDeber_entrega_pdf($deber_entrega_pdf, $deber_entrega_id)
    {
        return $this->conn->query("UPDATE deber_entrega SET deber_entrega_pdf='$deber_entrega_pdf' WHERE deber_entrega_id = $deber_entrega_id ");
    }
}
?>

