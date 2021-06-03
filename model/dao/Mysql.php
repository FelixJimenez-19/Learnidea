<?php

class Mysql
{
    public $root_page = "http://193.145.110.2/learnidea/";
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
        $this->conn = mysqli_connect("localhost", "root", "while(!vida)", "learnidea");
        mysqli_set_charset($this->conn,"utf8");
        return $this->conn;
    }
    private function desconectar()
    {
        mysqli_close($this->conn);
    }
}

// $this->conn = mysqli_connect("localhost", "learnide_db", "while(!vida)", "learnide_db");