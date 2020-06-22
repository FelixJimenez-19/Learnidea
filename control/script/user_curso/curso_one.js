const UserCursoOneMain = () => {
    UserCursoOne.crud.selectCursoById(master_curso_id, () => {});
}

const UserCursoOne = {
    curso: 0,
    curso_id: 0,
    modelo_curso_id: 0,
    view: {
        masterContainerCurso: document.getElementById("container__curso"),
        headerContainer: document.getElementById("container__curso__header"),
        usuarioContainer: document.getElementById("container__curso__usuario"),
        temarioContainer: document.getElementById("container__curso__temario"),
        extrasContainer: document.getElementById("container__curso__extras"),
        descripcionContainer: document.getElementById("container__curso__descripcion"),
        requisitosContainer: document.getElementById("container__curso__requisitos"),
        objetivosContainer: document.getElementById("container__curso__objetivos"),
        primarioContainer: document.getElementById("container__curso__primario"),
        secundarioContainer: document.getElementById("container__curso__secundario"),
        transversalContainer: document.getElementById("container__curso__transversal"),
        estrategiaContainer: document.getElementById("container__curso__estrategia"),
        diagnosticaContainer: document.getElementById("container__curso__diagnostica"),
        formativaContainer: document.getElementById("container__curso__formativa"),
        finalContainer: document.getElementById("container__curso__final"),
        aprendizajeContainer: document.getElementById("container__curso__aprendizaje"),
        bibliografiaContainer: document.getElementById("container__curso__bibliografia"),
        declare: () => {
            UserCursoOne.view.masterContainerCurso = document.getElementById("container__curso");
            UserCursoOne.view.headerContainer = document.getElementById("container__curso__header");
            UserCursoOne.view.usuarioContainer = document.getElementById("container__curso__usuario");
            UserCursoOne.view.temarioContainer = document.getElementById("container__curso__temario");
            UserCursoOne.view.extrasContainer = document.getElementById("container__curso__extras");
            UserCursoOne.view.descripcionContainer = document.getElementById("container__curso__descripcion");
            UserCursoOne.view.requisitosContainer = document.getElementById("container__curso__requisitos");
            UserCursoOne.view.objetivosContainer = document.getElementById("container__curso__objetivos");
            UserCursoOne.view.primarioContainer = document.getElementById("container__curso__primario");
            UserCursoOne.view.secundarioContainer = document.getElementById("container__curso__secundario");
            UserCursoOne.view.transversalContainer = document.getElementById("container__curso__transversal");
            UserCursoOne.view.estrategiaContainer = document.getElementById("container__curso__estrategia");
            UserCursoOne.view.diagnosticaContainer = document.getElementById("container__curso__diagnostica");
            UserCursoOne.view.formativaContainer = document.getElementById("container__curso__formativa");
            UserCursoOne.view.finalContainer = document.getElementById("container__curso__final");
            UserCursoOne.view.aprendizajeContainer = document.getElementById("container__curso__aprendizaje");
            UserCursoOne.view.bibliografiaContainer = document.getElementById("container__curso__bibliografia");
        }
    },
    crud: {
        selectCursoById: (master_curso_id, action) => {
            let formData = new FormData();
            formData.append("curso_id", master_curso_id);
            CursoDao.selectById(formData).then(res => {
                if (res.length > 0) {
                    UserCursoOne.curso = res[0];
                    UserCursoOne.curso_id = res[0].curso_id;
                    UserCursoOne.curso_modelo_id = res[0].curso_modelo_id;
                    UserCursoOne.fun.selectHeader(res[0]);
                    UserCursoOne.fun.selectUsuario(res[0]);
                    UserCursoOne.fun.selectExtras(res[0]);
                    UserCursoOne.crud.selectSeccionesByCurso_id();
                    action();
                } else {
                    UserCursoOne.view.masterContainerCurso.innerHTML = `
                        <div class="not-found">
                            <img src="view/src/files/informacion_pagina_logo/${ Informacion.getInformacion().informacion_pagina_logo }" />
                            <span>Sin resultados..</span>
                        </div>
                    `;
                }
            });
        },
        selectSeccionesByCurso_id: () => {
            if (UserCursoOne.curso_id !== 0) {
                let formData = new FormData();
                formData.append("curso_id", UserCursoOne.curso_id);
                Curso_seccionDao.selectByCurso_id(formData).then(res => {
                    UserCursoOne.fun.selectTemario(res);
                });
            }
        },
        selectRequisito: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                RequisitoDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectRequisito(res);
                });
            }
        },
        selectObjetivo: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                ObjetivoDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectObjetivo(res);
                });
            }
        },
        selectPrimario: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Contenido_primarioDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectPrimario(res);
                });
            }
        },
        selectSecundario: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Contenido_secundarioDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectSecundario(res);
                });
            }
        },
        selectTransversal: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Contenido_transversalDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectTransversal(res);
                });
            }
        },
        selectEstrategia: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                EstrategiaDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectEstrategia(res);
                });
            }
        },
        selectDiagnostica: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Evaluacion_diagnosticaDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectDiagnostica(res);
                });
            }
        },
        selectFormativa: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Evaluacion_formativaDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectFormativa(res);
                });
            }
        },
        selectFinal: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Evaluacion_finalDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectFinal(res);
                });
            }
        },
        selectAprendizaje: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                Entorno_aprendizajeDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectAprendizaje(res);
                });
            }
        },
        selectBibliografia: () => {
            if (UserCursoOne.curso_modelo_id !== 0) {
                let formData = new FormData();
                formData.append("curso_modelo_id", UserCursoOne.curso_modelo_id);
                BibliografiaDao.selectByCurso_modelo_id(formData).then(res => {
                    UserCursoOne.fun.selectBibliografia(res);
                });
            }
        }
    },
    fun: {
        selectExtras: (register) => {
            if (register.curso_certificado_live == 1) {
                UserCursoOne.view.extrasContainer.innerHTML = `
                    <div class="tittle"><span>CERTIFICADO DE APROBACIÓN</span></div>
                        <div class="descripcion__container">
                            <div class="item" id="container__curso__descripcion">
                                <div class="tittle"><span>Descripción</span></div>
                                <button class="desplegar" onclick="UserCursoOne.fun.selectDescripcion()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__requisitos">
                                <div class="tittle"><span>Requisitos Minimos</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectRequisito()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__objetivos">
                                <div class="tittle"><span>Objetivos del Curso</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectObjetivo()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__primario">
                                <div class="tittle"><span>Temas Principales</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectPrimario()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__secundario">
                                <div class="tittle"><span>Temas Secundarios</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectSecundario()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__transversal">
                                <div class="tittle"><span>Temas Transversales</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectTransversal()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__estrategia">
                                <div class="tittle"><span>Estrategias de Enseñanza - Aprendizaje</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectEstrategia()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__diagnostica">
                                <div class="tittle"><span>Evaluación Diagnóstica</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectDiagnostica()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__formativa">
                                <div class="tittle"><span>Evaluación Proceso Formativo</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectFormativa()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__final">
                                <div class="tittle"><span>Evaluación Proceso Final</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectFinal()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__aprendizaje">
                                <div class="tittle"><span>Entorno Aprendizaje</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectAprendizaje()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                            <div class="item" id="container__curso__bibliografia">
                                <div class="tittle"><span>Bibliografía</span></div>
                                <button class="desplegar" onclick="UserCursoOne.crud.selectBibliografia()">
                                    <span>Ver</span>
                                    <img src="view/src/icon/in.png">
                                </button>
                            </div>
                        </div>
                `;
                UserCursoOne.view.declare();
            }
        },
        getHtmlHeader: (register) => {
            return `
                <div class="col col-1">
                    <div class="tittle tittle-1"><span>${ register.curso_nombre }</span></div>
                    <div class="row">
                        <img src="view/src/icon/graduation_cap.png">
                        <b>MODALIDAD: </b>
                        ${
                            FunctionCurso.fun.isProximo(register) ? `
                                <span>Próximo</span>
                                <img class="type" src="view/src/icon/next.png">
                            ` : FunctionCurso.fun.isLive(register) ? `
                                <span>En Vivo</span>
                                <img class="type" src="view/src/icon/live.png">
                            ` : FunctionCurso.fun.isRecord(register) ? `
                                <span>Virtual</span>
                                <img class="type" src="view/src/icon/online.png">
                            ` : FunctionCurso.fun.isProcess(register) ? `
                                <span>Proceso</span>
                                <img class="type" src="view/src/icon/time.png">
                            ` : ``
                        }
                    </div>
                    ${ !FunctionCurso.fun.isRecord(register) ? `
                        <div class="row">
                            <img src="view/src/icon/time.png">
                            <b>DESDE: </b>
                            <span>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1) }</span>
                        </div>
                        <div class="row">
                            <img src="view/src/icon/time.png">
                            <b>HASTA: </b>
                            <span>${ Fecha.getString(Fecha.getDate(register.curso_fecha_fin), 1) }</span>
                        </div>    
                        <div class="row">
                            <img src="view/src/icon/information.png">
                            <b>CUPOS: </b>
                            ${ FunctionCurso.fun.getCupos(register, UserCursoInscripcion.database) > 0 ? `
                                <span>${ FunctionCurso.fun.getCupos(register, UserCursoInscripcion.database) }</span>
                            ` : `
                                <span class="cupos-agotados">Cupos Agotados</span>
                            `}
                        </div>
                    ` : `` }
                    <div class="row">
                        <img src="view/src/icon/whatsapp.png">
                        <b>GRUPO: </b>
                        <a target="_blank" href="${ register.curso_whatsapp }">
                            <span>Grupo Whatsapp</span>
                            <img src="view/src/icon/link.png">
                        </a>
                    </div>
                    ${ FunctionCurso.fun.isRecord(register) ? `
                        <div class="row">
                            <img src="view/src/icon/star.png">
                            <b>CALIFICACIÓN: </b>
                            <img src="view/src/icon/star_${ register.curso_calificacion }.png" class="calificacion">
                        </div>
                    ` : `` }
                    ${ !FunctionCurso.fun.isProximo(register) ? `
                        <div class="row">
                            <img src="view/src/icon/dollar.png">
                            <b>PRECIO: </b>
                            <span>
                            ${ FunctionCurso.fun.isLive(register) && register.curso_precio_live != 0 ? `
                                    <b class="precio-before">$${ ((parseFloat(register.curso_precio_live) * 0.40) + parseFloat(register.curso_precio_live)) }</b>
                                    <b class="precio-after">$${ register.curso_precio_live }</b>
                                `: FunctionCurso.fun.isRecord(register) && register.curso_precio_record != 0 ? `
                                    <b class="precio-before">$${ ((parseFloat(register.curso_precio_record) * 0.40) + parseFloat(register.curso_precio_record)) }</b>
                                    <b class="precio-after">$${ register.curso_precio_record }</b>
                                ` : `
                                    <b class="precio-gratis">GRATIS</b>
                                ` }
                            </span>
                        </div>
                    ` : `` }
                    ${ register.curso_certificacion_live == 1 ? `
                        <div class="row medall">
                            <img class="no-filter" src="view/src/icon/curso_certificate_oro.png">
                            <b>Título de Certificación</b>
                        </div>
                    ` : ''}
                    ${ register.curso_certificado_live == 1 ? `
                        <div class="row medall">
                            <img class="no-filter" src="view/src/icon/curso_certificate_plata.png">
                            <b>Certificado de Aprobación</b>
                        </div>
                    ` : ''}
                    <div class="row medall">
                        <img class="no-filter" src="view/src/icon/curso_certificate_bronce.png">
                        <b>Certificado de Participación</b>
                    </div>
                    ${ !FunctionCurso.fun.isProximo(register) && !FunctionCurso.fun.isProcess(register) && FunctionCurso.fun.getCupos(register, UserCursoInscripcion.database) > 0 ? `
                        <div class="row button">
                            <button onclick="UserCursoInscripcion.fun.insert()">
                                <span>SUBSCRIBIRSE</span>
                                <img src="view/src/icon/viewed.png">
                            </button>
                        </div>
                    ` : `` }
                </div>
                <div class="col col-2">
                    <div class="tittle tittle-2"><span>${ register.curso_nombre }</span></div>
                    <img 
                        class="curso-foto"
                        src="${ register.curso_foto == null ? `view/src/img/course.png` : `view/src/files/curso_foto/${ register.curso_foto }` }">
                </div>
            `;
        },
        getHtmlUsuario: (register) => {
            return `
                <div class="tittle"><span>DOCENTE</span></div>
                    <div class="cols">
                        <div class="col center">
                            <div 
                                class="usuario_foto"
                                style="background-image: 
                                ${ register.usuario_foto == null ?
                                    `url('view/src/img/avatar.png')` :
                                    `url('view/src/files/usuario_foto/${ register.usuario_foto }')`
                                }"></div>
                            <div class="row">
                                <a class="go-profile" href="?page=user_profile&usuario_id=${ register.usuario_id }">
                                    <span>VER PERFIL</span>
                                    <img src="view/src/icon/link.png">
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="tittle"><span>Información de Contacto</span></div>
                            <div class="row">
                                <img src="view/src/icon/user.png">
                                <b>NOMBRE: </b>
                                <span>${ register.usuario_nombre }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/calendar.png">
                                <b>EDAD: </b>
                                <span>${ Fecha.getAge(register.usuario_nacimiento) } años</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/gender.png">
                                <b>SEXO: </b>
                                <span>${ register.usuario_sexo }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/world.png">
                                <b>PAIS: </b>
                                <span>${ register.usuario_pais_nombre }</span>
                                <img class="bandera" src="view/src/files/usuario_pais_bandera/${ register.usuario_pais_bandera }">
                            </div>
                            <div class="row">
                                <img src="view/src/icon/graduation_cap.png">
                                <b>NIVEL ACADÉMICO: </b>
                                <span>${ register.usuario_nivel }</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="tittle"><span>Información Laboral</span></div>
                            <div class="row">
                                <img src="view/src/icon/company.png">
                                <b>EMPRESA: </b>
                                <span>${ register.usuario_empresa_nombre }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/activity.png">
                                <b>LABOR: </b>
                                <span>${ register.usuario_empresa_actividad }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/cellphone.png">
                                <b>TELEFONO/CELULAR: </b>
                                <span>${ register.usuario_empresa_telefono }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/home2.png">
                                <b>DIRECCIÓN/CIUDAD: </b>
                                <span>${ register.usuario_empresa_direccion }</span>
                            </div>
                            <div class="row">
                                <img src="view/src/icon/file.png">
                                <b>CURRICULUM: </b>
                                <a target="_blank" href="view/src/files/usuario_curriculum/${ register.usuario_curriculum }">
                                    <span>Abrir PDF</span>
                                    <img src="view/src/icon/link.png">
                                </a>
                            </div>
                        </div>
                    </div>
            `;
        },
        getHtmlLi: (text) => {
            return `
                <li><span>${ text }</span></li>
            `;
        },
        getHtmlTr: (array) => {
            let html = '';
            for (let i of array) {
                html += `<td><span>${ i }</span></td>`;
            }
            return `<tr>${ html }</tr>`;
        },
        getHtmlDescripcion: (register) => {
            return `
                <div class="tittle"><span>Descripción</span></div>
                    <div class="row">
                        <img src="view/src/icon/activity.png">
                        <b>AREA: </b>
                        <span>${ register.area_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/equal.png">
                        <b>ESPECIFICACIÓN: </b>
                        <span>${ register.especificacion_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/alineacion.png">
                        <b>ALINEACION AL EJE DE LA ANC: </b>
                        <span>${ register.alineacion_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/users.png">
                        <b>TIPO DE PARTICIPANTE: </b>
                        <span>${ register.participante_tipo_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/graduation_cap.png">
                        <b>MODALIDAD: </b>
                        <span>${ register.modalidad_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/time.png">
                        <b>DURACIÓN: </b>
                        <span>${ register.duracion_descripcion }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/time.png">
                        <b>HORAS TEÓRICAS: </b>
                        <span>${ register.curso_modelo_hora_teorica }</span>
                    </div>
                    <div class="row">
                        <img src="view/src/icon/time.png">
                        <b>HORAS PRÁCTICAS: </b>
                        <span>${ register.curso_modelo_hora_practica }</span>
                    </div>
            `;
        },
        selectHeader: (register) => {
            UserCursoOne.view.headerContainer.innerHTML = UserCursoOne.fun.getHtmlHeader(register);
        },
        selectUsuario: (register) => {
            UserCursoOne.view.usuarioContainer.innerHTML = UserCursoOne.fun.getHtmlUsuario(register);
        },
        selectTemario: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.curso_seccion_nombre);
            }
            UserCursoOne.view.temarioContainer.innerHTML = `
                <div class="tittle"><span>TEMARIO</span></div>
                <ol class="temario__content">${ html }</ol>
            `;
        },
        selectDescripcion: () => {
            if (UserCursoOne.curso !== 0) {
                UserCursoOne.view.descripcionContainer.innerHTML = UserCursoOne.fun.getHtmlDescripcion(UserCursoOne.curso);
            }
        },
        selectRequisito: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.requisito_descripcion);
            }
            UserCursoOne.view.requisitosContainer.innerHTML = `
                <div class="tittle"><span>Requisitos Minimos</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectObjetivo: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.objetivo_descripcion);
            }
            UserCursoOne.view.objetivosContainer.innerHTML = `
                <div class="tittle"><span>Objetivos del Curso</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectPrimario: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.contenido_primario_descripcion);
            }
            UserCursoOne.view.primarioContainer.innerHTML = `
                <div class="tittle"><span>Temas Principales</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectSecundario: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.contenido_secundario_descripcion);
            }
            UserCursoOne.view.secundarioContainer.innerHTML = `
                <div class="tittle"><span>Temas Secundarios</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectTransversal: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.contenido_transversal_descripcion);
            }
            UserCursoOne.view.transversalContainer.innerHTML = `
                <div class="tittle"><span>Temas Transversales</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectEstrategia: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.estrategia_descripcion);
            }
            UserCursoOne.view.estrategiaContainer.innerHTML = `
                <div class="tittle"><span>Estrategias de Enseñanza - Aprendizaje</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        },
        selectDiagnostica: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlTr([i.evaluacion_diagnostica_tecnica, i.evaluacion_diagnostica_instrumento, i.evaluacion_diagnostica_descripcion]);
            }
            UserCursoOne.view.diagnosticaContainer.innerHTML = `
                <div class="tittle"><span>Evaluación Diagnóstica</span></div>
                <table class="content-table" border="1">
                    <thead>
                        <tr>
                            <td><span>Técnica</span></td>
                            <td><span>Instrumento</span></td>
                            <td><span>Descripción</span></td>
                        </tr>
                    </thead>
                    <tbody>${ html }</tbody>
                </table>
            `;
        },
        selectFormativa: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlTr([i.evaluacion_formativa_tecnica, i.evaluacion_formativa_instrumento, i.evaluacion_formativa_descripcion]);
            }
            UserCursoOne.view.formativaContainer.innerHTML = `
                <div class="tittle"><span>Evaluación Proceso Formativo</span></div>
                <table class="content-table" border="1">
                    <thead>
                        <tr>
                            <td><span>Técnica</span></td>
                            <td><span>Instrumento</span></td>
                            <td><span>Descripción</span></td>
                        </tr>
                    </thead>
                    <tbody>${ html }</tbody>
                </table>
            `;
        },
        selectFinal: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlTr([i.evaluacion_final_tecnica, i.evaluacion_final_instrumento, i.evaluacion_final_descripcion]);
            }
            UserCursoOne.view.finalContainer.innerHTML = `
                <div class="tittle"><span>Evaluación Proceso Final</span></div>
                <table class="content-table" border="1">
                    <thead>
                        <tr>
                            <td><span>Técnica</span></td>
                            <td><span>Instrumento</span></td>
                            <td><span>Descripción</span></td>
                        </tr>
                    </thead>
                    <tbody>${ html }</tbody>
                </table>
            `;
        },
        selectAprendizaje: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlTr([i.entorno_aprendizaje_instalaciones, i.entorno_aprendizaje_teorica, i.entorno_aprendizaje_practica]);
            }
            UserCursoOne.view.aprendizajeContainer.innerHTML = `
                <div class="tittle"><span>Evaluación Proceso Final</span></div>
                <table class="content-table" border="1">
                    <thead>
                        <tr>
                            <td><span>Instalaciones</span></td>
                            <td><span>Fase Teórica</span></td>
                            <td><span>Fase Práctica</span></td>
                        </tr>
                    </thead>
                    <tbody>${ html }</tbody>
                </table>
            `;
        },
        selectBibliografia: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoOne.fun.getHtmlLi(i.bibliografia_descripcion);
            }
            UserCursoOne.view.bibliografiaContainer.innerHTML = `
                <div class="tittle"><span>Bibliografía</span></div>
                <ol class="list__container">${ html }</ol>
            `;
        }
    }
}