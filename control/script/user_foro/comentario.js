const ForoComentarioMain = () => {
    ForoComentario.crud.select(() => {
        ForoPublicacion.crud.select();
    });

}

const ForoComentario = {
    database: [],
    view: {},
    crud: {
        insert: (form) => {
            let formData = new FormData(form);
            Publicacion_comentarioDao.insert(formData).then(res => {
                ForoComentario.crud.select(() => {
                    form.publicacion_comentario_descripcion.value = "";
                    form.publicacion_comentario_foto.value = "";
                    form.publicacion_comentario_descripcion.focus();
                    ForoComentario.fun.printHtml(form);
                });
            });
        },
        update: (formData, form) => {
            Publicacion_comentarioDao.update(formData).then(res => {
                ForoComentario.crud.select(() => {
                    form.publicacion_comentario_descripcion.focus();
                    ForoComentario.fun.printHtml(form);
                });
            });
        },
        select: (action) => {
            Publicacion_comentarioDao.select().then(res => {
                ForoComentario.database = res;
                action();
            });
        },
        delete: (form, publicacion_comentario_id) => {
            let formData = new FormData();
            formData.append("publicacion_comentario_id", publicacion_comentario_id);
            Publicacion_comentarioDao.delete(formData).then(res => {
                ForoComentario.crud.select(() => {
                    form.publicacion_comentario_descripcion.focus();
                    ForoComentario.fun.printHtml(form);
                });
            });
        }
    },
    fun: {
        getHtmlItem: (index) => {
            let register = ForoComentario.database[index];
            return `
                <div class="comentario__item">
                    <a class="usuario_foto" style="background-image: url(view/src/files/usuario_foto/${ register.usuario_foto })" href=""></a>
                    <div class="description">
                        <a class="usuario_nombre" href="">${ register.usuario_nombre }</a>
                        <p class="comentario">${ ForoComentario.fun.prepareText(register.publicacion_comentario_descripcion) }</p>
                        ${ register.publicacion_comentario_foto === null ? `` : `
                        <div
                        class="img" 
                        onclick="viewscreen.show('view/src/files/publicacion_comentario_foto/${ register.publicacion_comentario_foto }')"
                        style="background-image: url(view/src/files/publicacion_comentario_foto/${ register.publicacion_comentario_foto })"></div>
                        `}
                        <span class="fecha">${ Fecha.getString(new Date(register.publicacion_comentario_fecha), 2) }</span>
                    </div>
                    ${ register.usuario_id === Session.getSession().usuario_id ? `
                        <div class="buttons">
                            <button
                            onclick="Foro.fun.showModalForm(() => ForoComentario.fun.prepareEdit('${ register.publicacion_comentario_id }'))">
                                <img src="view/src/icon/edit.png">
                            </button>
                            <button
                                onclick="Foro.fun.showModalConfirm('¿Esta seguro de eliminar este comentario?', () => ForoComentario.fun.prepareDelete('comentarios_form-${ register.publicacion_id }', ${ register.publicacion_comentario_id }))">
                                <img src="view/src/icon/delete.png">
                            </button>
                        </div>
                    ` : `` }
                </div>
            `;
        },
        select: (publicacion_id, MAX) => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            let html_tmp = "";
            let array = [];
            for (let i in ForoComentario.database) {
                let register = ForoComentario.database[i];
                if (register.publicacion_id === publicacion_id) {
                    if (cont < MAX) {
                        array.push(ForoComentario.fun.getHtmlItem(i));
                        cont++;
                    }
                    cont2++;
                }
            }
            for (let i = array.length - 1; i >= 0; i--) {
                html_tmp += array[i];
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <div class="comentario__item ver-mas">
                            <button onclick="ForoComentario.fun.verMas('comentarios_form-${ publicacion_id }')">
                                <img src="view/src/icon/in.png">
                                <span>Ver mas</span>
                            </button>
                        </div>
                    `;
                }
                html += html_tmp;
                return html;
            } else {
                return "";
            }
        },
        update: (modal_form_id, form_id) => {
            let modalForm = document.getElementById(modal_form_id);
            let form = document.getElementById(form_id);
            if (modalForm.publicacion_comentario_descripcion.value.trim() !== "" || modalForm.publicacion_comentario_foto.value !== "") {
                ForoComentario.crud.update(new FormData(modalForm), form);
                Foro.fun.hideModalForm( ()=>{} );
            } else {
                Foro.fun.showModalMessage("Debe escribir una descripción o agregar una imagen en el comentario");
            }
        },
        printHtml: (form) => {
            document.getElementById(form.html_publicacion_id.value).innerHTML = ForoComentario.fun.select(form.publicacion_id.value, form.max.value);
        },
        verMas: (form_id) => {
            let form = document.getElementById(form_id);
            form.max.value = parseInt(form.max.value) + parseInt(form.max.value);
            document.getElementById(form.html_publicacion_id.value).innerHTML = ForoComentario.fun.select(form.publicacion_id.value, form.max.value);
        },
        prepareDelete: (form_id, publicacion_comentario_id) => {
            let form = document.getElementById(form_id);
            Foro.fun.actionPressYesModalConfirm = () => ForoComentario.crud.delete(form, publicacion_comentario_id);
        },
        prepareEdit: (publicacion_comentario_id) => {
            let register = ForoComentario.database.find(element => element.publicacion_comentario_id === publicacion_comentario_id);
            Foro.view.modalForm.innerHTML = `
                <form class="foro-form" id="idea_form" onsubmit="return false">
                    <span class="title">FORMULARIO</span>
                    <div class="inputs">
                        <input type="hidden" name="publicacion_comentario_id" value="${ publicacion_comentario_id }" />
                        <input type="hidden" name="publicacion_id" value="${ register.publicacion_id }" />
                        <input type="hidden" name="usuario_id" value="${ Session.getSession().usuario_id }" />
                        <div class="row-editor row-normal-textarea">
                            <span class="row-editor-title">DESCRIPCION</span>
                            <textarea 
                                onkeyup="ForoComentario.fun.keyup(event, 'comentarios_form-${ register.publicacion_id }')"
                                class="row-editor-textarea normal-textarea" 
                                name="publicacion_comentario_descripcion"
                                placeholder="Escribe tu comentario">${ register.publicacion_comentario_descripcion }</textarea>
                        </div>
                        <div class="row">
                            <span>FOTO: </span>
                            <input type="file" accept="image/png" name="publicacion_comentario_foto" placeholder="FOTO">
                        </div>
                    </div>
                    <div class="buttons">
                        <button onclick="ForoComentario.fun.update('idea_form', 'comentarios_form-${ register.publicacion_id }')">GUARDAR</button>
                        <button onclick="Foro.fun.hideModalForm( ()=>{} )">CANCELAR</button>
                    </div>
                </form>
            `;
        },
        prepareText: (msg) => {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
            return msg.replace(exp, "<a target='_blanck' href='$1'>$1</a>");
        },
        activateComment: (content_id, form_id) => {
            let container = document.getElementById(content_id);
            let form = document.getElementById(form_id);
            container.style = `
                height: auto;
            `;
            form.publicacion_comentario_descripcion.focus();
        },
        keyup: (evt, form_id) => {
            let form = document.getElementById(form_id);
            let element = evt.srcElement;
            element.style.cssText = 'height:auto; padding:0';
            element.style.cssText = 'height:' + element.scrollHeight + 'px';
            if (evt.keyCode == 13 && !evt.shiftKey && (form.publicacion_comentario_descripcion.value.trim() !== "" || form.publicacion_comentario_foto.value !== "")) {
                ForoComentario.crud.insert(form);
            }
        }
    }
}

ForoComentarioMain();