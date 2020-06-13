const ForoInscripcionMain = () => {
    ForoInscripcion.crud.select();
}

const ForoInscripcion = {
    database: [],
    MAX_CURSOS: 4,
    MAX_CERTIFICADOS: 4,
    view: {
        contentCol1: document.getElementById("foro-col-1__content")
    },
    crud: {
        select: () => {
            CursoDao.select().then(res => {
                ForoInscripcion.database = res;
                ForoInscripcion.fun.select();
            });
        }
    },
    fun: {
        getHtmlCursos: (index) => {
            let register = ForoInscripcion.database[index];
            return `
                <a class="section__curso" href="">
                    <div 
                        class="img" 
                        style="background-image: ${ register.curso_foto !== null ?  `
                            url(view/src/files/curso_foto/${ register.curso_foto })
                        ` : `
                            url(view/src/img/course.png
                        ` }"></div>
                    <div class="description">
                        <span>${ register.curso_nombre }</span>
                    </div>
                </a>
            `;
        },
        getHtmlCertificados: (index) => {
            let register = ForoInscripcion.database[index];
            return `
                <a class="section__curso" href="">
                    <div 
                        class="img" 
                        style="background-image: ${ register.curso_foto !== null ?  `
                            url(view/src/files/curso_foto/${ register.curso_foto })
                        ` : `
                            url(view/src/img/course.png
                        ` }"></div>
                    <div class="description">
                        <span>${ register.curso_nombre }</span>
                        <div class="certificados__container">
                            <div placeholder="Certificado de Participacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_bronce.png')"></div>
                            ${ register.curso_certificado_live == 1 ? `<div placeholder="Certificado de Aprobacion" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_plata.png')"></div>` : ''}
                            ${ register.curso_certificacion_live == 1 ? `<div placeholder="Título de Certificación" class="curso-certificate" style="background-image: url('view/src/icon/curso_certificate_oro.png')"></div>` : ''}
                        </div>
                    </div>
                </a>
            `;
        },
        select: () => {
            let cont = 0;
            let cont2 = 0;
            let html_tmp = "";
            let html = "";


            for (let i in ForoInscripcion.database) {
                let register = ForoInscripcion.database[i];
                if (cont < ForoInscripcion.MAX_CURSOS) {
                    html_tmp += ForoInscripcion.fun.getHtmlCursos(i);
                    cont++;
                }
                cont2++;
            }
            if (cont > 0) {
                html += `<span class="section__tittle">MIS CURSOS</span>`;
                if (cont2 > cont) {
                    html_tmp += `
                        <button class="ver-mas" onclick="ForoInscripcion.fun.verMas(true)">
                            <img src="view/src/icon/in.png" />
                            <span>Ver más...</span>
                        </button>
                    `;
                }
                html += html_tmp;
            }


            cont = 0;
            cont2 = 0;
            html_tmp = "";
            for (let i in ForoInscripcion.database) {
                let register = ForoInscripcion.database[i];
                if (cont < ForoInscripcion.MAX_CERTIFICADOS) {
                    html_tmp += ForoInscripcion.fun.getHtmlCertificados(i);
                    cont++;
                }
                cont2++;
            }
            if (cont > 0) {
                html += `<span class="section__tittle">MIS CERTIFICADOS</span>`;
                if (cont2 > cont) {
                    html_tmp += `
                        <button class="ver-mas" onclick="ForoInscripcion.fun.verMas(false)">
                            <img src="view/src/icon/in.png" />
                            <span>Ver más...</span>
                        </button>
                    `;
                }
                html += html_tmp;
            }

            ForoInscripcion.view.contentCol1.innerHTML = html + "<br>";
        },
        // TRUE => CURSOS : FALSE => CERTIFICADOS
        verMas: (bool) => {
            if(bool) {
                ForoInscripcion.MAX_CURSOS += ForoInscripcion.MAX_CURSOS;
            } else {
                ForoInscripcion.MAX_CERTIFICADOS += ForoInscripcion.MAX_CERTIFICADOS;
            }
            ForoInscripcion.fun.select();
        }
    }
}

ForoInscripcionMain();