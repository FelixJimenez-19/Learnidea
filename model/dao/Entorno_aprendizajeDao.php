<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Entorno_aprendizajeDao.php
*/
class Entorno_aprendizajeDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM entorno_aprendizaje");
    }
    public function selectById($entorno_aprendizaje_id)
    {
        return $this->conn->query("SELECT * FROM entorno_aprendizaje WHERE entorno_aprendizaje_id = $entorno_aprendizaje_id");
    }
    public function insert($entorno_aprendizaje_instalaciones, $entorno_aprendizaje_teorica, $entorno_aprendizaje_practica, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO entorno_aprendizaje SET entorno_aprendizaje_instalaciones='$entorno_aprendizaje_instalaciones', entorno_aprendizaje_teorica='$entorno_aprendizaje_teorica', entorno_aprendizaje_practica='$entorno_aprendizaje_practica', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($entorno_aprendizaje_instalaciones, $entorno_aprendizaje_teorica, $entorno_aprendizaje_practica, $curso_modelo_id, $entorno_aprendizaje_id)
    {
        return $this->conn->query("UPDATE entorno_aprendizaje SET entorno_aprendizaje_instalaciones='$entorno_aprendizaje_instalaciones', entorno_aprendizaje_teorica='$entorno_aprendizaje_teorica', entorno_aprendizaje_practica='$entorno_aprendizaje_practica', curso_modelo_id=$curso_modelo_id WHERE entorno_aprendizaje_id = $entorno_aprendizaje_id ");
    }
    public function delete($entorno_aprendizaje_id)
    {
        return $this->conn->query("DELETE FROM entorno_aprendizaje WHERE entorno_aprendizaje_id = $entorno_aprendizaje_id ");
    }
}
