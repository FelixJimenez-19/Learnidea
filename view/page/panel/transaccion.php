<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/transaccion.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>TRANSACCION</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>TRANSACCION_ID</td>
                        <td>TRANSACCION_DESCRIPCION</td>
                        <td>TRANSACCION_VALOR</td>
                        <td>TRANSACCION_FECHA</td>
                        <td>TRANSACCION_TIPO_ID</td>
                        <td>TRANSACCION_FOTO</td>

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
                    <input type="hidden" name="transaccion_id">

                    <div class="row">
                        <span>TRANSACCION_DESCRIPCION: </span>
                        <input type="text" name="transaccion_descripcion" placeholder="TRANSACCION_DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>TRANSACCION_VALOR: </span>
                        <input type="number" name="transaccion_valor" placeholder="TRANSACCION_VALOR">
                    </div>

                    <div class="row">
                        <span>TRANSACCION_FECHA: </span>
                        <input type="text" name="transaccion_fecha" placeholder="TRANSACCION_FECHA">
                    </div>

                    <div class="row">
                        <span>TRANSACCION_TIPO_ID: </span>
                        <select name="transaccion_tipo_id"></select>
                    </div>

                    <div class="row">
                        <span>TRANSACCION_FOTO: </span>
                        <input type="file" name="transaccion_foto" placeholder="TRANSACCION_FOTO">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.transaccion.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.transaccion.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/transaccion.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=transaccion");
    }
} else {
    header("location: login");
}
?>