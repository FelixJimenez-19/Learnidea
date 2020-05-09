/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/video_respuesta.js
*/
// MAIN INI
const main = async () => {
    await entity.video_respuesta.crud.select();
    await entity.selects.video_comentario();
};
// MASTER OBJECT INI
const entity = {
    view: {
        table: document.getElementById("idea_table"),
        modalForm: document.getElementById("idea_modal_form"),
        form: document.getElementById("idea_form"),
        modalMessage: document.getElementById("idea_modal_message"),
        message: document.getElementById("idea_message"),
        modalConfirm: document.getElementById("idea_modal_confirm"),
        confirm: document.getElementById("idea_confirm"),
        search: document.getElementById("idea_search"),
    },
    fun: {
        showModalForm: (index) => {
            entity.video_respuesta.index = index;
            if (index !== null) {
                entity.view.form.video_respuesta_id.value = entity.video_respuesta.database[index].video_respuesta_id;
                entity.view.form.video_respuesta_descripcion.value = entity.video_respuesta.database[index].video_respuesta_descripcion;
                entity.view.form.video_respuesta_fecha.value = entity.video_respuesta.database[index].video_respuesta_fecha;
                entity.view.form.video_comentario_id.value = entity.video_respuesta.database[index].video_comentario_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.video_respuesta.index = null;
            entity.view.form.video_respuesta_id.value = "";
            entity.view.form.video_respuesta_descripcion.value = "";
            entity.view.form.video_respuesta_fecha.value = "";
            entity.view.form.video_comentario_id.value = "";
            entity.view.modalForm.style.top = "-100%";
        },

        showModalMessage: (msg) => {
            entity.view.modalMessage.style.top = "0%";
            entity.view.message.innerHTML = msg;
        },
        hideModalMessage: () => {
            entity.view.modalMessage.style.top = "-100%";
            entity.view.message.innerHTML = "";
        },
        showModalConfirm: (msg, action) => {
            entity.view.modalConfirm.style.top = "0%";
            entity.view.confirm.innerHTML = msg;
            action();
        },
        hideModalConfirm: () => {
            entity.video_respuesta.index = null;
            entity.view.modalConfirm.style.top = "-100%";
            entity.view.confirm.innerHTML = "";
        },
        pressYesModalConfirm: (action) => {
            action();
            entity.fun.hideModalConfirm();
        },
        submitForm: (evt) => {
            evt.preventDefault();
        },

        getHtmlTr: (register, index) => {
            return `
<tr>
<td>${register.video_respuesta_id}</td>
<td>${register.video_respuesta_descripcion}</td>
<td>${register.video_respuesta_fecha}</td>
<td>${register.video_comentario_id}</td>
<td><img src="${register.video_respuesta_foto !== null ? "view/src/files/video_respuesta_foto/" + register.video_respuesta_foto : "view/src/img/avatar.png"}"/></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.video_respuesta.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.video_respuesta.database.length; i++) {
                    if (
                        textSearch === entity.video_respuesta.database[i].video_respuesta_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.video_respuesta.database[i].video_respuesta_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.video_respuesta.database[i].video_respuesta_fecha.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.video_respuesta.database[i].video_comentario_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.video_respuesta.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.video_respuesta.fun.select();
            }
        },
    },
    video_respuesta: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.video_respuesta.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.video_respuesta.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.video_respuesta_descripcion.value !== "" && entity.view.form.video_respuesta_fecha.value !== "" && entity.view.form.video_comentario_id.value !== "") {
                    if (entity.video_respuesta.index === null) {
                        entity.video_respuesta.crud.insert();
                    } else {
                        entity.video_respuesta.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Video_respuestaDao.select()
                    .then((res) => {
                        entity.video_respuesta.database = res;
                        entity.video_respuesta.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Video_respuestaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.video_respuesta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Video_respuestaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.video_respuesta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("video_respuesta_id", entity.video_respuesta.database[entity.video_respuesta.index].video_respuesta_id);
                Video_respuestaDao.delete(formData)
                    .then((res) => {
                        entity.video_respuesta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        video_comentario: async () => {
            await Video_comentarioDao.select().then((res) => {
                let html = `<option value="">VIDEO_COMENTARIO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].video_comentario_id}">${res[i].video_comentario_id}</option>
`;
                }
                entity.view.form.video_comentario_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
