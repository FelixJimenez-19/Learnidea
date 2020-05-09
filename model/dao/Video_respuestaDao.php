
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Video_respuestaDao.php
*/
class Video_respuestaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM video_respuesta");
    }
    public function selectById($video_respuesta_id)
    {
        return $this->conn->query("SELECT * FROM video_respuesta WHERE video_respuesta_id = $video_respuesta_id");
    }
    public function insert($video_respuesta_descripcion, $video_respuesta_fecha, $video_comentario_id)
    {
        return $this->conn->query("INSERT INTO video_respuesta SET video_respuesta_descripcion='$video_respuesta_descripcion', video_respuesta_fecha='$video_respuesta_fecha', video_comentario_id=$video_comentario_id ");
    }
    public function update($video_respuesta_descripcion, $video_respuesta_fecha, $video_comentario_id, $video_respuesta_id)
    {
        return $this->conn->query("UPDATE video_respuesta SET video_respuesta_descripcion='$video_respuesta_descripcion', video_respuesta_fecha='$video_respuesta_fecha', video_comentario_id=$video_comentario_id WHERE video_respuesta_id = $video_respuesta_id ");
    }
    public function delete($video_respuesta_id)
    {
        return $this->conn->query("DELETE FROM video_respuesta WHERE video_respuesta_id = $video_respuesta_id ");
    }

    public function selectByAll($video_respuesta_descripcion, $video_respuesta_fecha, $video_comentario_id)
    {
        return $this->conn->query("SELECT * FROM video_respuesta WHERE video_respuesta_descripcion='$video_respuesta_descripcion' AND video_respuesta_fecha='$video_respuesta_fecha' AND video_comentario_id=$video_comentario_id ");
    }

    public function updateVideo_respuesta_foto($video_respuesta_foto, $video_respuesta_id)
    {
        return $this->conn->query("UPDATE video_respuesta SET video_respuesta_foto='$video_respuesta_foto' WHERE video_respuesta_id = $video_respuesta_id ");
    }
}
?>

