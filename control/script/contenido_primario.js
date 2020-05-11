/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/contenido_primario.js
*/
// MAIN INI
const main = async () => {
    await entity.contenido_primario.crud.select();
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
            entity.contenido_primario.index = index;
            if (index !== null) {
                entity.view.form.contenido_primario_id.value = entity.contenido_primario.database[index].contenido_primario_id;
                entity.view.form.contenido_primario_descripcion.value = entity.contenido_primario.database[index].contenido_primario_descripcion;
                entity.view.form.curso_modelo_id.value = entity.contenido_primario.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.contenido_primario.index = null;
            entity.view.form.contenido_primario_id.value = "";
            entity.view.form.contenido_primario_descripcion.value = "";
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
            entity.contenido_primario.index = null;
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
                    <td>${register.contenido_primario_id}</td>
                    <td>${register.contenido_primario_descripcion}</td>
                    <td>${register.curso_modelo_id}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.contenido_primario.index = ${index})">
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
                for (let i = 0; i < entity.contenido_primario.database.length; i++) {
                    if (
                        textSearch === entity.contenido_primario.database[i].contenido_primario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contenido_primario.database[i].contenido_primario_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.contenido_primario.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.contenido_primario.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.contenido_primario.fun.select();
            }
        },
    },
    contenido_primario: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.contenido_primario.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.contenido_primario.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.contenido_primario_descripcion.value !== "" && entity.view.form.curso_modelo_id.value !== "") {
                    if (entity.contenido_primario.index === null) {
                        entity.contenido_primario.crud.insert();
                    } else {
                        entity.contenido_primario.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Contenido_primarioDao.select()
                    .then((res) => {
                        entity.contenido_primario.database = res;
                        entity.contenido_primario.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Contenido_primarioDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contenido_primario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Contenido_primarioDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.contenido_primario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("contenido_primario_id", entity.contenido_primario.database[entity.contenido_primario.index].contenido_primario_id);
                Contenido_primarioDao.delete(formData)
                    .then((res) => {
                        entity.contenido_primario.crud.select();
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
