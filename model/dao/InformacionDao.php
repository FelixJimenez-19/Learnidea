<?php

class InformacionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM informacion INNER JOIN usuario_tema ON informacion.usuario_tema_id = usuario_tema.usuario_tema_id");
    }
    public function selectById($informacion_id)
    {
        return $this->conn->query("SELECT * FROM informacion INNER JOIN usuario_tema ON informacion.usuario_tema_id = usuario_tema.usuario_tema_id WHERE informacion_id = $informacion_id");
    }
    public function insert($informacion_empresa_nombre, $informacion_empresa_siglas, $informacion_empresa_ciudad, $informacion_empresa_mision, $informacion_empresa_vision, $informacion_gerente_nombre, $informacion_gerente_celular, $informacion_gerente_nivel_nombre, $informacion_gerente_nivel_siglas, $informacion_pagina_nombre, $informacion_pagina_mision, $informacion_pagina_vision, $informacion_pagina_copyright, $informacion_ubicacion, $informacion_api_key, $usuario_tema_id )
    {
        return $this->conn->query("INSERT INTO informacion SET informacion_empresa_nombre='$informacion_empresa_nombre', informacion_empresa_siglas='$informacion_empresa_siglas', informacion_empresa_ciudad='$informacion_empresa_ciudad', informacion_empresa_mision='$informacion_empresa_mision', informacion_empresa_vision='$informacion_empresa_vision', informacion_gerente_nombre='$informacion_gerente_nombre', informacion_gerente_celular='$informacion_gerente_celular', informacion_gerente_nivel_nombre='$informacion_gerente_nivel_nombre', informacion_gerente_nivel_siglas='$informacion_gerente_nivel_siglas', informacion_pagina_nombre='$informacion_pagina_nombre', informacion_pagina_mision='$informacion_pagina_mision', informacion_pagina_vision='$informacion_pagina_vision', informacion_pagina_copyright='$informacion_pagina_copyright', informacion_ubicacion='$informacion_ubicacion', informacion_api_key='$informacion_api_key', usuario_tema_id=$usuario_tema_id ");
    }
    public function update($informacion_empresa_nombre, $informacion_empresa_siglas, $informacion_empresa_ciudad, $informacion_empresa_mision, $informacion_empresa_vision, $informacion_gerente_nombre, $informacion_gerente_celular, $informacion_gerente_nivel_nombre, $informacion_gerente_nivel_siglas, $informacion_pagina_nombre, $informacion_pagina_mision, $informacion_pagina_vision, $informacion_pagina_copyright, $informacion_ubicacion, $informacion_api_key, $usuario_tema_id, $informacion_id)
    {
        return $this->conn->query("UPDATE informacion SET informacion_empresa_nombre='$informacion_empresa_nombre', informacion_empresa_siglas='$informacion_empresa_siglas', informacion_empresa_ciudad='$informacion_empresa_ciudad', informacion_empresa_mision='$informacion_empresa_mision', informacion_empresa_vision='$informacion_empresa_vision', informacion_gerente_nombre='$informacion_gerente_nombre', informacion_gerente_celular='$informacion_gerente_celular', informacion_gerente_nivel_nombre='$informacion_gerente_nivel_nombre', informacion_gerente_nivel_siglas='$informacion_gerente_nivel_siglas', informacion_pagina_nombre='$informacion_pagina_nombre', informacion_pagina_mision='$informacion_pagina_mision', informacion_pagina_vision='$informacion_pagina_vision', informacion_pagina_copyright='$informacion_pagina_copyright', informacion_ubicacion='$informacion_ubicacion', informacion_api_key='$informacion_api_key', usuario_tema_id=$usuario_tema_id WHERE informacion_id = $informacion_id ");
    }
    public function delete($informacion_id)
    {
        return $this->conn->query("DELETE FROM informacion WHERE informacion_id = $informacion_id ");
    }

    public function selectByAll($informacion_empresa_nombre, $informacion_empresa_siglas, $informacion_empresa_ciudad, $informacion_empresa_mision, $informacion_empresa_vision, $informacion_gerente_nombre, $informacion_gerente_celular, $informacion_gerente_nivel_nombre, $informacion_gerente_nivel_siglas, $informacion_pagina_nombre, $informacion_pagina_mision, $informacion_pagina_vision, $informacion_pagina_copyright, $informacion_ubicacion, $informacion_api_key, $usuario_tema_id)
    {
        return $this->conn->query("SELECT * FROM informacion WHERE informacion_empresa_nombre='$informacion_empresa_nombre' AND informacion_empresa_siglas='$informacion_empresa_siglas' AND informacion_empresa_ciudad='$informacion_empresa_ciudad' AND informacion_empresa_mision='$informacion_empresa_mision' AND informacion_empresa_vision='$informacion_empresa_vision' AND informacion_gerente_nombre='$informacion_gerente_nombre' AND informacion_gerente_celular='$informacion_gerente_celular' AND informacion_gerente_nivel_nombre='$informacion_gerente_nivel_nombre' AND informacion_gerente_nivel_siglas='$informacion_gerente_nivel_siglas' AND informacion_pagina_nombre='$informacion_pagina_nombre' AND informacion_pagina_mision='$informacion_pagina_mision' AND informacion_pagina_vision='$informacion_pagina_vision' AND informacion_pagina_copyright='$informacion_pagina_copyright' AND informacion_ubicacion='$informacion_ubicacion' AND informacion_api_key='$informacion_api_key' AND usuario_tema_id=$usuario_tema_id");
    }

    public function updateInformacion_empresa_logo($informacion_empresa_logo, $informacion_id)
    {
        return $this->conn->query("UPDATE informacion SET informacion_empresa_logo='$informacion_empresa_logo' WHERE informacion_id = $informacion_id ");
    }

    public function updateInformacion_pagina_logo($informacion_pagina_logo, $informacion_id)
    {
        return $this->conn->query("UPDATE informacion SET informacion_pagina_logo='$informacion_pagina_logo' WHERE informacion_id = $informacion_id ");
    }
}
?>

