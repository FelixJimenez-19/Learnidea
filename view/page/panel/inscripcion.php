<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/inscripcion.php
*/
if (isset($viewPage)) {
?>
    <div class="header">
        <span>INSCRIPCION</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>INSCRIPCION_ID</td>
                    <td>INSCRIPCION_ESTADO</td>
                    <td>INSCRIPCION_CERTIFICADO_PARTICIPANTE_NOMBRE</td>
                    <td>INSCRIPCION_CERTIFICADO_PARTICIPANTE_CEDULA</td>
                    <td>INSCRIPCION_CERTIFICADO_EMPRESA_NOMBRE</td>
                    <td>INSCRIPCION_CERTIFICADO_EMPRESA_CIUDAD</td>
                    <td>INSCRIPCION_CERTIFICADO_EMPRESA_GERENTE</td>
                    <td>INSCRIPCION_CERTIFICADO_EMPRESA_DOCENTE</td>
                    <td>INSCRIPCION_CERTIFICADO_CURSO_NOMBRE</td>
                    <td>INSCRIPCION_CERTIFICADO_CURSO_FECHA_INICIO</td>
                    <td>INSCRIPCION_CERTIFICADO_CURSO_FECHA_FIN</td>
                    <td>INSCRIPCION_CERTIFICADO_CURSO_HORAS</td>
                    <td>INSCRIPCION_CERTIFICADO_EMISION</td>
                    <td>INSCRIPCION_CERTIFICADO_CODIGO</td>
                    <td>INSCRIPCION_CURSO_CALIFICACION</td>
                    <td>INSCRIPCION_CURSO_OPINION</td>
                    <td>INSCRIPCION_PAGO_LIVE</td>
                    <td>INSCRIPCION_PAGO_RECORD</td>
                    <td>USUARIO_ID</td>
                    <td>CURSO_ID</td>
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
                <input type="hidden" name="inscripcion_id">

                <div class="row">
                    <span>INSCRIPCION_ESTADO: </span>
                    <input type="text" name="inscripcion_estado" placeholder="INSCRIPCION_ESTADO">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_PARTICIPANTE_NOMBRE: </span>
                    <input type="text" name="inscripcion_certificado_participante_nombre" placeholder="INSCRIPCION_CERTIFICADO_PARTICIPANTE_NOMBRE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_PARTICIPANTE_CEDULA: </span>
                    <input type="text" name="inscripcion_certificado_participante_cedula" placeholder="INSCRIPCION_CERTIFICADO_PARTICIPANTE_CEDULA">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_EMPRESA_NOMBRE: </span>
                    <input type="text" name="inscripcion_certificado_empresa_nombre" placeholder="INSCRIPCION_CERTIFICADO_EMPRESA_NOMBRE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_EMPRESA_CIUDAD: </span>
                    <input type="text" name="inscripcion_certificado_empresa_ciudad" placeholder="INSCRIPCION_CERTIFICADO_EMPRESA_CIUDAD">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_EMPRESA_GERENTE: </span>
                    <input type="text" name="inscripcion_certificado_empresa_gerente" placeholder="INSCRIPCION_CERTIFICADO_EMPRESA_GERENTE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_EMPRESA_DOCENTE: </span>
                    <input type="text" name="inscripcion_certificado_empresa_docente" placeholder="INSCRIPCION_CERTIFICADO_EMPRESA_DOCENTE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_CURSO_NOMBRE: </span>
                    <input type="text" name="inscripcion_certificado_curso_nombre" placeholder="INSCRIPCION_CERTIFICADO_CURSO_NOMBRE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_CURSO_FECHA_INICIO: </span>
                    <input type="text" name="inscripcion_certificado_curso_fecha_inicio" placeholder="INSCRIPCION_CERTIFICADO_CURSO_FECHA_INICIO">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_CURSO_FECHA_FIN: </span>
                    <input type="text" name="inscripcion_certificado_curso_fecha_fin" placeholder="INSCRIPCION_CERTIFICADO_CURSO_FECHA_FIN">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_CURSO_HORAS: </span>
                    <input type="number" name="inscripcion_certificado_curso_horas" placeholder="INSCRIPCION_CERTIFICADO_CURSO_HORAS">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_EMISION: </span>
                    <input type="text" name="inscripcion_certificado_emision" placeholder="INSCRIPCION_CERTIFICADO_EMISION">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CERTIFICADO_CODIGO: </span>
                    <input type="text" name="inscripcion_certificado_codigo" placeholder="INSCRIPCION_CERTIFICADO_CODIGO">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CURSO_CALIFICACION: </span>
                    <input type="number" name="inscripcion_curso_calificacion" placeholder="INSCRIPCION_CURSO_CALIFICACION">
                </div>

                <div class="row">
                    <span>INSCRIPCION_CURSO_OPINION: </span>
                    <input type="text" name="inscripcion_curso_opinion" placeholder="INSCRIPCION_CURSO_OPINION">
                </div>

                <div class="row">
                    <span>INSCRIPCION_PAGO_LIVE: </span>
                    <input type="number" name="inscripcion_pago_live" placeholder="INSCRIPCION_PAGO_LIVE">
                </div>

                <div class="row">
                    <span>INSCRIPCION_PAGO_RECORD: </span>
                    <input type="number" name="inscripcion_pago_record" placeholder="INSCRIPCION_PAGO_RECORD">
                </div>

                <div class="row">
                    <span>USUARIO_ID: </span>
                    <select name="usuario_id"></select>
                </div>

                <div class="row">
                    <span>CURSO_ID: </span>
                    <select name="curso_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.inscripcion.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.inscripcion.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/inscripcion.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>