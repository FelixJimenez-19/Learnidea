/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/deber_entrega.js
*/
// MAIN INI
const main = async () => {
    await entity.deber_entrega.crud.select();
    await entity.selects.curso_deber();
    await entity.selects.inscripcion();
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
            entity.deber_entrega.index = index;
            if (index !== null) {
                entity.view.form.deber_entrega_id.value = entity.deber_entrega.database[index].deber_entrega_id;
                entity.view.form.deber_entrega_descripcion.value = entity.deber_entrega.database[index].deber_entrega_descripcion;
                entity.view.form.deber_entrega_link.value = entity.deber_entrega.database[index].deber_entrega_link;
                entity.view.form.deber_entrega_fecha_inicio.value = entity.deber_entrega.database[index].deber_entrega_fecha_inicio;
                entity.view.form.deber_entrega_fecha_fin.value = entity.deber_entrega.database[index].deber_entrega_fecha_fin;
                entity.view.form.curso_deber_id.value = entity.deber_entrega.database[index].curso_deber_id;
                entity.view.form.inscripcion_id.value = entity.deber_entrega.database[index].inscripcion_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.deber_entrega.index = null;
            entity.view.form.deber_entrega_id.value = "";
            entity.view.form.deber_entrega_descripcion.value = "";
            entity.view.form.deber_entrega_link.value = "";
            entity.view.form.deber_entrega_fecha_inicio.value = "";
            entity.view.form.deber_entrega_fecha_fin.value = "";
            entity.view.form.curso_deber_id.value = "";
            entity.view.form.inscripcion_id.value = "";
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
            entity.deber_entrega.index = null;
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
<td>${register.deber_entrega_id}</td>
<td>${register.deber_entrega_descripcion}</td>
<td>${register.deber_entrega_link}</td>
<td>${register.deber_entrega_fecha_inicio}</td>
<td>${register.deber_entrega_fecha_fin}</td>
<td>${register.curso_deber_id}</td>
<td>${register.inscripcion_id}</td>
<td><img src="${register.deber_entrega_foto !== null ? "view/src/files/deber_entrega_foto/" + register.deber_entrega_foto : "view/src/img/avatar.png"}"/></td>

<td><a target="_blank" ${register.deber_entrega_pdf !== null ? 'href="view/src/files/deber_entrega_pdf/' + register.deber_entrega_pdf + '"' : ""}"><img src='view/src/icon/link.png' /></a></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.deber_entrega.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.deber_entrega.database.length; i++) {
                    if (
                        textSearch === entity.deber_entrega.database[i].deber_entrega_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].deber_entrega_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].deber_entrega_link.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].deber_entrega_fecha_inicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].deber_entrega_fecha_fin.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].curso_deber_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.deber_entrega.database[i].inscripcion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.deber_entrega.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.deber_entrega.fun.select();
            }
        },
    },
    deber_entrega: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.deber_entrega.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.deber_entrega.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.deber_entrega_descripcion.value !== "" &&
                    entity.view.form.deber_entrega_link.value !== "" &&
                    entity.view.form.deber_entrega_fecha_inicio.value !== "" &&
                    entity.view.form.deber_entrega_fecha_fin.value !== "" &&
                    entity.view.form.curso_deber_id.value !== "" &&
                    entity.view.form.inscripcion_id.value !== ""
                ) {
                    if (entity.deber_entrega.index === null) {
                        entity.deber_entrega.crud.insert();
                    } else {
                        entity.deber_entrega.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Deber_entregaDao.select()
                    .then((res) => {
                        entity.deber_entrega.database = res;
                        entity.deber_entrega.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Deber_entregaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.deber_entrega.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Deber_entregaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.deber_entrega.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("deber_entrega_id", entity.deber_entrega.database[entity.deber_entrega.index].deber_entrega_id);
                Deber_entregaDao.delete(formData)
                    .then((res) => {
                        entity.deber_entrega.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        curso_deber: async () => {
            await Curso_deberDao.select().then((res) => {
                let html = `<option value="">CURSO_DEBER_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].curso_deber_id}">${res[i].curso_deber_id}</option>
`;
                }
                entity.view.form.curso_deber_id.innerHTML = html;
            });
        },
        inscripcion: async () => {
            await InscripcionDao.select().then((res) => {
                let html = `<option value="">INSCRIPCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].inscripcion_id}">${res[i].inscripcion_id}</option>
`;
                }
                entity.view.form.inscripcion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
