<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/informacion.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <div class="header">
            <span>INFORMACION</span>
            <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search" style="display:none;">
            <button onclick="entity.fun.showModalForm(null)" style="display:none;">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table">
                <thead>
                    <tr>
                        <td></td>
                        <td colspan="7">EMPRESA</td>
                        <td colspan="6">PAGINA</td>
                        <td colspan="4">GERENTE</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>NOMBRE</td>
                        <td>SIGLAS</td>
                        <td>CIUDAD</td>
                        <td>MISION</td>
                        <td>VISION</td>
                        <td>UBICACION</td>
                        <td>LOGO</td>

                        <td>NOMBRE</td>
                        <td>MISION</td>
                        <td>VISION</td>
                        <td>COPYRIGHT</td>
                        <td>LOGO</td>

                        <td>NOMBRE</td>
                        <td>CELULAR</td>
                        <td>NIVEL NOMBRE</td>
                        <td>NIVEL SIGLAS</td>

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
                    <input type="hidden" name="informacion_id">

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

                    <div class="row">
                        <span>MISION: </span>
                        <input type="text" name="informacion_empresa_mision" placeholder="MISION">
                    </div>

                    <div class="row">
                        <span>VISION: </span>
                        <input type="text" name="informacion_empresa_vision" placeholder="VISION">
                    </div>

                    <div class="row">
                        <span>UBICACION: </span>
                        <input type="text" name="informacion_ubicacion" placeholder="UBICACION">
                    </div>

                    <div class="row">
                        <span>LOGO: </span>
                        <input type="file" name="informacion_empresa_logo" placeholder="LOGO">
                    </div>

                    <div class="row">
                        <div class="section">PAGINA</div>
                    </div>

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="informacion_pagina_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row">
                        <span>MISION: </span>
                        <input type="text" name="informacion_pagina_mision" placeholder="MISION">
                    </div>

                    <div class="row">
                        <span>VISION: </span>
                        <input type="text" name="informacion_pagina_vision" placeholder="VISION">
                    </div>

                    <div class="row">
                        <span>COPYRIGHT: </span>
                        <input type="text" name="informacion_pagina_copyright" placeholder="COPYRIGHT">
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
        <script src="control/script/informacion.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=informacion");
    }
} else {
    header("location: login");
}
?>