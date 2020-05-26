<?php
if (isset($viewPage)) {
?>
    <!--  SCRIPTS -->
    <script src="control/dao/InformacionDao.js"></script>
    <script src="control/dao/SliderDao.js"></script>
    <script src="control/dao/InstitucionDao.js"></script>
    <script src="control/dao/ContactoDao.js"></script>
    <script src="control/dao/UsuarioDao.js"></script>

    <script src="control/script/public/informacion.js"></script>
    <script src="control/script/public/slider.js"></script>
    <script src="control/script/public/institucion.js"></script>
    <script src="control/script/public/contacto.js"></script>

    <script src="control/function/theme.js"></script>
    <script src="control/script/public/index.js"></script>

    <script src="control/lib/particles/particles.js"></script>
    <script src="control/lib/particles/particles_config.js"></script>
    <script src="control/lib/smooth-scroll/smooth-scroll.min.js"></script>
    <script src="control/lib/smooth-scroll/smooth-scroll-config.js"></script>

    <script src="control/script/public/thread.js"></script>
<?php
} else {
    header("location: ../../../");
}
?>