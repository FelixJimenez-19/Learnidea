/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/usuario_tipo.js
*/
// MAIN INI
const main = async () => {
    await entity.usuario_tipo.crud.select();
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
            entity.usuario_tipo.index = index;
            if (index !== null) {
                entity.view.form.usuario_tipo_id.value = entity.usuario_tipo.database[index].usuario_tipo_id;
                entity.view.form.usuario_tipo_nombre.value = entity.usuario_tipo.database[index].usuario_tipo_nombre;
                entity.view.form.usuario_tipo_super.value = entity.usuario_tipo.database[index].usuario_tipo_super;
                entity.view.form.usuario_tipo_admin.value = entity.usuario_tipo.database[index].usuario_tipo_admin;
                entity.view.form.usuario_tipo_coach.value = entity.usuario_tipo.database[index].usuario_tipo_coach;
                entity.view.form.usuario_tipo_user.value = entity.usuario_tipo.database[index].usuario_tipo_user;
                entity.view.form.usuario_tipo_descripcion.value = entity.usuario_tipo.database[index].usuario_tipo_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.usuario_tipo.index = null;
            entity.view.form.usuario_tipo_id.value = "";
            entity.view.form.usuario_tipo_nombre.value = "";
            entity.view.form.usuario_tipo_super.value = "";
            entity.view.form.usuario_tipo_admin.value = "";
            entity.view.form.usuario_tipo_coach.value = "";
            entity.view.form.usuario_tipo_user.value = "";
            entity.view.form.usuario_tipo_descripcion.value = "";
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
            entity.usuario_tipo.index = null;
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
                    <td>${ register.usuario_tipo_id }</td>
                    <td>${ register.usuario_tipo_nombre }</td>
                    <td>${ (register.usuario_tipo_super == 1) ? 'SI' : 'NO' }</td>
                    <td>${ (register.usuario_tipo_admin == 1) ? 'SI' : 'NO' }</td>
                    <td>${ (register.usuario_tipo_coach == 1) ? 'SI' : 'NO' }</td>
                    <td>${ (register.usuario_tipo_user == 1) ? 'SI' : 'NO' }</td>
                    <td>${ register.usuario_tipo_descripcion }</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_tipo.index = ${index}); "></button>
                    </td>
                </tr>
            `;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.usuario_tipo.database.length; i++) {
                    if (
                        textSearch === entity.usuario_tipo.database[i].usuario_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario_tipo.database[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario_tipo.database[i].usuario_tipo_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.usuario_tipo.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.usuario_tipo.fun.select();
            }
        },
    },
    usuario_tipo: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.usuario_tipo.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.usuario_tipo.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.usuario_tipo_nombre.value !== "" &&
                    entity.view.form.usuario_tipo_super.value !== "" &&
                    entity.view.form.usuario_tipo_admin.value !== "" &&
                    entity.view.form.usuario_tipo_coach.value !== "" &&
                    entity.view.form.usuario_tipo_user.value !== "" &&
                    entity.view.form.usuario_tipo_descripcion.value !== ""
                ) {
                    if (entity.usuario_tipo.index === null) {
                        entity.usuario_tipo.crud.insert();
                    } else {
                        entity.usuario_tipo.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Usuario_tipoDao.select()
                    .then((res) => {
                        entity.usuario_tipo.database = res;
                        entity.usuario_tipo.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Usuario_tipoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Usuario_tipoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("usuario_tipo_id", entity.usuario_tipo.database[entity.usuario_tipo.index].usuario_tipo_id);
                Usuario_tipoDao.delete(formData)
                    .then((res) => {
                        entity.usuario_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {},
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
