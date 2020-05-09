/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/estrategia.js
*/
// MAIN INI
const main = async () => {
    await entity.estrategia.crud.select();
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
            entity.estrategia.index = index;
            if (index !== null) {
                entity.view.form.estrategia_id.value = entity.estrategia.database[index].estrategia_id;
                entity.view.form.estrategia_descripcion.value = entity.estrategia.database[index].estrategia_descripcion;
                entity.view.form.curso_modelo_id.value = entity.estrategia.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.estrategia.index = null;
            entity.view.form.estrategia_id.value = "";
            entity.view.form.estrategia_descripcion.value = "";
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
            entity.estrategia.index = null;
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
<td>${register.estrategia_id}</td>
<td>${register.estrategia_descripcion}</td>
<td>${register.curso_modelo_id}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.estrategia.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.estrategia.database.length; i++) {
                    if (
                        textSearch === entity.estrategia.database[i].estrategia_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.estrategia.database[i].estrategia_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.estrategia.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.estrategia.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.estrategia.fun.select();
            }
        },
    },
    estrategia: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.estrategia.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.estrategia.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.estrategia_descripcion.value !== "" && entity.view.form.curso_modelo_id.value !== "") {
                    if (entity.estrategia.index === null) {
                        entity.estrategia.crud.insert();
                    } else {
                        entity.estrategia.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await EstrategiaDao.select()
                    .then((res) => {
                        entity.estrategia.database = res;
                        entity.estrategia.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                EstrategiaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.estrategia.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                EstrategiaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.estrategia.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("estrategia_id", entity.estrategia.database[entity.estrategia.index].estrategia_id);
                EstrategiaDao.delete(formData)
                    .then((res) => {
                        entity.estrategia.crud.select();
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
