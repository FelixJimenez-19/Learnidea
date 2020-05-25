<?php $viewPage = 0 ?>
<!DOCTYPE html>
<html lang="es">
<?php include 'view/page/public/header.php' ?>






<!--  STYLES-->
<link rel="stylesheet" href="view/css/public/inicio.css">
<link rel="stylesheet" href="view/css/public/curso.css">

<!-- CONTENT > CONTENT_HEADER -->
<div class="content_buttons_header">
    <span>INICIO</span>
    <a href="#live" id="header-nav-live"><img src="view/src/icon/live.png">En Vivo</a>
    <a href="#virtual" id="header-nav-virtual"><img src="view/src/icon/online.png">Virtuales</a>
    <a href="#proximo" id="header-nav-proximo"><img src="view/src/icon/next.png">Proximos</a>
</div>

<!--  CONTENEDOR SECCIONES  -->
<div class="sections">

    <!--  CONTENEDOR SECCIONES > SECCION  -->
    <div class="section" id="live">
        <div class="title">En Vivo</div>
        <!--  CONTENEDOR SECCIONES > SECCION > ITEM  -->
        <div class="curso-container">
            <div class="nav previous" onclick="InicioCurso.fun.scrollHorizontal(false, 'curso-container-live')">
                <img src="view/src/icon/in.png">
            </div>
            <div class="container" id="curso-container-live">
                <a class="curso-item ver-mas" href="">
                    <img src="view/src/icon/box.png">
                    <span>Ver todos los cursos</span>
                </a>
            </div>
            <div class="nav next" onclick="InicioCurso.fun.scrollHorizontal(true, 'curso-container-live')">
                <img src="view/src/icon/in.png">
            </div>
        </div>
    </div>


    <!--  CONTENEDOR SECCIONES > SECCION  -->
    <div class="section" id="virtual">
        <div class="title">Virtuales</div>
        <div class="curso-container">
            <div class="nav previous" onclick="InicioCurso.fun.scrollHorizontal(false, 'curso-container-record')">
                <img src="view/src/icon/in.png">
            </div>
            <div class="container" id="curso-container-record">
                <a class="curso-item ver-mas" href="">
                    <img src="view/src/icon/box.png">
                    <span>Ver todos los cursos</span>
                </a>
            </div>
            <div class="nav next" onclick="InicioCurso.fun.scrollHorizontal(true, 'curso-container-record')">
                <img src="view/src/icon/in.png">
            </div>
        </div>
    </div>
   
   
    <!--  CONTENEDOR SECCIONES > SECCION  -->
    <div class="section" id="proximo">
        <div class="title">Proximos</div>
        <div class="curso-container">
            <div class="nav previous" onclick="InicioCurso.fun.scrollHorizontal(false, 'curso-container-proximo')">
                <img src="view/src/icon/in.png">
            </div>
            <div class="container" id="curso-container-proximo">
                <a class="curso-item ver-mas" href="">
                    <img src="view/src/icon/box.png">
                    <span>Ver todos los cursos</span>
                </a>
            </div>
            <div class="nav next" onclick="InicioCurso.fun.scrollHorizontal(true, 'curso-container-proximo')">
                <img src="view/src/icon/in.png">
            </div>
        </div>
    </div>

</div>

<!-- SCRIPT - START -->
<script src="control/function/fecha.js"></script>
<script src="control/script/public/inicio.js"></script>
<!-- SCRIPT - END -->





<?php include 'view/page/public/footer.php' ?>

</html>