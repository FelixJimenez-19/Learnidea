const UserCursoManyMain = () => {
    UserCursoMany.crud.select();
    UserCursoMany.view.search.onkeyup = (evt) => UserCursoMany.fun.search(evt);
}
const UserCursoMany = {
    database: [],
    MAX: 5,
    view: {
        masterContainerCursos: document.getElementById("container__cursos"),
        containerCursos: document.getElementById("sub-container-cursos"),
        search: document.getElementById("idea_search")
    },
    crud: {
        select: () => {
            CursoDao.select().then(res => {
                UserCursoMany.database = res;
                UserCursoMany.fun.select(UserCursoMany.database);
            });
        },
    },
    fun: {
        getHtmlItem: (register) => {
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
        select: (array) => {
            let html = ``;
            let cont = 0;
            let cont2 = 0;
            for (let i of array) {
                if (cont < UserCursoMany.MAX) {
                    html += UserCursoMany.fun.getHtmlItem(i);
                    cont++;
                }
                cont2++;
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <button onclick="UserCursoMany.fun.verMas()" class="curso-item ver-mas">
                            <img src="view/src/icon/in.png">
                            <span>Ver mas</span>
                        </button>
                    `;
                }
                UserCursoMany.view.containerCursos.innerHTML = html;
            } else {
                UserCursoMany.view.containerCursos.innerHTML = `
                    <div class="not-found">
                        <img src="view/src/files/informacion_pagina_logo/${ Informacion.getInformacion().informacion_pagina_logo }" />
                        <span>Sin resultados..</span>
                    </div>
                `;
            }
        },
        verMas: () => {
            UserCursoMany.MAX += UserCursoMany.MAX;
            UserCursoMany.fun.select(UserCursoMany.database);
        },
        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let array = [];
                for (let i in UserCursoMany.database) {
                    let register = UserCursoMany.database[i];
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
                UserCursoMany.fun.select(array);
            } else {
                UserCursoMany.fun.select(UserCursoMany.database);
            }
        }
    }
}