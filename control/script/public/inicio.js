const InicioMain = async () => {
    await InicioCurso.crud.select();
}

const InicioCurso = {
    database: [],
    MAX: 10,
    view: {
        containerLive: document.getElementById("curso-container-live"),
        containerRecord: document.getElementById("curso-container-record"),
        containerProximo: document.getElementById("curso-container-proximo"),
        navLive: document.getElementById("header-nav-live"),
        navVirtual: document.getElementById("header-nav-virtual"),
        navProximo: document.getElementById("header-nav-proximo"),
        seccionLive: document.getElementById("live"),
        seccionVirtual: document.getElementById("virtual"),
        seccionProximo: document.getElementById("proximo"),
    },
    crud: {
        select: () => {
            CursoDao.select().then(res => {
                InicioCurso.database = res;
                InicioCurso.fun.selectLive();
                InicioCurso.fun.selectRecord();
                InicioCurso.fun.selectProximo();
            }).catch(res => console.log(res));
        }
    },
    fun: {
        getLiveItem: (register, index) => {
            return `
                <div class="curso-item">
                    <div 
                        class="curso-foto" style="background-image: 
                        ${ register.curso_foto == null ?
                            `url('view/src/img/avatar.png')` :
                            `url('view/src/files/curso_foto/${ register.curso_foto }')`
                        }">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$${ register.curso_precio_live }</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        <div class="text"><span>FECHA: </span>
                            <p>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1) }</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>${ register.curso_cupos }</p>
                        </div>
                        <div class="text"><span>HORAS: </span>
                            <p>${ Fecha.getDiffHour(Fecha.getDate(register.curso_fecha_inicio), Fecha.getDate(register.curso_fecha_fin)) }</p>
                        </div>
                        <a href="">Subscribirse</a>
                        <div class="text docente-foto-container">
                            <a href="">
                                <div class="docente-foto" style="background-image: 
                                ${ register.usuario_foto == null ?
                                    `url('view/src/img/avatar.png')` :
                                    `url('view/src/files/usuario_foto/${ register.usuario_foto }')`
                                }"></div>
                                <p>${ register.usuario_nombre }</p>
                            </a>
                            <div placeholder="Certificado de Participacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_bronce.png')"></div>
                            ${ register.curso_certificado_live == 1 ? `<div placeholder="Certificado de Aprobacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_plata.png')"></div>` : ''}
                            ${ register.curso_certificacion_live == 1 ? `<div placeholder="Título de Certificación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_oro.png')"></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        },
        getRecordItem: (register, index) => {
            return `
                <div class="curso-item">
                    <div 
                        class="curso-foto" style="background-image: 
                        ${ register.curso_foto == null ?
                            `url('view/src/img/avatar.png')` :
                            `url('view/src/files/curso_foto/${ register.curso_foto }')`
                        }">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$${ register.curso_precio_record }</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        <a href="">Subscribirse</a>
                        <div class="text docente-foto-container">
                            <a href="">
                                <div class="docente-foto" style="background-image: 
                                ${ register.usuario_foto == null ?
                                    `url('view/src/img/avatar.png')` :
                                    `url('view/src/files/usuario_foto/${ register.usuario_foto }')`
                                }"></div>
                                <p>${ register.usuario_nombre }</p>
                            </a>
                            <div placeholder="Certificado de Participacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_bronce.png')"></div>
                            ${ register.curso_certificado_record == 1 ? `<div placeholder="Certificado de Aprobacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_plata.png')"></div>` : ''}
                            <div class="curso-calificacion" style="background-image: url('view/src/icon/star_${ register.curso_calificacion }.png')"></div>
                        </div>
                    </div>
                </div>
            `;
        },
        getProximoItem: (register, index) => {
            return `
                <div class="curso-item">
                    <div 
                        class="curso-foto" style="background-image: 
                        ${ register.curso_foto == null ?
                            `url('view/src/img/avatar.png')` :
                            `url('view/src/files/curso_foto/${ register.curso_foto }')`
                        }">
                        <span class="text curso-precio-pseudos"></span>
                        <span class="text curso-precio">$${ register.curso_precio_live }</span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        <div class="text"><span>FECHA: </span>
                            <p>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1) }</p>
                        </div>
                        <div class="text curso-cupos"><span>CUPOS: </span>
                            <p>${ register.curso_cupos }</p>
                        </div>
                        <div class="text"><span>HORAS: </span>
                            <p>${ Fecha.getDiffHour(Fecha.getDate(register.curso_fecha_inicio), Fecha.getDate(register.curso_fecha_fin)) }</p>
                        </div>
                        <div class="text docente-foto-container">
                            <a href="">
                                <div class="docente-foto" style="background-image: 
                                ${ register.usuario_foto == null ?
                                    `url('view/src/img/avatar.png')` :
                                    `url('view/src/files/usuario_foto/${ register.usuario_foto }')`
                                }"></div>
                                <p>${ register.usuario_nombre }</p>
                            </a>
                            <div placeholder="Certificado de Participacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_bronce.png')"></div>
                            ${ register.curso_certificado_live == 1 ? `<div placeholder="Certificado de Aprobacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_plata.png')"></div>` : ''}
                            ${ register.curso_certificacion_live == 1 ? `<div placeholder="Título de Certificación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_oro.png')"></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        },
        scrollHorizontal: (direction, element_id) => {
            let element = document.getElementById(element_id);
            let increment = element.clientWidth;
            if (direction == 0) {
                element.scrollLeft -= increment;
            } else {
                element.scrollLeft += increment;
            }
        },
        selectLive: () => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            for (let i in InicioCurso.database) {
                let register = InicioCurso.database[i];
                let diff = Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio));
                if (diff > 0 && register.curso_visible == 1 && register.curso_proximo == 0) {
                    if (cont < InicioCurso.MAX) {
                        html += InicioCurso.fun.getLiveItem(register, i);
                        cont++;
                    }
                    cont2++;
                };
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <a class="curso-item ver-mas" href="">
                            <img src="view/src/icon/box.png">
                            <span>Ver todos los cursos</span>
                        </a>
                    `;
                }
                InicioCurso.view.containerLive.innerHTML = html;
            } else {
                InicioCurso.view.navLive.style.display = "none";
                InicioCurso.view.seccionLive.style.display = "none";
            }
        },
        selectRecord: () => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            for (let i in InicioCurso.database) {
                let register = InicioCurso.database[i];
                let diff = Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_fin));
                if (diff < 0 && register.curso_visible == 1 && register.curso_proximo == 0) {
                    if (cont < InicioCurso.MAX) {
                        html += InicioCurso.fun.getRecordItem(register, i);
                        cont++;
                    }
                    cont2++;
                }
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <a class="curso-item ver-mas" href="">
                            <img src="view/src/icon/box.png">
                            <span>Ver todos los cursos</span>
                        </a>
                    `;
                }
                InicioCurso.view.containerRecord.innerHTML = html;
            } else {
                InicioCurso.view.navVirtual.style.display = "none";
                InicioCurso.view.seccionVirtual.style.display = "none";
            }
        },
        selectProximo: () => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            for (let i in InicioCurso.database) {
                let register = InicioCurso.database[i];
                let diff = Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio));
                // if (diff > 0 && register.curso_visible == 1 && register.curso_proximo == 1) {
                if (register.curso_visible == 1 && register.curso_proximo == 1) {
                    if (cont < InicioCurso.MAX) {
                        html += InicioCurso.fun.getProximoItem(register, i);
                        cont++;
                    }
                    cont2++;
                }
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <a class="curso-item ver-mas" href="">
                            <img src="view/src/icon/box.png">
                            <span>Ver todos los cursos</span>
                        </a>
                    `;
                }
                InicioCurso.view.containerProximo.innerHTML = html;
            } else {
                InicioCurso.view.navProximo.style.display = "none";
                InicioCurso.view.seccionProximo.style.display = "none";
            }
        },
    }
}

InicioMain();