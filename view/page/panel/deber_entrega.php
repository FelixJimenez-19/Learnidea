<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/deber_entrega.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>DEBER_ENTREGA</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>DEBER_ENTREGA_ID</td>
                        <td>DEBER_ENTREGA_DESCRIPCION</td>
                        <td>DEBER_ENTREGA_LINK</td>
                        <td>DEBER_ENTREGA_FECHA_INICIO</td>
                        <td>DEBER_ENTREGA_FECHA_FIN</td>
                        <td>CURSO_DEBER_ID</td>
                        <td>INSCRIPCION_ID</td>
                        <td>DEBER_ENTREGA_FOTO</td>

                        <td>DEBER_ENTREGA_PDF</td>

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
                    <input type="hidden" name="deber_entrega_id">

                    <div class="row">
                        <span>DEBER_ENTREGA_DESCRIPCION: </span>
                        <input type="text" name="deber_entrega_descripcion" placeholder="DEBER_ENTREGA_DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>DEBER_ENTREGA_LINK: </span>
                        <input type="text" name="deber_entrega_link" placeholder="DEBER_ENTREGA_LINK">
                    </div>

                    <div class="row">
                        <span>DEBER_ENTREGA_FECHA_INICIO: </span>
                        <input type="text" name="deber_entrega_fecha_inicio" placeholder="DEBER_ENTREGA_FECHA_INICIO">
                    </div>

                    <div class="row">
                        <span>DEBER_ENTREGA_FECHA_FIN: </span>
                        <input type="text" name="deber_entrega_fecha_fin" placeholder="DEBER_ENTREGA_FECHA_FIN">
                    </div>

                    <div class="row">
                        <span>CURSO_DEBER_ID: </span>
                        <select name="curso_deber_id"></select>
                    </div>

                    <div class="row">
                        <span>INSCRIPCION_ID: </span>
                        <select name="inscripcion_id"></select>
                    </div>

                    <div class="row">
                        <span>DEBER_ENTREGA_FOTO: </span>
                        <input type="file" name="deber_entrega_foto" placeholder="DEBER_ENTREGA_FOTO">
                    </div>

                    <div class="row">
                        <span>DEBER_ENTREGA_PDF: </span>
                        <input type="file" name="deber_entrega_pdf" placeholder="DEBER_ENTREGA_PDF">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.deber_entrega.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.deber_entrega.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/deber_entrega.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=deber_entrega");
    }
} else {
    header("location: login");
}
?>