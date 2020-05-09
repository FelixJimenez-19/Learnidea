
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Publicacion_comentarioDao.php
*/
class Publicacion_comentarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM publicacion_comentario");
    }
    public function selectById($publicacion_comentario_id)
    {
        return $this->conn->query("SELECT * FROM publicacion_comentario WHERE publicacion_comentario_id = $publicacion_comentario_id");
    }
    public function insert($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id)
    {
        return $this->conn->query("INSERT INTO publicacion_comentario SET publicacion_comentario_descripcion='$publicacion_comentario_descripcion', publicacion_comentario_fecha='$publicacion_comentario_fecha', publicacion_id=$publicacion_id ");
    }
    public function update($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id, $publicacion_comentario_id)
    {
        return $this->conn->query("UPDATE publicacion_comentario SET publicacion_comentario_descripcion='$publicacion_comentario_descripcion', publicacion_comentario_fecha='$publicacion_comentario_fecha', publicacion_id=$publicacion_id WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }
    public function delete($publicacion_comentario_id)
    {
        return $this->conn->query("DELETE FROM publicacion_comentario WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }

    public function selectByAll($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id)
    {
        return $this->conn->query("SELECT * FROM publicacion_comentario WHERE publicacion_comentario_descripcion='$publicacion_comentario_descripcion' AND publicacion_comentario_fecha='$publicacion_comentario_fecha' AND publicacion_id=$publicacion_id ");
    }

    public function updatePublicacion_comentario_foto($publicacion_comentario_foto, $publicacion_comentario_id)
    {
        return $this->conn->query("UPDATE publicacion_comentario SET publicacion_comentario_foto='$publicacion_comentario_foto' WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }
}
?>

