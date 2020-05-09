const ChatCrud = {
    usuario: {
        database: [],
        date: '',
        // Select 'usuarios' connected's
        select: (fun) => {
            return UsuarioDao.select().then((res) => {
                ChatCrud.usuario.database = res;
                fun();
            });
        },
        // Update dateConnect 'fechaConexion'
        update: () => {
            let formData = new FormData();
            formData.append("usuario_id", Session.getSession().usuario_id);
            return UsuarioDao.updateFechaConexion(formData).then((res) => {
                ChatCrud.usuario.date = res.servidor_fecha;
            });
        }
    },
    mensaje: {
        notificacion_database: [],
        // Select async messages
        select: (indexChat, fun) => {
            let chat = ChatCrud.chat.database[indexChat];
            let indexContact = chat.index;
            let contact = ChatCrud.usuario.database[indexContact];
            let formData = new FormData();
            formData.append("usuario_id1", Session.getSession().usuario_id);
            formData.append("usuario_id2", contact.usuario_id);
            MensajeDao.selectById(formData).then((res) => {
                ChatCrud.chat.database[indexChat].msg = res;
                fun();
            });
        },
        // Send message
        insert: (indexContact, msg, fun) => {
            let contact = ChatCrud.usuario.database[indexContact];
            let foto = document.getElementById(`message-foto-${indexContact}`);
            let formData = new FormData();
            formData.append("mensaje_texto", msg);
            formData.append("mensaje_foto", foto.files[0]);
            formData.append("usuario_id1", Session.getSession().usuario_id);
            formData.append("usuario_id2", contact.usuario_id);
            MensajeDao.insert(formData).then(res => {
                fun();
            });
        },
        // Update 'Visto'
        update: (indexContact, fun) => {
            let contact = ChatCrud.usuario.database[indexContact];
            let formData = new FormData();
            formData.append("usuario_id1", contact.usuario_id);
            formData.append("usuario_id2", Session.getSession().usuario_id);
            formData.append("mensaje_visto", 1);
            MensajeDao.updateMensaje_visto(formData).then(res => {
                fun();
            });
        },
        // Select message !view 'No vistos'
        notificacion: (first, fun) => {
            let formData = new FormData();
            formData.append("usuario_id", Session.getSession().usuario_id);
            formData.append("mensaje_visto", 0);
            MensajeDao.selectByUsuario_idMensaje_visto(formData).then((res) => {
                // Para variar el orden
                if (first) {
                    ChatCrud.mensaje.notificacion_database = res;
                    fun(res);
                } else {
                    fun(res);
                    ChatCrud.mensaje.notificacion_database = res;
                }
            });
        }
    },

    // Drive with $_SESSION
    chat: {
        database: [],
        // Select chats opened in SESSION
        select: () => {
            let chats = JSON.parse(localStorage.getItem("usuario_chat"));
            if (chats !== null) {
                for (let i of chats) {
                    i.open = false;
                }
                ChatCrud.chat.database = chats;
                chat.fun.print();
            }
        },
        // Update chats opened in SESSION
        update: () => {
            let chats = JSON.stringify(ChatCrud.chat.database);
            localStorage.setItem("usuario_chat", chats);
        }
    }
}