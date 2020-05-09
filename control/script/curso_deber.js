/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso_deber.js
*/
// MAIN INI
const main = async () => {
    await entity.curso_deber.crud.select();
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
            entity.curso_deber.index = index;
            if (index !== null) {
                entity.view.form.curso_deber_id.value = entity.curso_deber.database[index].curso_deber_id;
                entity.view.form.curso_deber_descripcion.value = entity.curso_deber.database[index].curso_deber_descripcion;
                entity.view.form.curso_deber_link.value = entity.curso_deber.database[index].curso_deber_link;
                entity.view.form.curso_deber_fecha_inicio.value = entity.curso_deber.database[index].curso_deber_fecha_inicio;
                entity.view.form.curso_deber_fecha_fin.value = entity.curso_deber.database[index].curso_deber_fecha_fin;
                entity.view.form.curso_id.value = entity.curso_deber.database[index].curso_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.curso_deber.index = null;
            entity.view.form.curso_deber_id.value = "";
            entity.view.form.curso_deber_descripcion.value = "";
            entity.view.form.curso_deber_link.value = "";
            entity.view.form.curso_deber_fecha_inicio.value = "";
            entity.view.form.curso_deber_fecha_fin.value = "";
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
            entity.curso_deber.index = null;
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
<td>${register.curso_deber_id}</td>
<td>${register.curso_deber_descripcion}</td>
<td>${register.curso_deber_link}</td>
<td>${register.curso_deber_fecha_inicio}</td>
<td>${register.curso_deber_fecha_fin}</td>
<td>${register.curso_id}</td>
<td><img src="${register.curso_deber_foto !== null ? "view/src/files/curso_deber_foto/" + register.curso_deber_foto : "view/src/img/avatar.png"}"/></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso_deber.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.curso_deber.database.length; i++) {
                    if (
                        textSearch === entity.curso_deber.database[i].curso_deber_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_deber.database[i].curso_deber_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_deber.database[i].curso_deber_link.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_deber.database[i].curso_deber_fecha_inicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_deber.database[i].curso_deber_fecha_fin.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_deber.database[i].curso_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.curso_deber.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.curso_deber.fun.select();
            }
        },
    },
    curso_deber: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.curso_deber.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.curso_deber.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.curso_deber_descripcion.value !== "" &&
                    entity.view.form.curso_deber_link.value !== "" &&
                    entity.view.form.curso_deber_fecha_inicio.value !== "" &&
                    entity.view.form.curso_deber_fecha_fin.value !== "" &&
                    entity.view.form.curso_id.value !== ""
                ) {
                    if (entity.curso_deber.index === null) {
                        entity.curso_deber.crud.insert();
                    } else {
                        entity.curso_deber.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Curso_deberDao.select()
                    .then((res) => {
                        entity.curso_deber.database = res;
                        entity.curso_deber.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Curso_deberDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_deber.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Curso_deberDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_deber.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_deber_id", entity.curso_deber.database[entity.curso_deber.index].curso_deber_id);
                Curso_deberDao.delete(formData)
                    .then((res) => {
                        entity.curso_deber.crud.select();
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
