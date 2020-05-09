<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/MensajeDao.php
*/
class MensajeDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM mensaje");
    }
    public function selectById($usuario_id1, $usuario_id2)
    {
        return $this->conn->query("
            SELECT
                mensaje.mensaje_id AS mensaje_id,
                mensaje.mensaje_texto AS mensaje_texto,
                mensaje.mensaje_fecha AS mensaje_fecha,
                mensaje.mensaje_foto AS mensaje_foto,
                mensaje.usuario_id1 AS usuario1_id,
                mensaje.usuario_id2 AS usuario2_id,
                mensaje.mensaje_visto AS mensaje_visto,
                usuario1.usuario_nombre AS usuario1_nombre,
                usuario1.usuario_foto AS usuario1_foto,
                usuario2.usuario_nombre AS usuario2_nombre,
                usuario2.usuario_foto AS usuario2_foto
            FROM mensaje 
                INNER JOIN usuario AS usuario1 ON usuario1.usuario_id = mensaje.usuario_id1
                INNER JOIN usuario AS usuario2 ON usuario2.usuario_id = mensaje.usuario_id2
            WHERE (mensaje.usuario_id1=$usuario_id1 AND mensaje.usuario_id2=$usuario_id2) OR (mensaje.usuario_id1=$usuario_id2 AND mensaje.usuario_id2=$usuario_id1)
                ORDER BY mensaje.mensaje_fecha ASC;
        ");
    }
    public function selectByUsuario_idMensaje_visto($usuario_id, $mensaje_visto)
    {
        return $this->conn->query("
            SELECT
                mensaje.mensaje_id AS mensaje_id,
                mensaje.mensaje_texto AS mensaje_texto,
                mensaje.mensaje_fecha AS mensaje_fecha,
                mensaje.mensaje_foto AS mensaje_foto,
                mensaje.usuario_id1 AS usuario1_id,
                mensaje.usuario_id2 AS usuario2_id,
                mensaje.mensaje_visto AS mensaje_visto,
                usuario1.usuario_nombre AS usuario1_nombre,
                usuario1.usuario_foto AS usuario1_foto,
                usuario2.usuario_nombre AS usuario2_nombre,
                usuario2.usuario_foto AS usuario2_foto
            FROM mensaje 
                INNER JOIN usuario AS usuario1 ON usuario1.usuario_id = mensaje.usuario_id1
                INNER JOIN usuario AS usuario2 ON usuario2.usuario_id = mensaje.usuario_id2
                WHERE mensaje_id IN (
                    SELECT MAX(mensaje_id) FROM mensaje GROUP BY usuario_id1
                )
                AND usuario_id2 = $usuario_id AND mensaje_visto = $mensaje_visto
                ORDER BY mensaje_id DESC;
        ");
    }
    public function insert($mensaje_texto, $usuario_id1, $usuario_id2, $mensaje_key)
    {
        date_default_timezone_set('America/Guayaquil');
        $fecha = date('Y-m-d H:i:s');
        return $this->conn->query("INSERT INTO mensaje SET mensaje_texto='$mensaje_texto', mensaje_fecha='$fecha', usuario_id1=$usuario_id1, usuario_id2=$usuario_id2, mensaje_key='$mensaje_key' ");
    }
    public function update($mensaje_texto, $usuario_id1, $usuario_id2, $mensaje_id)
    {
        return $this->conn->query("UPDATE mensaje SET mensaje_texto='$mensaje_texto', usuario_id1=$usuario_id1, usuario_id2=$usuario_id2 WHERE mensaje_id = $mensaje_id ");
    }

    public function updateMensaje_visto($usuario_id1, $usuario_id2, $mensaje_visto)
    {
        return $this->conn->query("UPDATE mensaje SET mensaje_visto='$mensaje_visto' WHERE usuario_id1=$usuario_id1 AND usuario_id2=$usuario_id2");
    }

    public function delete($mensaje_id)
    {
        return $this->conn->query("DELETE FROM mensaje WHERE mensaje_id = $mensaje_id ");
    }

    public function selectByAll($mensaje_texto, $usuario_id1, $usuario_id2, $mensaje_key)
    {
        return $this->conn->query("SELECT * FROM mensaje WHERE mensaje_texto='$mensaje_texto' AND usuario_id1=$usuario_id1 AND usuario_id2=$usuario_id2 AND mensaje_key='$mensaje_key' ");
    }

    public function updateMensaje_foto($mensaje_foto, $mensaje_id)
    {
        return $this->conn->query("UPDATE mensaje SET mensaje_foto='$mensaje_foto' WHERE mensaje_id = $mensaje_id ");
    }
}
