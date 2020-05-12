<?php
session_start();
if (isset($_SESSION['usuario_email']) && isset($_GET['url'])) {
    $url = $_GET['url'];
    $viewPage = 0;
    if (file_exists($url)) {
        $curso_modelo_id = 0;
        if (isset($_GET['curso_modelo_id'])) {
            $curso_modelo_id = $_GET['curso_modelo_id'];
            if($curso_modelo_id == 0 or $curso_modelo_id == "" or $curso_modelo_id == null) {
                $curso_modelo_id = 0;
            }
        }
?>
        <!DOCTYPE html>
        <html lang="es">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
            <link rel="icon" href="view/src/img/logo.png">
            <title>BROWSER - LEARNIDEA</title>
            <link rel="stylesheet" href="view/css/config.css">
            <link rel="stylesheet" href="view/css/panel/panel.css">
        </head>
        <style>
            .idea_content {
                padding: 0px;
            }
        </style>
        <!-- SESSION JS | START -->
        <script src="./control/function/session.js"></script>
        <script>
            Session.setSession('<?php echo json_encode($_SESSION) ?>');
            let curso_modelo_id = <?php echo $curso_modelo_id ?>;
        </script>
        <!-- SESSION JS | END -->
        <!-- THEME | START -->
        <script src="./control/function/theme.js"></script>
        <!-- THEME | END -->
        <!-- SCRIPTS | START -->
        <script src="control/dao/config.js"></script>
        <script src="control/dao/Usuario_tipoDao.js"></script>
        <script src="control/dao/Usuario_temaDao.js"></script>
        <script src="control/dao/UsuarioDao.js"></script>
        <script src="control/dao/MensajeDao.js"></script>
        <script src="control/dao/InformacionDao.js"></script>
        <script src="control/dao/ContactoDao.js"></script>
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
        <script src="control/dao/Curso_deberDao.js"></script>
        <script src="control/dao/Curso_seccionDao.js"></script>
        <script src="control/dao/Seccion_videoDao.js"></script>
        <script src="control/dao/Video_comentarioDao.js"></script>
        <script src="control/dao/Video_respuestaDao.js"></script>
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
        <script src="control/dao/Publicacion_respuestaDao.js"></script>
        <script src="control/dao/BuzonDao.js"></script>
        <script src="control/dao/Transaccion_tipoDao.js"></script>
        <script src="control/dao/TransaccionDao.js"></script>

        <body>
            <div class="idea_content">
                <?php include $url ?>
            </div>
        </body>

        </html>
<?php
    } else {
        // header("location: login.php");
        echo "[\"DENIED\"]";
    }
} else {
    // header("location: login.php");
    echo "[\"DENIED\"]";
}
?>