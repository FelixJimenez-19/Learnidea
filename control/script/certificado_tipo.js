/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/certificado_tipo.js
*/
// MAIN INI
const main = async () => {
    await entity.certificado_tipo.crud.select();
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
            entity.certificado_tipo.index = index;
            if (index !== null) {
                entity.view.form.certificado_tipo_id.value = entity.certificado_tipo.database[index].certificado_tipo_id;
                entity.view.form.certificado_tipo_nombre.value = entity.certificado_tipo.database[index].certificado_tipo_nombre;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.certificado_tipo.index = null;
            entity.view.form.certificado_tipo_id.value = "";
            entity.view.form.certificado_tipo_nombre.value = "";
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
            entity.certificado_tipo.index = null;
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
                    <td>${register.certificado_tipo_id}</td>
                    <td>${register.certificado_tipo_nombre}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.certificado_tipo.index = ${index})">
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
                for (let i = 0; i < entity.certificado_tipo.database.length; i++) {
                    if (
                        textSearch === entity.certificado_tipo.database[i].certificado_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.certificado_tipo.database[i].certificado_tipo_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.certificado_tipo.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.certificado_tipo.fun.select();
            }
        },
    },
    certificado_tipo: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.certificado_tipo.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.certificado_tipo.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.certificado_tipo_nombre.value !== "") {
                    if (entity.certificado_tipo.index === null) {
                        entity.certificado_tipo.crud.insert();
                    } else {
                        entity.certificado_tipo.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Certificado_tipoDao.select()
                    .then((res) => {
                        entity.certificado_tipo.database = res;
                        entity.certificado_tipo.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Certificado_tipoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.certificado_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Certificado_tipoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.certificado_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("certificado_tipo_id", entity.certificado_tipo.database[entity.certificado_tipo.index].certificado_tipo_id);
                Certificado_tipoDao.delete(formData)
                    .then((res) => {
                        entity.certificado_tipo.crud.select();
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