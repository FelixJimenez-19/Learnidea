
<?php

class Usuario_paisDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM usuario_pais");
    }
    public function selectById($usuario_pais_id)
    {
        return $this->conn->query("SELECT * FROM usuario_pais WHERE usuario_pais_id = $usuario_pais_id");
    }
    public function insert($usuario_pais_nombre, $usuario_pais_descripcion)
    {
        return $this->conn->query("INSERT INTO usuario_pais SET usuario_pais_nombre='$usuario_pais_nombre', usuario_pais_descripcion='$usuario_pais_descripcion' ");
    }
    public function update($usuario_pais_nombre, $usuario_pais_descripcion, $usuario_pais_id)
    {
        return $this->conn->query("UPDATE usuario_pais SET usuario_pais_nombre='$usuario_pais_nombre', usuario_pais_descripcion='$usuario_pais_descripcion' WHERE usuario_pais_id = $usuario_pais_id ");
    }
    public function delete($usuario_pais_id)
    {
        return $this->conn->query("DELETE FROM usuario_pais WHERE usuario_pais_id = $usuario_pais_id ");
    }

    public function selectByAll($usuario_pais_nombre, $usuario_pais_descripcion)
    {
        return $this->conn->query("SELECT * FROM usuario_pais WHERE usuario_pais_nombre='$usuario_pais_nombre' AND usuario_pais_descripcion='$usuario_pais_descripcion' ");
    }

    public function updateUsuario_pais_bandera($usuario_pais_bandera, $usuario_pais_id)
    {
        return $this->conn->query("UPDATE usuario_pais SET usuario_pais_bandera='$usuario_pais_bandera' WHERE usuario_pais_id = $usuario_pais_id ");
    }
}
?>

