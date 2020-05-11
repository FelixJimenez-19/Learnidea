/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/seccion_pregunta.js
*/
// MAIN INI
const main = async () => {
    await entity.seccion_pregunta.crud.select();
    await entity.selects.seccion_leccion();
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
            entity.seccion_pregunta.index = index;
            if (index !== null) {
                entity.view.form.seccion_pregunta_id.value = entity.seccion_pregunta.database[index].seccion_pregunta_id;
                entity.view.form.seccion_pregunta_descripcion.value = entity.seccion_pregunta.database[index].seccion_pregunta_descripcion;
                entity.view.form.seccion_pregunta_tiempo.value = entity.seccion_pregunta.database[index].seccion_pregunta_tiempo;
                entity.view.form.seccion_pregunta_porcentaje.value = entity.seccion_pregunta.database[index].seccion_pregunta_porcentaje;
                entity.view.form.seccion_leccion_id.value = entity.seccion_pregunta.database[index].seccion_leccion_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.seccion_pregunta.index = null;
            entity.view.form.seccion_pregunta_id.value = "";
            entity.view.form.seccion_pregunta_descripcion.value = "";
            entity.view.form.seccion_pregunta_tiempo.value = "";
            entity.view.form.seccion_pregunta_porcentaje.value = "";
            entity.view.form.seccion_leccion_id.value = "";
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
            entity.seccion_pregunta.index = null;
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
                    <td>${register.seccion_pregunta_id}</td>
                    <td>${register.seccion_pregunta_descripcion}</td>
                    <td>${register.seccion_pregunta_tiempo}</td>
                    <td>${register.seccion_pregunta_porcentaje}</td>
                    <td>${register.seccion_leccion_id}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_tipo.index = ${index})">
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
                for (let i = 0; i < entity.seccion_pregunta.database.length; i++) {
                    if (
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_tiempo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_porcentaje.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_leccion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.seccion_pregunta.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.seccion_pregunta.fun.select();
            }
        },
    },
    seccion_pregunta: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.seccion_pregunta.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.seccion_pregunta.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.seccion_pregunta_descripcion.value !== "" &&
                    entity.view.form.seccion_pregunta_tiempo.value !== "" &&
                    entity.view.form.seccion_pregunta_porcentaje.value !== "" &&
                    entity.view.form.seccion_leccion_id.value !== ""
                ) {
                    if (entity.seccion_pregunta.index === null) {
                        entity.seccion_pregunta.crud.insert();
                    } else {
                        entity.seccion_pregunta.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Seccion_preguntaDao.select()
                    .then((res) => {
                        entity.seccion_pregunta.database = res;
                        entity.seccion_pregunta.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Seccion_preguntaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.seccion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Seccion_preguntaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.seccion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("seccion_pregunta_id", entity.seccion_pregunta.database[entity.seccion_pregunta.index].seccion_pregunta_id);
                Seccion_preguntaDao.delete(formData)
                    .then((res) => {
                        entity.seccion_pregunta.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        seccion_leccion: async () => {
            await Seccion_leccionDao.select().then((res) => {
                let html = `<option value="">SECCION_LECCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].seccion_leccion_id}">${res[i].seccion_leccion_id}</option>
`;
                }
                entity.view.form.seccion_leccion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
