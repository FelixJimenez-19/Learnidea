/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso_modelo.js
*/
// MAIN INI
const main = async () => {
    await entity.curso_modelo.crud.select();
    await entity.selects.area();
    await entity.selects.especificacion();
    await entity.selects.alineacion();
    await entity.selects.participante_tipo();
    await entity.selects.modalidad();
    await entity.selects.duracion();
    await entity.selects.usuario();
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
            entity.curso_modelo.index = index;
            if (index !== null) {
                entity.view.form.curso_modelo_id.value = entity.curso_modelo.database[index].curso_modelo_id;
                entity.view.form.curso_modelo_nombre.value = entity.curso_modelo.database[index].curso_modelo_nombre;
                entity.view.form.curso_modelo_hora_teorica.value = entity.curso_modelo.database[index].curso_modelo_hora_teorica;
                entity.view.form.curso_modelo_hora_practica.value = entity.curso_modelo.database[index].curso_modelo_hora_practica;
                entity.view.form.area_id.value = entity.curso_modelo.database[index].area_id;
                entity.view.form.especificacion_id.value = entity.curso_modelo.database[index].especificacion_id;
                entity.view.form.alineacion_id.value = entity.curso_modelo.database[index].alineacion_id;
                entity.view.form.participante_tipo_id.value = entity.curso_modelo.database[index].participante_tipo_id;
                entity.view.form.modalidad_id.value = entity.curso_modelo.database[index].modalidad_id;
                entity.view.form.duracion_id.value = entity.curso_modelo.database[index].duracion_id;
                entity.view.form.usuario_id.value = entity.curso_modelo.database[index].usuario_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.curso_modelo.index = null;
            entity.view.form.curso_modelo_id.value = "";
            entity.view.form.curso_modelo_nombre.value = "";
            entity.view.form.curso_modelo_hora_teorica.value = "";
            entity.view.form.curso_modelo_hora_practica.value = "";
            entity.view.form.area_id.value = "";
            entity.view.form.especificacion_id.value = "";
            entity.view.form.alineacion_id.value = "";
            entity.view.form.participante_tipo_id.value = "";
            entity.view.form.modalidad_id.value = "";
            entity.view.form.duracion_id.value = "";
            entity.view.form.usuario_id.value = "";
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
            entity.curso_modelo.index = null;
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
<td>${register.curso_modelo_id}</td>
<td>${register.curso_modelo_nombre}</td>
<td>${register.curso_modelo_hora_teorica}</td>
<td>${register.curso_modelo_hora_practica}</td>
<td>${register.area_id}</td>
<td>${register.especificacion_id}</td>
<td>${register.alineacion_id}</td>
<td>${register.participante_tipo_id}</td>
<td>${register.modalidad_id}</td>
<td>${register.duracion_id}</td>
<td>${register.usuario_id}</td>
<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso_modelo.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.curso_modelo.database.length; i++) {
                    if (
                        textSearch === entity.curso_modelo.database[i].curso_modelo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].curso_modelo_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].curso_modelo_hora_teorica.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].curso_modelo_hora_practica.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].area_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].especificacion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].alineacion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].participante_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].modalidad_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].duracion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_modelo.database[i].usuario_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.curso_modelo.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.curso_modelo.fun.select();
            }
        },
    },
    curso_modelo: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.curso_modelo.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.curso_modelo.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.curso_modelo_nombre.value !== "" &&
                    entity.view.form.curso_modelo_hora_teorica.value !== "" &&
                    entity.view.form.curso_modelo_hora_practica.value !== "" &&
                    entity.view.form.area_id.value !== "" &&
                    entity.view.form.especificacion_id.value !== "" &&
                    entity.view.form.alineacion_id.value !== "" &&
                    entity.view.form.participante_tipo_id.value !== "" &&
                    entity.view.form.modalidad_id.value !== "" &&
                    entity.view.form.duracion_id.value !== "" &&
                    entity.view.form.usuario_id.value !== ""
                ) {
                    if (entity.curso_modelo.index === null) {
                        entity.curso_modelo.crud.insert();
                    } else {
                        entity.curso_modelo.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Curso_modeloDao.select()
                    .then((res) => {
                        entity.curso_modelo.database = res;
                        entity.curso_modelo.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Curso_modeloDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_modelo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Curso_modeloDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso_modelo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_modelo_id", entity.curso_modelo.database[entity.curso_modelo.index].curso_modelo_id);
                Curso_modeloDao.delete(formData)
                    .then((res) => {
                        entity.curso_modelo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        area: async () => {
            await AreaDao.select().then((res) => {
                let html = `<option value="">AREA</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].area_id}">${res[i].area_codigo}</option> `;
                }
                entity.view.form.area_id.innerHTML = html;
            });
        },
        especificacion: async () => {
            await EspecificacionDao.select().then((res) => {
                let html = `<option value="">ESPECIFICACION</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].especificacion_id}">${res[i].especificacion_codigo}</option> `;
                }
                entity.view.form.especificacion_id.innerHTML = html;
            });
        },
        alineacion: async () => {
            await AlineacionDao.select().then((res) => {
                let html = `<option value="">ALINEACION</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].alineacion_id}">${res[i].alineacion_descripcion}</option> `;
                }
                entity.view.form.alineacion_id.innerHTML = html;
            });
        },
        participante_tipo: async () => {
            await Participante_tipoDao.select().then((res) => {
                let html = `<option value="">PARTICIPANTE</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].participante_tipo_id}">${res[i].participante_tipo_descripcion}</option> `;
                }
                entity.view.form.participante_tipo_id.innerHTML = html;
            });
        },
        modalidad: async () => {
            await ModalidadDao.select().then((res) => {
                let html = `<option value="">MODALIDAD</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].modalidad_id}">${res[i].modalidad_descripcion}</option> `;
                }
                entity.view.form.modalidad_id.innerHTML = html;
            });
        },
        duracion: async () => {
            await DuracionDao.select().then((res) => {
                let html = `<option value="">DURACION</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].duracion_id}">${res[i].duracion_descripcion}</option> `;
                }
                entity.view.form.duracion_id.innerHTML = html;
            });
        },
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += ` <option value="${res[i].usuario_id}">${res[i].usuario_nombre}</option> `;
                }
                entity.view.form.usuario_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
