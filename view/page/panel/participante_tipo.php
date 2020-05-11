<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/participante_tipo.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>PARTICIPANTE</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
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
                <input type="hidden" name="participante_tipo_id">

                <div class="row">
                    <span>DESCRIPCION: </span>
                    <input type="text" name="participante_tipo_descripcion" placeholder="DESCRIPCION">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.participante_tipo.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.participante_tipo.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/participante_tipo.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>