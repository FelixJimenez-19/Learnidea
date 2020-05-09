<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_leccion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>SECCION_LECCION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>SECCION_LECCION_ID</td>
                    <td>SECCION_LECCION_DESCRIPCION</td>
                    <td>SECCION_LECCION_PUNTAJE</td>
                    <td>SECCION_LECCION_INTENTOS</td>
                    <td>CURSO_SECCION_ID</td>
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
                <input type="hidden" name="seccion_leccion_id">

                <div class="row">
                    <span>SECCION_LECCION_DESCRIPCION: </span>
                    <input type="text" name="seccion_leccion_descripcion" placeholder="SECCION_LECCION_DESCRIPCION">
                </div>

                <div class="row">
                    <span>SECCION_LECCION_PUNTAJE: </span>
                    <input type="number" name="seccion_leccion_puntaje" placeholder="SECCION_LECCION_PUNTAJE">
                </div>

                <div class="row">
                    <span>SECCION_LECCION_INTENTOS: </span>
                    <input type="number" name="seccion_leccion_intentos" placeholder="SECCION_LECCION_INTENTOS">
                </div>

                <div class="row">
                    <span>CURSO_SECCION_ID: </span>
                    <select name="curso_seccion_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.seccion_leccion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_leccion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/seccion_leccion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>