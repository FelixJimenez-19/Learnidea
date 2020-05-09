<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/ContactoDao.php
*/
class ContactoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM contacto");
    }
    public function selectById($contacto_id)
    {
        return $this->conn->query("SELECT * FROM contacto WHERE contacto_id = $contacto_id");
    }
    public function insert($contacto_nombre, $contacto_url)
    {
        return $this->conn->query("INSERT INTO contacto SET contacto_nombre='$contacto_nombre', contacto_url='$contacto_url' ");
    }
    public function update($contacto_nombre, $contacto_url, $contacto_id)
    {
        return $this->conn->query("UPDATE contacto SET contacto_nombre='$contacto_nombre', contacto_url='$contacto_url' WHERE contacto_id = $contacto_id ");
    }
    public function delete($contacto_id)
    {
        return $this->conn->query("DELETE FROM contacto WHERE contacto_id = $contacto_id ");
    }

    public function selectByAll($contacto_nombre, $contacto_url)
    {
        return $this->conn->query("SELECT * FROM contacto WHERE contacto_nombre='$contacto_nombre' AND contacto_url='$contacto_url' ");
    }

    public function updateContacto_icon($contacto_icon, $contacto_id)
    {
        return $this->conn->query("UPDATE contacto SET contacto_icon='$contacto_icon' WHERE contacto_id = $contacto_id ");
    }
}
?>

