<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/transaccion_tipo.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>TRANSACCION_TIPO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>TRANSACCION_TIPO_ID</td>
                    <td>TRANSACCION_TIPO_NOMBRE</td>
                    <td>TRANSACCION_TIPO_DESCRIPCION</td>
                    <td>TRANSACCION_TIPO_CREDIDO</td>
                    <td>TRANSACCION_TIPO_PAGO</td>
                    <td>TRANSACCION_TIPO_ENTRADA</td>
                    <td>TRANSACCION_TIPO_LOGO</td>

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
                <input type="hidden" name="transaccion_tipo_id">

                <div class="row">
                    <span>TRANSACCION_TIPO_NOMBRE: </span>
                    <input type="text" name="transaccion_tipo_nombre" placeholder="TRANSACCION_TIPO_NOMBRE">
                </div>

                <div class="row">
                    <span>TRANSACCION_TIPO_DESCRIPCION: </span>
                    <input type="text" name="transaccion_tipo_descripcion" placeholder="TRANSACCION_TIPO_DESCRIPCION">
                </div>

                <div class="row">
                    <span>TRANSACCION_TIPO_CREDIDO: </span>
                    <input type="number" name="transaccion_tipo_credido" placeholder="TRANSACCION_TIPO_CREDIDO">
                </div>

                <div class="row">
                    <span>TRANSACCION_TIPO_PAGO: </span>
                    <input type="number" name="transaccion_tipo_pago" placeholder="TRANSACCION_TIPO_PAGO">
                </div>

                <div class="row">
                    <span>TRANSACCION_TIPO_ENTRADA: </span>
                    <input type="number" name="transaccion_tipo_entrada" placeholder="TRANSACCION_TIPO_ENTRADA">
                </div>

                <div class="row">
                    <span>TRANSACCION_TIPO_LOGO: </span>
                    <input type="file" name="transaccion_tipo_logo" placeholder="TRANSACCION_TIPO_LOGO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.transaccion_tipo.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.transaccion_tipo.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/transaccion_tipo.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>