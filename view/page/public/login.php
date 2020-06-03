<?php
if (isset($viewPage)) {
    $curso_id = isset($_GET['curso_id']) ? $_GET['curso_id'] : "";
    $query_url = isset($_GET['curso_id']) ? "?curso_id=" . $_GET['curso_id'] : "";
?>
    <!-- SCRIPTS -->
    <script>
        let curso_id = "<?php echo $curso_id ?>";
    </script>
    <!--  STYLES-->
    <link rel="stylesheet" href="view/css/public/secciones.css">
    <link rel="stylesheet" href="view/css/public/forms.css">
    <link rel="stylesheet" href="view/css/public/login.css">

    <!--  CONTENEDOR SECCIONES  -->
    <div class="sections">

        <!--  CONTENEDOR SECCIONES > SECCION  -->
        <div class="section">
            <div class="title">Login</div>
            <div class="container" id="container-form">
                <input name="radios-pages" type="radio" id="radio-page-1" checked>
                <div class="nav">
                    <!-- <label for="radio-page-noNav-1">1</label> -->
                </div>
                <div class="tittle">
                    <img src="view/src/files/informacion_pagina_logo/1.png">
                    <span class="create">Iniciar sesion</span>
                    <a class="recuperar" href="recuperacion<?= $query_url ?>">Recuperación</a>
                    <a class="login" href="registro<?= $query_url ?>">Registrarse</a>
                </div>
                <form method="post" id="form-login">

                    <div class="page">
                        <div class="content">
                            <br>
                            <br>
                            <br>
                            <div class="row">
                                <input type="text" name="usuario_email" placeholder="Escriba su email">
                                <span>Correo electrónico</span>
                                <div class="msg"></div>
                            </div>

                            <div class="row">
                                <input type="password" name="usuario_pass" Placeholder="Escriba su contraseña">
                                <span>Contraseña</span>
                                <div class="msg"></div>
                            </div>

                        </div>
                        <div class="page-nav">
                            <input type="submit" value="Iniciar sesion">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- SCRIPT - START -->
    <!-- <script src="control/function/fecha.js"></script> -->
    <script src="control/script/public/login.js"></script>
    <!-- SCRIPT - END -->

<?php
} else {
    header("location: ../../../");
}
?>