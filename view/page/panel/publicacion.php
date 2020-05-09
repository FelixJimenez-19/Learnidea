<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/publicacion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>PUBLICACION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>PUBLICACION_ID</td>
                    <td>PUBLICACION_DESCRIPCION</td>
                    <td>PUBLICACION_FECHA</td>
                    <td>USUARIO_ID</td>
                    <td>INSCRIPCION_ID</td>
                    <td>PUBLICACION_FOTO</td>

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
                <input type="hidden" name="publicacion_id">

                <div class="row">
                    <span>PUBLICACION_DESCRIPCION: </span>
                    <input type="text" name="publicacion_descripcion" placeholder="PUBLICACION_DESCRIPCION">
                </div>

                <div class="row">
                    <span>PUBLICACION_FECHA: </span>
                    <input type="text" name="publicacion_fecha" placeholder="PUBLICACION_FECHA">
                </div>

                <div class="row">
                    <span>USUARIO_ID: </span>
                    <select name="usuario_id"></select>
                </div>

                <div class="row">
                    <span>INSCRIPCION_ID: </span>
                    <select name="inscripcion_id"></select>
                </div>

                <div class="row">
                    <span>PUBLICACION_FOTO: </span>
                    <input type="file" name="publicacion_foto" placeholder="PUBLICACION_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.publicacion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.publicacion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/publicacion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>