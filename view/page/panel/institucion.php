<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/institucion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>INSTITUCION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>SIGLAS</td>
                    <td>LINK</td>
                    <td>LOGO</td>
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
                <input type="hidden" name="institucion_id">

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="institucion_nombre" placeholder="NOMBRE">
                </div>

                <div class="row">
                    <span>SIGLAS: </span>
                    <input type="text" name="institucion_siglas" placeholder="SIGLAS">
                </div>
                
                <div class="row">
                    <span>LINK: </span>
                    <input type="text" name="institucion_link" placeholder="LINK">
                </div>

                <div class="row">
                    <span>LOGO: </span>
                    <input type="file" name="institucion_logo" placeholder="LOGO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.institucion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.institucion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/institucion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>