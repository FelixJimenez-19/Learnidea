
<?php

class CertificadoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM certificado");
    }
    public function selectById($certificado_id)
    {
        return $this->conn->query("SELECT * FROM certificado WHERE certificado_id = $certificado_id");
    }
    public function insert($certificado_codigo, $certificado_tipo_id, $usuario_id)
    {
        return $this->conn->query("INSERT INTO certificado SET certificado_codigo='$certificado_codigo', certificado_tipo_id=$certificado_tipo_id, usuario_id=$usuario_id ");
    }
    public function update($certificado_codigo, $certificado_tipo_id, $usuario_id, $certificado_id)
    {
        return $this->conn->query("UPDATE certificado SET certificado_codigo='$certificado_codigo', certificado_tipo_id=$certificado_tipo_id, usuario_id=$usuario_id WHERE certificado_id = $certificado_id ");
    }
    public function delete($certificado_id)
    {
        return $this->conn->query("DELETE FROM certificado WHERE certificado_id = $certificado_id ");
    }

    public function selectByAll($certificado_codigo, $certificado_tipo_id, $usuario_id)
    {
        return $this->conn->query("SELECT * FROM certificado WHERE certificado_codigo='$certificado_codigo' AND certificado_tipo_id=$certificado_tipo_id AND usuario_id=$usuario_id ");
    }

    public function updateCertificado_pdf($certificado_pdf, $certificado_id)
    {
        return $this->conn->query("UPDATE certificado SET certificado_pdf='$certificado_pdf' WHERE certificado_id = $certificado_id ");
    }
}
?>

