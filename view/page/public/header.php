<?php
if (isset($viewPage)) {
?>
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

            <div class="btn"><a href="profesores">Profesores</a>
                <div class="buttons_sub"></div>
            </div>

            <div class="btn"><a href="foro">Foro</a>
                <div class="buttons_sub"></div>
            </div>

            <div class="btn">
                <a href="login">Plataforma</a>
                <div class="buttons_sub">
                    <a href="login">Iniciar Sesion</a>
                    <a href="registro">Registrarse</a>
                    <a href="recuperacion">Recuperacion</a>
                </div>
            </div>
            <!-- 
            <div class="btn"><a href="login">Login</a>
                <div class="buttons_sub"></div>
            </div>
            <div class="btn"><a href="registro">Registrarse</a>
                <div class="buttons_sub"></div>
            </div> -->

        </div>
        <label class="open_menu" for="check_menu"><img src="view/src/icon/menu.png"></label>
        <label class="close_menu" for="check_menu"><img src="view/src/icon/close.png"></label>
    </div>
    <!--  HEADER > FILTER -->
    <div class="filter"></div>
    <!--  HEADER > SLIDER -->
    <div class="slider" id="particles-js"></div>
<?php
} else {
    header("location: ../../../");
}
?>