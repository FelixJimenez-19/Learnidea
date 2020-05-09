<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Mysql.php
*/
class Mysql
{
    private $conn;
    public function query($sql)
    {
        $this->conectar();
        $resultado = mysqli_query($this->conn, $sql);
        $this->desconectar();
        return $resultado;
    }
    public function conectar()
    {
        $this->conn = mysqli_connect("192.168.0.2", "root", "", "learnidea");
        // $this->conn = mysqli_connect("26.133.63.149", "root", "", "learnidea");
        return $this->conn;
    }
    private function desconectar()
    {
        mysqli_close($this->conn);
    }
}
