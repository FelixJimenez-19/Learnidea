<?php
if (isset($viewPage)) {
    $usuario_id = isset($_GET['usuario_id']) ? $_GET['usuario_id'] : 0;
?>
    <!-- SCRIPTS -->
    <script>
        let usuario_id = <?= $usuario_id ?>;
    </script>
    <!--  STYLES-->
    <link rel="stylesheet" href="view/css/public/secciones.css">
    <link rel="stylesheet" href="view/css/public/profesores.css">

    <!--  CONTENEDOR SECCIONES  -->
    <div class="sections">

        <!--  CONTENEDOR SECCIONES > SECCION  -->
        <div id="coach-one">
            <div class="section">
                <div class="title"></div>
                <!-- Aumentar el perfil del usuario -->
            </div>
        </div>

        <div id="coach-all">
            <div class="section">
                <div class="title">Profesores</div>
                <div class="coach-container" id="coach-all-container"></div>
            </div>
        </div>
    </div>

    <!-- SCRIPT - START -->
    <!-- <script src="control/function/fecha.js"></script> -->
    <script src="control/script/public/profesores.js"></script>
    <!-- SCRIPT - END -->

<?php
} else {
    header("location: ../../../");
}
?>