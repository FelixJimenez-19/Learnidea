/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/bibliografia.js
*/
// MAIN INI
const main = async () => {
    await entity.bibliografia.crud.select();
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
            entity.bibliografia.index = index;
            if (index !== null) {
                entity.view.form.bibliografia_id.value = entity.bibliografia.database[index].bibliografia_id;
                entity.view.form.bibliografia_descripcion.value = entity.bibliografia.database[index].bibliografia_descripcion;
                entity.view.form.curso_modelo_id.value = entity.bibliografia.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.bibliografia.index = null;
            entity.view.form.bibliografia_id.value = "";
            entity.view.form.bibliografia_descripcion.value = "";
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
            entity.bibliografia.index = null;
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
                    <td>${register.bibliografia_id}</td>
                    <td>${register.bibliografia_descripcion}</td>
                    <td>${register.curso_modelo_id}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.bibliografia.index = ${index})">
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
                for (let i = 0; i < entity.bibliografia.database.length; i++) {
                    if (
                        textSearch === entity.bibliografia.database[i].bibliografia_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.bibliografia.database[i].bibliografia_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.bibliografia.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.bibliografia.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.bibliografia.fun.select();
            }
        },
    },
    bibliografia: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.bibliografia.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.bibliografia.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.bibliografia_descripcion.value !== "" && entity.view.form.curso_modelo_id.value !== "") {
                    if (entity.bibliografia.index === null) {
                        entity.bibliografia.crud.insert();
                    } else {
                        entity.bibliografia.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await BibliografiaDao.select()
                    .then((res) => {
                        entity.bibliografia.database = res;
                        entity.bibliografia.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                BibliografiaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.bibliografia.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                BibliografiaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.bibliografia.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("bibliografia_id", entity.bibliografia.database[entity.bibliografia.index].bibliografia_id);
                BibliografiaDao.delete(formData)
                    .then((res) => {
                        entity.bibliografia.crud.select();
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
