<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/UsuarioDao.php
*/
class UsuarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("
            SELECT * FROM usuario
                INNER JOIN usuario_tema ON usuario.usuario_tema_id = usuario_tema.usuario_tema_id
                INNER JOIN usuario_tipo ON usuario.usuario_tipo_id = usuario_tipo.usuario_tipo_id
        ");
    }
    public function selectById($usuario_id)
    {
        return $this->conn->query("
            SELECT * FROM usuario 
                INNER JOIN usuario_tema ON usuario.usuario_tema_id = usuario_tema.usuario_tema_id
                INNER JOIN usuario_tipo ON usuario.usuario_tipo_id = usuario_tipo.usuario_tipo_id
            WHERE usuario_id = $usuario_id
        ");
    }
    public function insert($usuario_nombre, $usuario_cedula, $usuario_edad, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id)
    {
        return $this->conn->query("INSERT INTO usuario SET usuario_nombre='$usuario_nombre', usuario_cedula='$usuario_cedula', usuario_edad=$usuario_edad, usuario_indice='$usuario_indice', usuario_celular='$usuario_celular', usuario_telefono='$usuario_telefono', usuario_email='$usuario_email', usuario_pass='$usuario_pass', usuario_sexo='$usuario_sexo', usuario_nivel='$usuario_nivel', usuario_calificacion='$usuario_calificacion', usuario_direccion='$usuario_direccion', usuario_descripcion='$usuario_descripcion', usuario_empresa_nombre='$usuario_empresa_nombre', usuario_empresa_actividad='$usuario_empresa_actividad', usuario_empresa_direccion='$usuario_empresa_direccion', usuario_empresa_telefono='$usuario_empresa_telefono', usuario_tema_mode_dark=$usuario_tema_mode_dark, usuario_tipo_id=$usuario_tipo_id, usuario_tema_id=$usuario_tema_id ");
    }
    public function update($usuario_nombre, $usuario_cedula, $usuario_edad, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id, $usuario_id)
    {
        return $this->conn->query("UPDATE usuario SET usuario_nombre='$usuario_nombre', usuario_cedula='$usuario_cedula', usuario_edad=$usuario_edad, usuario_indice='$usuario_indice', usuario_celular='$usuario_celular', usuario_telefono='$usuario_telefono', usuario_email='$usuario_email', usuario_pass='$usuario_pass', usuario_sexo='$usuario_sexo', usuario_nivel='$usuario_nivel', usuario_calificacion='$usuario_calificacion', usuario_direccion='$usuario_direccion', usuario_descripcion='$usuario_descripcion', usuario_empresa_nombre='$usuario_empresa_nombre', usuario_empresa_actividad='$usuario_empresa_actividad', usuario_empresa_direccion='$usuario_empresa_direccion', usuario_empresa_telefono='$usuario_empresa_telefono', usuario_tema_mode_dark=$usuario_tema_mode_dark, usuario_tipo_id=$usuario_tipo_id, usuario_tema_id=$usuario_tema_id WHERE usuario_id = $usuario_id ");
    }
    public function updateTema_mode_dark($usuario_tema_mode_dark, $usuario_id)
    {
        return $this->conn->query("UPDATE usuario SET usuario_tema_mode_dark=$usuario_tema_mode_dark WHERE usuario_id = $usuario_id ");
    }
    public function delete($usuario_id)
    {
        return $this->conn->query("DELETE FROM usuario WHERE usuario_id = $usuario_id ");
    }

    public function selectByAll($usuario_nombre, $usuario_cedula, $usuario_edad, $usuario_indice, $usuario_celular, $usuario_telefono, $usuario_email, $usuario_pass, $usuario_sexo, $usuario_nivel, $usuario_calificacion, $usuario_direccion, $usuario_descripcion, $usuario_empresa_nombre, $usuario_empresa_actividad, $usuario_empresa_direccion, $usuario_empresa_telefono, $usuario_tema_mode_dark, $usuario_tipo_id, $usuario_tema_id)
    {
        return $this->conn->query("SELECT * FROM usuario WHERE usuario_nombre='$usuario_nombre' AND usuario_cedula='$usuario_cedula' AND usuario_edad=$usuario_edad AND usuario_indice='$usuario_indice' AND usuario_celular='$usuario_celular' AND usuario_telefono='$usuario_telefono' AND usuario_email='$usuario_email' AND usuario_pass='$usuario_pass' AND usuario_sexo='$usuario_sexo' AND usuario_nivel='$usuario_nivel' AND usuario_calificacion='$usuario_calificacion' AND usuario_direccion='$usuario_direccion' AND usuario_descripcion='$usuario_descripcion' AND usuario_empresa_nombre='$usuario_empresa_nombre' AND usuario_empresa_actividad='$usuario_empresa_actividad' AND usuario_empresa_direccion='$usuario_empresa_direccion' AND usuario_empresa_telefono='$usuario_empresa_telefono' AND usuario_tema_mode_dark=$usuario_tema_mode_dark AND usuario_tipo_id=$usuario_tipo_id AND usuario_tema_id=$usuario_tema_id ");
    }

    public function updateFechaConexion($usuario_id)
    {
        date_default_timezone_set('America/Guayaquil');
        $fecha = date('Y-m-d H:i:s');
        $this->conn->query("UPDATE usuario SET usuario_fecha_conexion='$fecha' WHERE usuario_id = $usuario_id ");
        return $fecha;
    }

    public function updateUsuario_foto($usuario_foto, $usuario_id)
    {
        return $this->conn->query("UPDATE usuario SET usuario_foto='$usuario_foto' WHERE usuario_id = $usuario_id ");
    }

    public function updateUsuario_firma($usuario_firma, $usuario_id)
    {
        return $this->conn->query("UPDATE usuario SET usuario_firma='$usuario_firma' WHERE usuario_id = $usuario_id ");
    }

    public function updateUsuario_curriculum($usuario_curriculum, $usuario_id)
    {
        return $this->conn->query("UPDATE usuario SET usuario_curriculum='$usuario_curriculum' WHERE usuario_id = $usuario_id ");
    }


    public function login($usuario_email, $usuario_pass)
    {
        return $this->conn->query("
            SELECT * FROM usuario 
                INNER JOIN usuario_tema ON usuario.usuario_tema_id = usuario_tema.usuario_tema_id
                INNER JOIN usuario_tipo ON usuario.usuario_tipo_id = usuario_tipo.usuario_tipo_id
            WHERE usuario_email='$usuario_email' AND usuario_pass='$usuario_pass'
        ");
    }
}
