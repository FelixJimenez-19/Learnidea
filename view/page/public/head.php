<?php
if (isset($viewPage)) {
?>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title></title>
    <link rel="icon" id="head-favicon" href="view/src/img/logo.png">
    <!-- STYLES -->
    <link rel="stylesheet" href="view/css/config.css">
    <link rel="stylesheet" href="view/css/public/index.css">
    <!-- SCRIPTS -->
    <script src="control/dao/config.js"></script>
    <script src="control/dao/CursoDao.js"></script>
    <script src="control/lib/jquery.js"></script>

    <script src="control/dao/UsuarioDao.js"></script>
    <script src="control/dao/Usuario_tipoDao.js"></script>
    <script src="control/dao/Usuario_temaDao.js"></script>
    <script src="control/dao/Usuario_paisDao.js"></script>

<?php
} else {
    header("location: ../../../");
}
?>