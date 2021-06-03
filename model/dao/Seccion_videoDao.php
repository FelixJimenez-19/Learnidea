<?php

class Seccion_videoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM seccion_video");
    }
    public function selectById($seccion_video_id)
    {
        return $this->conn->query("SELECT * FROM seccion_video WHERE seccion_video_id = $seccion_video_id");
    }
    public function selectByCurso_seccion_id($curso_seccion_id)
    {
        return $this->conn->query("SELECT * FROM seccion_video WHERE curso_seccion_id = $curso_seccion_id");
    }
    public function insert($seccion_video_nombre, $seccion_video_iframe, $seccion_video_descripcion, $curso_seccion_id)
    {
        return $this->conn->query("INSERT INTO seccion_video SET seccion_video_nombre='$seccion_video_nombre', seccion_video_iframe='$seccion_video_iframe', seccion_video_descripcion='$seccion_video_descripcion', curso_seccion_id=$curso_seccion_id ");
    }
    public function update($seccion_video_nombre, $seccion_video_iframe, $seccion_video_descripcion, $curso_seccion_id, $seccion_video_id)
    {
        return $this->conn->query("UPDATE seccion_video SET seccion_video_nombre='$seccion_video_nombre', seccion_video_iframe='$seccion_video_iframe', seccion_video_descripcion='$seccion_video_descripcion', curso_seccion_id=$curso_seccion_id WHERE seccion_video_id = $seccion_video_id ");
    }
    public function delete($seccion_video_id)
    {
        return $this->conn->query("DELETE FROM seccion_video WHERE seccion_video_id = $seccion_video_id ");
    }
}
