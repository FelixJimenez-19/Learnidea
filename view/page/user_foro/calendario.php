<?php
if (isset($viewPage)) {
?>
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
<?php
} else {
    header("location: ../../../panel?page=user_foro");
}
?>