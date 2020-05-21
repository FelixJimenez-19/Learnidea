const Contacto = {
    database: {},
    view: {},
    crud: {
        select: async () => {
            await ContactoDao.select().then(res => {
                Contacto.database = res;
                Contacto.fun.select();
            }).catch(res => console.log("Contacto => QUERY DENIED"));
        }
    },
    fun: {
        getHtmlItem: (register) => {
            return `
                <a target="_blank" href="${register.contacto_url}">
                    <img src="view/src/files/contacto_icon/${register.contacto_icon}">
                    <b>${register.contacto_nombre}</b>
                </a>
            `;
        },
        select: () => {
            let html = "";
            for (let i of Contacto.database) {
                html += Contacto.fun.getHtmlItem(i);
            }
            document.getElementById("footer-contacto").innerHTML = html;
        }
    }
}