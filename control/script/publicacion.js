/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/publicacion.js
*/
// MAIN INI
const main = async () => {
    await entity.publicacion.crud.select();
    await entity.selects.usuario();
    await entity.selects.inscripcion();
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
            entity.publicacion.index = index;
            if (index !== null) {
                entity.view.form.publicacion_id.value = entity.publicacion.database[index].publicacion_id;
                entity.view.form.publicacion_descripcion.value = entity.publicacion.database[index].publicacion_descripcion;
                entity.view.form.publicacion_fecha.value = entity.publicacion.database[index].publicacion_fecha;
                entity.view.form.usuario_id.value = entity.publicacion.database[index].usuario_id;
                entity.view.form.inscripcion_id.value = entity.publicacion.database[index].inscripcion_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.publicacion.index = null;
            entity.view.form.publicacion_id.value = "";
            entity.view.form.publicacion_descripcion.value = "";
            entity.view.form.publicacion_fecha.value = "";
            entity.view.form.usuario_id.value = "";
            entity.view.form.inscripcion_id.value = "";
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
            entity.publicacion.index = null;
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
                    <td>${register.publicacion_id}</td>
                    <td>${register.publicacion_descripcion}</td>
                    <td>${register.publicacion_fecha}</td>
                    <td>${register.usuario_id}</td>
                    <td>${register.inscripcion_id}</td>
                    <td><img src="${register.publicacion_foto !== null ? "view/src/files/publicacion_foto/" + register.publicacion_foto : "view/src/img/avatar.png"}"/></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.publicacion.index = ${index})">
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
                for (let i = 0; i < entity.publicacion.database.length; i++) {
                    if (
                        textSearch === entity.publicacion.database[i].publicacion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion.database[i].publicacion_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion.database[i].publicacion_fecha.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion.database[i].usuario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.publicacion.database[i].inscripcion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.publicacion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.publicacion.fun.select();
            }
        },
    },
    publicacion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.publicacion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.publicacion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.publicacion_descripcion.value !== "" &&
                    entity.view.form.publicacion_fecha.value !== "" &&
                    entity.view.form.usuario_id.value !== "" &&
                    entity.view.form.inscripcion_id.value !== ""
                ) {
                    if (entity.publicacion.index === null) {
                        entity.publicacion.crud.insert();
                    } else {
                        entity.publicacion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await PublicacionDao.select()
                    .then((res) => {
                        entity.publicacion.database = res;
                        entity.publicacion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                PublicacionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.publicacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                PublicacionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.publicacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("publicacion_id", entity.publicacion.database[entity.publicacion.index].publicacion_id);
                PublicacionDao.delete(formData)
                    .then((res) => {
                        entity.publicacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].usuario_id}">${res[i].usuario_id}</option>
`;
                }
                entity.view.form.usuario_id.innerHTML = html;
            });
        },
        inscripcion: async () => {
            await InscripcionDao.select().then((res) => {
                let html = `<option value="">INSCRIPCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].inscripcion_id}">${res[i].inscripcion_id}</option>
`;
                }
                entity.view.form.inscripcion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
