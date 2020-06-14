const ForoPublicacionMain = () => {
    // Este select se esta llamando al finalizar la consulta de la tabla comentarios
    // ForoPublicacion.crud.select();
}

const ForoPublicacion = {
    database: [],
    MAX: 5,
    publiaccion_index: null,
    view: {
        form: document.getElementById("col2-publicacion_form"),
        container: document.getElementById("col2-publicacion_container")
    },
    crud: {
        insert: () => {
            ForoPublicacion.view.form.btn_submit.disabled = true;
            PublicacionDao.insert(new FormData(ForoPublicacion.view.form)).then(res => {
                ForoPublicacion.view.form.btn_submit.disabled = false;
                ForoPublicacion.view.form.publicacion_descripcion.value = "";
                ForoPublicacion.view.form.publicacion_foto.value = "";
                Foro.fun.showModalMessage("Publicacion realizada");
                ForoPublicacion.crud.select();
            });
        },
        update: (formData) => {
            PublicacionDao.update(formData).then(res => {
                ForoPublicacion.crud.select();
            });
        },
        select: () => {
            PublicacionDao.select().then(res => {
                ForoPublicacion.database = res;
                ForoPublicacion.fun.select();
            });
        },
        delete: (publicacion_id) => {
            let formData = new FormData();
            formData.append("publicacion_id", publicacion_id);
            PublicacionDao.delete(formData).then(res => {
                ForoPublicacion.crud.select();
            });
        }
    },
    fun: {
        getHtmlItem: (index) => {
            let register = ForoPublicacion.database[index];
            return `
                <div class="item_publicacion">
                    <div class="header">
                        <a class="usuario_foto" style="background-image: url(view/src/files/usuario_foto/${ register.usuario_foto })" href="?page=user_profile&usuario_id=${ register.usuario_id }"></a>
                        <div class="description__container">
                            <a class="text usuario_nombre" href="?page=user_profile&usuario_id=${ register.usuario_id }">${ register.usuario_nombre }</a>
                            <span class="text publicacion_fecha">${ Fecha.getString(new Date(register.publicacion_fecha), 2) }</span>
                        </div>
                        ${ register.usuario_id === Session.getSession().usuario_id ? `
                            <div class="buttons_container">
                                <button
                                    onclick="Foro.fun.showModalForm(() => ForoPublicacion.fun.prepareEdit('${ register.publicacion_id }'))">
                                    <img src="view/src/icon/edit.png">
                                </button>
                                <button 
                                    onclick="Foro.fun.showModalConfirm('¿Esta seguro de eliminar esta publicación?', () => ForoPublicacion.fun.prepareDelete(${ register.publicacion_id }))" >
                                    <img src="view/src/icon/delete.png">
                                </button>
                            </div>
                        ` : `` }
                    </div>
                    <div class="body">
                        <p class="description">${ ForoPublicacion.fun.prepareText(register.publicacion_descripcion) }</p>
                        ${ register.publicacion_foto === null ? `` : `
                            <div
                                onclick="viewscreen.show('view/src/files/publicacion_foto/${ register.publicacion_foto }')"
                                class="img" style="background-image: url(view/src/files/publicacion_foto/${ register.publicacion_foto })"></div>
                        `}
                    </div>
                    <div class="footer">
                        <div class="buttons">
                            <button 
                                onclick="ForoComentario.fun.activateComment(
                                    'comentarios_container-${ register.publicacion_id }', 
                                    'comentarios_form-${ register.publicacion_id }'
                                )">
                                <img src="view/src/icon/comment.png"><span>Comentar</span>
                            </button>
                        </div>
                        <div class="section__comentarios" id="comentarios_container-${ register.publicacion_id }">
                            <div 
                                class="comentarios__container" 
                                id="comentarios_container-items-${ register.publicacion_id }">
                                ${ ForoComentario.fun.select(register.publicacion_id, 5) }
                            </div>
                            <form method="POST" class="form__comentario" id="comentarios_form-${ register.publicacion_id }">
                            <input type="hidden" name="publicacion_id" value="${ register.publicacion_id }" />
                            <input type="hidden" name="usuario_id" value="${ Session.getSession().usuario_id }" />
                            <input type="hidden" name="html_publicacion_id" value="comentarios_container-items-${ register.publicacion_id }" />
                            <input type="hidden" name="max" value="5" />
                                <div class="usuario_foto" style="background-image: url(view/src/files/usuario_foto/${ Session.getSession().usuario_foto })"></div>
                                <div class="input__container">
                                    <textarea 
                                        onkeydown="((event.keyCode == 13 && !event.shiftKey) ? event.preventDefault() : '')"
                                        onkeyup="ForoComentario.fun.keyup(event, 'comentarios_form-${ register.publicacion_id }')"
                                        name="publicacion_comentario_descripcion" placeholder="Escribe un comentario..."></textarea>
                                    <input name="publicacion_comentario_foto" type="file" accept="image/png">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            `;
        },
        select: () => {
            let cont = 0;
            let cont2 = 0;
            let html = "";
            for (let i in ForoPublicacion.database) {
                let register = ForoPublicacion.database[i];
                // Validar para obtener publicaciones unicamente de cierto usuario
                let validate_user = 0;
                if (typeof (global_usuario_id) !== "undefined") {
                    validate_user = global_usuario_id;
                }
                if ((validate_user === 0 || validate_user == register.usuario_id)) {
                    if (cont < ForoPublicacion.MAX) {
                        html += ForoPublicacion.fun.getHtmlItem(i);
                        cont++;
                    }
                    cont2++;
                }
            }
            if (cont > 0) {
                if (cont2 > cont) {
                    html += `
                        <div class="item_publicacion ver-mas">
                            <button onclick="ForoPublicacion.fun.verMas()">
                                <img src="view/src/icon/in.png">
                                <span>Ver mas</span>
                            </button>
                        </div>
                    `;
                }
                ForoPublicacion.view.container.innerHTML = html + "<br>";
            } else {
                ForoPublicacion.view.container.innerHTML = `
                    <div class="item_publicacion not-found">
                    <img src="view/src/files/informacion_pagina_logo/${ Informacion.getInformacion().informacion_pagina_logo }" />
                    <span>Sin publicaciones actualmente..</span>
                    </div><br>
                `;
            }
        },
        update: (form_id) => {
            let form = document.getElementById(form_id);
            if (form.publicacion_descripcion.value.trim() !== "" || form.publicacion_foto.value !== "") {
                ForoPublicacion.crud.update(new FormData(form));
                Foro.fun.hideModalForm(() => {});
            } else {
                Foro.fun.showModalMessage("Debe escribir una descripción o agregar una imagen en la publicación");
            }
        },
        prepareDelete: (publicacion_id) => {
            Foro.fun.actionPressYesModalConfirm = () => ForoPublicacion.crud.delete(publicacion_id);
        },
        prepareEdit: (publicacion_id) => {
            let register = ForoPublicacion.database.find(element => element.publicacion_id === publicacion_id);
            Foro.view.modalForm.innerHTML = `
                <form class="foro-form" id="idea_form" onsubmit="return false">
                    <span class="title">FORMULARIO</span>
                    <div class="inputs">
                        <input type="hidden" name="publicacion_id" value="${ publicacion_id }" />
                        <input type="hidden" name="usuario_id" value="${ Session.getSession().usuario_id }" />
                        <div class="row-editor row-normal-textarea">
                            <span class="row-editor-title">DESCRIPCION</span>
                            <textarea 
                                onkeyup="ForoPublicacion.fun.keyup(event)"
                                class="row-editor-textarea normal-textarea" 
                                name="publicacion_descripcion"
                                placeholder="Escribe tu publicacion">${ register.publicacion_descripcion }</textarea>
                        </div>
                        <div class="row">
                            <span>FOTO: </span>
                            <input type="file" accept="image/png" name="publicacion_foto" placeholder="FOTO">
                        </div>
                    </div>
                    <div class="buttons">
                        <button onclick="ForoPublicacion.fun.update('idea_form')">GUARDAR</button>
                        <button onclick="Foro.fun.hideModalForm( ()=>{} )">CANCELAR</button>
                    </div>
                </form>
            `;
        },
        prepareText: (msg) => {
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
            return msg.replace(exp, "<a target='_blanck' href='$1'>$1</a>");
        },
        verMas: () => {
            ForoPublicacion.MAX += ForoPublicacion.MAX;
            ForoPublicacion.fun.select();
        },
        submit: (evt) => {
            evt.preventDefault();
            if (ForoPublicacion.view.form.publicacion_descripcion.value.trim() !== "" || ForoPublicacion.view.form.publicacion_foto.value !== "") {
                ForoPublicacion.crud.insert();
            } else {
                Foro.fun.showModalMessage("Debe escribir una descripción o agregar una imagen en la publicación");
            }
        },
        keyup: (evt) => {
            let element = evt.srcElement;
            element.style.cssText = 'height:auto; padding:0';
            element.style.cssText = 'height:' + element.scrollHeight + 'px';
        }
    }
}

ForoPublicacion.view.form.onsubmit = (evt) => ForoPublicacion.fun.submit(evt);
ForoPublicacion.view.form.publicacion_descripcion.onkeyup = (evt) => ForoPublicacion.fun.keyup(evt);

ForoPublicacionMain();