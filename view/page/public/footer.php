<?php
if (isset($viewPage)) {
?>
    <div class="fil">

        <div class="col">
            <span id="footer-pagina-nombre"></span>
            <div class="fil mision-vision">
                <span>Misión</span>
                <p id="footer-pagina-mision"></p>
                <span>Visión</span>
                <p id="footer-pagina-vision"></p>
            </div>
        </div>
        <div class="col">
            <span>INSTITUCIONES</span>
            <div class="instituciones" id="footer-institucion"></div>
        </div>

        <div class="col">
            <span>CONTACTOS</span>
            <div class="contacts" id="footer-contacto"></div>
        </div>

    </div>
    <br><br><br>
    <div class="fil fil_copyrigth" id="footer-copyright"></div>

    <a href="#header" class="btnToHeader"><img src="view/src/icon/in.png"></a>
<?php
} else {
    header("location: ../../../");
}
?>