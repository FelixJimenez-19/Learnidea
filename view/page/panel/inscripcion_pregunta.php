<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/inscripcion_pregunta.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>INSCRIPCION_PREGUNTA</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>INSCRIPCION_PREGUNTA_ID</td>
                        <td>INSCRIPCION_LECCION_ID</td>
                        <td>SECCION_PREGUNTA_ID</td>
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
                    <input type="hidden" name="inscripcion_pregunta_id">

                    <div class="row">
                        <span>INSCRIPCION_LECCION_ID: </span>
                        <select name="inscripcion_leccion_id"></select>
                    </div>

                    <div class="row">
                        <span>SECCION_PREGUNTA_ID: </span>
                        <select name="seccion_pregunta_id"></select>
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.inscripcion_pregunta.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.inscripcion_pregunta.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/inscripcion_pregunta.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=inscripcion_pregunta");
    }
} else {
    header("location: login");
}
?>