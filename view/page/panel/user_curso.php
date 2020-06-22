<?php
if (isset($_SESSION)) {
    if (isset($viewPage)) {
        $master_curso_id = isset($_GET['curso_id']) ? $_GET['curso_id'] : 0;
?>
        <link rel="stylesheet" href="view/css/panel/user_curso.css" />
        <script>
            let master_curso_id = <?= $master_curso_id ?>;
        </script>

        <div id="container__cursos">
            <div class="header">
                <span>CURSOS</span>
                <input type="search" placeholder="Busca un curso específico.." class="idea_search" id="idea_search">
                <button></button>
            </div>
            <div class="curso-container" id="sub-container-cursos"></div>
        </div>


        <div id="container__curso">
            <div class="header" id="container__curso__header"></div>

            <div class="body">
                <div class="body-row usuario__container" id="container__curso__usuario"></div>

                <div class="body-row curso__temario" id="container__curso__temario">
                    <div class="tittle"><span>TEMARIO</span></div>
                    <br>
                    <button class="desplegar" onclick="UserCursoOne.crud.selectSeccionesByCurso_id()">
                        <span>Ver</span>
                        <img src="view/src/icon/in.png">
                    </button>
                </div>

                <div class="body-row curso__descripcion" id="container__curso__extras"></div>

            </div>
        </div>

        <div class="idea_message" id="idea_modal_message">
            <div class="message">
                <span id="idea_message"></span>
                <button onclick="UserCurso.fun.hideModalMessage()">ACEPTAR</button>
            </div>
        </div>

        <div class="idea_confirm" id="idea_modal_confirm">
            <div class="confirm">
                <span id="idea_confirm"></span>
                <div class="buttons">
                    <button onclick="entity.fun.pressYesModalConfirm(() => entity.area.crud.delete())">SI</button>
                    <button onclick="entity.fun.hideModalConfirm()">NO</button>
                </div>
            </div>
        </div>

        <div class="idea_progress" id="idea_modal_progress">
            <div class="window">
                <span>PROCESANDO . . . </span>
                <div class="progress"></div>
            </div>
        </div>

        <div class="idea_payment">
            <div class="window">
                <div class="row tittle"><span>REALIZAR PAGO</span></div>
                <div class="row chooser">
                    <span>Elige un método de pago: </span>
                    <select id="select-payment-method"></select>
                </div>
                <div class="row forms" id="container-forms-payment">
                    <form method="POST" onsubmit="return false" id="payment-form"></form>
                    <form method="POST" onsubmit="return false" id="form-payment-method-debito"></form>
                </div>
            </div>
        </div>

        <script src="https://js.stripe.com/v3/"></script>
        <script src="control/script/stripe/payment.js"></script>

        <script src="control/function/curso.js"></script>
        <script src="control/script/user_curso/curso_inscripcion.js"></script>
        <script src="control/script/user_curso/transaccion_tipo.js"></script>
        <script src="control/script/user_curso/transaccion.js"></script>
        <script src="control/script/user_curso/curso_many.js"></script>
        <script src="control/script/user_curso/curso_one.js"></script>
        <script src="control/script/user_curso/curso.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=user_curso");
    }
} else {
    header("location: login");
}
?>