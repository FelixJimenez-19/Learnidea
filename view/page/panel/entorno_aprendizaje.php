<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/entorno_aprendizaje.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {

?>
        <div class="header">
            <span>ENTORNO APRENDIZAJE</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>INSTALACIONES</td>
                        <td>TEORICA</td>
                        <td>PRACTICA</td>
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
                    <input type="hidden" name="curso_modelo_id" value="<?php echo $curso_modelo_id ?>">

                    <div class="row">
                        <span>INSTALACIONES: </span>
                        <input type="text" name="entorno_aprendizaje_instalaciones" placeholder="INSTALACIONES">
                    </div>

                    <div class="row">
                        <span>TEORICA: </span>
                        <input type="text" name="entorno_aprendizaje_teorica" placeholder="TEORICA">
                    </div>

                    <div class="row">
                        <span>PRACTICA: </span>
                        <input type="text" name="entorno_aprendizaje_practica" placeholder="PRACTICA">
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
        header("location: ../../../panel?page=entorno_aprendizaje");
    }
} else {
    header("location: login");
}
?>