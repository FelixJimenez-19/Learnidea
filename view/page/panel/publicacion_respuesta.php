<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/publicacion_respuesta.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>PUBLICACION_RESPUESTA</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>PUBLICACION_RESPUESTA_ID</td>
                    <td>PUBLICACION_RESPUESTA_DESCRIPCION</td>
                    <td>PUBLICACION_RESPUESTA_FECHA</td>
                    <td>PUBLICACION_COMENTARIO_ID</td>
                    <td>PUBLICACION_RESPUESTA_FOTO</td>

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
                <input type="hidden" name="publicacion_respuesta_id">

                <div class="row">
                    <span>PUBLICACION_RESPUESTA_DESCRIPCION: </span>
                    <input type="text" name="publicacion_respuesta_descripcion" placeholder="PUBLICACION_RESPUESTA_DESCRIPCION">
                </div>

                <div class="row">
                    <span>PUBLICACION_RESPUESTA_FECHA: </span>
                    <input type="text" name="publicacion_respuesta_fecha" placeholder="PUBLICACION_RESPUESTA_FECHA">
                </div>

                <div class="row">
                    <span>PUBLICACION_COMENTARIO_ID: </span>
                    <select name="publicacion_comentario_id"></select>
                </div>

                <div class="row">
                    <span>PUBLICACION_RESPUESTA_FOTO: </span>
                    <input type="file" name="publicacion_respuesta_foto" placeholder="PUBLICACION_RESPUESTA_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.publicacion_respuesta.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.publicacion_respuesta.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/publicacion_respuesta.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>