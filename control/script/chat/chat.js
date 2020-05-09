const chat = {
    maxChat: 3,
    fun: {
        configKeyTextArea: (evt) => {
            ((evt.keyCode == 13 && !evt.shiftKey) ? evt.preventDefault() : '');
        },
        clear: (indexContact) => {
            let textarea = document.getElementById(`message-txt-${ indexContact }`);
            let foto = document.getElementById(`message-foto-${indexContact}`);
            textarea.value = "";
            textarea.focus();
            foto.value = '';
        },
        getHtml: (indexChat) => {
            let chat = ChatCrud.chat.database[indexChat];
            let connected = usuario.fun.isConnected(chat.index);
            return `
                <div class="item-container item-container-chat">
                    <input type="checkbox" id="checkbox-chat-item-${chat.index}" ${chat.open ? "checked" : ""} class="checkbox-items-chats-windows">
                    <div class="item item-chat">
                        <div class="head-chat">
                            <label class="label-title-name" for="checkbox-chat-item-${chat.index}" onclick="chat.fun.saveOpen(${chat.index},${ indexChat })">
                                <input type="checkbox" id="checkbox-new-msg-${chat.index}">
                                <i class="${connected == true ? "connect" : "disconnect"}"></i>
                                <div class="title-name"><span>${chat.contact.usuario_nombre}</span></div>
                            </label>
                            <label class="label-chat-button" onclick="chat.close(${ indexChat })">
                                <i class="close"><img src="view/src/icon/close.png" ></i>
                            </label>
                        </div>
                        <div
                            onclick="mensaje.visto(${ chat.index })" 
                            class="chat" 
                            id="message-contact-container-${chat.index}">
                        </div>
                        <div class="write">
                            <textarea 
                                onclick="mensaje.visto(${ chat.index })"
                                placeholder="Escribe un mensaje.." 
                                id="message-txt-${chat.index}">
                            </textarea>
                            <input type="file" accept="image/*" id="message-foto-${chat.index}" />
                        </div>
                    </div>
                </div>
            `;
        },
        print: () => {
            let html = ``;
            let tmp_fun = [];
            for (let i in ChatCrud.chat.database) {
                let tmp_chat = ChatCrud.chat.database[i];
                html += chat.fun.getHtml(i);
                tmp_fun.push(() => mensaje.print(i));
                tmp_fun.push(() => chat.fun.clear(tmp_chat.index));
                // tmp_fun.push(() => (document.getElementById(`message-txt-${tmp_chat.index}`).onfocus = () => mensaje.visto(tmp_chat.index)));
                tmp_fun.push(() => (document.getElementById(`message-txt-${tmp_chat.index}`).onkeydown = (evt) => chat.fun.configKeyTextArea(evt)));
                tmp_fun.push(() => (document.getElementById(`message-txt-${tmp_chat.index}`).onkeyup = (evt) => mensaje.send(evt, i)));
            }
            ChatView.chatContainer.innerHTML = html;
            for (let i of tmp_fun) {
                i();
            }
            ChatCrud.chat.update();
            // console.log("AHORA");
            // responsive.methods.labelOnclick();
        },
        // indexContact in ChatCrud.usuario.database
        // indexChat in ChatCrud.chat.database
        saveOpen: (indexContact, indexChat) => {
            if (document.getElementById(`checkbox-chat-item-${indexContact}`)) {
                ChatCrud.chat.database[indexChat].open = !document.getElementById(`checkbox-chat-item-${indexContact}`).checked;
            }
        }
    },
    // IndexUsuario in ChatCrud.usuario.database[thisIndex]
    open: (index) => {
        let contact = ChatCrud.usuario.database[index];
        if (document.getElementById(`checkbox-chat-item-${index}`)) {
            document.getElementById(`checkbox-chat-item-${index}`).checked = true;
            chat.fun.clear(index);
        } else {
            ChatCrud.chat.database.length >= chat.maxChat ? ChatCrud.chat.database.pop() : "";
            ChatCrud.chat.database.push({
                open: true,
                index: index,
                contact: contact,
                msg: []
            });
            chat.fun.print();
        }
        mensaje.visto(index);
    },
    // IndexChat in ChatCrud.chat.database[thisIndex]
    close: (index) => {
        ChatCrud.chat.database.splice(index, 1);
        chat.fun.print(true);
    },
}