<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/transaccion_tipo.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>TIPOS DE TRANSACCIÓN</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NOMBRE</td>
                        <td>NÚMERO</td>
                        <td>TIPO</td>
                        <td>DESCRIPCION</td>
                        <td>LOGO</td>
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
                        <span>NOMBRE: </span>
                        <input type="text" name="transaccion_tipo_nombre" placeholder="NOMBRE">
                    </div>
                   
                    <div class="row">
                        <span>NÚMERO: </span>
                        <input type="text" name="transaccion_tipo_numero" placeholder="NÚMERO">
                    </div>

                    <div class="row">
                        <span>DESCRIPCION: </span>
                        <input type="text" name="transaccion_tipo_descripcion" placeholder="DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>TIPO: </span>
                        <div class="input-radio-container">
                            <input type="radio" name="transaccion_tipo_tipo" class="input-radio-si-no" value="1" placeholder="CREDITO">
                            <input type="radio" name="transaccion_tipo_tipo" class="input-radio-si-no" value="2" placeholder="ENTRADA">
                            <input type="radio" name="transaccion_tipo_tipo" class="input-radio-si-no" value="3" placeholder="SALIDA">
                        </div>
                    </div>

                    <div class="row">
                        <span>LOGO: </span>
                        <input type="file" name="transaccion_tipo_logo" placeholder="LOGO">
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
        header("location: ../../../panel?page=transaccion_tipo");
    }
} else {
    header("location: login");
}
?>