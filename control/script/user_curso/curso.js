const UserCursoMain = () => {
    UserCurso.fun.ini(master_curso_id);
}

const UserCurso = {
    MAX: 10,
    database_cursos: [],
    database_curso: {},
    view: {
        masterContainerCursos: document.getElementById("container__cursos"),
        masterContainerCurso: document.getElementById("container__curso"),
        containerCursos: document.getElementById("sub-container-cursos"),
        search: document.getElementById("idea_search")
    },
    crud: {},
    fun: {
        ini: (master_curso_id) => {
            if (master_curso_id === 0) {
                UserCursoManyMain();
                UserCurso.view.masterContainerCursos.style.display = "block";
                UserCurso.view.masterContainerCurso.style.display = "none";
            } else {
                UserCursoOneMain();
                UserCurso.view.masterContainerCurso.style.display = "block";
                UserCurso.view.masterContainerCursos.style.display = "none";
            }
        },
    }
}

UserCursoMain();