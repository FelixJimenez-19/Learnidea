<?php
if (isset($viewPage)) {
    $global_usuario_id = (isset($_GET['usuario_id'])) ? $_GET['usuario_id'] : $_SESSION['usuario_id'];
?>
    <script>
        let global_usuario_id = <?= $global_usuario_id ?>;
    </script>


    <link rel="stylesheet" href="view/css/panel/user_foro.css" />
    <link rel="stylesheet" href="view/css/foro/publicacion.css" />
    <link rel="stylesheet" href="view/css/panel/user_profile.css" />
    <div class="profile__container">
        <div class="portada__container">
            <div class="usuario_portada" id="profile-usuario-portada"></div>
            <div class="floats">
                <div class="usuario_foto" id="profile-usuario-foto"></div>
                <div class="text">
                    <span class="usuario_nombre" id="profile-usuario-nombre"></span>
                    <span class="usuario_tipo" id="profile-usuario-tipo"></span>
                </div>
            </div>
        </div>

        <input type="radio" name="profile-nav-radio" id="profile-nav-radio-col-1">
        <input type="radio" name="profile-nav-radio" id="profile-nav-radio-col-2" checked>
        <nav>
            <label for="profile-nav-radio-col-1"><img src="view/src/icon/account.png"></label>
            <label for="profile-nav-radio-col-2"><img src="view/src/icon/home.png"></label>
        </nav>

        <div class="bottom__container">

            <div class="col col-1">
                <div class="info">
                    <div class="sub-item" id="profile-info-container"></div>
                </div>
            </div>

            <div class="col col-2">

                <div class="foro-container">
                    <div class="foro-sub-container">
                        <div class="foro-col foro-col-2">
                            <div class="content" id="foro-col-2__content">
                                <div style="display: <?= ($global_usuario_id == $_SESSION['usuario_id']) ? 'block' : 'none' ?>;">
                                    <?php include "view/page/foro/publicacion_create.php" ?>
                                </div>
                                <div class="container__publicaciones" id="col2-publicacion_container"></div>
                            </div>
                            <br>
                        </div>
                    </div>
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

    <script src="control/script/profile/usuario.js"></script>
    <script src="control/script/profile/foro.js"></script>
    <script src="control/script/foro/comentario.js"></script>
    <script src="control/script/foro/publicacion.js"></script>


<?php
} else {
    header("location: ../../../panel");
}
?>