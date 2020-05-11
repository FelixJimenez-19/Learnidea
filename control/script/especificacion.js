/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/especificacion.js
*/
// MAIN INI
const main = async () => {
    await entity.especificacion.crud.select();
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
            entity.especificacion.index = index;
            if (index !== null) {
                entity.view.form.especificacion_id.value = entity.especificacion.database[index].especificacion_id;
                entity.view.form.especificacion_codigo.value = entity.especificacion.database[index].especificacion_codigo;
                entity.view.form.especificacion_descripcion.value = entity.especificacion.database[index].especificacion_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.especificacion.index = null;
            entity.view.form.especificacion_id.value = "";
            entity.view.form.especificacion_codigo.value = "";
            entity.view.form.especificacion_descripcion.value = "";
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
            entity.especificacion.index = null;
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
                    <td>${register.especificacion_id}</td>
                    <td>${register.especificacion_codigo}</td>
                    <td>${register.especificacion_descripcion}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.especificacion.index = ${index})">
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
                for (let i = 0; i < entity.especificacion.database.length; i++) {
                    if (
                        textSearch === entity.especificacion.database[i].especificacion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.especificacion.database[i].especificacion_codigo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.especificacion.database[i].especificacion_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.especificacion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.especificacion.fun.select();
            }
        },
    },
    especificacion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.especificacion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.especificacion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.especificacion_codigo.value !== "" && entity.view.form.especificacion_descripcion.value !== "") {
                    if (entity.especificacion.index === null) {
                        entity.especificacion.crud.insert();
                    } else {
                        entity.especificacion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await EspecificacionDao.select()
                    .then((res) => {
                        entity.especificacion.database = res;
                        entity.especificacion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                EspecificacionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.especificacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                EspecificacionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.especificacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("especificacion_id", entity.especificacion.database[entity.especificacion.index].especificacion_id);
                EspecificacionDao.delete(formData)
                    .then((res) => {
                        entity.especificacion.crud.select();
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
