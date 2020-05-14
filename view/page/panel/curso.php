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
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>INICIO</td>
                    <td>FIN</td>
                    <td>CUPOS</td>
                    <td>WHATSAPP</td>
                    <td>CALIFICACION</td>
                    <td>PRECIO LIVE</td>
                    <td>PRECIO RECORD</td>
                    <td>PROXIMO</td>
                    <td>VISIBLE</td>
                    <td>CERTIFICADO LIVE</td>
                    <td>CERTIFICADO RECORD</td>
                    <td>CERTIFICACION LIVE</td>
                    <td>MODELO</td>
                    <td>FOTO</td>
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
                <input type="hidden" name="curso_calificacion">

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="curso_nombre" placeholder="NOMBRE">
                </div>

                <div class="row">
                    <span>INICIO: </span>
                    <input type="date" name="curso_fecha_inicio" placeholder="INICIO">
                </div>

                <div class="row">
                    <span>FIN: </span>
                    <input type="date" name="curso_fecha_fin" placeholder="FIN">
                </div>

                <div class="row">
                    <span>CUPOS: </span>
                    <input type="number" name="curso_cupos" placeholder="CUPOS">
                </div>

                <div class="row">
                    <span>GRUPO WHATSAPP: </span>
                    <input type="text" name="curso_whatsapp" placeholder="WHATSAPP LINK">
                </div>

                <div class="row">
                    <span>PRECIO LIVE: </span>
                    <input type="number" name="curso_precio_live" placeholder="PRECIO LIVE">
                </div>

                <div class="row">
                    <span>PRECIO RECORD: </span>
                    <input type="number" name="curso_precio_record" placeholder="PRECIO RECORD">
                </div>

                <div class="row">
                    <span>ANUNCIAR: </span>
                    <div class="input-radio-container">
                        <input type="radio" name="curso_proximo" class="input-radio-si-no" value="1" placeholder="SI">
                        <input type="radio" name="curso_proximo" class="input-radio-si-no" value="0" placeholder="NO">
                    </div>
                </div>

                <div class="row">
                    <span>VISIBLE: </span>
                    <div class="input-radio-container">
                        <input type="radio" name="curso_visible" class="input-radio-si-no" value="1" placeholder="SI">
                        <input type="radio" name="curso_visible" class="input-radio-si-no" value="0" placeholder="NO">
                    </div>
                </div>

                <div class="row">
                    <span>CERTIFICADO LIVE: </span>
                    <div class="input-radio-container">
                        <input type="radio" name="curso_certificado_live" class="input-radio-si-no" value="1" placeholder="SI">
                        <input type="radio" name="curso_certificado_live" class="input-radio-si-no" value="0" placeholder="NO">
                    </div>
                </div>

                <div class="row">
                    <span>CERTIFICADO RECORD: </span>
                    <div class="input-radio-container">
                        <input type="radio" name="curso_certificado_record" class="input-radio-si-no" value="1" placeholder="SI">
                        <input type="radio" name="curso_certificado_record" class="input-radio-si-no" value="0" placeholder="NO">
                    </div>
                </div>

                <div class="row">
                    <span>CERTIFICACION LIVE: </span>
                    <div class="input-radio-container">
                        <input type="radio" name="curso_certificacion_live" class="input-radio-si-no" value="1" placeholder="SI">
                        <input type="radio" name="curso_certificacion_live" class="input-radio-si-no" value="0" placeholder="NO">
                    </div>
                </div>

                <div class="row">
                    <span>MODELO: </span>
                    <select name="curso_modelo_id"></select>
                </div>

                <div class="row">
                    <span>USUARIO: </span>
                    <select name="usuario_id"></select>
                </div>

                <div class="row">
                    <span>FOTO: </span>
                    <input type="file" name="curso_foto" placeholder="FOTO">
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