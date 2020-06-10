// True => muestra e inicia las notificaciones del foro, False => la oculta y no las inicia
const FORO_NOTIFICATION_VISIBLE = true;

const ForoNotificacionMain = () => {
    setTimeout(() => {
        ForoNotificacion.crud.select();
        // Por ahora solo corre un hilo al momento de cargar despues de un segundo
        // setInterval(() => {
        //     ForoNotificacion.crud.select();
        // }, 360000);
    }, 1000);
}

const ForoNotificacion = {
    MAX: 5,
    database: [],
    view: {
        masterContainer: document.getElementById("foro-notification-master-container"),
        container: document.getElementById("foro-notification-container")
    },
    crud: {
        select: () => {
            let formData = new FormData();
            formData.append("usuario_id", Session.getSession().usuario_id);
            Publicacion_comentarioDao.selectByUsuario_id_notification(formData).then(res => {
                ForoNotificacion.database = res;
                ForoNotificacion.fun.select();
            });
        }
    },
    fun: {
        getItemHtml: (index) => {
            let register = ForoNotificacion.database[index];
            return `
                <a class="item" href="#">
                    <img src="${register.usuario_foto !== null ? 
                        `view/src/files/usuario_foto/${ register.usuario_foto }`
                        :`view/src/img/avatar.png`
                    }"/>
                    <div class="col1">
                        <span class="msg-user">${ register.usuario_nombre }</span>
                        <span class="msg-text">${ register.publicacion_comentario_foto !== null ? `Ha comentado con una foto` : register.publicacion_comentario_descripcion }</span>
                    </div>
                    <div class="col2">
                        <span class="msg-date">${ register.publicacion_comentario_fecha }</span>
                    </div>
                </a>
            `;
        },
        select: () => {
            let html = ``;
            let cont = 0;
            let cont2 = 0;
            for (let i in ForoNotificacion.database) {
                if (cont < ForoNotificacion.MAX) {
                    html += ForoNotificacion.fun.getItemHtml(i);
                    cont++;
                }
                cont2++;
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <div class="item ver-mas">
                            <button onclick="ForoNotificacion.fun.verMas()">
                                <img src="view/src/icon/in.png">
                                <span>Ver mas</span>
                            </button>
                        </div>
                    `;
                }
                ForoNotificacion.view.container.innerHTML = html;
            }

        },
        verMas: () => {
            ForoNotificacion.MAX += ForoNotificacion.MAX;
            ForoNotificacion.fun.select();
        }
    }
}
FORO_NOTIFICATION_VISIBLE ? ForoNotificacionMain() : (() => {
    ForoNotificacion.view.masterContainer.style.display = "none";
})();