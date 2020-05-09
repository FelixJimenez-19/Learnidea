<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/requisito.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>REQUISITO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>REQUISITO_ID</td>
                    <td>REQUISITO_DESCRIPCION</td>
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
                <input type="hidden" name="requisito_id">

                <div class="row">
                    <span>REQUISITO_DESCRIPCION: </span>
                    <input type="text" name="requisito_descripcion" placeholder="REQUISITO_DESCRIPCION">
                </div>

                <div class="row">
                    <span>CURSO_MODELO_ID: </span>
                    <select name="curso_modelo_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.requisito.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.requisito.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/requisito.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>