<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso.php
*/
if (isset($viewPage)) {
?>
    <link rel="stylesheet" href="view/css/panel/curso.css" />
    <div class="header">
        <span>EDUCACION/CURSO</span>
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




    <div class="idea_form idea_form-curso_modelo" id="idea_modal_form">
        <div class="content-forms">
            <span class="title">FORMULARIO</span>
            <div class="sub-content-forms">
                <input type="checkbox" id="checkbox-content-form1">
                <form class="content-form content-form1" id="idea_form">
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
                            <input type="file" name="curso_foto" placeholder="FOTO" accept="image/*">
                        </div>

                    </div>
                </form>
                <label class="label-content-form1" for="checkbox-content-form1"><img src="view/src/icon/in.png"></label>
                <div class="content-form content-form2">
                    <input type="radio" name="radio-option" id="radio-option-1">
                    <input type="radio" name="radio-option" id="radio-option-2">
                    <input type="radio" name="radio-option" id="radio-option-3">
                    <div class="options">
                        <!-- <button class="nav nav-previous" onmousemove="entity.fun.scrollHorizontal(0, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(0, 'form-options-container', 20)">
                            <img src="view/src/icon/in.png">
                        </button> -->
                        <div class="options-container" id="form-options-container">
                            <div class="sub-options">
                                <label for="radio-option-1" onclick="entity.fun.loadBrowserIframe('curso_evento', 'browser-iframe-1')">
                                    <span>Eventos</span>
                                </label>
                                <label for="radio-option-2" onclick="entity.fun.loadBrowserIframe('curso_deber', 'browser-iframe-2')">
                                    <span>Deberes</span>
                                </label>
                                <label for="radio-option-3" onclick="entity.fun.loadBrowserIframe('curso_seccion', 'browser-iframe-3')">
                                    <span>Secciones</span>
                                </label>
                            </div>
                        </div>
                        <!-- <button class="nav nav-next" onmousemove="entity.fun.scrollHorizontal(1, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(1, 'form-options-container', 20)">
                            <img src="view/src/icon/in.png">
                        </button> -->
                    </div>

                    <div class="iframe-container">
                        <div class="sub-iframe-container" id="idea_iframes-container">
                            <div class="iframe-msg">
                                <span>SELECCIONE UNA DE LAS OPCIONES SUPERIORES</span>
                            </div>
                            <iframe class="iframe iframe-1" id="browser-iframe-1"></iframe>
                            <iframe class="iframe iframe-2" id="browser-iframe-2"></iframe>
                            <iframe class="iframe iframe-3" id="browser-iframe-3"></iframe>
                        </div>
                        <div class="sub-iframe-msg" id="idea_iframes-msg">
                            <span>PARA HABLITAR LAS OPCIONES CREE EL MODELO DE CURSO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button onclick="entity.curso.fun.insertOrUpdate()" id="idea_form-btn-submit">GUARDAR</button>
                <button onclick="entity.fun.hideModalForm()">CANCELAR</button>
            </div>
        </div>

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