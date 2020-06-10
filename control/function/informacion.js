const InformacionMain = () => {
    Informacion.crud.select();
}
const Informacion = {
    database: [],
    view: {
        favicon: document.getElementById("head-favicon"),
        toolTittle1: document.getElementById("informacion-panel-tool-tittle-1"),
        toolTittle2: document.getElementById("informacion-panel-tool-tittle-2"),
        toolLogo: document.getElementById("informacion-panel-tool-logo")
    },
    crud: {
        select: () => {
            InformacionDao.select().then(res => {
                Informacion.database = res;
                Informacion.fun.select();
            });
        }
    },
    fun: {
        select: () => {
            let info = Informacion.getInformacion();
            document.title = `${ info.informacion_pagina_nombre } - Panel`;
            Informacion.view.favicon.href = `view/src/files/informacion_pagina_logo/${ info.informacion_pagina_logo }`;
            Informacion.view.toolTittle1.innerText = info.informacion_pagina_nombre.toUpperCase();
            Informacion.view.toolTittle2.innerHTML = `${ info.informacion_pagina_nombre.slice(0, 1).toUpperCase() }. <p>${ info.informacion_pagina_nombre.slice(1, 2).toUpperCase() }.</p>`;
            Informacion.view.toolLogo.src = `view/src/files/informacion_pagina_logo/${ Informacion.getInformacion().informacion_pagina_logo }`;
        }
    },
    getInformacion: () => {
        return Informacion.database[0];
    }
}

InformacionMain();