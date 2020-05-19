<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_leccion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>LECCION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>DESCRIPCION</td>
                    <td>PUNTAJE</td>
                    <td>INTENTOS</td>
                    <td>TIEMPO</td>
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
                <input type="hidden" name="seccion_leccion_id">
                <input type="hidden" name="curso_seccion_id" value="<?php echo $curso_seccion_id ?>">

                <div class="row">
                    <span>DESCRIPCION: </span>
                    <input type="text" name="seccion_leccion_descripcion" placeholder="DESCRIPCION">
                </div>

                <div class="row">
                    <span>PUNTAJE: </span>
                    <input type="number" name="seccion_leccion_puntaje" placeholder="PUNTAJE">
                </div>

                <div class="row">
                    <span>INTENTOS: </span>
                    <input type="number" name="seccion_leccion_intento" placeholder="INTENTOS">
                </div>

                <div class="row">
                    <span>TIEMPO: </span>
                    <input type="time" name="seccion_leccion_tiempo" placeholder="TIEMPO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.seccion_leccion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_leccion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/seccion_leccion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>