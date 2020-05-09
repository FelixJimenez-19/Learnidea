<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_pregunta.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>SECCION_PREGUNTA</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>SECCION_PREGUNTA_ID</td>
                    <td>SECCION_PREGUNTA_DESCRIPCION</td>
                    <td>SECCION_PREGUNTA_TIEMPO</td>
                    <td>SECCION_PREGUNTA_PORCENTAJE</td>
                    <td>SECCION_LECCION_ID</td>
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
                <input type="hidden" name="seccion_pregunta_id">

                <div class="row">
                    <span>SECCION_PREGUNTA_DESCRIPCION: </span>
                    <input type="text" name="seccion_pregunta_descripcion" placeholder="SECCION_PREGUNTA_DESCRIPCION">
                </div>

                <div class="row">
                    <span>SECCION_PREGUNTA_TIEMPO: </span>
                    <input type="text" name="seccion_pregunta_tiempo" placeholder="SECCION_PREGUNTA_TIEMPO">
                </div>

                <div class="row">
                    <span>SECCION_PREGUNTA_PORCENTAJE: </span>
                    <input type="text" name="seccion_pregunta_porcentaje" placeholder="SECCION_PREGUNTA_PORCENTAJE">
                </div>

                <div class="row">
                    <span>SECCION_LECCION_ID: </span>
                    <select name="seccion_leccion_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.seccion_pregunta.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_pregunta.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/seccion_pregunta.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>