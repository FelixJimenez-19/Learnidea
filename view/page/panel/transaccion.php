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
            <span>TRANSACCIONES</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>DESCRIPCION</td>
                        <td>VALOR</td>
                        <td>FECHA</td>
                        <td>FOTO</td>
                        <td>TIPO</td>
                        <td>USUARIO</td>
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
                        <span>DESCRIPCION: </span>
                        <input type="text" name="transaccion_descripcion" placeholder="DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>VALOR: </span>
                        <input type="number" name="transaccion_valor" placeholder="VALOR">
                    </div>

                    <div class="row">
                        <span>FECHA: </span>
                        <input type="datetime-local" name="transaccion_fecha" placeholder="FECHA">
                    </div>

                    <div class="row">
                        <span>FOTO: </span>
                        <input type="file" name="transaccion_foto" placeholder="FOTO">
                    </div>

                    <div class="row">
                        <span>TIPO: </span>
                        <select name="transaccion_tipo_id"></select>
                    </div>
                    
                    <div class="row">
                        <span>USUARIO: </span>
                        <select name="usuario_id"></select>
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