<?php
if (isset($viewPage)) {
?>

    <head>
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
    </head>

    <body>
        <!-- PROGRESS -->

        <!--  HEADER -->
        <header id="header">
            <!--  HEADER > MENU -->
            <div class="menu">
                <a class="logo" href="./">
                    <img id="head-logo-img" src="view/src/img/logo.png" alt="Logo">
                    <span id="head-logo-span"></span>
                </a>
                <input type="checkbox" id="check_menu">
                <div class="buttons">

                    <div class="btn"><a href="./">Inicio</a>
                        <div class="buttons_sub"></div>
                    </div>

                    <div class="btn">
                        <a href="cursos">Cursos</a>
                        <div class="buttons_sub">
                            <a href="cursos#live">En Vivo</a>
                            <a href="cursos#record">Virtuales</a>
                        </div>
                    </div>

                    <div class="btn"><a href="login">Plataforma</a>
                        <div class="buttons_sub"></div>
                    </div>

                </div>
                <label class="open_menu" for="check_menu"><img src="view/src/icon/menu.png"></label>
                <label class="close_menu" for="check_menu"><img src="view/src/icon/close.png"></label>
            </div>
            <!--  HEADER > FILTER -->
            <div class="filter"></div>
            <!--  HEADER > SLIDER -->
            <div class="slider" id="particles-js"></div>
        </header>
        <content>



        <?php
    } else {
        header("location: ../../../");
    }
        ?>