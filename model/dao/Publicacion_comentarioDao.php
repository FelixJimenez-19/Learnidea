<?php

class Publicacion_comentarioDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("
            SELECT * FROM publicacion_comentario
                INNER JOIN usuario ON usuario.usuario_id = publicacion_comentario.usuario_id ORDER BY publicacion_comentario.publicacion_comentario_id DESC
        ");
    }
    public function selectById($publicacion_comentario_id)
    {
        return $this->conn->query("
            SELECT * FROM publicacion_comentario
                INNER JOIN usuario ON usuario.usuario_id = publicacion_comentario.usuario_id        
            WHERE publicacion_comentario_id = $publicacion_comentario_id ORDER BY publicacion_comentario.publicacion_comentario_id DESC
        ");
    }
    public function selectByUsuario_id_notification($usuario_id)
    {
        return $this->conn->query("
            SELECT * FROM publicacion_comentario 
                INNER JOIN usuario ON usuario.usuario_id = publicacion_comentario.usuario_id
            WHERE publicacion_comentario_id IN (
                SELECT MAX(publicacion_comentario_id) FROM publicacion_comentario
                WHERE publicacion_id IN (
                    SELECT publicacion.publicacion_id FROM publicacion_comentario
                        INNER JOIN publicacion ON publicacion.publicacion_id = publicacion_comentario.publicacion_id
                    WHERE publicacion_comentario.usuario_id = $usuario_id OR publicacion.usuario_id = $usuario_id
                ) GROUP BY publicacion_id
            ) ORDER BY publicacion_comentario_id DESC;
        ");
    }
    public function insert($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id, $usuario_id, $publicacion_comentario_key)
    {
        return $this->conn->query("INSERT INTO publicacion_comentario SET publicacion_comentario_descripcion='$publicacion_comentario_descripcion', publicacion_comentario_fecha='$publicacion_comentario_fecha', publicacion_id=$publicacion_id, usuario_id=$usuario_id, publicacion_comentario_key='$publicacion_comentario_key' ");
    }
    public function update($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id, $usuario_id, $publicacion_comentario_id)
    {
        return $this->conn->query("UPDATE publicacion_comentario SET publicacion_comentario_descripcion='$publicacion_comentario_descripcion', publicacion_comentario_fecha='$publicacion_comentario_fecha', publicacion_id=$publicacion_id, usuario_id=$usuario_id WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }
    public function delete($publicacion_comentario_id)
    {
        return $this->conn->query("DELETE FROM publicacion_comentario WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }

    public function selectByAll($publicacion_comentario_descripcion, $publicacion_comentario_fecha, $publicacion_id, $usuario_id, $publicacion_comentario_key)
    {
        return $this->conn->query("SELECT * FROM publicacion_comentario WHERE publicacion_comentario_descripcion='$publicacion_comentario_descripcion' AND publicacion_comentario_fecha='$publicacion_comentario_fecha' AND publicacion_id=$publicacion_id AND usuario_id=$usuario_id AND publicacion_comentario_key='$publicacion_comentario_key' ");
    }

    public function updatePublicacion_comentario_foto($publicacion_comentario_foto, $publicacion_comentario_id)
    {
        return $this->conn->query("UPDATE publicacion_comentario SET publicacion_comentario_foto='$publicacion_comentario_foto' WHERE publicacion_comentario_id = $publicacion_comentario_id ");
    }
}
