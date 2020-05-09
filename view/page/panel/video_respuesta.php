<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/video_respuesta.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>VIDEO_RESPUESTA</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>VIDEO_RESPUESTA_ID</td>
                    <td>VIDEO_RESPUESTA_DESCRIPCION</td>
                    <td>VIDEO_RESPUESTA_FECHA</td>
                    <td>VIDEO_COMENTARIO_ID</td>
                    <td>VIDEO_RESPUESTA_FOTO</td>

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
                <input type="hidden" name="video_respuesta_id">

                <div class="row">
                    <span>VIDEO_RESPUESTA_DESCRIPCION: </span>
                    <input type="text" name="video_respuesta_descripcion" placeholder="VIDEO_RESPUESTA_DESCRIPCION">
                </div>

                <div class="row">
                    <span>VIDEO_RESPUESTA_FECHA: </span>
                    <input type="text" name="video_respuesta_fecha" placeholder="VIDEO_RESPUESTA_FECHA">
                </div>

                <div class="row">
                    <span>VIDEO_COMENTARIO_ID: </span>
                    <select name="video_comentario_id"></select>
                </div>

                <div class="row">
                    <span>VIDEO_RESPUESTA_FOTO: </span>
                    <input type="file" name="video_respuesta_foto" placeholder="VIDEO_RESPUESTA_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.video_respuesta.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.video_respuesta.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/video_respuesta.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>