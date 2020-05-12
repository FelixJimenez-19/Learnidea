<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Evaluacion_finalDao.php
*/
class Evaluacion_finalDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM evaluacion_final");
    }
    public function selectById($evaluacion_final_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_final WHERE evaluacion_final_id = $evaluacion_final_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_final WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($evaluacion_final_tecnica, $evaluacion_final_instrumento, $evaluacion_final_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO evaluacion_final SET evaluacion_final_tecnica='$evaluacion_final_tecnica', evaluacion_final_instrumento='$evaluacion_final_instrumento', evaluacion_final_descripcion='$evaluacion_final_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($evaluacion_final_tecnica, $evaluacion_final_instrumento, $evaluacion_final_descripcion, $curso_modelo_id, $evaluacion_final_id)
    {
        return $this->conn->query("UPDATE evaluacion_final SET evaluacion_final_tecnica='$evaluacion_final_tecnica', evaluacion_final_instrumento='$evaluacion_final_instrumento', evaluacion_final_descripcion='$evaluacion_final_descripcion', curso_modelo_id=$curso_modelo_id WHERE evaluacion_final_id = $evaluacion_final_id ");
    }
    public function delete($evaluacion_final_id)
    {
        return $this->conn->query("DELETE FROM evaluacion_final WHERE evaluacion_final_id = $evaluacion_final_id ");
    }
}
