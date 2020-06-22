const UserCursoInscripcionMain = (action) => {
    UserCursoInscripcion.crud.select(action);
}

const UserCursoInscripcion = {
    database: [],
    process: false,
    view: {
        buttonSubscripcionContainer: document.getElementById("button-subscripcion-container")
    },
    crud: {
        select: (action) => {
            InscripcionDao.select().then(res => {
                UserCursoInscripcion.database = res;
                action();
            });
        }
    },
    fun: {
        insert: () => {
            if (FunctionCurso.fun.isProximo(UserCursoOne.curso)) {
                UserCurso.fun.showModalMessage("Este curso aun no esta disponible");
            } else if (FunctionCurso.fun.isLive(UserCursoOne.curso)) {
                UserCursoInscripcion.fun.insertLive();
            } else if (FunctionCurso.fun.isRecord(UserCursoOne.curso)) {
                
            }
        },
        insertLive: () => {
            UserCurso.fun.showModalProgreess();
            UserCursoInscripcion.crud.select(() => {
                UserCursoOne.crud.selectCursoById(master_curso_id, () => {
                    let usuario = Session.getSession();
                    let curso = UserCursoOne.curso;
                    let cupos = FunctionCurso.fun.getCupos(curso, UserCursoInscripcion.database);
                    if (cupos > 0) {
                        // AQUI ME QUEDE
                    } else {
                        UserCurso.fun.showModalMessage("Lo sentimos, el ultimo cupo ha sido tomado");
                    }
                    UserCurso.fun.hideModalProgreess();
                });
            });
        }
    }
}