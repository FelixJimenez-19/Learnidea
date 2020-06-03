<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/panel.php
*/
session_start();
if (isset($_SESSION['usuario_email'])) {
    $viewPage = 0;
?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
        <link rel="icon" href="view/src/img/logo.png">
        <title>Learnidea - Panel</title>
        <link rel="stylesheet" href="view/css/config.css">
        <link rel="stylesheet" href="view/css/panel/panel.css">
    </head>

    <!-- SCRIPT | START -->
    <script src="./control/function/session.js"></script>
    <script src="./control/function/theme.js"></script>
    <script>
        Session.setSession('<?php echo json_encode($_SESSION) ?>');
        theme.main(Session.getSession());
    </script>
    <!-- SCRIPT | END -->

    <body>

        <input type="checkbox" id="idea_input_check_header_tool">
        <div class="idea_header">
            <div class="idea_title">
                <span class="idea_title1">LEARNIDEA</span>
                <span class="idea_title2">L. <p> I.</p></span>
            </div>
            <label for="idea_input_check_header_tool" class="idea_menu">
                <img src="view/src/icon/menu.png" class="idea_header_label_tool_img">
            </label>

            <!--      Implement chat notification - start       -->
            <!-- CSS -->
            <link rel="stylesheet" href="view/css/chat/notification.css">
            <!-- PHP -->
            <?php include 'view/page/chat/notification.php' ?>
            <!--      Implement chat notification - end         -->

            <input type="checkbox" id="idea_input_check_profile">
            <label for="idea_input_check_profile" class="idea_profile">
                <span><?php echo $_SESSION['usuario_nombre'] ?></span>
                <img src="view/src/<?php echo ($_SESSION['usuario_foto'] !== null) ? 'files/usuario_foto/' . $_SESSION['usuario_foto'] : 'img/avatar.png' ?>">
                <div class="idea_profile_options">
                    <label class="option-darkmode" for="header-options-profile-darkmode">
                        <span>Modo oscuro</span>
                        <input type="checkbox" id="header-options-profile-darkmode" <?php echo $_SESSION['usuario_tema_mode_dark'] == 1 ? 'checked' : '' ?>>
                    </label>
                    <img src="view/src/<?php echo ($_SESSION['usuario_foto'] !== null) ? 'files/usuario_foto/' . $_SESSION['usuario_foto'] : 'img/avatar.png' ?>">
                    <span><?php echo $_SESSION['usuario_nombre'] ?></span>
                    <button id="idea_btn_logount">CERRAR SESION</button>
                </div>
            </label>
        </div>

        <div class="idea_tool">
            <img src="view/src/img/logo.png" class="logo">
            <div class="idea_options">
                <div class="idea_option">
                    <a href="panel?page=inicio">
                        <label>
                            <span>Inicio</span>
                            <img src="view/src/icon/home.png">
                        </label>
                    </a>
                </div>

                <div class="idea_option">
                    <input type="checkbox" id="idea_check_option_1">
                    <a>
                        <label for="idea_check_option_1">
                            <span>Usuarios</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                    <div class="idea_sub_options">
                        <a href="panel?page=usuario_tipo">
                            <span>Tipos</span>
                            <img src="view/src/icon/security.png">
                        </a>
                        <a href="panel?page=usuario_tema">
                            <span>Temas</span>
                            <img src="view/src/icon/theme.png">
                        </a>
                        <a href="panel?page=usuario_pais">
                            <span>Paises</span>
                            <img src="view/src/icon/world.png">
                        </a>
                        <a href="panel?page=usuario">
                            <span>Cuentas</span>
                            <img src="view/src/icon/account.png">
                        </a>
                    </div>
                </div>

                <div class="idea_option">
                    <input type="checkbox" id="idea_check_option_2">
                    <a>
                        <label for="idea_check_option_2">
                            <span>Pagina</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                    <div class="idea_sub_options">
                        <a href="panel?page=informacion">
                            <span>Informacion</span>
                            <img src="view/src/icon/information.png">
                        </a>
                        <a href="panel?page=institucion">
                            <span>Instituciones</span>
                            <img src="view/src/icon/company.png">
                        </a>
                        <a href="panel?page=contacto">
                            <span>Contactos</span>
                            <img src="view/src/icon/contact.png">
                        </a>
                        <a href="panel?page=slider">
                            <span>Slider</span>
                            <img src="view/src/icon/slider.png">
                        </a>
                    </div>
                </div>

                <div class="idea_option">
                    <input type="checkbox" id="idea_check_option_3">
                    <a>
                        <label for="idea_check_option_3">
                            <span>Utilidades</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                    <div class="idea_sub_options">
                        <a href="panel?page=area">
                            <span>Area</span>
                            <img src="view/src/icon/area.png">
                        </a>
                        <a href="panel?page=especificacion">
                            <span>Especificacion</span>
                            <img src="view/src/icon/equal.png">
                        </a>
                        <a href="panel?page=alineacion">
                            <span>Alineacion</span>
                            <img src="view/src/icon/alineacion.png">
                        </a>
                        <a href="panel?page=participante_tipo">
                            <span>Participante</span>
                            <img src="view/src/icon/users.png">
                        </a>
                        <a href="panel?page=modalidad">
                            <span>Modalidad</span>
                            <img src="view/src/icon/modalidad.png">
                        </a>
                        <a href="panel?page=duracion">
                            <span>Duracion</span>
                            <img src="view/src/icon/time.png">
                        </a>
                    </div>
                </div>

                <div class="idea_option">
                    <input type="checkbox" id="idea_check_option_4">
                    <a>
                        <label for="idea_check_option_4">
                            <span>Educacion</span>
                            <img src="view/src/icon/in.png">
                        </label>
                    </a>
                    <div class="idea_sub_options">
                        <a href="panel?page=curso_modelo">
                            <span>Modelos</span>
                            <img src="view/src/icon/model.png">
                        </a>
                        <a href="panel?page=curso">
                            <span>Cursos</span>
                            <img src="view/src/icon/book.png">
                        </a>
                    </div>
                </div>

                <!-- POR COMPLETAR - START -->
                <!-- 
          <div class="idea_option">
            <a href="panel?page=curso">
              <label>
                <span>Curso</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=curso_deber">
              <label>
                <span>Curso_deber</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=curso_seccion">
              <label>
                <span>Curso_seccion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=seccion_video">
              <label>
                <span>Seccion_video</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=video_comentario">
              <label>
                <span>Video_comentario</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=video_respuesta">
              <label>
                <span>Video_respuesta</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=seccion_leccion">
              <label>
                <span>Seccion_leccion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=seccion_pregunta">
              <label>
                <span>Seccion_pregunta</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=seccion_alternativa">
              <label>
                <span>Seccion_alternativa</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=inscripcion">
              <label>
                <span>Inscripcion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=inscripcion_leccion">
              <label>
                <span>Inscripcion_leccion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=inscripcion_pregunta">
              <label>
                <span>Inscripcion_pregunta</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=inscripcion_alternativa">
              <label>
                <span>Inscripcion_alternativa</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=certificado_tipo">
              <label>
                <span>Certificado_tipo</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=certificado">
              <label>
                <span>Certificado</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=deber_entrega">
              <label>
                <span>Deber_entrega</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=publicacion">
              <label>
                <span>Publicacion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=publicacion_comentario">
              <label>
                <span>Publicacion_comentario</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=publicacion_respuesta">
              <label>
                <span>Publicacion_respuesta</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=buzon">
              <label>
                <span>Buzon</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=transaccion_tipo">
              <label>
                <span>Transaccion_tipo</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div>
  
          <div class="idea_option">
            <a href="panel?page=transaccion">
              <label>
                <span>Transaccion</span>
                <img src="view/src/icon/in.png">
              </label>
            </a>
          </div> -->
                <!-- POR COMPLETAR - END -->

            </div>
        </div>
        <!-- SCRIPTS | START -->
        <script src="control/dao/config.js"></script>
        <script src="control/dao/Usuario_tipoDao.js"></script>
        <script src="control/dao/Usuario_temaDao.js"></script>
        <script src="control/dao/Usuario_paisDao.js"></script>
        <script src="control/dao/UsuarioDao.js"></script>
        <script src="control/dao/MensajeDao.js"></script>
        <script src="control/dao/InformacionDao.js"></script>
        <script src="control/dao/ContactoDao.js"></script>
        <script src="control/dao/SliderDao.js"></script>
        <script src="control/dao/InstitucionDao.js"></script>
        <script src="control/dao/AreaDao.js"></script>
        <script src="control/dao/EspecificacionDao.js"></script>
        <script src="control/dao/AlineacionDao.js"></script>
        <script src="control/dao/Participante_tipoDao.js"></script>
        <script src="control/dao/ModalidadDao.js"></script>
        <script src="control/dao/DuracionDao.js"></script>
        <script src="control/dao/Curso_modeloDao.js"></script>
        <script src="control/dao/RequisitoDao.js"></script>
        <script src="control/dao/ObjetivoDao.js"></script>
        <script src="control/dao/Contenido_primarioDao.js"></script>
        <script src="control/dao/Contenido_secundarioDao.js"></script>
        <script src="control/dao/Contenido_transversalDao.js"></script>
        <script src="control/dao/EstrategiaDao.js"></script>
        <script src="control/dao/Evaluacion_diagnosticaDao.js"></script>
        <script src="control/dao/Evaluacion_formativaDao.js"></script>
        <script src="control/dao/Evaluacion_finalDao.js"></script>
        <script src="control/dao/Entorno_aprendizajeDao.js"></script>
        <script src="control/dao/BibliografiaDao.js"></script>
        <script src="control/dao/CursoDao.js"></script>
        <script src="control/dao/Curso_eventoDao.js"></script>
        <script src="control/dao/Curso_deberDao.js"></script>
        <script src="control/dao/Curso_seccionDao.js"></script>
        <script src="control/dao/Seccion_videoDao.js"></script>
        <script src="control/dao/Video_comentarioDao.js"></script>
        <script src="control/dao/Seccion_leccionDao.js"></script>
        <script src="control/dao/Seccion_preguntaDao.js"></script>
        <script src="control/dao/Seccion_alternativaDao.js"></script>
        <script src="control/dao/InscripcionDao.js"></script>
        <script src="control/dao/Inscripcion_leccionDao.js"></script>
        <script src="control/dao/Inscripcion_preguntaDao.js"></script>
        <script src="control/dao/Inscripcion_alternativaDao.js"></script>
        <script src="control/dao/Certificado_tipoDao.js"></script>
        <script src="control/dao/CertificadoDao.js"></script>
        <script src="control/dao/Deber_entregaDao.js"></script>
        <script src="control/dao/PublicacionDao.js"></script>
        <script src="control/dao/Publicacion_comentarioDao.js"></script>
        <script src="control/dao/BuzonDao.js"></script>
        <script src="control/dao/Transaccion_tipoDao.js"></script>
        <script src="control/dao/TransaccionDao.js"></script>
        <!--  PANEL-->
        <script src="control/script/panel/panel.js"></script>
        <!-- SCRIPTS | END -->
        <div class="idea_content" id="idea_content">
            <?php
            $viewPage = 'view/page/panel/';
            if (isset($_GET['page'])) {
                if (file_exists($viewPage . $_GET['page'] . ".php")) {
                    include $viewPage . $_GET['page'] . ".php";
                } else {
                    include $viewPage . 'inicio' . ".php";
                }
            } else {
                include $viewPage . 'inicio' . ".php";
            }
            ?>
        </div>

        <!--    Implement Chat - start      -->
        <!-- CSS -->
        <link rel="stylesheet" href="view/css/chat/chat.css">
        <link rel="stylesheet" href="view/css/chat/chat_movil.css">
        <!-- PHP -->
        <?php include 'view/page/chat/chat.php' ?>
        <!-- JS -->
        <script src="control/script/chat/responsive.js"></script>
        <script src="control/script/chat/ChatView.js"></script>
        <script src="control/script/chat/ChatCrud.js"></script>
        <script src="control/script/chat/usuario.js"></script>
        <script src="control/script/chat/mensaje.js"></script>
        <script src="control/script/chat/chat.js"></script>
        <script src="control/script/chat/ChatThread.js"></script>
        <!--    Implement Chat - end        -->

        <!--    Implement ViewScreen - start      -->
        <!-- CSS -->
        <link rel="stylesheet" href="view/css/viewscreen/viewscreen.css">
        <!-- PHP -->
        <?php include 'view/page/viewscreen/viewscreen.php' ?>
        <!-- JS -->
        <script src="control/script/viewscreen/viewscreen.js"></script>
        <!--    Implement ViewScreen - end        -->

    </body>

    </html>
<?php
} else {
    header("location: login.php");
}
?>