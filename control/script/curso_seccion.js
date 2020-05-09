/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso_seccion.js
*/
// MAIN INI
const main = async () => {
    await entity.curso_seccion.crud.select();
    await entity.selects.curso();
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
            entity.curso_seccion.index = index;
            if (index !== null) {
                entity.view.form.curso_seccion_id.value = entity.curso_seccion.database[index].curso_seccion_id;
                entity.view.form.curso_seccion_nombre.value = entity.curso_seccion.database[index].curso_seccion_nombre;
                entity.view.form.curso_seccion_descripcion.value = entity.curso_seccion.database[index].curso_seccion_descripcion;
                entity.view.form.curso_id.value = entity.curso_seccion.database[index].curso_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.curso_seccion.index = null;
            entity.view.form.curso_seccion_id.value = "";
            entity.view.form.curso_seccion_nombre.value = "";
            entity.view.form.curso_seccion_descripcion.value = "";
            entity.view.form.curso_id.value = "";
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
            entity.curso_seccion.index = null;
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
<td>${register.curso_seccion_id}</td>
<td>${register.curso_seccion_nombre}</td>
<td>${register.curso_seccion_descripcion}</td>
<td>${register.curso_id}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso_seccion.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.curso_seccion.database.length; i++) {
                    if (
                        textSearch === entity.curso_seccion.database[i].curso_seccion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_seccion.database[i].curso_seccion_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_seccion.database[i].curso_seccion_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_seccion.database[i].curso_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.curso_seccion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.curso_seccion.fun.select();
            }
        },
    },
    curso_seccion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.curso_seccion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.curso_seccion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.curso_seccion_nombre.value !== "" && entity.view.form.curso_seccion_descripcion.value !== "" && entity.view.form.curso_id.value !== "") {
                    if (entity.curso_seccion.index === null) {
                        entity.curso_seccion.crud.insert();
                    } else {
                        entity.curso_seccion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Curso_seccionDao.select()
                    .then((res) => {
                        entity.curso_seccion.database = res;
                        entity.curso_seccion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Curso_seccionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_seccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Curso_seccionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_seccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_seccion_id", entity.curso_seccion.database[entity.curso_seccion.index].curso_seccion_id);
                Curso_seccionDao.delete(formData)
                    .then((res) => {
                        entity.curso_seccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        curso: async () => {
            await CursoDao.select().then((res) => {
                let html = `<option value="">CURSO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].curso_id}">${res[i].curso_id}</option>
`;
                }
                entity.view.form.curso_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
