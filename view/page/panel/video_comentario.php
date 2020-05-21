<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/video_comentario.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>VIDEO_COMENTARIO</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>VIDEO_COMENTARIO_ID</td>
                        <td>VIDEO_COMENTARIO_DESCRIPCION</td>
                        <td>VIDEO_COMENTARIO_FECHA</td>
                        <td>SECCION_VIDEO_ID</td>
                        <td>VIDEO_COMENTARIO_FOTO</td>

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
                    <input type="hidden" name="video_comentario_id">

                    <div class="row">
                        <span>VIDEO_COMENTARIO_DESCRIPCION: </span>
                        <input type="text" name="video_comentario_descripcion" placeholder="VIDEO_COMENTARIO_DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>VIDEO_COMENTARIO_FECHA: </span>
                        <input type="text" name="video_comentario_fecha" placeholder="VIDEO_COMENTARIO_FECHA">
                    </div>

                    <div class="row">
                        <span>SECCION_VIDEO_ID: </span>
                        <select name="seccion_video_id"></select>
                    </div>

                    <div class="row">
                        <span>VIDEO_COMENTARIO_FOTO: </span>
                        <input type="file" name="video_comentario_foto" placeholder="VIDEO_COMENTARIO_FOTO">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.video_comentario.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.video_comentario.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/video_comentario.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=video_comentario");
    }
} else {
    header("location: login");
}
?>