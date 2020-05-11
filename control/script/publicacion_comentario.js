/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/publicacion_comentario.js
*/
// MAIN INI
const main = async () => {
    await entity.publicacion_comentario.crud.select();
    await entity.selects.publicacion();
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
            entity.publicacion_comentario.index = index;
            if (index !== null) {
                entity.view.form.publicacion_comentario_id.value = entity.publicacion_comentario.database[index].publicacion_comentario_id;
                entity.view.form.publicacion_comentario_descripcion.value = entity.publicacion_comentario.database[index].publicacion_comentario_descripcion;
                entity.view.form.publicacion_comentario_fecha.value = entity.publicacion_comentario.database[index].publicacion_comentario_fecha;
                entity.view.form.publicacion_id.value = entity.publicacion_comentario.database[index].publicacion_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.publicacion_comentario.index = null;
            entity.view.form.publicacion_comentario_id.value = "";
            entity.view.form.publicacion_comentario_descripcion.value = "";
            entity.view.form.publicacion_comentario_fecha.value = "";
            entity.view.form.publicacion_id.value = "";
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
            entity.publicacion_comentario.index = null;
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
                    <td>${register.publicacion_comentario_id}</td>
                    <td>${register.publicacion_comentario_descripcion}</td>
                    <td>${register.publicacion_comentario_fecha}</td>
                    <td>${register.publicacion_id}</td>
                    <td><img src="${register.publicacion_comentario_foto !== null ? "view/src/files/publicacion_comentario_foto/" + register.publicacion_comentario_foto : "view/src/img/avatar.png"}"/></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_tipo.index = ${index})">
                            <img src="view/src/icon/delete.png">
                        </button>
                    </td>
                </tr>
            `;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.publicacion_comentario.database.length; i++) {
                    if (
                        textSearch === entity.publicacion_comentario.database[i].publicacion_comentario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion_comentario.database[i].publicacion_comentario_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion_comentario.database[i].publicacion_comentario_fecha.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion_comentario.database[i].publicacion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.publicacion_comentario.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.publicacion_comentario.fun.select();
            }
        },
    },
    publicacion_comentario: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.publicacion_comentario.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.publicacion_comentario.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.publicacion_comentario_descripcion.value !== "" && entity.view.form.publicacion_comentario_fecha.value !== "" && entity.view.form.publicacion_id.value !== "") {
                    if (entity.publicacion_comentario.index === null) {
                        entity.publicacion_comentario.crud.insert();
                    } else {
                        entity.publicacion_comentario.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Publicacion_comentarioDao.select()
                    .then((res) => {
                        entity.publicacion_comentario.database = res;
                        entity.publicacion_comentario.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Publicacion_comentarioDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.publicacion_comentario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Publicacion_comentarioDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.publicacion_comentario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("publicacion_comentario_id", entity.publicacion_comentario.database[entity.publicacion_comentario.index].publicacion_comentario_id);
                Publicacion_comentarioDao.delete(formData)
                    .then((res) => {
                        entity.publicacion_comentario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        publicacion: async () => {
            await PublicacionDao.select().then((res) => {
                let html = `<option value="">PUBLICACION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].publicacion_id}">${res[i].publicacion_id}</option>
`;
                }
                entity.view.form.publicacion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
