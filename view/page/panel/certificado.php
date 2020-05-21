<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/certificado.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>CERTIFICADO</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>CERTIFICADO_ID</td>
                        <td>CERTIFICADO_CODIGO</td>
                        <td>CERTIFICADO_TIPO_ID</td>
                        <td>USUARIO_ID</td>
                        <td>CERTIFICADO_PDF</td>

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
                    <input type="hidden" name="certificado_id">

                    <div class="row">
                        <span>CERTIFICADO_CODIGO: </span>
                        <input type="text" name="certificado_codigo" placeholder="CERTIFICADO_CODIGO">
                    </div>

                    <div class="row">
                        <span>CERTIFICADO_TIPO_ID: </span>
                        <select name="certificado_tipo_id"></select>
                    </div>

                    <div class="row">
                        <span>USUARIO_ID: </span>
                        <select name="usuario_id"></select>
                    </div>

                    <div class="row">
                        <span>CERTIFICADO_PDF: </span>
                        <input type="file" name="certificado_pdf" placeholder="CERTIFICADO_PDF">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.certificado.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.certificado.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/certificado.js"></script>
<?php

    } else {
        header("location: ../../../panel?page=certificado");
    }
} else {
    header("location: login");
}
?>