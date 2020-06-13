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
            <div class="header" id="container__curso__header"></div>

            <div class="body">
                <div class="body-row usuario__container" id="container__curso__usuario"></div>

                <div class="body-row curso__temario" id="container__curso__temario">
                    <div class="tittle"><span>TEMARIO</span></div>
                    <br>
                    <button class="desplegar" onclick="UserCursoOne.crud.selectSeccionesByCurso_id()">
                        <span>Ver</span>
                        <img src="view/src/icon/in.png">
                    </button>
                </div>

                <div class="body-row curso__descripcion" id="container__curso__extras"></div>

            </div>
        </div>


        <script src="control/script/user_curso/curso_many.js"></script>
        <script src="control/script/user_curso/curso_one.js"></script>
        <script src="control/script/user_curso/curso.js"></script>
<?php
    } else {
        header("location: ../../../panel?page=user_curso");
    }
} else {
    header("location: login");
}
?>