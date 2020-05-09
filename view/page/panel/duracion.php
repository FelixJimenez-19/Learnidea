<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/duracion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>DURACION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>DURACION_ID</td>
                    <td>DURACION_DESCRIPCION</td>
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
                <input type="hidden" name="duracion_id">

                <div class="row">
                    <span>DURACION_DESCRIPCION: </span>
                    <input type="text" name="duracion_descripcion" placeholder="DURACION_DESCRIPCION">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.duracion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.duracion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/duracion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>