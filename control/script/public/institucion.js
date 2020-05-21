const Institucion = {
    database: {},
    view: {},
    crud: {
        select: async () => {
            await InstitucionDao.select().then(res => {
                Institucion.database = res;
                Institucion.fun.select();
            }).catch(res => console.log("Institucion => QUERY DENIED"));
        }
    },
    fun: {
        getHtmlItem: (register) => {
            return `
                <a class="item" target="_blank" href="${register.institucion_link}">
                    <img src="view/src/files/institucion_logo/${register.institucion_logo}">
                    <div class="text">
                        <span class="siglas">${register.institucion_siglas}</span>
                        <span class="nombre">${register.institucion_nombre}</span>
                    </div>
                </a>
            `;
        },
        select: () => {
            let html = "";
            for (let i of Institucion.database) {
                html += Institucion.fun.getHtmlItem(i);
            }
            document.getElementById("footer-institucion").innerHTML = html;
        }
    }
}