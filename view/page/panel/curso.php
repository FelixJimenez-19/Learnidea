<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>CURSO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>CURSO_ID</td>
                    <td>CURSO_NOMBRE</td>
                    <td>CURSO_FECHA_INICIO</td>
                    <td>CURSO_FECHA_FIN</td>
                    <td>CURSO_CUPOS</td>
                    <td>CURSO_WHATSAPP</td>
                    <td>CURSO_CALIFICACION</td>
                    <td>CURSO_PROXIMO</td>
                    <td>CURSO_VISIBLE</td>
                    <td>CURSO_PRECIO_LIVE</td>
                    <td>CURSO_PRECIO_RECORD</td>
                    <td>CURSO_CERTIFICADO_LIVE</td>
                    <td>CURSO_CERTIFICADO_RECORD</td>
                    <td>CURSO_CERTIFICACION_LIVE</td>
                    <td>CURSO_MODELO_ID</td>
                    <td>CURSO_FOTO</td>

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
                <input type="hidden" name="curso_id">

                <div class="row">
                    <span>CURSO_NOMBRE: </span>
                    <input type="text" name="curso_nombre" placeholder="CURSO_NOMBRE">
                </div>

                <div class="row">
                    <span>CURSO_FECHA_INICIO: </span>
                    <input type="text" name="curso_fecha_inicio" placeholder="CURSO_FECHA_INICIO">
                </div>

                <div class="row">
                    <span>CURSO_FECHA_FIN: </span>
                    <input type="text" name="curso_fecha_fin" placeholder="CURSO_FECHA_FIN">
                </div>

                <div class="row">
                    <span>CURSO_CUPOS: </span>
                    <input type="number" name="curso_cupos" placeholder="CURSO_CUPOS">
                </div>

                <div class="row">
                    <span>CURSO_WHATSAPP: </span>
                    <input type="text" name="curso_whatsapp" placeholder="CURSO_WHATSAPP">
                </div>

                <div class="row">
                    <span>CURSO_CALIFICACION: </span>
                    <input type="number" name="curso_calificacion" placeholder="CURSO_CALIFICACION">
                </div>

                <div class="row">
                    <span>CURSO_PROXIMO: </span>
                    <input type="number" name="curso_proximo" placeholder="CURSO_PROXIMO">
                </div>

                <div class="row">
                    <span>CURSO_VISIBLE: </span>
                    <input type="number" name="curso_visible" placeholder="CURSO_VISIBLE">
                </div>

                <div class="row">
                    <span>CURSO_PRECIO_LIVE: </span>
                    <input type="number" name="curso_precio_live" placeholder="CURSO_PRECIO_LIVE">
                </div>

                <div class="row">
                    <span>CURSO_PRECIO_RECORD: </span>
                    <input type="number" name="curso_precio_record" placeholder="CURSO_PRECIO_RECORD">
                </div>

                <div class="row">
                    <span>CURSO_CERTIFICADO_LIVE: </span>
                    <input type="number" name="curso_certificado_live" placeholder="CURSO_CERTIFICADO_LIVE">
                </div>

                <div class="row">
                    <span>CURSO_CERTIFICADO_RECORD: </span>
                    <input type="number" name="curso_certificado_record" placeholder="CURSO_CERTIFICADO_RECORD">
                </div>

                <div class="row">
                    <span>CURSO_CERTIFICACION_LIVE: </span>
                    <input type="number" name="curso_certificacion_live" placeholder="CURSO_CERTIFICACION_LIVE">
                </div>

                <div class="row">
                    <span>CURSO_MODELO_ID: </span>
                    <select name="curso_modelo_id"></select>
                </div>

                <div class="row">
                    <span>CURSO_FOTO: </span>
                    <input type="file" name="curso_foto" placeholder="CURSO_FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.curso.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/curso.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>