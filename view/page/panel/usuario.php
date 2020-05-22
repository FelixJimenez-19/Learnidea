<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/usuario.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <link rel="stylesheet" href="view/css/datatable.css" />
        <div class="header">
            <span>USUARIO</span>
            <div class="search-container">
                <div class="select-container">
                    <select id="header-datatables-show-entries">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
            </div>
            <button onclick="entity.fun.showModalForm(null)">+</button>
        </div>

        <div class="idea_content_table">
            <table class="idea_table" id="datatable">
                <thead>
                    <!-- <tr>
                        <th colspan="20">INFORMACION PERSONAL</th>
                        <th colspan="5">INFORMACION LABORAL</th>
                    </tr> -->
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>FOTO</th>
                        <th>FIRMA</th>
                        <th>CURRICULUM</th>
                        <th>CALIFICACION</th>
                        <th>CEDULA</th>
                        <th>EDAD</th>
                        <th>INDICE</th>
                        <th>CELULAR</th>
                        <th>TELEFONO</th>
                        <th>EMAIL</th>
                        <!-- <th>DIRECCION</th> -->
                        <!-- <th>DESCRIPCION</th> -->
                        <th>SEXO</th>
                        <th>NIVEL</th>
                        <th>TIPO</th>
                        <th>TEMA</th>
                        <th>MODO</th>
                        <!--EMPRESA EN LA QUE LABORA-->
                        <!-- <th>EMPRESA</th> -->
                        <!--EMPRESA EN LA QUE LABORA-->
                        <!-- <th>ACTIVIDAD</th> -->
                        <!--EMPRESA EN LA QUE LABORA-->
                        <!-- <th>DIRECCION</th> -->
                        <!--EMPRESA EN LA QUE LABORA-->
                        <!-- <th>TELEFONO</th> -->
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody id="idea_table"></tbody>
            </table>
        </div>


        <div class="idea_form" id="idea_modal_form">
            <form id="idea_form">
                <span class="title">FORMULARIO</span>
                <div class="inputs">
                    <input type="hidden" name="usuario_id">
                    <input type="hidden" name="usuario_calificacion">

                    <div class="row"><span class="section">INFORMACION PERSONAL</span></div>

                    <div class="row">
                        <span>FOTO: </span>
                        <input type="file" name="usuario_foto" placeholder="PNG" accept="image/*">
                    </div>

                    <div class="row">
                        <span>FIRMA: </span>
                        <input type="file" name="usuario_firma" placeholder="PNG" accept="image/*">
                    </div>

                    <div class="row">
                        <span>CURRICULUM: </span>
                        <input type="file" name="usuario_curriculum" placeholder="PDF" accept="application/pdf">
                    </div>

                    <div class="row">
                        <span>NOMBRE: </span>
                        <input type="text" name="usuario_nombre" placeholder="NOMBRE">
                    </div>

                    <div class="row">
                        <span>CEDULA: </span>
                        <input type="text" name="usuario_cedula" placeholder="CEDULA">
                    </div>

                    <div class="row">
                        <span>EDAD: </span>
                        <input type="number" name="usuario_edad" placeholder="EDAD">
                    </div>

                    <div class="row">
                        <span>INDICE: </span>
                        <input type="text" name="usuario_indice" placeholder="INDICE">
                    </div>

                    <div class="row">
                        <span>CELULAR: </span>
                        <input type="text" name="usuario_celular" placeholder="CELULAR">
                    </div>

                    <div class="row">
                        <span>TELEFONO: </span>
                        <input type="text" name="usuario_telefono" placeholder="TELEFONO">
                    </div>

                    <div class="row">
                        <span>EMAIL: </span>
                        <input type="email" name="usuario_email" placeholder="EMAIL">
                    </div>

                    <div class="row">
                        <span>CONTRASEÑA: </span>
                        <input type="password" name="usuario_pass" placeholder="CONTRASEÑA">
                    </div>

                    <div class="row">
                        <span>DIRECCION: </span>
                        <input type="text" name="usuario_direccion" placeholder="DIRECCION">
                    </div>

                    <div class="row">
                        <span>DESCRIPCION: </span>
                        <input type="text" name="usuario_descripcion" placeholder="DESCRIPCION">
                    </div>

                    <div class="row">
                        <span>SEXO: </span>
                        <div class="input-radio-container">
                            <input type="radio" name="usuario_sexo" class="input-radio-si-no" value="masculino" placeholder="MASCULINO">
                            <input type="radio" name="usuario_sexo" class="input-radio-si-no" value="femenino" placeholder="FEMENINO">
                        </div>
                    </div>

                    <div class="row">
                        <span>NIVEL: </span>
                        <div class="input-radio-container">
                            <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="primario" placeholder="PRIMARIO">
                            <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="secundario" placeholder="SECUNDARIO">
                            <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="superior" placeholder="SUPERIOR">
                        </div>
                    </div>

                    <div class="row">
                        <span>TIPO: </span>
                        <select name="usuario_tipo_id"></select>
                    </div>

                    <div class="row">
                        <span>TEMA: </span>
                        <select name="usuario_tema_id"></select>
                    </div>

                    <div class="row">
                        <span>MODO: </span>
                        <div class="input-radio-container">
                            <input type="radio" name="usuario_tema_mode_dark" class="input-radio-si-no" value="0" placeholder="CLEAR">
                            <input type="radio" name="usuario_tema_mode_dark" class="input-radio-si-no" value="1" placeholder="DARK">
                        </div>
                    </div>

                    <div class="row"><span class="section">INFORMACION LABORAL</span></div>

                    <div class="row">
                        <span>EMPRESA: </span>
                        <input type="text" name="usuario_empresa_nombre" placeholder="EMPRESA">
                    </div>

                    <div class="row">
                        <span>ACTIVIDAD: </span>
                        <input type="text" name="usuario_empresa_actividad" placeholder="ACTIVIDAD">
                    </div>

                    <div class="row">
                        <span>DIRECCION: </span>
                        <input type="text" name="usuario_empresa_direccion" placeholder="DIRECCION">
                    </div>

                    <div class="row">
                        <span>TELEFONO: </span>
                        <input type="text" name="usuario_empresa_telefono" placeholder="TELEFONO">
                    </div>

                </div>
                <div class="buttons">
                    <button onclick="entity.usuario.fun.insertOrUpdate()">GUARDAR</button>
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
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.usuario.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>
        <script src="control/lib/data_tables/datatables.js"></script>
        <script src="control/lib/data_tables/datatables_config.js"></script>
        <script src="control/script/usuario.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=usuario");
    }
} else {
    header("location: login");
}
?>