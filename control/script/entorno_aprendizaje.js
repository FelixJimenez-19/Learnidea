/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/entorno_aprendizaje.js
*/
// MAIN INI
const main = async () => {
    await entity.entorno_aprendizaje.crud.select();
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
            entity.entorno_aprendizaje.index = index;
            if (index !== null) {
                entity.view.form.entorno_aprendizaje_id.value = entity.entorno_aprendizaje.database[index].entorno_aprendizaje_id;
                entity.view.form.entorno_aprendizaje_instalaciones.value = entity.entorno_aprendizaje.database[index].entorno_aprendizaje_instalaciones;
                entity.view.form.entorno_aprendizaje_teorica.value = entity.entorno_aprendizaje.database[index].entorno_aprendizaje_teorica;
                entity.view.form.entorno_aprendizaje_practica.value = entity.entorno_aprendizaje.database[index].entorno_aprendizaje_practica;
                entity.view.form.curso_modelo_id.value = entity.entorno_aprendizaje.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.entorno_aprendizaje.index = null;
            entity.view.form.entorno_aprendizaje_id.value = "";
            entity.view.form.entorno_aprendizaje_instalaciones.value = "";
            entity.view.form.entorno_aprendizaje_teorica.value = "";
            entity.view.form.entorno_aprendizaje_practica.value = "";
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
            entity.entorno_aprendizaje.index = null;
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
                    <td>${register.entorno_aprendizaje_id}</td>
                    <td>${register.entorno_aprendizaje_instalaciones}</td>
                    <td>${register.entorno_aprendizaje_teorica}</td>
                    <td>${register.entorno_aprendizaje_practica}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.entorno_aprendizaje.index = ${index})">
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
                for (let i = 0; i < entity.entorno_aprendizaje.database.length; i++) {
                    if (
                        textSearch === entity.entorno_aprendizaje.database[i].entorno_aprendizaje_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.entorno_aprendizaje.database[i].entorno_aprendizaje_instalaciones.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.entorno_aprendizaje.database[i].entorno_aprendizaje_teorica.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.entorno_aprendizaje.database[i].entorno_aprendizaje_practica.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.entorno_aprendizaje.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.entorno_aprendizaje.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.entorno_aprendizaje.fun.select();
            }
        },
    },
    entorno_aprendizaje: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.entorno_aprendizaje.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.entorno_aprendizaje.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.entorno_aprendizaje_instalaciones.value !== "" &&
                    entity.view.form.entorno_aprendizaje_teorica.value !== "" &&
                    entity.view.form.entorno_aprendizaje_practica.value !== "" &&
                    entity.view.form.curso_modelo_id.value !== ""
                ) {
                    if (entity.entorno_aprendizaje.index === null) {
                        entity.entorno_aprendizaje.crud.insert();
                    } else {
                        entity.entorno_aprendizaje.crud.update();
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
                await Entorno_aprendizajeDao.selectByCurso_modelo_id(formData)
                    .then((res) => {
                        entity.entorno_aprendizaje.database = res;
                        entity.entorno_aprendizaje.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Entorno_aprendizajeDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.entorno_aprendizaje.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Entorno_aprendizajeDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.entorno_aprendizaje.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("entorno_aprendizaje_id", entity.entorno_aprendizaje.database[entity.entorno_aprendizaje.index].entorno_aprendizaje_id);
                Entorno_aprendizajeDao.delete(formData)
                    .then((res) => {
                        entity.entorno_aprendizaje.crud.select();
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
