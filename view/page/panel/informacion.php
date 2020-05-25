<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/informacion.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <link rel="stylesheet" href="view/css/bootstrap.css">
        <link rel="stylesheet" href="control/lib/summernote/summernote.min.css">
        <link rel="stylesheet" href="view/css/panel/informacion.css" />
        <div class="header">
            <span>INFORMACION</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search" style="display:none;">
            <button onclick="entity.fun.showModalForm(null)" style="display:none;">+</button>
            <button onclick="" id="idea_header-btn-edit"><img src="view/src/icon/edit.png"></button>
        </div>
        <div class="container" id="idea-view-container"></div>


        <div class="idea_form" id="idea_modal_form">
            <form id="idea_form">
                <span class="title">FORMULARIO</span>
                <div class="inputs">
                    <input type="hidden" name="informacion_id">

                    <div class="row">
                        <div class="section">PAGINA</div>
                    </div>

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="informacion_pagina_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row-editor">
                        <span class="row-editor-title">MISIÓN</span>
                        <textarea class="row-editor-textarea" name="informacion_pagina_mision" id="editor-informacion_pagina_mision"></textarea>
                    </div>
                    
                    <div class="row-editor">
                        <span class="row-editor-title">VISIÓN</span>
                        <textarea class="row-editor-textarea" name="informacion_pagina_vision" id="editor-informacion_pagina_vision"></textarea>
                    </div>
                    
                    <div class="row-editor">
                        <span class="row-editor-title">COPYRIGHT</span>
                        <textarea class="row-editor-textarea" name="informacion_pagina_copyright" id="editor-informacion_pagina_copyright"></textarea>
                    </div>

                    <div class="row">
                        <span>API KEY: </span>
                        <input type="text" name="informacion_api_key" placeholder="API KEY">
                    </div>

                    <div class="row">
                        <span>LOGO: </span>
                        <input type="file" name="informacion_pagina_logo" placeholder="LOGO">
                    </div>

                    <div class="row">
                        <span>TEMA: </span>
                        <select name="usuario_tema_id"></select>
                    </div>

                    <div class="row">
                        <div class="section">EMPRESA</div>
                    </div>

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="informacion_empresa_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row">
                        <span>SIGLAS: </span>
                        <input type="text" name="informacion_empresa_siglas" placeholder="SIGLAS">
                    </div>

                    <div class="row">
                        <span>CIUDAD: </span>
                        <input type="text" name="informacion_empresa_ciudad" placeholder="CIUDAD">
                    </div>

                    <div class="row-editor">
                        <span class="row-editor-title">MISIÓN</span>
                        <textarea class="row-editor-textarea" name="informacion_empresa_mision" id="editor-informacion_empresa_mision"></textarea>
                    </div>

                    <div class="row-editor">
                        <span class="row-editor-title">VISIÓN</span>
                        <textarea class="row-editor-textarea" name="informacion_empresa_vision" id="editor-informacion_empresa_vision"></textarea>
                    </div>

                    <div class="row">
                        <span>UBICACION: </span>
                        <input type="text" name="informacion_ubicacion" placeholder="IFRAME">
                    </div>

                    <div class="row">
                        <span>LOGO: </span>
                        <input type="file" name="informacion_empresa_logo" placeholder="LOGO">
                    </div>

                    <div class="row">
                        <div class="section">GERENTE</div>
                    </div>

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="informacion_gerente_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row">
                        <span>CELULAR: </span>
                        <input type="text" name="informacion_gerente_celular" placeholder="CELULAR">
                    </div>

                    <div class="row">
                        <span>NIVEL NOMBRE: </span>
                        <input type="text" name="informacion_gerente_nivel_nombre" placeholder="NIVEL NOMBRE">
                    </div>

                    <div class="row">
                        <span>NIVEL SIGLAS: </span>
                        <input type="text" name="informacion_gerente_nivel_siglas" placeholder="NIVEL SIGLAS">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.informacion.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.informacion.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/lib/jquery.js"></script>
        <script src="control/lib/bootstrap.js"></script>
        <script src="control/lib/summernote/summernote.min.js"></script>
        <script src="control/script/informacion.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=informacion");
    }
} else {
    header("location: login");
}
?>