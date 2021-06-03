
<?php

class BuzonDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM buzon");
    }
    public function selectById($buzon_id)
    {
        return $this->conn->query("SELECT * FROM buzon WHERE buzon_id = $buzon_id");
    }
    public function insert($buzon_email, $buzon_descripcion)
    {
        return $this->conn->query("INSERT INTO buzon SET buzon_email='$buzon_email', buzon_descripcion='$buzon_descripcion' ");
    }
    public function update($buzon_email, $buzon_descripcion, $buzon_id)
    {
        return $this->conn->query("UPDATE buzon SET buzon_email='$buzon_email', buzon_descripcion='$buzon_descripcion' WHERE buzon_id = $buzon_id ");
    }
    public function delete($buzon_id)
    {
        return $this->conn->query("DELETE FROM buzon WHERE buzon_id = $buzon_id ");
    }

    public function selectByAll($buzon_email, $buzon_descripcion)
    {
        return $this->conn->query("SELECT * FROM buzon WHERE buzon_email='$buzon_email' AND buzon_descripcion='$buzon_descripcion' ");
    }

    public function updateBuzon_foto($buzon_foto, $buzon_id)
    {
        return $this->conn->query("UPDATE buzon SET buzon_foto='$buzon_foto' WHERE buzon_id = $buzon_id ");
    }
}
?>

