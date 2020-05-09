
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Transaccion_tipoDao.php
*/
class Transaccion_tipoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM transaccion_tipo");
    }
    public function selectById($transaccion_tipo_id)
    {
        return $this->conn->query("SELECT * FROM transaccion_tipo WHERE transaccion_tipo_id = $transaccion_tipo_id");
    }
    public function insert($transaccion_tipo_nombre, $transaccion_tipo_descripcion, $transaccion_tipo_credido, $transaccion_tipo_pago, $transaccion_tipo_entrada)
    {
        return $this->conn->query("INSERT INTO transaccion_tipo SET transaccion_tipo_nombre='$transaccion_tipo_nombre', transaccion_tipo_descripcion='$transaccion_tipo_descripcion', transaccion_tipo_credido=$transaccion_tipo_credido, transaccion_tipo_pago=$transaccion_tipo_pago, transaccion_tipo_entrada=$transaccion_tipo_entrada ");
    }
    public function update($transaccion_tipo_nombre, $transaccion_tipo_descripcion, $transaccion_tipo_credido, $transaccion_tipo_pago, $transaccion_tipo_entrada, $transaccion_tipo_id)
    {
        return $this->conn->query("UPDATE transaccion_tipo SET transaccion_tipo_nombre='$transaccion_tipo_nombre', transaccion_tipo_descripcion='$transaccion_tipo_descripcion', transaccion_tipo_credido=$transaccion_tipo_credido, transaccion_tipo_pago=$transaccion_tipo_pago, transaccion_tipo_entrada=$transaccion_tipo_entrada WHERE transaccion_tipo_id = $transaccion_tipo_id ");
    }
    public function delete($transaccion_tipo_id)
    {
        return $this->conn->query("DELETE FROM transaccion_tipo WHERE transaccion_tipo_id = $transaccion_tipo_id ");
    }

    public function selectByAll($transaccion_tipo_nombre, $transaccion_tipo_descripcion, $transaccion_tipo_credido, $transaccion_tipo_pago, $transaccion_tipo_entrada)
    {
        return $this->conn->query("SELECT * FROM transaccion_tipo WHERE transaccion_tipo_nombre='$transaccion_tipo_nombre' AND transaccion_tipo_descripcion='$transaccion_tipo_descripcion' AND transaccion_tipo_credido=$transaccion_tipo_credido AND transaccion_tipo_pago=$transaccion_tipo_pago AND transaccion_tipo_entrada=$transaccion_tipo_entrada ");
    }

    public function updateTransaccion_tipo_logo($transaccion_tipo_logo, $transaccion_tipo_id)
    {
        return $this->conn->query("UPDATE transaccion_tipo SET transaccion_tipo_logo='$transaccion_tipo_logo' WHERE transaccion_tipo_id = $transaccion_tipo_id ");
    }
}
?>

