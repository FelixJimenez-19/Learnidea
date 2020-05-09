<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Curso_seccionDao.php
*/
class Curso_seccionDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM curso_seccion");
    }
    public function selectById($curso_seccion_id)
    {
        return $this->conn->query("SELECT * FROM curso_seccion WHERE curso_seccion_id = $curso_seccion_id");
    }
    public function insert($curso_seccion_nombre, $curso_seccion_descripcion, $curso_id)
    {
        return $this->conn->query("INSERT INTO curso_seccion SET curso_seccion_nombre='$curso_seccion_nombre', curso_seccion_descripcion='$curso_seccion_descripcion', curso_id=$curso_id ");
    }
    public function update($curso_seccion_nombre, $curso_seccion_descripcion, $curso_id, $curso_seccion_id)
    {
        return $this->conn->query("UPDATE curso_seccion SET curso_seccion_nombre='$curso_seccion_nombre', curso_seccion_descripcion='$curso_seccion_descripcion', curso_id=$curso_id WHERE curso_seccion_id = $curso_seccion_id ");
    }
    public function delete($curso_seccion_id)
    {
        return $this->conn->query("DELETE FROM curso_seccion WHERE curso_seccion_id = $curso_seccion_id ");
    }
}
