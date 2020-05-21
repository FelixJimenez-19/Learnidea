<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_seccion.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
        // $curso_id = $_GET['curso_id']; // ELIMINAR LUEGO
?>
        <!-- <script>
        let curso_id = <?php echo $curso_id ?>; // ELIMINAR LUEGO
    </script> -->
        <link rel="stylesheet" href="view/css/panel/curso_seccion.css" />
        <div class="header">
            <span>SECCION</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NOMBRE</td>
                        <td>DESCRIPCION</td>
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
                        <input type="radio" name="radio-option" id="radio-option-3">
                        <div class="options">
                            <!-- <button class="nav nav-previous" onmousemove="entity.fun.scrollHorizontal(0, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(0, 'form-options-container', 20)">
                            <img src="view/src/icon/in.png">
                        </button> -->
                            <div class="options-container" id="form-options-container">
                                <div class="sub-options">
                                    <label for="radio-option-1" onclick="entity.fun.loadForm()">
                                        <span>Formulario</span>
                                    </label>
                                    <label for="radio-option-2" onclick="entity.fun.loadBrowserIframe('seccion_video', 'browser-iframe-2')">
                                        <span>Videos</span>
                                    </label>
                                    <label for="radio-option-3" onclick="entity.fun.loadBrowserIframe('seccion_leccion', 'browser-iframe-3')">
                                        <span>Lecciones</span>
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
                                        <input type="hidden" name="curso_seccion_id">
                                        <input type="hidden" name="curso_id" value="<?php echo $curso_id ?>">

                                        <div class="row">
                                            <span>NOMBRE: </span>
                                            <input type="text" name="curso_seccion_nombre" placeholder="NOMBRE">
                                        </div>

                                        <div class="row">
                                            <span>DESCRIPCION: </span>
                                            <input type="text" name="curso_seccion_descripcion" placeholder="DESCRIPCION">
                                        </div>

                                    </div>
                                </form>
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
                    <button onclick="entity.curso_seccion.fun.insertOrUpdate()" id="idea_form-btn-submit">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso_seccion.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/script/curso_seccion.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=curso_seccion");
    }
} else {
    header("location: login");
}
?>