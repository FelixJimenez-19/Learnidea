const FunctionCursoMain = () => {}

const FunctionCurso = {
    view: {},
    crud: {},
    fun: {
        isProximo: (register) => {
            return (register.curso_visible == 1 && register.curso_proximo == 1);
        },
        isLive: (register) => {
            let diff = (Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio)));
            return (diff > 0 && register.curso_visible == 1 && register.curso_proximo == 0);
        },
        isRecord: (register) => {
            let diff = (Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin)));
            return (diff < 0 && register.curso_visible == 1 && register.curso_proximo == 0);
        },
        isProcess: (register) => {
            let diff_live = (Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio)));
            let diff_record = (Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin)));
            return (diff_live < 0 && diff_record > 0 && register.curso_visible == 1 && register.curso_proximo == 0);
        },
        // 1 === 'PROXIMO'
        // 2 === 'LIVE'
        // 3 === 'RECORD'
        // 4 === 'PROCESS'
        // 0 === 'OTHER'
        getType: (curso_fecha_inicio, curso_fecha_fin, curso_visible, curso_proximo) => {
            if (FunctionCurso.fun.isProximo(register)) {
                return 1;
            }
            if (FunctionCurso.fun.isLive(register)) {
                return 2;
            }
            if (FunctionCurso.fun.isRecord(register)) {
                return 3;
            }
            if (FunctionCurso.fun.isProcess(register)) {
                return 4;
            }
            return 0;
        },
        getCupos: (curso, inscripciones) => {
            let cont = 0;
            for (let i of inscripciones) {
                if (curso.curso_id === i.curso_id) {
                    cont++;
                }
            }
            let cupos = parseInt(curso.curso_cupos) - parseInt(cont);
            if (cupos < 0) {
                return 0;
            } else {
                return cupos;
            }
        }
    }
}

FunctionCursoMain();