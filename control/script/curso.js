/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso.js
*/
// MAIN INI
const main = async () => {
    await entity.curso.crud.select();
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
            entity.curso.index = index;
            if (index !== null) {
                entity.view.form.curso_id.value = entity.curso.database[index].curso_id;
                entity.view.form.curso_nombre.value = entity.curso.database[index].curso_nombre;
                entity.view.form.curso_fecha_inicio.value = entity.curso.database[index].curso_fecha_inicio;
                entity.view.form.curso_fecha_fin.value = entity.curso.database[index].curso_fecha_fin;
                entity.view.form.curso_cupos.value = entity.curso.database[index].curso_cupos;
                entity.view.form.curso_whatsapp.value = entity.curso.database[index].curso_whatsapp;
                entity.view.form.curso_calificacion.value = entity.curso.database[index].curso_calificacion;
                entity.view.form.curso_proximo.value = entity.curso.database[index].curso_proximo;
                entity.view.form.curso_visible.value = entity.curso.database[index].curso_visible;
                entity.view.form.curso_precio_live.value = entity.curso.database[index].curso_precio_live;
                entity.view.form.curso_precio_record.value = entity.curso.database[index].curso_precio_record;
                entity.view.form.curso_certificado_live.value = entity.curso.database[index].curso_certificado_live;
                entity.view.form.curso_certificado_record.value = entity.curso.database[index].curso_certificado_record;
                entity.view.form.curso_certificacion_live.value = entity.curso.database[index].curso_certificacion_live;
                entity.view.form.curso_modelo_id.value = entity.curso.database[index].curso_modelo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.curso.index = null;
            entity.view.form.curso_id.value = "";
            entity.view.form.curso_nombre.value = "";
            entity.view.form.curso_fecha_inicio.value = "";
            entity.view.form.curso_fecha_fin.value = "";
            entity.view.form.curso_cupos.value = "";
            entity.view.form.curso_whatsapp.value = "";
            entity.view.form.curso_calificacion.value = "";
            entity.view.form.curso_proximo.value = "";
            entity.view.form.curso_visible.value = "";
            entity.view.form.curso_precio_live.value = "";
            entity.view.form.curso_precio_record.value = "";
            entity.view.form.curso_certificado_live.value = "";
            entity.view.form.curso_certificado_record.value = "";
            entity.view.form.curso_certificacion_live.value = "";
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
            entity.curso.index = null;
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
<td>${register.curso_id}</td>
<td>${register.curso_nombre}</td>
<td>${register.curso_fecha_inicio}</td>
<td>${register.curso_fecha_fin}</td>
<td>${register.curso_cupos}</td>
<td>${register.curso_whatsapp}</td>
<td>${register.curso_calificacion}</td>
<td>${register.curso_proximo}</td>
<td>${register.curso_visible}</td>
<td>${register.curso_precio_live}</td>
<td>${register.curso_precio_record}</td>
<td>${register.curso_certificado_live}</td>
<td>${register.curso_certificado_record}</td>
<td>${register.curso_certificacion_live}</td>
<td>${register.curso_modelo_id}</td>
<td><img src="${register.curso_foto !== null ? "view/src/files/curso_foto/" + register.curso_foto : "view/src/img/avatar.png"}"/></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.curso.database.length; i++) {
                    if (
                        textSearch === entity.curso.database[i].curso_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_fecha_inicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_fecha_fin.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_cupos.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_whatsapp.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_calificacion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_proximo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_visible.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_precio_live.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_precio_record.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_certificado_live.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_certificado_record.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_certificacion_live.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.curso.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.curso.fun.select();
            }
        },
    },
    curso: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.curso.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.curso.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.curso_nombre.value !== "" &&
                    entity.view.form.curso_fecha_inicio.value !== "" &&
                    entity.view.form.curso_fecha_fin.value !== "" &&
                    entity.view.form.curso_cupos.value !== "" &&
                    entity.view.form.curso_whatsapp.value !== "" &&
                    entity.view.form.curso_calificacion.value !== "" &&
                    entity.view.form.curso_proximo.value !== "" &&
                    entity.view.form.curso_visible.value !== "" &&
                    entity.view.form.curso_precio_live.value !== "" &&
                    entity.view.form.curso_precio_record.value !== "" &&
                    entity.view.form.curso_certificado_live.value !== "" &&
                    entity.view.form.curso_certificado_record.value !== "" &&
                    entity.view.form.curso_certificacion_live.value !== "" &&
                    entity.view.form.curso_modelo_id.value !== ""
                ) {
                    if (entity.curso.index === null) {
                        entity.curso.crud.insert();
                    } else {
                        entity.curso.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await CursoDao.select()
                    .then((res) => {
                        entity.curso.database = res;
                        entity.curso.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                CursoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                CursoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_id", entity.curso.database[entity.curso.index].curso_id);
                CursoDao.delete(formData)
                    .then((res) => {
                        entity.curso.crud.select();
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
