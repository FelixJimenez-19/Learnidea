/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/contacto.js
*/
// MAIN INI
const main = async () => {
    await entity.contacto.crud.select();
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
            entity.contacto.index = index;
            if (index !== null) {
                entity.view.form.contacto_id.value = entity.contacto.database[index].contacto_id;
                entity.view.form.contacto_nombre.value = entity.contacto.database[index].contacto_nombre;
                entity.view.form.contacto_url.value = entity.contacto.database[index].contacto_url;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.contacto.index = null;
            entity.view.form.contacto_id.value = "";
            entity.view.form.contacto_nombre.value = "";
            entity.view.form.contacto_url.value = "";
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
            entity.contacto.index = null;
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
                    <td>${register.contacto_id}</td>
                    <td>${register.contacto_nombre}</td>
                    <td>${register.contacto_url}</td>
                    <td><img src="${register.contacto_icon !== null ? "view/src/files/contacto_icon/" + register.contacto_icon : "view/src/img/avatar.png"}"/></td>
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
                for (let i = 0; i < entity.contacto.database.length; i++) {
                    if (
                        textSearch === entity.contacto.database[i].contacto_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contacto.database[i].contacto_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contacto.database[i].contacto_url.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.contacto.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.contacto.fun.select();
            }
        },
    },
    contacto: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.contacto.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.contacto.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.contacto_nombre.value !== "" && entity.view.form.contacto_url.value !== "") {
                    if (entity.contacto.index === null) {
                        entity.contacto.crud.insert();
                    } else {
                        entity.contacto.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await ContactoDao.select()
                    .then((res) => {
                        entity.contacto.database = res;
                        entity.contacto.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                ContactoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contacto.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                ContactoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contacto.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("contacto_id", entity.contacto.database[entity.contacto.index].contacto_id);
                ContactoDao.delete(formData)
                    .then((res) => {
                        entity.contacto.crud.select();
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
