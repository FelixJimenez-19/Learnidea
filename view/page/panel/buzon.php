<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/buzon.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>BUZON</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>BUZON_ID</td>
                        <td>BUZON_EMAIL</td>
                        <td>BUZON_DESCRIPCION</td>
                        <td>BUZON_FOTO</td>
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
                    <input type="hidden" name="buzon_id">

                    <div class="row">
                        <span>BUZON_EMAIL: </span>
                        <input type="text" name="buzon_email" placeholder="BUZON_EMAIL">
                    </div>

                    <div class="row">
                        <span>BUZON_DESCRIPCION: </span>
                        <input type="text" name="buzon_descripcion" placeholder="BUZON_DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>BUZON_FOTO: </span>
                        <input type="file" name="buzon_foto" placeholder="BUZON_FOTO">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.buzon.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.buzon.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/buzon.js"></script>
<?php

    } else {
        header("location: ../../../panel?page=buzon");
    }
} else {
    header("location: login");
}
?>