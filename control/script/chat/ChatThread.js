// PRINCIPAL - true o false para habilitar o deshabilitar todo el chat
const CHAT_VISIBLE = true;

// Interface
const chatDisplay = CHAT_VISIBLE ? 'flex' : 'none';
ChatView.chatMasterContainer.style.display = chatDisplay;
ChatView.notificationMasterContainer.style.display = chatDisplay;

// Threads Async
const chatSetup = () => {
    // --------- Events ---------------
    ChatView.contactSearch.onkeyup = (evt) => usuario.fun.search(evt);

    // --------- Initials -------------
    setTimeout(() => {
        // Actualiza la fecha de conexion y trae la fecha del server
        ChatCrud.usuario.update().then(() => {
            // Imprime los contactos disponibles en el chat
            ChatCrud.usuario.select(() => usuario.printContacts()).then(() => {
                // Imprime los chats almacenados en cache
                ChatCrud.chat.select();
                // True notifica y carga || False solo carga
                mensaje.notificacion(true);
            });
        });
    }, 100);
    // --------- SetIntervals --------- 
    // Actualiza la fecha de conexion y trae la fecha del server
    setInterval(() => ChatCrud.usuario.update(), 180000); // 3 minutos
    // Imprime los contactos disponibles en el chat
    setInterval(() => ChatCrud.usuario.select(() => usuario.printContacts()), 360000); // 6 minutos
    // True notifica y carga || False solo carga, Ademas va a cargar los mensajes en los chats
    setInterval(() => mensaje.notificacion(false), 5000); // 5 segundos
}
CHAT_VISIBLE ? chatSetup() : '';