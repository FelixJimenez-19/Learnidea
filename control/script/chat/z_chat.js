const chat = {
    view: {
        contactContainer: document.getElementById("contact-container"),
        chatContainer: document.getElementById("chat-container"),
        msgNotificationContainer: document.getElementById("msg-notification-container"),
        contactSearch: document.getElementById("contact-search"),
        checkboxContactSound: document.getElementById("checkbox-contact-sound"),
        checkboxNewMsg: document.getElementById("checkbox-new-msg"),
    },
    fun: {
        getHtmlTrConnect: (register, index) => {
            let date_servidor = new Date(chat.usuario.servidor_fecha);
            let date_contact = new Date(register.usuario_fecha_conexion);
            date_servidor.setMinutes(date_servidor.getMinutes() - 10);
            if (date_contact > date_servidor) {
                return `
                    <div class="contact" onclick="chat.conversacion.fun.open(${index}, true)">
                        <img src="${register.usuario_foto !== null ? "view/src/files/usuario_foto/" + register.usuario_foto : "view/src/img/avatar.png"}" class="connect">
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
        getHtmlTrDisconnect: (register, index) => {
            let date_servidor = new Date(chat.usuario.servidor_fecha);
            let date_contact = new Date(register.usuario_fecha_conexion);
            date_servidor.setMinutes(date_servidor.getMinutes() - 10);
            if (date_contact <= date_servidor) {
                return `
                    <div class="contact" onclick="chat.conversacion.fun.open(${index}, false)">
                        <img src="${register.usuario_foto !== null ? "view/src/files/usuario_foto/" + register.usuario_foto : "view/src/img/avatar.png"}" class="disconnect">
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
        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i in chat.contact.database) {
                    if (
                        textSearch === chat.contact.database[i].usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === chat.contact.database[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += chat.fun.getHtmlTrConnect(chat.contact.database[i], i);
                    }
                }
                for (let i in chat.contact.database) {
                    if (
                        textSearch === chat.contact.database[i].usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === chat.contact.database[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += chat.fun.getHtmlTrDisconnect(chat.contact.database[i], i);
                    }
                }
                chat.view.contactContainer.innerHTML = html;
            } else {
                chat.contact.fun.select();
            }
        },
    },
    usuario: {
        servidor_fecha: "",
        fun: {},
        crud: {
            updateFechaConexion: async () => {
                let formData = new FormData();
                formData.append("usuario_id", Session.getSession().usuario_id);
                await UsuarioDao.updateFechaConexion(formData).then((res) => {
                    chat.usuario.servidor_fecha = res.servidor_fecha;
                });
            },
        },
    },
    contact: {
        database: [],
        fun: {
            select: () => {
                let html = ``;
                for (let i in chat.contact.database) {
                    html += chat.fun.getHtmlTrConnect(chat.contact.database[i], i);
                }
                for (let i in chat.contact.database) {
                    html += chat.fun.getHtmlTrDisconnect(chat.contact.database[i], i);
                }
                chat.view.contactContainer.innerHTML = html;
            },
        },
        crud: {
            select: async () => {
                await UsuarioDao.select().then((res) => {
                    chat.contact.database = res;
                    chat.contact.fun.select();
                });
            },
        },
    },
    conversacion: {
        database: [],
        sound: new Audio("view/src/mp3/message.mp3"),
        msgVisto: false,
        fun: {
            open: (index, conected) => {
                if (document.getElementById(`checkbox-chat-item-${index}`)) {
                    document.getElementById(`checkbox-chat-item-${index}`).checked = true;
                } else {
                    chat.conversacion.database.length >= 3 ? chat.conversacion.database.pop() : "";
                    chat.conversacion.database.push({
                        conected: conected,
                        index: index,
                        checkbox: true,
                        contact: chat.contact.database[index],
                    });
                    chat.conversacion.fun.print(true);
                }
            },
            print: (save) => {
                let html = "";
                let tmp_fun = [];
                for (let i in chat.conversacion.database) {
                    let tmp = chat.conversacion.database[i];
                    html += `
                        <div class="item-container">
                            <input type="checkbox" id="checkbox-chat-item-${tmp.index}" ${tmp.checkbox ? "checked" : ""}>
                            <div class="item">
                                <label for="checkbox-chat-item-${tmp.index}" onclick="chat.conversacion.fun.saveCheckbox(${i}, ${tmp.index})">
                                    <input type="checkbox" id="checkbox-new-msg-${tmp.index}">
                                    <i class="${tmp.conected == true ? "connect" : "disconnect"}"></i>
                                    <div class="title-name"><span>${tmp.contact.usuario_nombre}</span></div>
                                    <i class="close"><img src="view/src/icon/close.png" onclick="chat.conversacion.fun.close(${i})"></i>
                                </label>
                                <div class="chat" id="message-contact-container-${tmp.index}"></div>
                                <div class="write">
                                    <textarea 
                                        placeholder="Escribe un mensaje.." 
                                        id="message-txt-${tmp.index}" 
                                        onclick="chat.conversacion.fun.setVisto(${tmp.index})">
                                    </textarea>
                                    <input type="file" accept="image/*" id="message-foto-${tmp.index}" />
                                </div>
                            </div>
                        </div>
                    `;
                    // onkeyup="chat.conversacion.fun.sendMsg(this, ${ tmp.index })"
                    tmp_fun.push(() => chat.conversacion.fun.loadMsg(tmp.index, tmp.contact, true, true));
                    tmp_fun.push(() => (document.getElementById(`message-txt-${tmp.index}`).onkeyup = (evt) => chat.conversacion.fun.sendMsg(evt, tmp.index, i)));
                }
                chat.view.chatContainer.innerHTML = html;
                for (let i of tmp_fun) {
                    i();
                }
                save ? chat.conversacion.fun.saveOpenChat() : "";
            },
            close: (index) => {
                chat.conversacion.database.splice(index, 1);
                chat.conversacion.fun.print(true);
            },
            saveCheckbox: (indexChat, indexContact) => {
                if (document.getElementById(`checkbox-chat-item-${indexContact}`)) {
                    chat.conversacion.database[indexChat].checkbox = !document.getElementById(`checkbox-chat-item-${indexContact}`).checked;
                }
            },
            loadMsg: async (indexContact, contact, rep, first) => {
                if (document.getElementById(`message-contact-container-${indexContact}`)) {
                    let container = document.getElementById(`message-contact-container-${indexContact}`);
                    // let textarea = document.getElementById(`message-txt-${indexContact}`);
                    let html = "";
                    let formData = new FormData();
                    formData.append("usuario_id1", Session.getSession().usuario_id);
                    formData.append("usuario_id2", contact.usuario_id);
                    formData.append("mensaje_visto", chat.conversacion.msgVisto === true ? 1 : 0); // True o False
                    chat.conversacion.msgVisto = false;
                    await MensajeDao.selectByUsuario_id1Usuario_id2(formData).then((res) => {
                        let mensaje_tmp = {};
                        for (let i in res) {
                            mensaje_tmp = res[i];
                            if (res[i].usuario1_id === Session.getSession().usuario_id) {
                                html += `
                                    <div class="msg me" title="${res[i].mensaje_fecha}" msg-count="${i}">
                                        <span class="texto-imagen-container">
                                            <p>${chat.conversacion.fun.getMsgUrl(res[i].mensaje_texto)}</p>
                                            ${res[i].mensaje_foto !== null ? `<img class="mensaje_foto" src="view/src/files/mensaje_foto/${res[i].mensaje_foto}" />` : ""}
                                        </span>
                                    </div>
                                `;
                            } else {
                                html += `
                                    <div class="msg to" title="${res[i].mensaje_fecha}" msg-count="${i}">
                                        <img src="view/src/files/usuario_foto/${res[i].usuario1_foto}">
                                        <span class="texto-imagen-container">
                                            <p>${chat.conversacion.fun.getMsgUrl(res[i].mensaje_texto)}</p>
                                            ${res[i].mensaje_foto !== null ? `<img class="mensaje_foto" src="view/src/files/mensaje_foto/${res[i].mensaje_foto}" />` : ""}
                                        </span>
                                    </div>
                                `;
                            }
                        }
                        // if (container.innerHTML != html) {
                        if ((html + "").split("msg-count").length > (container.innerHTML + "").split("msg-count").length) {
                            let top = true;
                            container.scrollTop + container.clientHeight < container.scrollHeight ? (top = false) : "";
                            container.innerHTML = html;
                            top ? (container.scrollTop = container.scrollHeight) : "";
                            if (rep && !first) {
                                chat.conversacion.sound.play(); //Sonido de la notificacion de mensaje nuevo
                                document.getElementById(`checkbox-new-msg-${indexContact}`).checked = true;
                                if (chat.view.checkboxContactSound.checked == true) {
                                    chat.conversacion.fun.talk(mensaje_tmp.usuario1_nombre + ", dice: " + mensaje_tmp.mensaje_texto);
                                }
                            }
                        }
                        if (mensaje_tmp.usuario1_id === Session.getSession().usuario_id && mensaje_tmp.mensaje_visto == true) {
                            let top = true;
                            container.scrollTop + container.clientHeight < container.scrollHeight ? (top = false) : "";
                            html += `<div class="msg_visto"><img src="view/src/icon/viewed.png" /><span>Visto</span></div>`;
                            container.innerHTML = html;
                            top ? (container.scrollTop = container.scrollHeight) : "";
                        }
                    });
                    // console.log("SI");
                    if (rep == true) {
                        setTimeout(() => chat.conversacion.fun.loadMsg(indexContact, contact, true, false), 10000); // Carga mensajes cada 10 segundos
                    }
                }
            },
            sendMsg: (evt, indexContact, indexChat) => {
                let msg = evt.srcElement;
                let foto = document.getElementById(`message-foto-${indexContact}`);
                // console.log(foto.value);
                if (evt.keyCode == 13 && !evt.shiftKey && (msg.value.trim() !== "" || foto.value !== "")) {
                    let formData = new FormData();
                    formData.append("mensaje_texto", msg.value);
                    formData.append("mensaje_foto", foto.files[0]);
                    formData.append("usuario_id1", Session.getSession().usuario_id);
                    formData.append("usuario_id2", chat.contact.database[indexContact].usuario_id);
                    MensajeDao.insert(formData).then((res) => {
                        chat.conversacion.fun.loadMsg(indexContact, chat.contact.database[indexContact], false, false);
                        msg.value = "";
                        foto.value = "";
                        msg.focus();
                    });
                }
                if (evt.keyCode == 27) {
                    chat.conversacion.fun.close(indexChat);
                }
            },
            talk: (msg) => {
                const synth = window.speechSynthesis;
                synth.speak(new SpeechSynthesisUtterance(msg));
            },
            saveOpenChat: () => {
                for (let i of chat.conversacion.database) {
                    i.checkbox = false;
                    i.contact.usuario_chat = "";
                }
                let formData = new FormData();
                formData.append("usuario_chat", JSON.stringify(chat.conversacion.database));
                formData.append("usuario_id", Session.getSession().usuario_id);
                UsuarioDao.updateUsuario_chat(formData).then((res) => {
                    // console.log(res);
                });
            },
            loadOpenChat: () => {
                let formData = new FormData();
                formData.append("usuario_id", Session.getSession().usuario_id);
                UsuarioDao.selectById(formData).then((res) => {
                    chat.conversacion.database = res[0].usuario_chat != "" && res[0].usuario_chat != null ? JSON.parse(res[0].usuario_chat) : [];
                    chat.conversacion.fun.print(false);
                });
            },
            getMsgUrl: (text) => {
                var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
                return text.replace(exp, "<a target='_blanck' href='$1'>$1</a>");
            },
            setVisto: (index) => {
                if (document.getElementById(`checkbox-new-msg-${index}`).checked == true) {
                    console.log("Visto");
                    document.getElementById(`checkbox-new-msg-${index}`).checked = false;
                    chat.conversacion.msgVisto = true;
                }
            },
        },
        crud: {},
    },
    notificacion: {
        database: [],
        firstSelect: true,
        fun: {
            select: () => {
                let msg_tmp = chat.notificacion.database;
                let html = ``;
                for (let i in msg_tmp) {
                    index = chat.contact.database.findIndex((element) => element.usuario_id === msg_tmp[i].usuario1_id);
                    html += `
                        <div class="item" onclick="chat.notificacion.fun.open(${index})" count="${i}">
                            <img src="view/src/files/usuario_foto/${msg_tmp[i].usuario1_foto}">
                            <div class="col1">
                                <span class="msg-user">${msg_tmp[i].usuario1_nombre}</span>
                                <span class="msg-text">${msg_tmp[i].mensaje_texto}</span>
                            </div>
                            <div class="col2">
                                <span class="msg-date">${msg_tmp[i].mensaje_fecha}</span>
                            </div>
                        </div>
                    `;
                    elementChat = document.getElementById(`checkbox-chat-item-${index}`);
                    // console.log(elementChat);
                    if (!chat.notificacion.firstSelect && index !== null && elementChat == null) {
                        chat.conversacion.sound.play(); //Sonido de la notificacion de mensaje nuevo
                        chat.notificacion.fun.open(index);
                        if (chat.view.checkboxContactSound.checked == true) {
                            chat.conversacion.fun.talk(msg_tmp[i].usuario1_nombre + ", dice: " + msg_tmp[i].mensaje_texto);
                        }
                    } else {
                        chat.notificacion.firstSelect = false;
                    }
                }
                msg_tmp.length > 0 ? (chat.view.checkboxNewMsg.checked = true) : (chat.view.checkboxNewMsg.checked = false);
                chat.view.msgNotificationContainer.innerHTML = html;
            },
            open: (index) => {
                let date_servidor = new Date(chat.usuario.servidor_fecha);
                let date_contact = new Date(chat.contact.database[index].usuario_fecha_conexion);
                date_servidor.setMinutes(date_servidor.getMinutes() - 10);
                if (date_contact > date_servidor) {
                    chat.conversacion.fun.open(index, true);
                } else {
                    chat.conversacion.fun.open(index, false);
                }
                chat.view.checkboxNewMsg.checked = false;
                document.getElementById(`checkbox-new-msg-${index}`).checked = true;
            },
        },
        crud: {
            select: () => {
                let formData = new FormData();
                formData.append("usuario_id", Session.getSession().usuario_id);
                formData.append("mensaje_visto", false);
                MensajeDao.selectByUsuario_idMensaje_visto(formData).then((res) => {
                    chat.notificacion.database = res;
                    chat.notificacion.fun.select();
                });
            },
        },
    },
};
