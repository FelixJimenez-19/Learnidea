<?php
if (isset($viewPage)) {
?>
    <link rel="stylesheet" href="view/css/panel/user_foro.css" />
    <link rel="stylesheet" href="view/css/user_foro/inscripcion.css" />
    <link rel="stylesheet" href="view/css/user_foro/publicacion.css" />
    <link rel="stylesheet" href="view/css/user_foro/curso.css" />
    <link rel="stylesheet" href="view/css/user_foro/calendario.css" />


    <div class="foro-container">
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-1">
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-2" checked>
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-3">
        <nav class="foro-container-nav">
            <label for="radio-foro-container-page-1">
                <img src="view/src/icon/graduation_cap.png">
            </label>
            <label for="radio-foro-container-page-2">
                <img src="view/src/icon/home2.png">
            </label>
            <label for="radio-foro-container-page-3">
                <img src="view/src/icon/calendar.png">
            </label>
        </nav>
        <div class="foro-sub-container">

            <div class="foro-col foro-col-1" id="foro-col-1">
                <!-- Practicamente todo el contenido de esta columna carga con JavaScript -->
                <div class="content" id="foro-col-1__content"></div>
            </div>

            <div class="foro-col foro-col-2" id="foro-col-2">
                <div class="content" id="foro-col-2__content">
                    <span class="section__tittle">FORO</span>
                    <?php include "view/page/user_foro/publicacion_create.php" ?>
                    <?php include "view/page/user_foro/curso.php" ?>
                    <div class="container__publicaciones" id="col2-publicacion_container"></div>
                </div>
                <br>
            </div>

            <div class="foro-col foro-col-3" id="foro-col-3">
                <div class="content" id="foro-col-3__content">
                    <span class="section__tittle">CALENDARIO</span>
                    <?php include "view/page/user_foro/calendario.php" ?>
                    <br>
                </div>
            </div>
        </div>
    </div>


    <div class="idea_form" id="idea_modal_form"></div>


    <div class="idea_message" id="idea_modal_message">
        <div class="message">
            <span id="idea_message"></span>
            <button onclick="Foro.fun.hideModalMessage()">ACEPTAR</button>
        </div>
    </div>

    <div class="idea_confirm" id="idea_modal_confirm">
        <div class="confirm">
            <span id="idea_confirm"></span>
            <div class="buttons">
                <button onclick="Foro.fun.pressYesModalConfirm(() => Foro.fun.actionPressYesModalConfirm())">SI</button>
                <button onclick="Foro.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>




    <script src="control/lib/jquery.js"></script>
    <script src="control/script/user_foro/foro.js"></script>
    <script src="control/script/user_foro/inscripcion.js"></script>
    <script src="control/script/user_foro/curso.js"></script>
    <script src="control/script/user_foro/comentario.js"></script>
    <script src="control/script/user_foro/publicacion.js"></script>
<?php
} else {
    header("location: ../../../panel?page=user_foro");
}
?>