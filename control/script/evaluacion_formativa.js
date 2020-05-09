/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/evaluacion_formativa.js
*/
// MAIN INI
const main = async () => {
    await entity.evaluacion_formativa.crud.select();
    await entity.selects.curso_modelo();
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
            entity.evaluacion_formativa.index = index;
            if (index !== null) {
                entity.view.form.evaluacion_formativa_id.value = entity.evaluacion_formativa.database[index].evaluacion_formativa_id;
                entity.view.form.evaluacion_formativa_tecnica.value = entity.evaluacion_formativa.database[index].evaluacion_formativa_tecnica;
                entity.view.form.evaluacion_formativa_instrumento.value = entity.evaluacion_formativa.database[index].evaluacion_formativa_instrumento;
                entity.view.form.evaluacion_formativa_descripcion.value = entity.evaluacion_formativa.database[index].evaluacion_formativa_descripcion;
                entity.view.form.curso_modelo_id.value = entity.evaluacion_formativa.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.evaluacion_formativa.index = null;
            entity.view.form.evaluacion_formativa_id.value = "";
            entity.view.form.evaluacion_formativa_tecnica.value = "";
            entity.view.form.evaluacion_formativa_instrumento.value = "";
            entity.view.form.evaluacion_formativa_descripcion.value = "";
            entity.view.form.curso_modelo_id.value = "";
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
            entity.evaluacion_formativa.index = null;
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
<td>${register.evaluacion_formativa_id}</td>
<td>${register.evaluacion_formativa_tecnica}</td>
<td>${register.evaluacion_formativa_instrumento}</td>
<td>${register.evaluacion_formativa_descripcion}</td>
<td>${register.curso_modelo_id}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.evaluacion_formativa.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.evaluacion_formativa.database.length; i++) {
                    if (
                        textSearch === entity.evaluacion_formativa.database[i].evaluacion_formativa_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.evaluacion_formativa.database[i].evaluacion_formativa_tecnica.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.evaluacion_formativa.database[i].evaluacion_formativa_instrumento.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.evaluacion_formativa.database[i].evaluacion_formativa_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.evaluacion_formativa.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.evaluacion_formativa.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.evaluacion_formativa.fun.select();
            }
        },
    },
    evaluacion_formativa: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.evaluacion_formativa.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.evaluacion_formativa.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.evaluacion_formativa_tecnica.value !== "" &&
                    entity.view.form.evaluacion_formativa_instrumento.value !== "" &&
                    entity.view.form.evaluacion_formativa_descripcion.value !== "" &&
                    entity.view.form.curso_modelo_id.value !== ""
                ) {
                    if (entity.evaluacion_formativa.index === null) {
                        entity.evaluacion_formativa.crud.insert();
                    } else {
                        entity.evaluacion_formativa.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Evaluacion_formativaDao.select()
                    .then((res) => {
                        entity.evaluacion_formativa.database = res;
                        entity.evaluacion_formativa.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Evaluacion_formativaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.evaluacion_formativa.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Evaluacion_formativaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.evaluacion_formativa.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("evaluacion_formativa_id", entity.evaluacion_formativa.database[entity.evaluacion_formativa.index].evaluacion_formativa_id);
                Evaluacion_formativaDao.delete(formData)
                    .then((res) => {
                        entity.evaluacion_formativa.crud.select();
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
