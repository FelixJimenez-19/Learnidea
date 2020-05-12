<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/Evaluacion_diagnosticaDao.php
*/
class Evaluacion_diagnosticaDao
{
    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM evaluacion_diagnostica");
    }
    public function selectById($evaluacion_diagnostica_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_diagnostica WHERE evaluacion_diagnostica_id = $evaluacion_diagnostica_id");
    }
    public function selectByCurso_modelo_id($curso_modelo_id)
    {
        return $this->conn->query("SELECT * FROM evaluacion_diagnostica WHERE curso_modelo_id = $curso_modelo_id");
    }
    public function insert($evaluacion_diagnostica_tecnica, $evaluacion_diagnostica_instrumento, $evaluacion_diagnostica_descripcion, $curso_modelo_id)
    {
        return $this->conn->query("INSERT INTO evaluacion_diagnostica SET evaluacion_diagnostica_tecnica='$evaluacion_diagnostica_tecnica', evaluacion_diagnostica_instrumento='$evaluacion_diagnostica_instrumento', evaluacion_diagnostica_descripcion='$evaluacion_diagnostica_descripcion', curso_modelo_id=$curso_modelo_id ");
    }
    public function update($evaluacion_diagnostica_tecnica, $evaluacion_diagnostica_instrumento, $evaluacion_diagnostica_descripcion, $curso_modelo_id, $evaluacion_diagnostica_id)
    {
        return $this->conn->query("UPDATE evaluacion_diagnostica SET evaluacion_diagnostica_tecnica='$evaluacion_diagnostica_tecnica', evaluacion_diagnostica_instrumento='$evaluacion_diagnostica_instrumento', evaluacion_diagnostica_descripcion='$evaluacion_diagnostica_descripcion', curso_modelo_id=$curso_modelo_id WHERE evaluacion_diagnostica_id = $evaluacion_diagnostica_id ");
    }
    public function delete($evaluacion_diagnostica_id)
    {
        return $this->conn->query("DELETE FROM evaluacion_diagnostica WHERE evaluacion_diagnostica_id = $evaluacion_diagnostica_id ");
    }
}
