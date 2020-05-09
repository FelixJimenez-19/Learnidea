<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Usuario_tipoDao.php
*/
class Usuario_tipoDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM usuario_tipo");
    }
    public function selectById($usuario_tipo_id)
    {
        return $this->conn->query("SELECT * FROM usuario_tipo WHERE usuario_tipo_id = $usuario_tipo_id");
    }
    public function insert($usuario_tipo_nombre, $usuario_tipo_super, $usuario_tipo_admin, $usuario_tipo_coach, $usuario_tipo_user, $usuario_tipo_descripcion)
    {
        return $this->conn->query("INSERT INTO usuario_tipo SET usuario_tipo_nombre='$usuario_tipo_nombre', usuario_tipo_super=$usuario_tipo_super, usuario_tipo_admin=$usuario_tipo_admin, usuario_tipo_coach=$usuario_tipo_coach, usuario_tipo_user=$usuario_tipo_user, usuario_tipo_descripcion='$usuario_tipo_descripcion' ");
    }
    public function update($usuario_tipo_nombre, $usuario_tipo_super, $usuario_tipo_admin, $usuario_tipo_coach, $usuario_tipo_user, $usuario_tipo_descripcion, $usuario_tipo_id)
    {
        return $this->conn->query("UPDATE usuario_tipo SET usuario_tipo_nombre='$usuario_tipo_nombre', usuario_tipo_super=$usuario_tipo_super, usuario_tipo_admin=$usuario_tipo_admin, usuario_tipo_coach=$usuario_tipo_coach, usuario_tipo_user=$usuario_tipo_user, usuario_tipo_descripcion='$usuario_tipo_descripcion' WHERE usuario_tipo_id = $usuario_tipo_id ");
    }
    public function delete($usuario_tipo_id)
    {
        return $this->conn->query("DELETE FROM usuario_tipo WHERE usuario_tipo_id = $usuario_tipo_id ");
    }
}
