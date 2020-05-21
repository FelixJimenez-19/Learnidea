<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/inscripcion_alternativa.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>INSCRIPCION_ALTERNATIVA</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>INSCRIPCION_ALTERNATIVA_ID</td>
                        <td>INSCRIPCION_PREGUNTA_ID</td>
                        <td>SECCION_ALTERNATIVA_ID</td>
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
                    <input type="hidden" name="inscripcion_alternativa_id">

                    <div class="row">
                        <span>INSCRIPCION_PREGUNTA_ID: </span>
                        <select name="inscripcion_pregunta_id"></select>
                    </div>

                    <div class="row">
                        <span>SECCION_ALTERNATIVA_ID: </span>
                        <select name="seccion_alternativa_id"></select>
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.inscripcion_alternativa.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.inscripcion_alternativa.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/inscripcion_alternativa.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=inscripcion_alternativa");
    }
} else {
    header("location: login");
}
?>