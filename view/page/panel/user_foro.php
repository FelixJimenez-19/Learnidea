<?php
if (isset($viewPage)) {
?>
    <link rel="stylesheet" href="view/css/panel/user_foro.css" />


    <div class="foro-container">
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-1">
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-2" checked>
        <input type="radio" name="radio-foro-container" id="radio-foro-container-page-3">
        <nav class="foro-container-nav">
            <label for="radio-foro-container-page-1">
                <img src="view/src/icon/graduation_cap.png">
            </label>
            <label for="radio-foro-container-page-2">
                <img src="view/src/icon/home2.png">
            </label>
            <label for="radio-foro-container-page-3">
                <img src="view/src/icon/calendar.png">
            </label>
        </nav>
        <div class="foro-sub-container">
            <div class="foro-col foro-col-1" id="foro-col-1">
                <div class="content" id="foro-col-1__content"></div>
            </div>

            <div class="foro-col foro-col-2" id="foro-col-2">
                <div class="content" id="foro-col-2__content">
                    <span class="section__tittle">FORO</span>
                    <div class="container__publicacion">
                        <span class="tittle">CREAR PUBLICACION</span>
                        <form method="POST" class="form" id="col2-publicacion_form">
                            <input type="hidden" name="usuario_id" value="<?= $_SESSION['usuario_id'] ?>">
                            <div class="textarea__container">
                                <div class="img" style="background-image: url(view/src/files/usuario_foto/<?= $_SESSION['usuario_foto'] ?>)"></div>
                                <textarea name="publicacion_descripcion" placeholder="¿Cuál es tu problema, <?= $_SESSION['usuario_nombre'] ?>?"></textarea>
                                <input name="publicacion_foto" type="file" accept="image/png">
                            </div>
                            <input name="btn_submit" type="submit" value="PUBLICAR">
                        </form>
                    </div>
                    <div class="section__cursos" id="col2-cursos_live_container">
                        <span class="tittle">CURSOS VIRTUALES</span>
                        <div class="container__cursos">
                            <button class="nav previous" onclick="ForoCurso.fun.scrollHorizontal(false, 'col2-cursos_live_items')"><img src="view/src/icon/in.png"></button>
                            <div class="cursos__content" id="col2-cursos_live_items"></div>
                            <button class="nav next" onclick="ForoCurso.fun.scrollHorizontal(true, 'col2-cursos_live_items')"><img src="view/src/icon/in.png"></button>
                        </div>
                    </div>
                    <div class="container__publicaciones" id="col2-publicacion_container"></div>
                </div>
                <br>
            </div>

            <div class="foro-col foro-col-3" id="foro-col-3">
                <div class="content" id="foro-col-3__content">
                    <span class="section__tittle">CALENDARIO</span>
                    <div class="container__calendar">
                        <div class="header__calendar">
                            <div class="nav">
                                <button class="btn previous"><img src="view/src/icon/in.png"></button>
                                <span class="tittle">Enero 2020</span>
                                <button class="btn next"><img src="view/src/icon/in.png"></button>
                            </div>
                            <div class="days">
                                <span>Lunes</span>
                                <span>Martes</span>
                                <span>Miercoles</span>
                                <span>Jueves</span>
                                <span>Viernes</span>
                                <span>Sabado</span>
                                <span>Domingo</span>
                            </div>
                        </div>
                        <div class="grid__calendar">
                            <div class="day__item">
                                <span class="tittle">1</span>
                                <a href="">
                                    <div class="img" style="background-image: url(view/src/files/curso_foto/4.png)"></div>
                                    <div class="tooltip">
                                        <span class="curso__nombre">Programacion Orientada a Objetos</span>
                                        <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi voluptatibus velit!</p>
                                    </div>
                                </a>
                            </div>
                            <div class="day__item"><span class="tittle">2</span></div>
                            <div class="day__item"><span class="tittle">3</span></div>
                            <div class="day__item"><span class="tittle">4</span></div>
                            <div class="day__item"><span class="tittle">5</span></div>
                            <div class="day__item"><span class="tittle">6</span></div>
                            <div class="day__item"><span class="tittle">7</span></div>
                            <div class="day__item"><span class="tittle">8</span></div>
                            <div class="day__item"><span class="tittle">9</span></div>
                            <div class="day__item"><span class="tittle">10</span></div>
                            <div class="day__item"><span class="tittle">11</span></div>
                            <div class="day__item"><span class="tittle">12</span></div>
                            <div class="day__item"><span class="tittle">13</span></div>
                            <div class="day__item"><span class="tittle">14</span></div>
                            <div class="day__item"><span class="tittle">15</span></div>
                            <div class="day__item"><span class="tittle">16</span></div>
                            <div class="day__item"><span class="tittle">17</span></div>
                            <div class="day__item"><span class="tittle">18</span></div>
                            <div class="day__item"><span class="tittle">19</span></div>
                            <div class="day__item"><span class="tittle">20</span></div>
                            <div class="day__item"><span class="tittle">21</span></div>
                            <div class="day__item"><span class="tittle">22</span></div>
                            <div class="day__item"><span class="tittle">23</span></div>
                            <div class="day__item"><span class="tittle">24</span></div>
                            <div class="day__item"><span class="tittle">25</span></div>
                            <div class="day__item"><span class="tittle">26</span></div>
                            <div class="day__item"><span class="tittle">27</span></div>
                            <div class="day__item"><span class="tittle">28</span></div>
                            <div class="day__item"><span class="tittle">29</span></div>
                            <div class="day__item"><span class="tittle">30</span></div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>


    <div class="idea_form" id="idea_modal_form"></div>


    <div class="idea_message" id="idea_modal_message">
        <div class="message">
            <span id="idea_message"></span>
            <button onclick="Foro.fun.hideModalMessage()">ACEPTAR</button>
        </div>
    </div>

    <div class="idea_confirm" id="idea_modal_confirm">
        <div class="confirm">
            <span id="idea_confirm"></span>
            <div class="buttons">
                <button onclick="Foro.fun.pressYesModalConfirm(() => Foro.fun.actionPressYesModalConfirm())">SI</button>
                <button onclick="Foro.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>




    <script src="control/lib/jquery.js"></script>
    <script src="control/function/fecha.js"></script>
    <script src="control/script/foro/foro.js"></script>
    <script src="control/script/foro/inscripcion.js"></script>
    <script src="control/script/foro/curso.js"></script>
    <script src="control/script/foro/comentario.js"></script>
    <script src="control/script/foro/publicacion.js"></script>
<?php
} else {
    header("location: ../../../panel?page=user_foro");
}
?>