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
    <a href="#live"><img src="view/src/icon/live.png">En Vivo</a>
    <a href="#virtual"><img src="view/src/icon/online.png">Virtuales</a>
</div>

<!--  CONTENEDOR SECCIONES  -->
<div class="sections">

    <!--  CONTENEDOR SECCIONES > SECCION  -->
    <div class="section" id="live">
        <div class="title">En Vivo</div>
        <!--  CONTENEDOR SECCIONES > SECCION > ITEM  -->
        <div class="curso-container">
            <div class="nav previous" onclick="Curso.fun.scrollHorizontal(false, 'curso-container-live')">
                <img src="view/src/icon/in.png">
            </div>
            <div class="container" id="curso-container-live">
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/4.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-gratis">Gratis</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Fundamentos de programación</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Edwin Viecente Jara Frias</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Lunes, 8 de Junio del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>100</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/5.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$10.00</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Programacion Orietada a Objetos</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Harold Anderson Hernández Zambrano</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Sabado, 20 de Julio del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>200</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <a class="curso-item ver-mas" href="">
                    <img src="view/src/icon/box.png">
                    <span>Ver todos los cursos</span>
                </a>
            </div>
            <div class="nav next" onclick="Curso.fun.scrollHorizontal(true, 'curso-container-live')">
                <img src="view/src/icon/in.png">
            </div>
        </div>
    </div>


    <!--  CONTENEDOR SECCIONES > SECCION  -->
    <div class="section" id="virtual">
        <div class="title">Virtuales</div>
        <!--  CONTENEDOR SECCIONES > SECCION > ITEM  -->
        <div class="curso-container">
            <div class="nav previous" onclick="Curso.fun.scrollHorizontal(false, 'curso-container-record')">
                <img src="view/src/icon/in.png">
            </div>
            <div class="container" id="curso-container-record">
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/4.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-gratis">Gratis</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Fundamentos de programación</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Edwin Viecente Jara Frias</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Lunes, 8 de Junio del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>100</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/5.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$10.00</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Programacion Orietada a Objetos</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Harold Anderson Hernández Zambrano</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Sabado, 20 de Julio del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>200</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/6.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-gratis">Gratis</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Hacking Ético</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Hugo Wellintong Torres Ramon</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Miercoles, 01 de Agosto del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>150</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: url('view/src/files/curso_foto/10.png')">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$25.00</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">Inteligencia Artificial</span>
                        <div class="text curso-docente"><span>DOCENTE: </span>
                            <p>Harold Anderson Hernández Zambrano</p>
                        </div>
                        <div class="text curso-inicio"><span>INICIA: </span>
                            <p>Jueves, 04 de Agosto del 2020</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>500</p>
                        </div>
                        <a href="">Subscribirse</a>
                    </div>
                </div>
                <a class="curso-item ver-mas" href="">
                    <img src="view/src/icon/box.png">
                    <span>Ver todos los cursos</span>
                </a>
            </div>
            <div class="nav next" onclick="Curso.fun.scrollHorizontal(true, 'curso-container-record')">
                <img src="view/src/icon/in.png">
            </div>
        </div>
    </div>

</div>







<?php include 'view/page/public/footer.php' ?>

</html>