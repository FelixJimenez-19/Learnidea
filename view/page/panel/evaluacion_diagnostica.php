<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/evaluacion_diagnostica.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>EVALUACION_DIAGNOSTICA</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>EVALUACION_DIAGNOSTICA_ID</td>
                    <td>EVALUACION_DIAGNOSTICA_TECNICA</td>
                    <td>EVALUACION_DIAGNOSTICA_INSTRUMENTO</td>
                    <td>EVALUACION_DIAGNOSTICA_DESCRIPCION</td>
                    <td>CURSO_MODELO_ID</td>
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
                <input type="hidden" name="evaluacion_diagnostica_id">

                <div class="row">
                    <span>EVALUACION_DIAGNOSTICA_TECNICA: </span>
                    <input type="text" name="evaluacion_diagnostica_tecnica" placeholder="EVALUACION_DIAGNOSTICA_TECNICA">
                </div>

                <div class="row">
                    <span>EVALUACION_DIAGNOSTICA_INSTRUMENTO: </span>
                    <input type="text" name="evaluacion_diagnostica_instrumento" placeholder="EVALUACION_DIAGNOSTICA_INSTRUMENTO">
                </div>

                <div class="row">
                    <span>EVALUACION_DIAGNOSTICA_DESCRIPCION: </span>
                    <input type="text" name="evaluacion_diagnostica_descripcion" placeholder="EVALUACION_DIAGNOSTICA_DESCRIPCION">
                </div>

                <div class="row">
                    <span>CURSO_MODELO_ID: </span>
                    <select name="curso_modelo_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.evaluacion_diagnostica.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.evaluacion_diagnostica.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/evaluacion_diagnostica.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>