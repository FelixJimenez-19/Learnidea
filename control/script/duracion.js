/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/duracion.js
*/
// MAIN INI
const main = async () => {
    await entity.duracion.crud.select();
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
            entity.duracion.index = index;
            if (index !== null) {
                entity.view.form.duracion_id.value = entity.duracion.database[index].duracion_id;
                entity.view.form.duracion_descripcion.value = entity.duracion.database[index].duracion_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.duracion.index = null;
            entity.view.form.duracion_id.value = "";
            entity.view.form.duracion_descripcion.value = "";
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
            entity.duracion.index = null;
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
                    <td>${register.duracion_id}</td>
                    <td>${register.duracion_descripcion}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.duracion.index = ${index})">
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
                for (let i = 0; i < entity.duracion.database.length; i++) {
                    if (
                        textSearch === entity.duracion.database[i].duracion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.duracion.database[i].duracion_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.duracion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.duracion.fun.select();
            }
        },
    },
    duracion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.duracion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.duracion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.duracion_descripcion.value !== "") {
                    if (entity.duracion.index === null) {
                        entity.duracion.crud.insert();
                    } else {
                        entity.duracion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await DuracionDao.select()
                    .then((res) => {
                        entity.duracion.database = res;
                        entity.duracion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                DuracionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.duracion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                DuracionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.duracion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("duracion_id", entity.duracion.database[entity.duracion.index].duracion_id);
                DuracionDao.delete(formData)
                    .then((res) => {
                        entity.duracion.crud.select();
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
