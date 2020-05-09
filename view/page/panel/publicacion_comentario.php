<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/publicacion_comentario.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>PUBLICACION_COMENTARIO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>PUBLICACION_COMENTARIO_ID</td>
                    <td>PUBLICACION_COMENTARIO_DESCRIPCION</td>
                    <td>PUBLICACION_COMENTARIO_FECHA</td>
                    <td>PUBLICACION_ID</td>
                    <td>PUBLICACION_COMENTARIO_FOTO</td>

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
                <input type="hidden" name="publicacion_comentario_id">

                <div class="row">
                    <span>PUBLICACION_COMENTARIO_DESCRIPCION: </span>
                    <input type="text" name="publicacion_comentario_descripcion" placeholder="PUBLICACION_COMENTARIO_DESCRIPCION">
                </div>

                <div class="row">
                    <span>PUBLICACION_COMENTARIO_FECHA: </span>
                    <input type="text" name="publicacion_comentario_fecha" placeholder="PUBLICACION_COMENTARIO_FECHA">
                </div>

                <div class="row">
                    <span>PUBLICACION_ID: </span>
                    <select name="publicacion_id"></select>
                </div>

                <div class="row">
                    <span>PUBLICACION_COMENTARIO_FOTO: </span>
                    <input type="file" name="publicacion_comentario_foto" placeholder="PUBLICACION_COMENTARIO_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.publicacion_comentario.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.publicacion_comentario.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/publicacion_comentario.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>