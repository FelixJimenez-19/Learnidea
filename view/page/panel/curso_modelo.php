<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/curso_modelo.php
*/
if (isset($viewPage)) {
?>
  <link rel="stylesheet" href="view/css/panel/curso_modelo.css" />
  <div class="header">
    <span>EDUCACION/MODELO</span>
    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
    <button onclick="entity.fun.showModalForm(null)">+</button>
  </div>

  <div class="idea_content_table">
    <table class="idea_table">
      <thead>
        <tr>
          <td>ID</td>
          <td>NOMBRE</td>
          <td>HORA TEORICA</td>
          <td>HORA PRACTICA</td>
          <td>AREA</td>
          <td>ESPECIFICACION</td>
          <td>ALINEACION</td>
          <td>PARTICIPANTE</td>
          <td>MODALIDAD</td>
          <td>DURACION</td>
          <td>USUARIO</td>
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
        <form class="content-form content-form1" id="idea_form">
          <div class="inputs">
            <input type="hidden" name="curso_modelo_id">
            <div class="row">
              <span>NOMBRE: </span>
              <input type="text" name="curso_modelo_nombre" placeholder="NOMBRE">
            </div>
            <div class="row">
              <span>HORA TEORICA: </span>
              <input type="number" name="curso_modelo_hora_teorica" placeholder="HORA TEORICA">
            </div>
            <div class="row">
              <span>HORA PRACTICA: </span>
              <input type="number" name="curso_modelo_hora_practica" placeholder="HORA PRACTICA">
            </div>
            <div class="row">
              <span>AREA: </span>
              <select name="area_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=area" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>ESPECIFICACION: </span>
              <select name="especificacion_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=especificacion" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>ALINEACION: </span>
              <select name="alineacion_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=alineacion" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>PARTICIPANTE: </span>
              <select name="participante_tipo_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=participante_tipo" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>MODALIDAD: </span>
              <select name="modalidad_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=modalidad" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>DURACION: </span>
              <select name="duracion_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=duracion" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
            <div class="row">
              <span>USUARIO: </span>
              <select name="usuario_id" class="inline-3"></select>
              <a target="_blank" href="panel.php?page=usuario" class="inline-3-button">
                <img src="view/src/icon/link.png">
              </a>
            </div>
          </div>
        </form>
        <div class="content-form content-form2">
          <input type="radio" name="radio-option" id="radio-option-1">
          <input type="radio" name="radio-option" id="radio-option-2">
          <input type="radio" name="radio-option" id="radio-option-3">
          <input type="radio" name="radio-option" id="radio-option-4">
          <input type="radio" name="radio-option" id="radio-option-5">
          <input type="radio" name="radio-option" id="radio-option-6">
          <input type="radio" name="radio-option" id="radio-option-7">
          <input type="radio" name="radio-option" id="radio-option-8">
          <input type="radio" name="radio-option" id="radio-option-9">
          <input type="radio" name="radio-option" id="radio-option-10">
          <input type="radio" name="radio-option" id="radio-option-11">
          <div class="options">
            <button class="nav nav-previous" onmousemove="entity.fun.scrollHorizontal(0, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(0, 'form-options-container', 20)">
              <img src="view/src/icon/in.png">
            </button>
            <div class="options-container" id="form-options-container">
              <div class="sub-options">
                <label for="radio-option-1" onclick="entity.fun.loadBrowserIframe('requisito', 'browser-iframe-1')">
                  <span>Requisitos</span>
                </label>
                <label for="radio-option-2" onclick="entity.fun.loadBrowserIframe('objetivo', 'browser-iframe-2')">
                  <span>Objetivos</span>
                </label>
                <label for="radio-option-3" onclick="entity.fun.loadBrowserIframe('contenido_primario', 'browser-iframe-3')">
                  <span>Primario</span>
                </label>
                <label for="radio-option-4" onclick="entity.fun.loadBrowserIframe('contenido_secundario', 'browser-iframe-4')">
                  <span>Secundario</span>
                </label>
                <label for="radio-option-5" onclick="entity.fun.loadBrowserIframe('contenido_transversal', 'browser-iframe-5')">
                  <span>Transversal</span>
                </label>
                <label for="radio-option-6" onclick="entity.fun.loadBrowserIframe('estrategia', 'browser-iframe-6')">
                  <span>Estrategia</span>
                </label>
                <label for="radio-option-7" onclick="entity.fun.loadBrowserIframe('evaluacion_diagnostica', 'browser-iframe-7')">
                  <span>Diagnostica</span>
                </label>
                <label for="radio-option-8" onclick="entity.fun.loadBrowserIframe('evaluacion_formativa', 'browser-iframe-8')">
                  <span>Formativa</span>
                </label>
                <label for="radio-option-9" onclick="entity.fun.loadBrowserIframe('evaluacion_final', 'browser-iframe-9')">
                  <span>Final</span>
                </label>
                <label for="radio-option-10" onclick="entity.fun.loadBrowserIframe('entorno_aprendizaje', 'browser-iframe-10')">
                  <span>Aprendizaje</span>
                </label>
                <label for="radio-option-11" onclick="entity.fun.loadBrowserIframe('bibliografia', 'browser-iframe-11')">
                  <span>Bibliografia</span>
                </label>
              </div>
            </div>
            <button class="nav nav-next" onmousemove="entity.fun.scrollHorizontal(1, 'form-options-container', 2)" onclick="entity.fun.scrollHorizontal(1, 'form-options-container', 20)">
              <img src="view/src/icon/in.png">
            </button>
          </div>

          <div class="iframe-container">
            <div class="sub-iframe-container" id="idea_iframes-container">
              <div class="iframe-msg">
                <span>SELECCIONE UNA DE LAS OPCIONES SUPERIORES</span>
              </div>
              <iframe class="iframe iframe-1" id="browser-iframe-1"></iframe>
              <iframe class="iframe iframe-2" id="browser-iframe-2"></iframe>
              <iframe class="iframe iframe-3" id="browser-iframe-3"></iframe>
              <iframe class="iframe iframe-4" id="browser-iframe-4"></iframe>
              <iframe class="iframe iframe-5" id="browser-iframe-5"></iframe>
              <iframe class="iframe iframe-6" id="browser-iframe-6"></iframe>
              <iframe class="iframe iframe-7" id="browser-iframe-7"></iframe>
              <iframe class="iframe iframe-8" id="browser-iframe-8"></iframe>
              <iframe class="iframe iframe-9" id="browser-iframe-9"></iframe>
              <iframe class="iframe iframe-10" id="browser-iframe-10"></iframe>
              <iframe class="iframe iframe-11" id="browser-iframe-11"></iframe>
            </div>
            <div class="sub-iframe-msg" id="idea_iframes-msg">
              <span>PARA HABLITAR LAS OPCIONES CREE EL MODELO DE CURSO</span>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button onclick="entity.curso_modelo.fun.insertOrUpdate()" id="idea_form-btn-submit">GUARDAR</button>
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
        <button onclick="entity.fun.pressYesModalConfirm(() => entity.curso_modelo.crud.delete())">SI</button>
        <button onclick="entity.fun.hideModalConfirm()">NO</button>
      </div>
    </div>
  </div>
  <script src="control/script/curso_modelo.js"></script>
<?php
} else {
  header("location: ../../../panel.php");
}
?>