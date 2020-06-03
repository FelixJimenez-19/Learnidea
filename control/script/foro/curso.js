const ForoCursoMain = () => {
    ForoCurso.crud.select();
}

const ForoCurso = {
    database: [],
    MAX_COL2: 6,
    view: {
        cursosLiveContainer: document.getElementById("col2-cursos_live_container"),
        cursosLiveItems: document.getElementById("col2-cursos_live_items")
    },
    crud: {
        select: () => {
            CursoDao.select().then(res => {
                ForoCurso.database = res;
                ForoCurso.fun.selectCol2();
            });
        }
    },
    fun: {
        getHtmlCol2Live: (index) => {
            let register = ForoCurso.database[index];
            return `
                <div class="curso-item">
                    <div class="curso-foto" style="background-image: ${ register.curso_foto !== null ?  
                        `url(view/src/files/curso_foto/${ register.curso_foto })` : 
                        `url(view/src/img/course.png` }">
                        ${ register.curso_precio_live === 0 ? `
                                <span class="text curso-gratis">Gratis</span>
                        ` : `
                            <span class="text curso-precio">$${ register.curso_precio_live }</span>
                        `}
                        <span class="text curso-precio-pseudos"></span>
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        <div class="text"><span>FECHA: </span>
                            <p>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 0) }</p>
                        </div>
                        <a href="">Subscribirse</a>
                        <div class="text docente-foto-container">
                            <a href="">
                                <div class="docente-foto" style="background-image: 
                                    ${ register.usuario_foto == null ?`
                                        url('view/src/img/avatar.png')
                                    `:`
                                        url('view/src/files/usuario_foto/${ register.usuario_foto }')
                                    `}"></div>
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
        getHtmlCol2Proximo: (index) => {
            let register = ForoCurso.database[index];
            return `
                <div class="curso-item">
                    <div 
                        class="curso-foto" style="background-image: 
                        ${ register.curso_foto == null ?
                            `url('view/src/img/course.png')` :
                            `url('view/src/files/curso_foto/${ register.curso_foto }')`
                        }">
                        <span class="text curso-precio-pseudos"></span>
                        ${ register.curso_precio_live == 0 ? 
                            `<span class="text curso-gratis">Gratis</span>` :
                            `<span class="text curso-precio">$${ register.curso_precio_live }</span>`
                        }
                    </div>
                    <div class="curso-descripcion">
                        <span class="text curso-name">${ register.curso_nombre }</span>
                        <div class="text"><span>FECHA: </span>
                            <p>${ Fecha.getString(Fecha.getDate(register.curso_fecha_inicio), 1) }</p>
                        </div>
                        <span class="proximo">PROXIMAMENTE</span>
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
        selectCol2: () => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            for (let i in ForoCurso.database) {
                let register = ForoCurso.database[i];
                let diff = Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio));
                if (diff > 0 && register.curso_visible == 1 && register.curso_proximo == 0) {
                    if (cont < ForoCurso.MAX_COL2) {
                        html += ForoCurso.fun.getHtmlCol2Live(i);
                        cont++;
                    }
                    cont2++;
                }
            }

            for (let i in ForoCurso.database) {
                let register = ForoCurso.database[i];
                let diff = Fecha.getDiffDay(new Date(), Fecha.getDate(register.curso_fecha_inicio));
                if (register.curso_visible == 1 && register.curso_proximo == 1) {
                    if (cont < ForoCurso.MAX_COL2) {
                        html += ForoCurso.fun.getHtmlCol2Proximo(i);
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
                ForoCurso.view.cursosLiveItems.innerHTML = html + "<br>";
                ForoCurso.view.cursosLiveContainer.style.display = "flex";
            } else {
                ForoCurso.view.cursosLiveContainer.style.display = "none";
            }
        },
        scrollHorizontal: (direction, element_id) => {
            let element = document.getElementById(element_id);
            let increment = element.clientWidth;
            if (direction == 0) {
                element.scrollLeft -= increment;
            } else {
                element.scrollLeft += increment;
            }
        }
    }
}

ForoCursoMain();