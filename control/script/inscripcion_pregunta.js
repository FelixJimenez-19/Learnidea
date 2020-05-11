/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/inscripcion_pregunta.js
*/
// MAIN INI
const main = async () => {
    await entity.inscripcion_pregunta.crud.select();
    await entity.selects.inscripcion_leccion();
    await entity.selects.seccion_pregunta();
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
            entity.inscripcion_pregunta.index = index;
            if (index !== null) {
                entity.view.form.inscripcion_pregunta_id.value = entity.inscripcion_pregunta.database[index].inscripcion_pregunta_id;
                entity.view.form.inscripcion_leccion_id.value = entity.inscripcion_pregunta.database[index].inscripcion_leccion_id;
                entity.view.form.seccion_pregunta_id.value = entity.inscripcion_pregunta.database[index].seccion_pregunta_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.inscripcion_pregunta.index = null;
            entity.view.form.inscripcion_pregunta_id.value = "";
            entity.view.form.inscripcion_leccion_id.value = "";
            entity.view.form.seccion_pregunta_id.value = "";
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
            entity.inscripcion_pregunta.index = null;
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
                    <td>${register.inscripcion_pregunta_id}</td>
                    <td>${register.inscripcion_leccion_id}</td>
                    <td>${register.seccion_pregunta_id}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.inscripcion_pregunta.index = ${index})">
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
                for (let i = 0; i < entity.inscripcion_pregunta.database.length; i++) {
                    if (
                        textSearch === entity.inscripcion_pregunta.database[i].inscripcion_pregunta_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion_pregunta.database[i].inscripcion_leccion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion_pregunta.database[i].seccion_pregunta_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.inscripcion_pregunta.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.inscripcion_pregunta.fun.select();
            }
        },
    },
    inscripcion_pregunta: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.inscripcion_pregunta.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.inscripcion_pregunta.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.inscripcion_leccion_id.value !== "" && entity.view.form.seccion_pregunta_id.value !== "") {
                    if (entity.inscripcion_pregunta.index === null) {
                        entity.inscripcion_pregunta.crud.insert();
                    } else {
                        entity.inscripcion_pregunta.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Inscripcion_preguntaDao.select()
                    .then((res) => {
                        entity.inscripcion_pregunta.database = res;
                        entity.inscripcion_pregunta.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Inscripcion_preguntaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.inscripcion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Inscripcion_preguntaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.inscripcion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("inscripcion_pregunta_id", entity.inscripcion_pregunta.database[entity.inscripcion_pregunta.index].inscripcion_pregunta_id);
                Inscripcion_preguntaDao.delete(formData)
                    .then((res) => {
                        entity.inscripcion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        inscripcion_leccion: async () => {
            await Inscripcion_leccionDao.select().then((res) => {
                let html = `<option value="">INSCRIPCION_LECCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].inscripcion_leccion_id}">${res[i].inscripcion_leccion_id}</option>
`;
                }
                entity.view.form.inscripcion_leccion_id.innerHTML = html;
            });
        },
        seccion_pregunta: async () => {
            await Seccion_preguntaDao.select().then((res) => {
                let html = `<option value="">SECCION_PREGUNTA_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].seccion_pregunta_id}">${res[i].seccion_pregunta_id}</option>
`;
                }
                entity.view.form.seccion_pregunta_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
