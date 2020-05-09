<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/entorno_aprendizaje.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>ENTORNO_APRENDIZAJE</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ENTORNO_APRENDIZAJE_ID</td>
                    <td>ENTORNO_APRENDIZAJE_INSTALACIONES</td>
                    <td>ENTORNO_APRENDIZAJE_TEORICA</td>
                    <td>ENTORNO_APRENDIZAJE_PRACTICA</td>
                    <td>CURSO_MODELO_ID</td>
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
                <input type="hidden" name="entorno_aprendizaje_id">

                <div class="row">
                    <span>ENTORNO_APRENDIZAJE_INSTALACIONES: </span>
                    <input type="text" name="entorno_aprendizaje_instalaciones" placeholder="ENTORNO_APRENDIZAJE_INSTALACIONES">
                </div>

                <div class="row">
                    <span>ENTORNO_APRENDIZAJE_TEORICA: </span>
                    <input type="text" name="entorno_aprendizaje_teorica" placeholder="ENTORNO_APRENDIZAJE_TEORICA">
                </div>

                <div class="row">
                    <span>ENTORNO_APRENDIZAJE_PRACTICA: </span>
                    <input type="text" name="entorno_aprendizaje_practica" placeholder="ENTORNO_APRENDIZAJE_PRACTICA">
                </div>

                <div class="row">
                    <span>CURSO_MODELO_ID: </span>
                    <select name="curso_modelo_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.entorno_aprendizaje.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.entorno_aprendizaje.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/entorno_aprendizaje.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>