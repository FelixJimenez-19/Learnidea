<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_modelo.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>EDUCACION/MODELO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>HORA TEORICA</td>
                    <td>HORA PRACTICA</td>
                    <td>AREA</td>
                    <td>ESPECIFICACION</td>
                    <td>ALINEACION</td>
                    <td>PARTICIPANTE</td>
                    <td>MODALIDAD</td>
                    <td>DURACION</td>
                    <td>USUARIO</td>
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
                <input type="hidden" name="curso_modelo_id">

                <div class="row">
                    <div class="section">REQUERIDA</div>
                </div>

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="curso_modelo_nombre" placeholder="NOMBRE">
                </div>

                <div class="row">
                    <span>HORA TEORICA: </span>
                    <input type="number" name="curso_modelo_hora_teorica" placeholder="HORA TEORICA">
                </div>

                <div class="row">
                    <span>HORA PRACTICA: </span>
                    <input type="number" name="curso_modelo_hora_practica" placeholder="HORA PRACTICA">
                </div>

                <div class="row">
                    <span>AREA: </span>
                    <select name="area_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>ESPECIFICACION: </span>
                    <select name="especificacion_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>ALINEACION: </span>
                    <select name="alineacion_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>PARTICIPANTE: </span>
                    <select name="participante_tipo_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>MODALIDAD: </span>
                    <select name="modalidad_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>DURACION: </span>
                    <select name="duracion_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <span>USUARIO: </span>
                    <select name="usuario_id" class="inline-3"></select>
                    <button onclick="" class="inline-3-button"><span>+</span></button>
                </div>

                <div class="row">
                    <div class="section">OPCIONAL</div>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.curso_modelo.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso_modelo.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/curso_modelo.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>