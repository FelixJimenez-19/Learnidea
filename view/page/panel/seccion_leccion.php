<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/seccion_leccion.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <link rel="stylesheet" href="view/css/panel/seccion_leccion.css" />
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



        <div class="idea_form idea_form-curso_modelo" id="idea_modal_form">
            <div class="content-forms">
                <!-- <span class="title">FORMULARIO</span> -->
                <div class="sub-content-forms">
                    <div class="content-form content-form2">
                        <input type="radio" name="radio-option" id="radio-option-1">
                        <input type="radio" name="radio-option" id="radio-option-2">
                        <div class="options">
                            <!-- <button class="nav nav-previous" onmousemove="entity.fun.scrollHorizontal(0, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(0, 'form-options-container', 20)">
                            <img src="view/src/icon/in.png">
                        </button> -->
                            <div class="options-container" id="form-options-container">
                                <div class="sub-options">
                                    <label for="radio-option-1" onclick="entity.fun.loadForm()">
                                        <span>Formulario</span>
                                    </label>
                                    <label for="radio-option-2" onclick="entity.fun.loadBrowserIframe('seccion_pregunta', 'browser-iframe-2')">
                                        <span>Preguntas</span>
                                    </label>
                                </div>
                            </div>
                            <!-- <button class="nav nav-next" onmousemove="entity.fun.scrollHorizontal(1, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(1, 'form-options-container', 20)">
                            <img src="view/src/icon/in.png">
                        </button> -->
                        </div>

                        <div class="iframe-container">
                            <div class="sub-iframe-container" id="idea_iframes-container">
                                <form class="form" id="idea_form">
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
                                </form>
                                <iframe class="iframe iframe-2" id="browser-iframe-2"></iframe>
                            </div>
                            <div class="sub-iframe-msg" id="idea_iframes-msg">
                                <span>PARA HABLITAR LAS OPCIONES CREE EL MODELO DE CURSO</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <button onclick="entity.seccion_leccion.fun.insertOrUpdate()" id="idea_form-btn-submit">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.seccion_leccion.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/seccion_leccion.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=seccion_leccion");
    }
} else {
    header("location: login");
}
?>