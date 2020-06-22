const UserCursoMain = () => {
    UserCursoInscripcionMain(() => UserCurso.fun.ini(master_curso_id));
    // UserCurso.fun.ini(master_curso_id);
}

const UserCurso = {
    MAX: 10,
    database_cursos: [],
    database_curso: {},
    view: {
        masterContainerCursos: document.getElementById("container__cursos"),
        masterContainerCurso: document.getElementById("container__curso"),
        containerCursos: document.getElementById("sub-container-cursos"),
        search: document.getElementById("idea_search"),
        modalMessage: document.getElementById("idea_modal_message"),
        message: document.getElementById("idea_message"),
        modalConfirm: document.getElementById("idea_modal_confirm"),
        confirm: document.getElementById("idea_confirm"),
        modalProgress: document.getElementById("idea_modal_progress"),
    },
    crud: {},
    fun: {
        showModalMessage: (msg) => {
            UserCurso.view.modalMessage.style.top = "0%";
            UserCurso.view.message.innerHTML = msg;
        },
        hideModalMessage: () => {
            UserCurso.view.modalMessage.style.top = "-100%";
            UserCurso.view.message.innerHTML = "";
        },
        showModalConfirm: (msg, action) => {
            UserCurso.view.modalConfirm.style.top = "0%";
            UserCurso.view.confirm.innerHTML = msg;
            action();
        },
        hideModalConfirm: () => {
            UserCurso.area.index = null;
            UserCurso.view.modalConfirm.style.top = "-100%";
            UserCurso.view.confirm.innerHTML = "";
        },
        pressYesModalConfirm: (action) => {
            action();
            UserCurso.fun.hideModalConfirm();
        },
        showModalProgreess: () => {
            UserCurso.view.modalProgress.style.top = "0%";
        },
        hideModalProgreess: () => {
            UserCurso.view.modalProgress.style.top = "-100%";
        },
        ini: (master_curso_id) => {
            if (master_curso_id === 0) {
                UserCursoManyMain();
                UserCurso.view.masterContainerCursos.style.display = "block";
                UserCurso.view.masterContainerCurso.style.display = "none";
            } else {
                UserCursoTransaccion_tipoMain();
                UserCursoOneMain();
                UserCurso.view.masterContainerCurso.style.display = "block";
                UserCurso.view.masterContainerCursos.style.display = "none";
            }
        },
    }
}

UserCursoMain();