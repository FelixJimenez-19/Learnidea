<?php
if (isset($viewPage)) {
?>
    </content>

    <footer>
        <div class="fil">

            <div class="col">
                <span id="footer-pagina-nombre"></span>
                <div class="fil mision-vision">
                    <span>Misión</span><p id="footer-pagina-mision"></p>
                    <span>Visión</span><p id="footer-pagina-vision"></p>
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
    </footer>

    <a href="#header" class="btnToHeader"><img src="view/src/icon/in.png"></a>

    <!--  SCRIPTS -->
    <script src="control/lib/jquery.js"></script>

    <script src="control/dao/config.js"></script>
    <script src="control/dao/InformacionDao.js"></script>
    <script src="control/dao/SliderDao.js"></script>
    <script src="control/dao/InstitucionDao.js"></script>
    <script src="control/dao/ContactoDao.js"></script>

    <script src="control/script/public/informacion.js"></script>
    <script src="control/script/public/slider.js"></script>
    <script src="control/script/public/institucion.js"></script>
    <script src="control/script/public/contacto.js"></script>
    
    <script src="control/script/public/index.js"></script>
    <script src="control/script/public/curso.js"></script>

    <script src="control/lib/particles/particles.js"></script>
    <script src="control/lib/particles/particles_config.js"></script>
    <script src="control/lib/smooth-scroll/smooth-scroll.min.js"></script>
    <script src="control/lib/smooth-scroll/smooth-scroll-config.js"></script>
    
    <script src="control/script/public/thread.js"></script>
</body>

    </html>
<?php
} else {
    header("location: ../../../");
}
?>