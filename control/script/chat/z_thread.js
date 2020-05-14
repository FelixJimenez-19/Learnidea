const Thread = {
    thread1_fun: [],
    thread1_play: true,
    thread1: (timeMs) => {
        console.log("Thread1 Execute");
        for (let i of Thread.thread1_fun) {
            i();
        }
        if (Thread.thread1_play) {
            setTimeout(() => Thread.thread1(timeMs), timeMs);
        }
    },
    thread2_fun: [],
    thread2_play: true,
    thread2: (timeMs) => {
        console.log("Thread2 Execute");
        for (let i of Thread.thread2_fun) {
            i();
        }
        if (Thread.thread2_play) {
            setTimeout(() => Thread.thread2(timeMs), timeMs);
        }
    }
};

// ---------- POR SI ES NECESARIO DESHABILITAR TODO EL CHAT PONER "DISPLAY: NONE" - INICIO  ----------------------------------------------------- //
document.getElementById("all-chat-master-container").style.display = "flex";
// ---------- POR SI ES NECESARIO DESHABILITAR TODO EL CHAT PONER "DISPLAY: NONE" - FIN     ----------------------------------------------------- //

// ---------- POR SI ES NECESARIO DESHABILITAR TODOS LOS HILOS Y PETICIONES AL SERVIDOR PARA EL CHAT "COMENTAR ESTE CODIGO - INICIO" ------------ //
// DECLARE THREADS - INICIO
Thread.thread1_fun.push(() => chat.usuario.crud.updateFechaConexion());
Thread.thread1_fun.push(() => chat.contact.crud.select());
Thread.thread2_fun.push(() => chat.notificacion.crud.select());
// DECLARE THREADS - FIN

// INITIALIZE THREADS - INICIO
chat.view.contactSearch.onkeyup = (evt) => chat.fun.search(evt);
Thread.thread1(600000);
// Thread.thread2(60000);
Thread.thread2(10000);
chat.conversacion.fun.loadOpenChat();
// Thread.thread2(360000);
// INITIALIZE THREADS - FIN
// ---------- POR SI ES NECESARIO DESHABILITAR TODOS LOS HILOS Y PETICIONES AL SERVIDOR PARA EL CHAT "COMENTAR ESTE CODIGO - FIN" --------------- //