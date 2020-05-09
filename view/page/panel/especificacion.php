<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/especificacion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>ESPECIFICACION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ESPECIFICACION_ID</td>
                    <td>ESPECIFICACION_CODIGO</td>
                    <td>ESPECIFICACION_DESCRIPCION</td>
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
                <input type="hidden" name="especificacion_id">

                <div class="row">
                    <span>ESPECIFICACION_CODIGO: </span>
                    <input type="text" name="especificacion_codigo" placeholder="ESPECIFICACION_CODIGO">
                </div>

                <div class="row">
                    <span>ESPECIFICACION_DESCRIPCION: </span>
                    <input type="text" name="especificacion_descripcion" placeholder="ESPECIFICACION_DESCRIPCION">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.especificacion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.especificacion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/especificacion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>