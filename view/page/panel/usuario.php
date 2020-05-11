<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/usuario.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>USUARIO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td colspan="20">INFORMACION PERSONAL</td>
                    <td colspan="5">INFORMACION LABORAL</td>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>FOTO</td>
                    <td>FIRMA</td>
                    <td>CURRICULUM</td>
                    <td>CALIFICACION</td>
                    <td>CEDULA</td>
                    <td>EDAD</td>
                    <td>INDICE</td>
                    <td>CELULAR</td>
                    <td>TELEFONO</td>
                    <td>EMAIL</td>
                    <td>DIRECCION</td>
                    <td>DESCRIPCION</td>
                    <td>SEXO</td>
                    <td>NIVEL</td>
                    <td>TIPO</td>
                    <td>TEMA</td>
                    <td>MODO</td>
                    <!--EMPRESA EN LA QUE LABORA-->
                    <td>EMPRESA</td>
                    <!--EMPRESA EN LA QUE LABORA-->
                    <td>ACTIVIDAD</td>
                    <!--EMPRESA EN LA QUE LABORA-->
                    <td>DIRECCION</td>
                    <!--EMPRESA EN LA QUE LABORA-->
                    <td>TELEFONO</td>
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
                    <select name="usuario_sexo">
                        <option value="">SEXO</option>
                        <option value="masculino">MASCULINO</option>
                        <option value="femenino">FEMENINO</option>
                    </select>
                </div>

                <div class="row">
                    <span>NIVEL: </span>
                    <select name="usuario_nivel">
                        <option value="">USUARIO_NIVEL</option>
                        <option value="primario">PRIMARIO</option>
                        <option value="secundario">SECUNDARIO</option>
                        <option value="superior">SUPERIOR</option>
                    </select>
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
                    <select name="usuario_tema_mode_dark">
                        <option value="">MODO</option>
                        <option value="0">CLEAR</option>
                        <option value="1">DARK</option>
                    </select>
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
    <script src="control/script/usuario.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>