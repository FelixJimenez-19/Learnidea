<?php
if (isset($viewPage)) {
    session_start();
    if (empty($_SESSION['usuario_email'])) {
        if (isset($_GET['curso_id'])) {
            echo "<script> let query_curso_id = '" . $_GET['curso_id'] . "'; </script>";
        } else {
            echo "<script> let query_curso_id = ''; </script>";
        }
?>
        <!--  STYLES-->
        <link rel="stylesheet" href="view/css/public/secciones.css">
        <link rel="stylesheet" href="view/css/public/forms.css">
        <link rel="stylesheet" href="view/css/public/registro.css">

        <!--  CONTENEDOR SECCIONES  -->
        <div class="sections">

            <!--  CONTENEDOR SECCIONES > SECCION  -->
            <div class="section" id="seccion-error">
                <div class="title">Registrarse</div>
                <span class="span-deshabilitado">El registro de usuarios se encuentra deshabilitado</span>
            </div>
            <div class="section" id="seccion-registro">
                <div class="title">Registrarse</div>
                <div class="container" id="container-form">
                    <input name="radios-pages" type="radio" id="radio-page-1" checked>
                    <input name="radios-pages" type="radio" id="radio-page-2">
                    <input name="radios-pages" type="radio" id="radio-page-3">
                    <input name="radios-pages" type="radio" id="radio-page-4">
                    <input name="radios-pages" type="radio" id="radio-page-5">
                    <div class="nav">
                        <label for="radio-page-1">1</label>
                        <label for="radio-page-2">2</label>
                        <label for="radio-page-3">3</label>
                        <label for="radio-page-4">4</label>
                    </div>
                    <div class="tittle">
                        <span class="create">CREAR UNA CUENTA</span>
                        <a class="recuperar" href="recuperacion">Recuperación</a>
                        <a class="login" href="login">Iniciar sesion</a>
                    </div>
                    <form method="post" id="form-registro">
                        <input type="hidden" name="usuario_indice">
                        <input type="hidden" name="usuario_calificacion" value="0">
                        <input type="hidden" name="usuario_descripcion">
                        <input type="hidden" name="usuario_tema_mode_dark" value="0">
                        <input type="hidden" name="usuario_tipo_id">
                        <input type="hidden" name="usuario_tema_id">

                        <div class="page">
                            <div class="content">

                                <div class="row">
                                    <input type="text" name="usuario_nombre" placeholder="Ejemplo: Juan Alberto Rodriguez Plaza">
                                    <span>Nombres</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_email" placeholder="Ejemplo: alguien@email.com">
                                    <span>Correo electrónico</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="password" name="usuario_pass" Placeholder="Usa mezclas entre mayusculas y minusculas">
                                    <span>Contraseña</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="password" name="usuario_pass_confirm" placeholder="Vuelve a escribir la misma contraseña">
                                    <span>Confirmar contraseña</span>
                                    <div class="msg"></div>
                                </div>

                            </div>
                            <div class="page-nav">
                                <label for="radio-page-2">Siguiente</label>
                            </div>
                        </div>
                        <div class="page">
                            <div class="content">

                                <div class="row row-select">
                                    <div class="select">
                                        <select name="usuario_pais_id"></select>
                                        <div class="bandera" id="usuario_pais_bandera"></div>
                                    </div>
                                    <span>País</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_direccion" placeholder="Escribe la ciudad o barrio donde vives">
                                    <span>Direccion</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_celular" placeholder="Ejemplo: 0980199901">
                                    <span>Celular</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_telefono" placeholder="Ejemplo: 655 902 2735">
                                    <span>Telefono</span>
                                    <div class="msg"></div>
                                </div>

                            </div>
                            <div class="page-nav">
                                <label for="radio-page-1">Anterior</label>
                                <label for="radio-page-3">Siguiente</label>
                            </div>
                        </div>
                        <div class="page">
                            <div class="content">

                                <div class="row">
                                    <select name="usuario_nacimiento"></select>
                                    <span>Año de nacimiento</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_cedula" placeholder="Escribe el número de tu identificación">
                                    <span>Identificacion</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row row-radio">
                                    <div class="radio">
                                        <input type="radio" name="usuario_sexo" value="masculino" placeholder="Masculino">
                                        <input type="radio" name="usuario_sexo" value="femenino" placeholder="Femenino">
                                    </div>
                                    <span>Sexo</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row row-radio">
                                    <div class="radio">
                                        <input type="radio" name="usuario_nivel" value="basico" placeholder="Basico">
                                        <input type="radio" name="usuario_nivel" value="secudario" placeholder="Secundario">
                                        <input type="radio" name="usuario_nivel" value="superior" placeholder="Superior">
                                    </div>
                                    <span>Nivel academinco</span>
                                    <div class="msg"></div>
                                </div>

                            </div>
                            <div class="page-nav">
                                <label for="radio-page-2">Anterior</label>
                                <label for="radio-page-4">Siguiente</label>
                            </div>
                        </div>
                        <div class="page">
                            <div class="content">

                                <div class="row">
                                    <input type="text" name="usuario_empresa_nombre" placeholder="Nombre de la empresa en la que trabaja">
                                    <span>Empresa en que labora</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_empresa_actividad" placeholder="Labor que realiza en su trabajo">
                                    <span>Cargo laboral</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_empresa_direccion" placeholder="Ciudad, ubicacion de la empresa">
                                    <span>Direccion de la empresa</span>
                                    <div class="msg"></div>
                                </div>
                                <div class="row">
                                    <input type="text" name="usuario_empresa_telefono" placeholder="Celular o telefono de la empresa">
                                    <span>Contacto de la empresa</span>
                                    <div class="msg"></div>
                                </div>

                            </div>
                            <div class="page-nav">
                                <label for="radio-page-3">Anterior</label>
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
                                        <button class="btn-reload-code" placeholder="Reenviar codigo" onclick="Registro.fun.sendCode();"></button>
                                    </div>
                                    <span>Código de confirmacion</span>
                                    <div class="msg"></div>
                                </div>

                            </div>
                            <div class="page-nav">
                                <input type="submit" value="Registrarse">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- SCRIPT - START -->
        <script src="control/function/fecha.js"></script>
        <script src="control/script/public/registro.js"></script>
        <!-- SCRIPT - END -->

<?php
    } else {
        header("location: panel");
    }
} else {
    header("location: ../../../");
}
?>