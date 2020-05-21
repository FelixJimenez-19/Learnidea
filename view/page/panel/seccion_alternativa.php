<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_alternativa.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <link rel="stylesheet" href="view/css/bootstrap.css">
        <link rel="stylesheet" href="control/lib/summernote/summernote.min.css">
        <div class="header">
            <span>ALTERNATIVA</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>DESCRIPCION</td>
                        <td>CORRETA</td>
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
                    <input type="hidden" name="seccion_alternativa_id">
                    <input type="hidden" name="seccion_pregunta_id" value="<?php echo $seccion_pregunta_id ?>">

                    <div class="row">
                        <span>CORRETA: </span>
                        <div class="input-radio-container">
                            <input type="radio" name="seccion_alternativa_correta" class="input-radio-si-no" value="1" placeholder="SI">
                            <input type="radio" name="seccion_alternativa_correta" class="input-radio-si-no" value="0" placeholder="NO">
                        </div>
                    </div>

                    <div class="row-editor">
                        <span class="row-editor-title">DESCRIPCION</span>
                        <textarea class="row-editor-textarea" name="seccion_alternativa_descripcion" id="seccion_alternativa-editor"></textarea>
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.seccion_alternativa.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_alternativa.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/lib/jquery.js"></script>
        <script src="control/lib/bootstrap.js"></script>
        <script src="control/lib/summernote/summernote.min.js"></script>
        <script src="control/script/seccion_alternativa.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=seccion_alternativa");
    }
} else {
    header("location: login");
}
?>