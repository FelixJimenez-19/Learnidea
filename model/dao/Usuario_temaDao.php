
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Usuario_temaDao.php
*/
class Usuario_temaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM usuario_tema");
    }
    public function selectById($usuario_tema_id)
    {
        return $this->conn->query("SELECT * FROM usuario_tema WHERE usuario_tema_id = $usuario_tema_id");
    }
    public function insert($usuario_tema_nombre, $usuario_tema_primary, $usuario_tema_primary_hover, $usuario_tema_secondary, $usuario_tema_secondary_hover, $usuario_tema_tertiary, $usuario_tema_tertiary_hover, $usuario_tema_quaternary, $usuario_tema_quaternary_hover, $usuario_tema_success, $usuario_tema_info, $usuario_tema_warning, $usuario_tema_error, $usuario_tema_dark_primary, $usuario_tema_dark_primary_hover, $usuario_tema_dark_secondary, $usuario_tema_dark_secondary_hover, $usuario_tema_dark_tertiary, $usuario_tema_dark_tertiary_hover, $usuario_tema_dark_quaternary, $usuario_tema_dark_quaternary_hover, $usuario_tema_dark_success, $usuario_tema_dark_info, $usuario_tema_dark_warning, $usuario_tema_dark_error, $usuario_tema_default)
    {
        return $this->conn->query("INSERT INTO usuario_tema SET usuario_tema_nombre='$usuario_tema_nombre', usuario_tema_primary='$usuario_tema_primary', usuario_tema_primary_hover='$usuario_tema_primary_hover', usuario_tema_secondary='$usuario_tema_secondary', usuario_tema_secondary_hover='$usuario_tema_secondary_hover', usuario_tema_tertiary='$usuario_tema_tertiary', usuario_tema_tertiary_hover='$usuario_tema_tertiary_hover', usuario_tema_quaternary='$usuario_tema_quaternary', usuario_tema_quaternary_hover='$usuario_tema_quaternary_hover', usuario_tema_success='$usuario_tema_success', usuario_tema_info='$usuario_tema_info', usuario_tema_warning='$usuario_tema_warning', usuario_tema_error='$usuario_tema_error', usuario_tema_dark_primary='$usuario_tema_dark_primary', usuario_tema_dark_primary_hover='$usuario_tema_dark_primary_hover', usuario_tema_dark_secondary='$usuario_tema_dark_secondary', usuario_tema_dark_secondary_hover='$usuario_tema_dark_secondary_hover', usuario_tema_dark_tertiary='$usuario_tema_dark_tertiary', usuario_tema_dark_tertiary_hover='$usuario_tema_dark_tertiary_hover', usuario_tema_dark_quaternary='$usuario_tema_dark_quaternary', usuario_tema_dark_quaternary_hover='$usuario_tema_dark_quaternary_hover', usuario_tema_dark_success='$usuario_tema_dark_success', usuario_tema_dark_info='$usuario_tema_dark_info', usuario_tema_dark_warning='$usuario_tema_dark_warning', usuario_tema_dark_error='$usuario_tema_dark_error', usuario_tema_default=$usuario_tema_default ");
    }
    public function update($usuario_tema_nombre, $usuario_tema_primary, $usuario_tema_primary_hover, $usuario_tema_secondary, $usuario_tema_secondary_hover, $usuario_tema_tertiary, $usuario_tema_tertiary_hover, $usuario_tema_quaternary, $usuario_tema_quaternary_hover, $usuario_tema_success, $usuario_tema_info, $usuario_tema_warning, $usuario_tema_error, $usuario_tema_dark_primary, $usuario_tema_dark_primary_hover, $usuario_tema_dark_secondary, $usuario_tema_dark_secondary_hover, $usuario_tema_dark_tertiary, $usuario_tema_dark_tertiary_hover, $usuario_tema_dark_quaternary, $usuario_tema_dark_quaternary_hover, $usuario_tema_dark_success, $usuario_tema_dark_info, $usuario_tema_dark_warning, $usuario_tema_dark_error, $usuario_tema_default, $usuario_tema_id)
    {
        return $this->conn->query("UPDATE usuario_tema SET usuario_tema_nombre='$usuario_tema_nombre', usuario_tema_primary='$usuario_tema_primary', usuario_tema_primary_hover='$usuario_tema_primary_hover', usuario_tema_secondary='$usuario_tema_secondary', usuario_tema_secondary_hover='$usuario_tema_secondary_hover', usuario_tema_tertiary='$usuario_tema_tertiary', usuario_tema_tertiary_hover='$usuario_tema_tertiary_hover', usuario_tema_quaternary='$usuario_tema_quaternary', usuario_tema_quaternary_hover='$usuario_tema_quaternary_hover', usuario_tema_success='$usuario_tema_success', usuario_tema_info='$usuario_tema_info', usuario_tema_warning='$usuario_tema_warning', usuario_tema_error='$usuario_tema_error', usuario_tema_dark_primary='$usuario_tema_dark_primary', usuario_tema_dark_primary_hover='$usuario_tema_dark_primary_hover', usuario_tema_dark_secondary='$usuario_tema_dark_secondary', usuario_tema_dark_secondary_hover='$usuario_tema_dark_secondary_hover', usuario_tema_dark_tertiary='$usuario_tema_dark_tertiary', usuario_tema_dark_tertiary_hover='$usuario_tema_dark_tertiary_hover', usuario_tema_dark_quaternary='$usuario_tema_dark_quaternary', usuario_tema_dark_quaternary_hover='$usuario_tema_dark_quaternary_hover', usuario_tema_dark_success='$usuario_tema_dark_success', usuario_tema_dark_info='$usuario_tema_dark_info', usuario_tema_dark_warning='$usuario_tema_dark_warning', usuario_tema_dark_error='$usuario_tema_dark_error', usuario_tema_default=$usuario_tema_default WHERE usuario_tema_id = $usuario_tema_id ");
    }

    public function updateAllUsuario_tema_default($usuario_tema_default)
    {
        return $this->conn->query("UPDATE usuario_tema SET usuario_tema_default=$usuario_tema_default");
    }
    public function delete($usuario_tema_id)
    {
        return $this->conn->query("DELETE FROM usuario_tema WHERE usuario_tema_id = $usuario_tema_id ");
    }
}
?>

