/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/seccion_video.js
*/
// MAIN INI
const main = async () => {
    await entity.seccion_video.crud.select();
    await entity.selects.curso_seccion();
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
            entity.seccion_video.index = index;
            if (index !== null) {
                entity.view.form.seccion_video_id.value = entity.seccion_video.database[index].seccion_video_id;
                entity.view.form.seccion_video_nombre.value = entity.seccion_video.database[index].seccion_video_nombre;
                entity.view.form.seccion_video_material.value = entity.seccion_video.database[index].seccion_video_material;
                entity.view.form.seccion_video_iframe.value = entity.seccion_video.database[index].seccion_video_iframe;
                entity.view.form.seccion_video_descripcion.value = entity.seccion_video.database[index].seccion_video_descripcion;
                entity.view.form.curso_seccion_id.value = entity.seccion_video.database[index].curso_seccion_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.seccion_video.index = null;
            entity.view.form.seccion_video_id.value = "";
            entity.view.form.seccion_video_nombre.value = "";
            entity.view.form.seccion_video_material.value = "";
            entity.view.form.seccion_video_iframe.value = "";
            entity.view.form.seccion_video_descripcion.value = "";
            entity.view.form.curso_seccion_id.value = "";
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
            entity.seccion_video.index = null;
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
<td>${register.seccion_video_id}</td>
<td>${register.seccion_video_nombre}</td>
<td>${register.seccion_video_material}</td>
<td>${register.seccion_video_iframe}</td>
<td>${register.seccion_video_descripcion}</td>
<td>${register.curso_seccion_id}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.seccion_video.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.seccion_video.database.length; i++) {
                    if (
                        textSearch === entity.seccion_video.database[i].seccion_video_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_video.database[i].seccion_video_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_video.database[i].seccion_video_material.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_video.database[i].seccion_video_iframe.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_video.database[i].seccion_video_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_video.database[i].curso_seccion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.seccion_video.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.seccion_video.fun.select();
            }
        },
    },
    seccion_video: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.seccion_video.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.seccion_video.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.seccion_video_nombre.value !== "" &&
                    entity.view.form.seccion_video_material.value !== "" &&
                    entity.view.form.seccion_video_iframe.value !== "" &&
                    entity.view.form.seccion_video_descripcion.value !== "" &&
                    entity.view.form.curso_seccion_id.value !== ""
                ) {
                    if (entity.seccion_video.index === null) {
                        entity.seccion_video.crud.insert();
                    } else {
                        entity.seccion_video.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Seccion_videoDao.select()
                    .then((res) => {
                        entity.seccion_video.database = res;
                        entity.seccion_video.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Seccion_videoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.seccion_video.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Seccion_videoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.seccion_video.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("seccion_video_id", entity.seccion_video.database[entity.seccion_video.index].seccion_video_id);
                Seccion_videoDao.delete(formData)
                    .then((res) => {
                        entity.seccion_video.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        curso_seccion: async () => {
            await Curso_seccionDao.select().then((res) => {
                let html = `<option value="">CURSO_SECCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].curso_seccion_id}">${res[i].curso_seccion_id}</option>
`;
                }
                entity.view.form.curso_seccion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
