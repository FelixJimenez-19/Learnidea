<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_video.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>VIDEOS</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NOMBRE</td>
                        <td>IFRAME</td>
                        <td>DESCRIPCION</td>
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
                    <input type="hidden" name="seccion_video_id">
                    <input type="hidden" name="curso_seccion_id" value="<?php echo $curso_seccion_id ?>">

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="seccion_video_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row">
                        <span>IFRAME: </span>
                        <input class="inline-3" type="text" name="seccion_video_iframe" placeholder="IFRAME" onkeypress="entity.fun.loadFormIframe('form-iframe', this.value)">
                        <a class="inline-3-button" onclick="entity.fun.loadFormIframe('form-iframe', entity.view.form.seccion_video_iframe.value)">
                            <img src="view/src/icon/load.png">
                        </a>
                    </div>

                    <div class="row row-iframe" id="form-iframe"></div>

                    <div class="row">
                        <span>DESCRIPCION: </span>
                        <input type="text" name="seccion_video_descripcion" placeholder="DESCRIPCION">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.seccion_video.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_video.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/seccion_video.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=seccion_video");
    }
} else {
    header("location: login");
}
?>