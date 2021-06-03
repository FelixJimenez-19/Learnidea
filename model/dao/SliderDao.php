<?php

class SliderDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM slider");
    }
    public function selectById($slider_id)
    {
        return $this->conn->query("SELECT * FROM slider WHERE slider_id = $slider_id");
    }
    public function insert($slider_frase)
    {
        return $this->conn->query("INSERT INTO slider SET slider_frase='$slider_frase' ");
    }
    public function update($slider_frase, $slider_id)
    {
        return $this->conn->query("UPDATE slider SET slider_frase='$slider_frase' WHERE slider_id = $slider_id ");
    }
    public function delete($slider_id)
    {
        return $this->conn->query("DELETE FROM slider WHERE slider_id = $slider_id ");
    }

    public function selectByAll($slider_frase)
    {
        return $this->conn->query("SELECT * FROM slider WHERE slider_frase='$slider_frase' ");
    }

    public function updateSlider_foto($slider_foto, $slider_id)
    {
        return $this->conn->query("UPDATE slider SET slider_foto='$slider_foto' WHERE slider_id = $slider_id ");
    }
}
?>

