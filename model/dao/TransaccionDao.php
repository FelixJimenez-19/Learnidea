
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/TransaccionDao.php
*/
class TransaccionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM transaccion");
    }
    public function selectById($transaccion_id)
    {
        return $this->conn->query("SELECT * FROM transaccion WHERE transaccion_id = $transaccion_id");
    }
    public function insert($transaccion_descripcion, $transaccion_valor, $transaccion_fecha, $transaccion_tipo_id)
    {
        return $this->conn->query("INSERT INTO transaccion SET transaccion_descripcion='$transaccion_descripcion', transaccion_valor=$transaccion_valor, transaccion_fecha='$transaccion_fecha', transaccion_tipo_id=$transaccion_tipo_id ");
    }
    public function update($transaccion_descripcion, $transaccion_valor, $transaccion_fecha, $transaccion_tipo_id, $transaccion_id)
    {
        return $this->conn->query("UPDATE transaccion SET transaccion_descripcion='$transaccion_descripcion', transaccion_valor=$transaccion_valor, transaccion_fecha='$transaccion_fecha', transaccion_tipo_id=$transaccion_tipo_id WHERE transaccion_id = $transaccion_id ");
    }
    public function delete($transaccion_id)
    {
        return $this->conn->query("DELETE FROM transaccion WHERE transaccion_id = $transaccion_id ");
    }

    public function selectByAll($transaccion_descripcion, $transaccion_valor, $transaccion_fecha, $transaccion_tipo_id)
    {
        return $this->conn->query("SELECT * FROM transaccion WHERE transaccion_descripcion='$transaccion_descripcion' AND transaccion_valor=$transaccion_valor AND transaccion_fecha='$transaccion_fecha' AND transaccion_tipo_id=$transaccion_tipo_id ");
    }

    public function updateTransaccion_foto($transaccion_foto, $transaccion_id)
    {
        return $this->conn->query("UPDATE transaccion SET transaccion_foto='$transaccion_foto' WHERE transaccion_id = $transaccion_id ");
    }
}
?>

