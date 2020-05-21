<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/mensaje.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>MENSAJE</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>MENSAJE_ID</td>
                        <td>MENSAJE_TEXTO</td>
                        <td>USUARIO_ID1</td>
                        <td>USUARIO_ID2</td>
                        <td>MENSAJE_FOTO</td>

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
                    <input type="hidden" name="mensaje_id">

                    <div class="row">
                        <span>MENSAJE_TEXTO: </span>
                        <input type="text" name="mensaje_texto" placeholder="MENSAJE_TEXTO">
                    </div>

                    <div class="row">
                        <span>USUARIO_ID1: </span>
                        <select name="usuario_id1"></select>
                    </div>

                    <div class="row">
                        <span>USUARIO_ID2: </span>
                        <select name="usuario_id2"></select>
                    </div>

                    <div class="row">
                        <span>MENSAJE_FOTO: </span>
                        <input type="file" name="mensaje_foto" placeholder="MENSAJE_FOTO">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.mensaje.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.mensaje.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/mensaje.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=mensaje");
    }
} else {
    header("location: login");
}
?>