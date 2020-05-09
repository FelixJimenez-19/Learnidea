
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Publicacion_respuestaDao.php
*/
class Publicacion_respuestaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM publicacion_respuesta");
    }
    public function selectById($publicacion_respuesta_id)
    {
        return $this->conn->query("SELECT * FROM publicacion_respuesta WHERE publicacion_respuesta_id = $publicacion_respuesta_id");
    }
    public function insert($publicacion_respuesta_descripcion, $publicacion_respuesta_fecha, $publicacion_comentario_id)
    {
        return $this->conn->query("INSERT INTO publicacion_respuesta SET publicacion_respuesta_descripcion='$publicacion_respuesta_descripcion', publicacion_respuesta_fecha='$publicacion_respuesta_fecha', publicacion_comentario_id=$publicacion_comentario_id ");
    }
    public function update($publicacion_respuesta_descripcion, $publicacion_respuesta_fecha, $publicacion_comentario_id, $publicacion_respuesta_id)
    {
        return $this->conn->query("UPDATE publicacion_respuesta SET publicacion_respuesta_descripcion='$publicacion_respuesta_descripcion', publicacion_respuesta_fecha='$publicacion_respuesta_fecha', publicacion_comentario_id=$publicacion_comentario_id WHERE publicacion_respuesta_id = $publicacion_respuesta_id ");
    }
    public function delete($publicacion_respuesta_id)
    {
        return $this->conn->query("DELETE FROM publicacion_respuesta WHERE publicacion_respuesta_id = $publicacion_respuesta_id ");
    }

    public function selectByAll($publicacion_respuesta_descripcion, $publicacion_respuesta_fecha, $publicacion_comentario_id)
    {
        return $this->conn->query("SELECT * FROM publicacion_respuesta WHERE publicacion_respuesta_descripcion='$publicacion_respuesta_descripcion' AND publicacion_respuesta_fecha='$publicacion_respuesta_fecha' AND publicacion_comentario_id=$publicacion_comentario_id ");
    }

    public function updatePublicacion_respuesta_foto($publicacion_respuesta_foto, $publicacion_respuesta_id)
    {
        return $this->conn->query("UPDATE publicacion_respuesta SET publicacion_respuesta_foto='$publicacion_respuesta_foto' WHERE publicacion_respuesta_id = $publicacion_respuesta_id ");
    }
}
?>

