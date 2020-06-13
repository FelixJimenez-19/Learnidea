<?php
if (isset($viewPage)) {
?>
    <div class="section__cursos" id="col2-cursos_live_container">
        <span class="tittle">CURSOS</span>
        <div class="container__cursos">
            <button class="nav previous" onclick="ForoCurso.fun.scrollHorizontal(false, 'col2-cursos_live_items')"><img src="view/src/icon/in.png"></button>
            <div class="cursos__content" id="col2-cursos_live_items"></div>
            <button class="nav next" onclick="ForoCurso.fun.scrollHorizontal(true, 'col2-cursos_live_items')"><img src="view/src/icon/in.png"></button>
        </div>
    </div>
<?php
} else {
    header("location: ../../../panel?page=user_foro");
}
?>