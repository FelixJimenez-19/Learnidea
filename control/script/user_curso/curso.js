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
    crud: {
        selectCursos: () => {
            CursoDao.select().then(res => {
                UserCurso.database_cursos = res;
                UserCurso.fun.selectCursos(UserCurso.database_cursos);
            });
        },
        selectCurso: (master_curso_id) => {
            let formData = new FormData();
            formData.append("curso_id", master_curso_id);
            CursoDao.selectById(formData).then(res => {
                if(res.length > 0) {
                    console.log("SI");
                } else {
                    console.log("NO");
                }
            });
        }
    },
    fun: {
        ini: (master_curso_id) => {
            if (master_curso_id === 0) {
                UserCurso.crud.selectCursos();
                UserCurso.view.masterContainerCursos.style.display = "block";
                UserCurso.view.masterContainerCurso.style.display = "none";
            } else {
                UserCurso.crud.selectCurso(master_curso_id);
                UserCurso.view.masterContainerCurso.style.display = "block";
                UserCurso.view.masterContainerCursos.style.display = "none";
            }
        },
        getHtmlItemCursos: (register) => {
            return `
                <div class="curso-item">
                    <div 
                        class="curso-foto" 
                        onclick="viewscreen.show('${register.curso_foto !== null ? "view/src/files/curso_foto/" + register.curso_foto : "view/src/img/course.png"}')"
                        style="background-image: 
                        ${ register.curso_foto == null ?
                            `url('view/src/img/course.png')` :
                            `url('view/src/files/curso_foto/${ register.curso_foto }')`
                        }">
                        ${ 
                            // LIVE
                            ((Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio))) > 0 && register.curso_visible == 1 && register.curso_proximo == 0) ? `
                                <div class="curso-tipo">
                                    <img src="view/src/icon/live.png">
                                    <span>En Vivo</span>
                                </div>
                            ` : 
                            // RECORD
                            ((Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin))) < 0 && register.curso_visible == 1 && register.curso_proximo == 0) ? `
                                <div class="curso-tipo">
                                    <img src="view/src/icon/online.png">
                                    <span>Virtual</span>
                                </div>
                            ` : 
                            // PROXIMO
                            (register.curso_visible == 1 && register.curso_proximo == 1) ? `
                                <div class="curso-tipo">
                                    <img src="view/src/icon/next.png">
                                    <span>Próximo</span>
                                </div>
                            ` :``
                        }
                        <span class="text curso-precio-pseudos"></span>
                        ${ register.curso_precio_record == 0 ? 
                            `<span class="text curso-gratis">Gratis</span>` :
                            `<span class="text curso-precio">$${ register.curso_precio_record }</span>`
                        }
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        ${ ((Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin))) < 0 && register.curso_visible == 1 && register.curso_proximo == 0) ? `` : `
                            <div class="text"><span>FECHA: </span>
                                <p>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1) }</p>
                            </div>
                            <div class="text curso-cupos"><span>CUPOS: </span>
                                <p>${ register.curso_cupos }</p>
                            </div>
                            <div class="text"><span>HORAS: </span>
                                <p>${ parseInt(register.curso_modelo_hora_practica) + parseInt(register.curso_modelo_hora_teorica) }</p>
                            </div>
                        ` }
                        ${ (register.curso_visible == 1 && register.curso_proximo == 1) ? `
                            <span class="proximo">PROXIMAMENTE</span>
                        ` : `
                            <a href="?page=user_curso&curso_id=${ register.curso_id }">Subscribirse</a>
                        ` }
                        <div class="text docente-foto-container">
                            <a href="?page=user_profile&usuario_id=${ register.usuario_id }">
                                <div class="docente-foto" style="background-image: 
                                ${ register.usuario_foto == null ?
                                    `url('view/src/img/avatar.png')` :
                                    `url('view/src/files/usuario_foto/${ register.usuario_foto }')`
                                }"></div>
                                <p>${ register.usuario_nombre }</p>
                            </a>
                            <div placeholder="Certificado de Participación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_bronce.png')"></div>
                            ${ register.curso_certificado_live == 1 ? `<div placeholder="Certificado de Aprobación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_plata.png')"></div>` : ''}
                            ${ register.curso_certificacion_live == 1 ? `<div placeholder="Título de Certificación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_oro.png')"></div>` : ''}
                            ${ ((Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin))) < 0 && register.curso_visible == 1 && register.curso_proximo == 0) ? `
                                <div class="curso-calificacion" style="background-image: url('view/src/icon/star_${ register.curso_calificacion }.png')"></div>
                            ` : `` }
                        </div>
                    </div>
                </div>
            `;
        },
        selectCursos: (array) => {
            let html = ``;
            let cont = 0;
            let cont2 = 0;
            for (let i of array) {
                if (cont < UserCurso.MAX) {
                    html += UserCurso.fun.getHtmlItemCursos(i);
                    cont++;
                }
                cont2++;
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <button onclick="UserCurso.fun.verMasCursos()" class="curso-item ver-mas">
                            <img src="view/src/icon/in.png">
                            <span>Ver mas</span>
                        </button>
                    `;
                }
                UserCurso.view.containerCursos.innerHTML = html;
            } else {
                UserCurso.view.containerCursos.innerHTML = `
                    <div class="not-found">
                        <span>Sin resultados..</span>
                        <img src="view/src/files/informacion_pagina_logo/${ Informacion.getInformacion().informacion_pagina_logo }" />
                    </div>
                `;
            }
        },
        verMasCursos: () => {
            UserCurso.MAX += UserCurso.MAX;
            UserCurso.fun.selectCursos(UserCurso.database_cursos);
        },
        searchCursos: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let array = [];
                for (let i in UserCurso.database_cursos) {
                    let register = UserCurso.database_cursos[i];
                    if (
                        textSearch === register.curso_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === register.usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1).substring(0, textSearch.length).toLowerCase()
                    ) {
                        array.push(register);
                    } else if (
                        (textSearch === "gratis".substring(0, textSearch.length) || textSearch == "0") && register.curso_precio_record == 0
                    ) {
                        array.push(register);
                    }
                }
                UserCurso.fun.selectCursos(array);
            } else {
                UserCurso.fun.selectCursos(UserCurso.database_cursos);
            }
        }
    }
}

UserCurso.view.search.onkeyup = (evt) => UserCurso.fun.searchCursos(evt);

UserCursoMain();