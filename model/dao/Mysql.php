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
        $this->conn = mysqli_connect("localhost", "root", "", "learnidea");
        // $this->conn = mysqli_connect("localhost", "learnide_db", "while(!vida)", "learnide_db");
        mysqli_set_charset($this->conn,"utf8");
        return $this->conn;
    }
    private function desconectar()
    {
        mysqli_close($this->conn);
    }
}
