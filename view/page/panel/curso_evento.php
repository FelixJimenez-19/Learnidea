<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_evento.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>CURSO_EVENTO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>CURSO_EVENTO_ID</td>
                    <td>CURSO_EVENTO_NOMBRE</td>
                    <td>CURSO_EVENTO_FECHA</td>
                    <td>CURSO_EVENTO_DESCRIPCION</td>
                    <td>CURSO_ID</td>
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
                <input type="hidden" name="curso_evento_id">

                <div class="row">
                    <span>CURSO_EVENTO_NOMBRE: </span>
                    <input type="text" name="curso_evento_nombre" placeholder="CURSO_EVENTO_NOMBRE">
                </div>

                <div class="row">
                    <span>CURSO_EVENTO_FECHA: </span>
                    <input type="text" name="curso_evento_fecha" placeholder="CURSO_EVENTO_FECHA">
                </div>

                <div class="row">
                    <span>CURSO_EVENTO_DESCRIPCION: </span>
                    <input type="text" name="curso_evento_descripcion" placeholder="CURSO_EVENTO_DESCRIPCION">
                </div>

                <div class="row">
                    <span>CURSO_ID: </span>
                    <select name="curso_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.curso_evento.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso_evento.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/curso_evento.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>