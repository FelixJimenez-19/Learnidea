/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/modalidad.js
*/
// MAIN INI
const main = async () => {
    await entity.modalidad.crud.select();
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
            entity.modalidad.index = index;
            if (index !== null) {
                entity.view.form.modalidad_id.value = entity.modalidad.database[index].modalidad_id;
                entity.view.form.modalidad_descripcion.value = entity.modalidad.database[index].modalidad_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.modalidad.index = null;
            entity.view.form.modalidad_id.value = "";
            entity.view.form.modalidad_descripcion.value = "";
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
            entity.modalidad.index = null;
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
<td>${register.modalidad_id}</td>
<td>${register.modalidad_descripcion}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.modalidad.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.modalidad.database.length; i++) {
                    if (
                        textSearch === entity.modalidad.database[i].modalidad_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.modalidad.database[i].modalidad_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.modalidad.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.modalidad.fun.select();
            }
        },
    },
    modalidad: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.modalidad.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.modalidad.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.modalidad_descripcion.value !== "") {
                    if (entity.modalidad.index === null) {
                        entity.modalidad.crud.insert();
                    } else {
                        entity.modalidad.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await ModalidadDao.select()
                    .then((res) => {
                        entity.modalidad.database = res;
                        entity.modalidad.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                ModalidadDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.modalidad.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                ModalidadDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.modalidad.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("modalidad_id", entity.modalidad.database[entity.modalidad.index].modalidad_id);
                ModalidadDao.delete(formData)
                    .then((res) => {
                        entity.modalidad.crud.select();
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
