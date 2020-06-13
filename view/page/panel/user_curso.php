<?php
if (isset($_SESSION)) {
    if (isset($viewPage)) {
        $master_curso_id = isset($_GET['curso_id']) ? $_GET['curso_id'] : 0;
?>
        <link rel="stylesheet" href="view/css/panel/user_curso.css" />
        <script>
            let master_curso_id = <?= $master_curso_id ?>;
        </script>

        <div id="container__cursos">
            <div class="header">
                <span>CURSOS</span>
                <input type="search" placeholder="Busca un curso específico.." class="idea_search" id="idea_search">
                <button></button>
            </div>
            <div class="curso-container" id="sub-container-cursos"></div>
        </div>


        <div id="container__curso">
            <div class="container">
                <div class="col col-1">
                    <div class="tittle"><span>Progrmación Orientada a Objetos</span></div>
                    <div class="row">
                        <img src="view/src/icon/graduation_cap.png">
                        <b>MODALIDAD: </b>
                        <span>En Vivo</span>
                        <img class="type" src="view/src/icon/live.png">
                    </div>
                    <div class="row">
                        <img src="view/src/icon/time.png">
                        <b>DESDE: </b>
                        <span>Lunes, 05 de Mayo del 2020</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/time.png">
                        <b>HASTA: </b>
                        <span>Jueves, 10 de Junio del 2020</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/information.png">
                        <b>CUPOS: </b>
                        <span>100</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/whatsapp.png">
                        <b>GRUPO: </b>
                        <a target="_blank" href="#">
                            <span>Grupo Whatsapp</span>
                            <img src="view/src/icon/link.png">
                        </a>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/star.png">
                        <b>CALIFICACIÓN: </b>
                        <img src="view/src/icon/star_3.png" class="calificacion">
                    </div>
                    <div class="row">
                        <img src="view/src/icon/star.png">
                        <b>DOCENTE: </b>
                        <a target="_blank" href="?page=user_profile&usuario_id=7" class="a-docente">
                            <img src="view/src/files/usuario_foto/7.png">
                            <span>Harold Anderson Hernández Zambrano</span>
                        </a>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/dollar.png">
                        <b>PRECIO: </b>
                        <span><b class="precio-before">150</b><b class="precio-after">100</b>USD</span>
                    </div>
                    <div class="row medall">
                        <img class="no-filter" src="view/src/icon/curso_certificate_oro.png">
                        <b>Título de Certificación</b>
                    </div>
                    <div class="row medall">
                        <img class="no-filter" src="view/src/icon/curso_certificate_plata.png">
                        <b>Certificado de Aprobación</b>
                    </div>
                    <div class="row medall">
                        <img class="no-filter" src="view/src/icon/curso_certificate_bronce.png">
                        <b>Certificado de Participación</b>
                    </div>
                </div>
                <div class="col col-2">
                    <img src="view/src/files/curso_foto/1.png" class="curso">
                </div>
            </div>
        </div>


        <script src="control/script/user_curso/curso.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=user_curso");
    }
} else {
    header("location: login");
}
?>