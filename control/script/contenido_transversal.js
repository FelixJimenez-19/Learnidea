/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/contenido_transversal.js
*/
// MAIN INI
const main = async () => {
    await entity.contenido_transversal.crud.select();
    // await entity.selects.curso_modelo();
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
            entity.contenido_transversal.index = index;
            if (index !== null) {
                entity.view.form.contenido_transversal_id.value = entity.contenido_transversal.database[index].contenido_transversal_id;
                entity.view.form.contenido_transversal_descripcion.value = entity.contenido_transversal.database[index].contenido_transversal_descripcion;
                entity.view.form.curso_modelo_id.value = entity.contenido_transversal.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.contenido_transversal.index = null;
            entity.view.form.contenido_transversal_id.value = "";
            entity.view.form.contenido_transversal_descripcion.value = "";
            // entity.view.form.curso_modelo_id.value = "";
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
            entity.contenido_transversal.index = null;
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
                    <td>${register.contenido_transversal_id}</td>
                    <td>${register.contenido_transversal_descripcion}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.contenido_transversal.index = ${index})">
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
                for (let i = 0; i < entity.contenido_transversal.database.length; i++) {
                    if (
                        textSearch === entity.contenido_transversal.database[i].contenido_transversal_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contenido_transversal.database[i].contenido_transversal_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contenido_transversal.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.contenido_transversal.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.contenido_transversal.fun.select();
            }
        },
    },
    contenido_transversal: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.contenido_transversal.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.contenido_transversal.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.contenido_transversal_descripcion.value !== "" && entity.view.form.curso_modelo_id.value !== "") {
                    if (entity.contenido_transversal.index === null) {
                        entity.contenido_transversal.crud.insert();
                    } else {
                        entity.contenido_transversal.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                let formData = new FormData();
                formData.append("curso_modelo_id", curso_modelo_id);
                await Contenido_transversalDao.selectByCurso_modelo_id(formData)
                    .then((res) => {
                        entity.contenido_transversal.database = res;
                        entity.contenido_transversal.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Contenido_transversalDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contenido_transversal.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Contenido_transversalDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contenido_transversal.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("contenido_transversal_id", entity.contenido_transversal.database[entity.contenido_transversal.index].contenido_transversal_id);
                Contenido_transversalDao.delete(formData)
                    .then((res) => {
                        entity.contenido_transversal.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        curso_modelo: async () => {
            await Curso_modeloDao.select().then((res) => {
                let html = `<option value="">CURSO_MODELO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].curso_modelo_id}">${res[i].curso_modelo_id}</option>
                    `;
                }
                entity.view.form.curso_modelo_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
