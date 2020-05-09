<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/usuario_tipo.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>USUARIO/TIPO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>SUPER</td>
                    <td>ADMIN</td>
                    <td>COACH</td>
                    <td>USER</td>
                    <td>DESCRIPCION</td>
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
                <input type="hidden" name="usuario_tipo_id">

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="usuario_tipo_nombre" placeholder="NOMBRE">
                </div>

                <div class="row">
                    <span>SUPER: </span>
                    <select name="usuario_tipo_super">
                        <option value="">SUPER</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>
                </div>

                <div class="row">
                    <span>ADMIN: </span>
                    <select name="usuario_tipo_admin">
                        <option value="">ADMIN</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>
                </div>

                <div class="row">
                    <span>COACH: </span>
                    <select name="usuario_tipo_coach">
                        <option value="">COACH</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>
                </div>

                <div class="row">
                    <span>USER: </span>
                    <select name="usuario_tipo_user">
                        <option value="">USER</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>
                </div>

                <div class="row">
                    <span>DESCRIPCION: </span>
                    <input type="text" name="usuario_tipo_descripcion" placeholder="DESCRIPCION">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.usuario_tipo.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.usuario_tipo.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/usuario_tipo.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>