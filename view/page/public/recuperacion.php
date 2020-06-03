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
    <link rel="stylesheet" href="view/css/public/recuperacion.css">

    <!--  CONTENEDOR SECCIONES  -->
    <div class="sections">

        <!--  CONTENEDOR SECCIONES > SECCION  -->
        <div class="section">
            <div class="title">Recuperación</div>
            <div class="container" id="container-form">
                <input name="radios-pages" type="radio" id="radio-page-1" checked>
                <input name="radios-pages" type="radio" id="radio-page-2">
                <input name="radios-pages" type="radio" id="radio-page-3">
                <div class="nav">
                    <label for="radio-page-noNav-1">1</label>
                    <label for="radio-page-noNav-2">2</label>
                    <label for="radio-page-noNav-3">3</label>
                </div>
                <div class="tittle">
                    <span class="create">Recuperar una cuenta</span>
                    <a class="recuperar" href="registro<?= $query_url ?>">Registrarse</a>
                    <a class="login" href="login<?= $query_url ?>">Iniciar sesion</a>
                </div>
                <form method="post" id="form-recuperacion">
                    <input type="hidden" name="usuario_id">
                    <input type="hidden" name="usuario_nombre">
                    <input type="hidden" name="usuario_cedula">
                    <input type="hidden" name="usuario_nacimiento">
                    <input type="hidden" name="usuario_indice">
                    <input type="hidden" name="usuario_celular">
                    <input type="hidden" name="usuario_telefono">
                    <input type="hidden" name="usuario_sexo">
                    <input type="hidden" name="usuario_nivel">
                    <input type="hidden" name="usuario_calificacion">
                    <input type="hidden" name="usuario_direccion">
                    <input type="hidden" name="usuario_descripcion">
                    <input type="hidden" name="usuario_empresa_nombre">
                    <input type="hidden" name="usuario_empresa_actividad">
                    <input type="hidden" name="usuario_empresa_direccion">
                    <input type="hidden" name="usuario_empresa_telefono">
                    <input type="hidden" name="usuario_tema_mode_dark">
                    <input type="hidden" name="usuario_tipo_id">
                    <input type="hidden" name="usuario_tema_id">
                    <input type="hidden" name="usuario_pais_id">

                    <div class="page">
                        <div class="content">

                            <div class="row row-msg">
                                <div class="msg">
                                    <p>Escriba el correo electronico de la cuenta que desea recuperar a continuación</p>
                                </div>
                            </div>

                            <div class="row">
                                <input type="text" name="usuario_email" placeholder="Escriba el email de su cuenta">
                                <span>Correo electrónico</span>
                                <div class="msg"></div>
                            </div>

                        </div>
                        <div class="page-nav">
                            <input type="submit" value="Validar">
                        </div>
                    </div>


                    <div class="page">
                        <div class="content">

                            <div class="row row-msg">
                                <div class="msg">
                                    <p>Se ha enviado un código a tu correo electronico, mismo que debes ingresar a continuación</p>
                                </div>
                            </div>

                            <div class="row row-code">
                                <div class="code">
                                    <input type="text" name="usuario_email_code" placeholder="Escriba el código que hemos enviado a su correo">
                                    <button class="btn-reload-code" placeholder="Reenviar codigo" onclick="Recuperacion.fun.sendCode();"></button>
                                </div>
                                <span>Código de confirmacion</span>
                                <div class="msg"></div>
                            </div>

                        </div>
                        <div class="page-nav">
                            <input type="submit" value="Recuperar">
                        </div>
                    </div>
                    <div class="page">
                        <div class="content">
                            <br><br>
                            <div class="row">
                                <input type="password" name="usuario_pass" Placeholder="Usa mezclas entre mayusculas y minusculas">
                                <span>Nueva contraseña</span>
                                <div class="msg"></div>
                            </div>
                            <div class="row">
                                <input type="password" name="usuario_pass_confirm" placeholder="Vuelve a escribir la misma contraseña">
                                <span>Confirmar contraseña</span>
                                <div class="msg"></div>
                            </div>

                        </div>
                        <div class="page-nav">
                            <input type="submit" value="Cambiar contraseña">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- SCRIPT - START -->
    <!-- <script src="control/function/fecha.js"></script> -->
    <script src="control/script/public/recuperacion.js"></script>
    <!-- SCRIPT - END -->

<?php
} else {
    header("location: ../../../");
}
?>