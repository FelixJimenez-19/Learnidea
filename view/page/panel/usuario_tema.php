<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/usuario_tema.php
*/
if (isset($viewPage)) {
?>
  <div class="header">
    <span>USUARIO_TEMA</span>
    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
    <button onclick="entity.fun.showModalForm(null)">+</button>
  </div>

  <div class="idea_content_table">
    <table class="idea_table">
      <thead>
        <tr>
          <td colspan="14">CLEAR</td>
          <td colspan="13">DARK</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>NOMBRE</td>
          <td>PRIMARY</td>
          <td>PRIMARY HOVER</td>
          <td>SECONDARY</td>
          <td>SECONDARY HOVER</td>
          <td>TERTIARY</td>
          <td>TERTIARY HOVER</td>
          <td>QUATERNARY</td>
          <td>QUATERNARY HOVER</td>
          <td>SUCCESS</td>
          <td>INFO</td>
          <td>WARNING</td>
          <td>ERROR</td>
          <td>PRIMARY</td>
          <td>PRIMARY HOVER</td>
          <td>SECONDARY</td>
          <td>SECONDARY HOVER</td>
          <td>TERTIARY</td>
          <td>TERTIARY HOVER</td>
          <td>QUATERNARY</td>
          <td>QUATERNARY HOVER</td>
          <td>SUCCESS</td>
          <td>INFO</td>
          <td>WARNING</td>
          <td>ERROR</td>
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
        <input type="hidden" name="usuario_tema_id">

        <div class="row">
          <span>NOMBRE: </span>
          <input type="text" name="usuario_tema_nombre" placeholder="NOMBRE" class="span_pick">
          <button onclick="entity.fun.showModalMessage('PRIMARY: header, form, scroll<br>SECONDARY: panel, table<br>TERTIARY: font, HOVER: font table tbody<br>QUATERNARY: content')" class="button_pick">
            <img src="./view/src/icon/help.png">
          </button>
        </div>

        <div class="row">
          <div class="section">CLEAR</div>
        </div>

        <div class="row">
          <span>PRIMARY: </span>
          <input type="color" name="usuario_tema_primary" placeholder="PRIMARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_primary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>PRIMARY HOVER: </span>
          <input type="color" name="usuario_tema_primary_hover" placeholder="PRIMARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_primary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SECONDARY: </span>
          <input type="color" name="usuario_tema_secondary" placeholder="SECONDARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_secondary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SECONDARY HOVER: </span>
          <input type="color" name="usuario_tema_secondary_hover" placeholder="SECONDARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_secondary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>TERTIARY: </span>
          <input type="color" name="usuario_tema_tertiary" placeholder="TERTIARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_tertiary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>TERTIARY HOVER: </span>
          <input type="color" name="usuario_tema_tertiary_hover" placeholder="TERTIARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_tertiary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>QUATERNARY: </span>
          <input type="color" name="usuario_tema_quaternary" placeholder="QUATERNARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_quaternary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>QUATERNARY HOVER: </span>
          <input type="color" name="usuario_tema_quaternary_hover" placeholder="QUATERNARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_quaternary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SUCCESS: </span>
          <input type="color" name="usuario_tema_success" placeholder="SUCCESS" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_success')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>INFO: </span>
          <input type="color" name="usuario_tema_info" placeholder="INFO" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_info')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>WARNING: </span>
          <input type="color" name="usuario_tema_warning" placeholder="WARNING" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_warning')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>ERROR: </span>
          <input type="color" name="usuario_tema_error" placeholder="ERROR" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_error')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <div class="section">DARK</div>
        </div>

        <div class="row">
          <span>PRIMARY: </span>
          <input type="color" name="usuario_tema_dark_primary" placeholder="PRIMARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_primary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>PRIMARY HOVER: </span>
          <input type="color" name="usuario_tema_dark_primary_hover" placeholder="PRIMARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_primary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SECONDARY: </span>
          <input type="color" name="usuario_tema_dark_secondary" placeholder="SECONDARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_secondary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SECONDARY HOVER: </span>
          <input type="color" name="usuario_tema_dark_secondary_hover" placeholder="SECONDARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_secondary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>TERTIARY: </span>
          <input type="color" name="usuario_tema_dark_tertiary" placeholder="TERTIARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_tertiary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>TERTIARY HOVER: </span>
          <input type="color" name="usuario_tema_dark_tertiary_hover" placeholder="TERTIARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_tertiary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>QUATERNARY: </span>
          <input type="color" name="usuario_tema_dark_quaternary" placeholder="QUATERNARY" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_quaternary')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>QUATERNARY HOVER: </span>
          <input type="color" name="usuario_tema_dark_quaternary_hover" placeholder="QUATERNARY HOVER" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_quaternary_hover')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>SUCCESS: </span>
          <input type="color" name="usuario_tema_dark_success" placeholder="SUCCESS" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_success')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>INFO: </span>
          <input type="color" name="usuario_tema_dark_info" placeholder="INFO" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_info')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>WARNING: </span>
          <input type="color" name="usuario_tema_dark_warning" placeholder="WARNING" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_warning')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

        <div class="row">
          <span>ERROR: </span>
          <input type="color" name="usuario_tema_dark_error" placeholder="ERROR" class="span_pick">
          <button onclick="entity.fun.togglePickColor('usuario_tema_dark_error')" class="button_pick">
            <img src="./view/src/icon/pick.png">
          </button>
        </div>

      </div>
      <div class="buttons">
        <button onclick="entity.usuario_tema.fun.insertOrUpdate()">GUARDAR</button>
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
        <button onclick="entity.fun.pressYesModalConfirm(() => entity.usuario_tema.crud.delete())">SI</button>
        <button onclick="entity.fun.hideModalConfirm()">NO</button>
      </div>
    </div>
  </div>
  <script src="control/script/usuario_tema.js"></script>
<?php
} else {
  header("location: ../../panel.php");
}
?>