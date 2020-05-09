<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_deber.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>CURSO_DEBER</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>CURSO_DEBER_ID</td>
                    <td>CURSO_DEBER_DESCRIPCION</td>
                    <td>CURSO_DEBER_LINK</td>
                    <td>CURSO_DEBER_FECHA_INICIO</td>
                    <td>CURSO_DEBER_FECHA_FIN</td>
                    <td>CURSO_ID</td>
                    <td>CURSO_DEBER_FOTO</td>

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
                <input type="hidden" name="curso_deber_id">

                <div class="row">
                    <span>CURSO_DEBER_DESCRIPCION: </span>
                    <input type="text" name="curso_deber_descripcion" placeholder="CURSO_DEBER_DESCRIPCION">
                </div>

                <div class="row">
                    <span>CURSO_DEBER_LINK: </span>
                    <input type="text" name="curso_deber_link" placeholder="CURSO_DEBER_LINK">
                </div>

                <div class="row">
                    <span>CURSO_DEBER_FECHA_INICIO: </span>
                    <input type="text" name="curso_deber_fecha_inicio" placeholder="CURSO_DEBER_FECHA_INICIO">
                </div>

                <div class="row">
                    <span>CURSO_DEBER_FECHA_FIN: </span>
                    <input type="text" name="curso_deber_fecha_fin" placeholder="CURSO_DEBER_FECHA_FIN">
                </div>

                <div class="row">
                    <span>CURSO_ID: </span>
                    <select name="curso_id"></select>
                </div>

                <div class="row">
                    <span>CURSO_DEBER_FOTO: </span>
                    <input type="file" name="curso_deber_foto" placeholder="CURSO_DEBER_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.curso_deber.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso_deber.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/curso_deber.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>