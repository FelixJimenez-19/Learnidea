<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_evento.php
*/
if (isset($viewPage)) {
?>
    <link rel="stylesheet" href="view/css/bootstrap.css">
    <link rel="stylesheet" href="control/lib/summernote/summernote.min.css">
    <div class="header">
        <span>EVENTOS</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>FECHA</td>
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
                <input type="hidden" name="curso_evento_id">
                <input type="hidden" name="curso_id" value="<?php echo $curso_id ?>">

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="curso_evento_nombre" placeholder="NOMBRE">
                </div>

                <div class="row">
                    <span>FECHA: </span>
                    <input type="datetime-local" name="curso_evento_fecha" placeholder="FECHA">
                </div>

                <div class="row-editor">
                    <span class="row-editor-title">DESCRIPCION</span>
                    <textarea class="row-editor-textarea" name="curso_evento_descripcion" id="curso_evento-editor"></textarea>
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
    <script src="control/lib/jquery.js"></script>
    <script src="control/lib/bootstrap.js"></script>
    <script src="control/lib/summernote/summernote.min.js"></script>
    <script src="control/script/curso_evento.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>