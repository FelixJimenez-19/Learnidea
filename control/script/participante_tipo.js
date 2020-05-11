/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/participante_tipo.js
*/
// MAIN INI
const main = async () => {
    await entity.participante_tipo.crud.select();
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
            entity.participante_tipo.index = index;
            if (index !== null) {
                entity.view.form.participante_tipo_id.value = entity.participante_tipo.database[index].participante_tipo_id;
                entity.view.form.participante_tipo_descripcion.value = entity.participante_tipo.database[index].participante_tipo_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.participante_tipo.index = null;
            entity.view.form.participante_tipo_id.value = "";
            entity.view.form.participante_tipo_descripcion.value = "";
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
            entity.participante_tipo.index = null;
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
                    <td>${register.participante_tipo_id}</td>
                    <td>${register.participante_tipo_descripcion}</td>
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
                for (let i = 0; i < entity.participante_tipo.database.length; i++) {
                    if (
                        textSearch === entity.participante_tipo.database[i].participante_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.participante_tipo.database[i].participante_tipo_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.participante_tipo.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.participante_tipo.fun.select();
            }
        },
    },
    participante_tipo: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.participante_tipo.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.participante_tipo.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.participante_tipo_descripcion.value !== "") {
                    if (entity.participante_tipo.index === null) {
                        entity.participante_tipo.crud.insert();
                    } else {
                        entity.participante_tipo.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Participante_tipoDao.select()
                    .then((res) => {
                        entity.participante_tipo.database = res;
                        entity.participante_tipo.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Participante_tipoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.participante_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Participante_tipoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.participante_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("participante_tipo_id", entity.participante_tipo.database[entity.participante_tipo.index].participante_tipo_id);
                Participante_tipoDao.delete(formData)
                    .then((res) => {
                        entity.participante_tipo.crud.select();
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
