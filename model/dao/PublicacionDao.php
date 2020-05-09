
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/PublicacionDao.php
*/
class PublicacionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM publicacion");
    }
    public function selectById($publicacion_id)
    {
        return $this->conn->query("SELECT * FROM publicacion WHERE publicacion_id = $publicacion_id");
    }
    public function insert($publicacion_descripcion, $publicacion_fecha, $usuario_id, $inscripcion_id)
    {
        return $this->conn->query("INSERT INTO publicacion SET publicacion_descripcion='$publicacion_descripcion', publicacion_fecha='$publicacion_fecha', usuario_id=$usuario_id, inscripcion_id=$inscripcion_id ");
    }
    public function update($publicacion_descripcion, $publicacion_fecha, $usuario_id, $inscripcion_id, $publicacion_id)
    {
        return $this->conn->query("UPDATE publicacion SET publicacion_descripcion='$publicacion_descripcion', publicacion_fecha='$publicacion_fecha', usuario_id=$usuario_id, inscripcion_id=$inscripcion_id WHERE publicacion_id = $publicacion_id ");
    }
    public function delete($publicacion_id)
    {
        return $this->conn->query("DELETE FROM publicacion WHERE publicacion_id = $publicacion_id ");
    }

    public function selectByAll($publicacion_descripcion, $publicacion_fecha, $usuario_id, $inscripcion_id)
    {
        return $this->conn->query("SELECT * FROM publicacion WHERE publicacion_descripcion='$publicacion_descripcion' AND publicacion_fecha='$publicacion_fecha' AND usuario_id=$usuario_id AND inscripcion_id=$inscripcion_id ");
    }

    public function updatePublicacion_foto($publicacion_foto, $publicacion_id)
    {
        return $this->conn->query("UPDATE publicacion SET publicacion_foto='$publicacion_foto' WHERE publicacion_id = $publicacion_id ");
    }
}
?>

