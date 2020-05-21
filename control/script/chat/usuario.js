const usuario = {
    MAX_PRINT: 50,
    fun: {
        // index in ChatCrud.usuario.database[thisIndex]
        // queryConnected 'true' devuelve solo usuarios conectados o 'false' solo desconectados
        getHtml: (index, queryConnected) => {
            let register = ChatCrud.usuario.database[index];
            let connected = usuario.fun.isConnected(index);
            if (connected === queryConnected) {
                return `
                    <div class="contact ${ connected ? 'connect' : '' }" onclick="chat.open(${index})">
                        <img src="${register.usuario_foto !== null ? "view/src/files/usuario_foto/" + register.usuario_foto : "view/src/img/avatar.png"}">
                        <div class="user">
                            <div class="name">
                                <span>${register.usuario_nombre}</span>
                            </div>
                            <div class="type">
                                <span>${register.usuario_tipo_nombre}</span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return "";
            }
        },
        isConnected: (index) => {
            let register = ChatCrud.usuario.database[index];
            let date_server = new Date(ChatCrud.usuario.date);
            date_server = date_server.setMinutes(date_server.getMinutes() - 5);
            let date_contact = new Date(register.usuario_fecha_conexion);
            return date_contact > date_server;
        },
        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let usuario_tmp = ChatCrud.usuario.database;
                let html = ``;
                for (let i in usuario_tmp) {
                    if (
                        textSearch === usuario_tmp[i].usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === usuario_tmp[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += usuario.fun.getHtml(i, true);
                    }
                }
                for (let i in usuario_tmp) {
                    if (
                        textSearch === usuario_tmp[i].usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === usuario_tmp[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += usuario.fun.getHtml(i, false);
                    }
                }
                ChatView.contactContainer.innerHTML = html;
            } else {
                usuario.printContacts();
            }
        }
    },
    printContacts: () => {
        let html = ``;
        let cont = 0;
        for (let i in ChatCrud.usuario.database) {
            let html_temp = usuario.fun.getHtml(i, true);
            if (cont <= usuario.MAX_PRINT) {
                if (html_temp !== "") {
                    cont++;
                    html += html_temp;
                }
            } else {
                i = ChatCrud.usuario.database.length;
            }
        }
        for (let i in ChatCrud.usuario.database) {
            let html_temp = usuario.fun.getHtml(i, false);
            if (cont <= usuario.MAX_PRINT) {
                if (html_temp !== "") {
                    cont++;
                    html += html_temp;
                }
            } else {
                i = ChatCrud.usuario.database.length;
            }
        }
        ChatView.contactContainer.innerHTML = html;
    }
}