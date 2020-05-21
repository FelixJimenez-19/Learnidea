<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/evaluacion_final.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>EVALUACION FINAL</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TECNICA</td>
                        <td>INSTRUMENTO</td>
                        <td>DESCRIPCION</td>
                        <td>ACCION</td>
                    </tr>
                </thead>
                <tbody id="idea_table"></tbody>
            </table>
        </div>


        <div class="idea_form" id="idea_modal_form">
            <form id="idea_form">
                <span class="title">FORMULARIO</span>
                <div class="inputs">
                    <input type="hidden" name="evaluacion_final_id">
                    <input type="hidden" name="curso_modelo_id" value="<?php echo $curso_modelo_id ?>">

                    <div class="row">
                        <span>TECNICA: </span>
                        <input type="text" name="evaluacion_final_tecnica" placeholder="TECNICA">
                    </div>

                    <div class="row">
                        <span>INSTRUMENTO: </span>
                        <input type="text" name="evaluacion_final_instrumento" placeholder="INSTRUMENTO">
                    </div>

                    <div class="row">
                        <span>DESCRIPCION: </span>
                        <input type="text" name="evaluacion_final_descripcion" placeholder="DESCRIPCION">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.evaluacion_final.fun.insertOrUpdate()">GUARDAR</button>
                    <button onclick="entity.fun.hideModalForm()">CANCELAR</button>
                </div>
            </form>
        </div>

        <div class="idea_message" id="idea_modal_message">
            <div class="message">
                <span id="idea_message"></span>
                <button onclick="entity.fun.hideModalMessage()">ACEPTAR</button>
            </div>
        </div>
        <div class="idea_confirm" id="idea_modal_confirm">
            <div class="confirm">
                <span id="idea_confirm"></span>
                <div class="buttons">
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.evaluacion_final.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/evaluacion_final.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=evaluacion_final");
    }
} else {
    header("location: login");
}
?>