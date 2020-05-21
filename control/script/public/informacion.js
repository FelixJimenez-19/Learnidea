const Informacion = {
    database: {},
    view: {},
    crud: {
        select: async () => {
            await InformacionDao.select().then(res => {
                Informacion.database = res[0];
                Informacion.fun.select();
            }).catch(res => console.log("INFORMACION => QUERY DENIED"));
        }
    },
    fun: {
        select: () => {
            document.title = Informacion.database.informacion_pagina_nombre;
            document.getElementById("head-favicon").href = `view/src/files/informacion_pagina_logo/${Informacion.database.informacion_pagina_logo}`;
            document.getElementById("head-logo-img").src = `view/src/files/informacion_pagina_logo/${Informacion.database.informacion_pagina_logo}`;
            document.getElementById("head-logo-span").innerText = Informacion.database.informacion_pagina_nombre;
            document.getElementById("footer-pagina-nombre").innerText = Informacion.database.informacion_pagina_nombre.toUpperCase();
            document.getElementById("footer-pagina-mision").innerText = Informacion.database.informacion_pagina_mision;
            document.getElementById("footer-pagina-vision").innerText = Informacion.database.informacion_pagina_vision;
            document.getElementById("footer-copyright").innerHTML = `
                Copyright © ${ new Date().getFullYear() }
                <a href="copyright" target="_blank" class="copyrigth">${Informacion.database.informacion_pagina_nombre}</a>. 
                Todos los derechos reservados.
            `;
        }
    }
}