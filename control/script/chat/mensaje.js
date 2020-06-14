const mensaje = {
    sound: new Audio("view/src/mp3/message.mp3"),
    fun: {
        prepareMsg: (msg) => {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
            return msg.replace(exp, "<a target='_blanck' href='$1'>$1</a>");
        },
        scrollToBottom: () => {},
        getHtml: (indexChat, indexMsg, last) => {
            let msg = ChatCrud.chat.database[indexChat].msg[indexMsg];
            let me = msg.usuario1_id === Session.getSession().usuario_id;
            return `
                <div class="msg ${ me ? 'me' : 'to'}" title="${ msg.mensaje_fecha }" msg-count="${ indexMsg }">
                    ${ me ? '' : msg.usuario1_foto !== null ? `<img src="view/src/files/usuario_foto/${ msg.usuario1_foto }"/>`: `<img src="view/src/img/avatar.png"/>`}
                    <span class="texto-imagen-container">
                        <p>${ mensaje.fun.prepareMsg(msg.mensaje_texto) }</p>
                        ${ msg.mensaje_foto !== null ? `
                            <img 
                                class="mensaje_foto" 
                                onclick="viewscreen.show('view/src/files/mensaje_foto/${ msg.mensaje_foto}')" 
                                src="view/src/files/mensaje_foto/${ msg.mensaje_foto}" 
                            />
                        ` : ""}
                    </span>
                </div>
                ${ last && msg.mensaje_visto == 1 && me ? 
                    `<div class="msg_visto">
                        <img src="view/src/icon/viewed.png" />
                        <span>Visto</span>
                    </div>` : ``}
            `;
        },
        getHtmlNotificacion: (res, indexContact, indexNotification) => {
            let notification = res[indexNotification];
            return `
                <div class="item" onclick="chat.open(${ indexContact })" count="${ indexNotification }">
                    <img src="${notification.usuario1_foto !== null ? "view/src/files/usuario_foto/" + notification.usuario1_foto : "view/src/img/avatar.png"}"/>
                    <div class="col1">
                        <span class="msg-user">${ notification.usuario1_nombre }</span>
                        <span class="msg-text">${ notification.mensaje_foto !== null ? 'Ha enviado una foto' : notification.mensaje_texto }</span>
                    </div>
                    <div class="col2">
                        <span class="msg-date">${ notification.mensaje_fecha }</span>
                    </div>
                </div>
            `;
        },
        notificar: (msg) => {
            let indexContact = ChatCrud.usuario.database.findIndex((element) => element.usuario_id === msg.usuario1_id);
            let elementChat = document.getElementById(`checkbox-chat-item-${indexContact}`) || null;
            if (indexContact !== null) {
                if (elementChat === null) {
                    chat.open(indexContact);
                }
                if (elementChat !== null) {
                    let indexChat = ChatCrud.chat.database.findIndex((element) => element.index === indexContact);
                    mensaje.print(indexChat);
                }
                document.getElementById(`checkbox-new-msg-${indexContact}`).checked = true;
            }
            mensaje.sound.play();
            if (ChatView.contactCheckboxNarration.checked === true) {
                mensaje.fun.talk(`${ msg.usuario1_nombre } te ha escrito`);
            }
        },
        talk: (msg) => {
            const synth = window.speechSynthesis;
            synth.speak(new SpeechSynthesisUtterance(msg));
        }
    },
    print: async (indexChat) => {
        // POR SI FALLA ALGO CON EL VER MAS, COMENTAR TODO LO QUE RESTA DE ESTA FUNCION Y DESCOMENTAR LO DE ABAJO DE ESTE COMENTARIO
        // let chat = ChatCrud.chat.database[indexChat] || null;
        // if (chat !== null) {
        //     let indexContact = chat.index;
        //     let msg_container = document.getElementById(`message-contact-container-${indexContact}`);
        //     let html = ``;
        //     await ChatCrud.mensaje.select(indexChat, async () => {
        //         for (let i in ChatCrud.chat.database[indexChat].msg) {
        //             html += mensaje.fun.getHtml(indexChat, i, ((ChatCrud.chat.database[indexChat].msg.length - 1) == i));
        //         }
        //         let top = (msg_container.scrollTop + msg_container.clientHeight) < msg_container.scrollHeight;

        //         await (() => (msg_container.innerHTML = html))();

        //         !top ? (msg_container.scrollTop = msg_container.scrollHeight) : "";
        //     });
        // }
        let chat = ChatCrud.chat.database[indexChat] || null;
        if (chat !== null) {
            let indexContact = chat.index;
            let msg_container = document.getElementById(`message-contact-container-${indexContact}`);
            let cont = 0;
            let cont2 = 0;
            let html = "";
            let html_tmp = "";
            let array = [];
            await ChatCrud.mensaje.select(indexChat, async () => {
                for (let i in ChatCrud.chat.database[indexChat].msg) {
                    if (cont < ChatCrud.chat.database[indexChat].MAX) {
                        array.push(mensaje.fun.getHtml(indexChat, i, ((ChatCrud.chat.database[indexChat].msg.length - 1) == i)));
                        cont++;
                    }
                    cont2++;
                }
                for (let i = array.length - 1; i >= 0; i--) {
                // for (let i in array) {
                    html_tmp += array[i];
                }
                if (cont > 0) {
                    if (cont2 > cont) {
                        html += `
                            <div class="msg ver-mas">
                                <button onclick="mensaje.verMas(${ indexChat })">
                                    <img src="view/src/icon/in.png">
                                    <span>Ver mas...</span>
                                </button>
                            </div>
                        `;
                    }
                    html += html_tmp;
                    let top = (msg_container.scrollTop + msg_container.clientHeight) < msg_container.scrollHeight;
                    await (() => (msg_container.innerHTML = html))();
                    !top ? (msg_container.scrollTop = msg_container.scrollHeight) : "";
                }
            });
        }
    },
    send: (evt, indexChat) => {
        let tmp_chat = ChatCrud.chat.database[indexChat];
        let contact = ChatCrud.usuario.database[tmp_chat.index];
        let msg = evt.srcElement;
        let foto = document.getElementById(`message-foto-${tmp_chat.index}`);
        if (evt.keyCode == 13 && !evt.shiftKey && (msg.value.trim() !== "" || foto.value !== "")) {
            ChatCrud.mensaje.insert(tmp_chat.index, msg.value, () => {
                chat.fun.clear(tmp_chat.index);
                mensaje.print(indexChat);
            });
        }
        if (evt.keyCode == 27) {
            chat.close(indexChat);
        }
    },
    visto: (indexContact) => {
        let contact = ChatCrud.usuario.database[indexContact];
        let indexChat = ChatCrud.chat.database.findIndex(element => element.index === indexContact);
        let chat = ChatCrud.chat.database[indexChat];
        let last_msg = chat.msg[chat.msg.length - 1] || null;
        if (last_msg !== null) {
            if (Session.getSession().usuario_id == last_msg.usuario2_id && last_msg.mensaje_visto == 0) {
                ChatCrud.mensaje.update(indexContact, () => {
                    last_msg.mensaje_visto = 1;
                });
            }
        }
        document.getElementById(`message-txt-${indexContact}`).focus();
        document.getElementById(`checkbox-new-msg-${indexContact}`).checked = false;
    },
    verMas: (indexChat) => {
        ChatCrud.chat.database[indexChat].MAX += ChatCrud.chat.database[indexChat].MAX;
        mensaje.print(indexChat);
    },
    notificacion: (first) => {
        ChatCrud.mensaje.notificacion(first, (res) => {
            // old->msg, new->res
            let msg = ChatCrud.mensaje.notificacion_database;
            let html = ``;
            for (let i in res) {
                let indexContact = ChatCrud.usuario.database.findIndex((element) => element.usuario_id === res[i].usuario1_id);
                html += mensaje.fun.getHtmlNotificacion(res, indexContact, i);
                let new_msg = true;
                for (let j in msg) {
                    if ((msg[j].mensaje_id === res[i].mensaje_id)) {
                        new_msg = false;
                    }
                }
                if (!first && new_msg) {
                    mensaje.fun.notificar(res[i]);
                    ChatView.notificationCheckboxMsg.checked = true;
                }
            }
            ChatView.notificationCheckboxMsg.checked = res.length > 0 ? true : false;
            ChatView.notificationContainer.innerHTML = html;
        });
    }
}