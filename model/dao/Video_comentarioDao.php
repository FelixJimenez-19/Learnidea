<?php

class Video_comentarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM video_comentario");
    }
    public function selectById($video_comentario_id)
    {
        return $this->conn->query("SELECT * FROM video_comentario WHERE video_comentario_id = $video_comentario_id");
    }
    public function insert($video_comentario_descripcion, $video_comentario_fecha, $seccion_video_id)
    {
        return $this->conn->query("INSERT INTO video_comentario SET video_comentario_descripcion='$video_comentario_descripcion', video_comentario_fecha='$video_comentario_fecha', seccion_video_id=$seccion_video_id ");
    }
    public function update($video_comentario_descripcion, $video_comentario_fecha, $seccion_video_id, $video_comentario_id)
    {
        return $this->conn->query("UPDATE video_comentario SET video_comentario_descripcion='$video_comentario_descripcion', video_comentario_fecha='$video_comentario_fecha', seccion_video_id=$seccion_video_id WHERE video_comentario_id = $video_comentario_id ");
    }
    public function delete($video_comentario_id)
    {
        return $this->conn->query("DELETE FROM video_comentario WHERE video_comentario_id = $video_comentario_id ");
    }

    public function selectByAll($video_comentario_descripcion, $video_comentario_fecha, $seccion_video_id)
    {
        return $this->conn->query("SELECT * FROM video_comentario WHERE video_comentario_descripcion='$video_comentario_descripcion' AND video_comentario_fecha='$video_comentario_fecha' AND seccion_video_id=$seccion_video_id ");
    }

    public function updateVideo_comentario_foto($video_comentario_foto, $video_comentario_id)
    {
        return $this->conn->query("UPDATE video_comentario SET video_comentario_foto='$video_comentario_foto' WHERE video_comentario_id = $video_comentario_id ");
    }
}
