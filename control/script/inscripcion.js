/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/inscripcion.js
*/
// MAIN INI
const main = async () => {
    await entity.inscripcion.crud.select();
    await entity.selects.usuario();
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
            entity.inscripcion.index = index;
            if (index !== null) {
                entity.view.form.inscripcion_id.value = entity.inscripcion.database[index].inscripcion_id;
                entity.view.form.inscripcion_estado.value = entity.inscripcion.database[index].inscripcion_estado;
                entity.view.form.inscripcion_certificado_participante_nombre.value = entity.inscripcion.database[index].inscripcion_certificado_participante_nombre;
                entity.view.form.inscripcion_certificado_participante_cedula.value = entity.inscripcion.database[index].inscripcion_certificado_participante_cedula;
                entity.view.form.inscripcion_certificado_empresa_nombre.value = entity.inscripcion.database[index].inscripcion_certificado_empresa_nombre;
                entity.view.form.inscripcion_certificado_empresa_ciudad.value = entity.inscripcion.database[index].inscripcion_certificado_empresa_ciudad;
                entity.view.form.inscripcion_certificado_empresa_gerente.value = entity.inscripcion.database[index].inscripcion_certificado_empresa_gerente;
                entity.view.form.inscripcion_certificado_empresa_docente.value = entity.inscripcion.database[index].inscripcion_certificado_empresa_docente;
                entity.view.form.inscripcion_certificado_curso_nombre.value = entity.inscripcion.database[index].inscripcion_certificado_curso_nombre;
                entity.view.form.inscripcion_certificado_curso_fecha_inicio.value = entity.inscripcion.database[index].inscripcion_certificado_curso_fecha_inicio;
                entity.view.form.inscripcion_certificado_curso_fecha_fin.value = entity.inscripcion.database[index].inscripcion_certificado_curso_fecha_fin;
                entity.view.form.inscripcion_certificado_curso_horas.value = entity.inscripcion.database[index].inscripcion_certificado_curso_horas;
                entity.view.form.inscripcion_certificado_emision.value = entity.inscripcion.database[index].inscripcion_certificado_emision;
                entity.view.form.inscripcion_certificado_codigo.value = entity.inscripcion.database[index].inscripcion_certificado_codigo;
                entity.view.form.inscripcion_curso_calificacion.value = entity.inscripcion.database[index].inscripcion_curso_calificacion;
                entity.view.form.inscripcion_curso_opinion.value = entity.inscripcion.database[index].inscripcion_curso_opinion;
                entity.view.form.inscripcion_pago_live.value = entity.inscripcion.database[index].inscripcion_pago_live;
                entity.view.form.inscripcion_pago_record.value = entity.inscripcion.database[index].inscripcion_pago_record;
                entity.view.form.usuario_id.value = entity.inscripcion.database[index].usuario_id;
                entity.view.form.curso_id.value = entity.inscripcion.database[index].curso_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.inscripcion.index = null;
            entity.view.form.inscripcion_id.value = "";
            entity.view.form.inscripcion_estado.value = "";
            entity.view.form.inscripcion_certificado_participante_nombre.value = "";
            entity.view.form.inscripcion_certificado_participante_cedula.value = "";
            entity.view.form.inscripcion_certificado_empresa_nombre.value = "";
            entity.view.form.inscripcion_certificado_empresa_ciudad.value = "";
            entity.view.form.inscripcion_certificado_empresa_gerente.value = "";
            entity.view.form.inscripcion_certificado_empresa_docente.value = "";
            entity.view.form.inscripcion_certificado_curso_nombre.value = "";
            entity.view.form.inscripcion_certificado_curso_fecha_inicio.value = "";
            entity.view.form.inscripcion_certificado_curso_fecha_fin.value = "";
            entity.view.form.inscripcion_certificado_curso_horas.value = "";
            entity.view.form.inscripcion_certificado_emision.value = "";
            entity.view.form.inscripcion_certificado_codigo.value = "";
            entity.view.form.inscripcion_curso_calificacion.value = "";
            entity.view.form.inscripcion_curso_opinion.value = "";
            entity.view.form.inscripcion_pago_live.value = "";
            entity.view.form.inscripcion_pago_record.value = "";
            entity.view.form.usuario_id.value = "";
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
            entity.inscripcion.index = null;
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
                    <td>${register.inscripcion_id}</td>
                    <td>${register.inscripcion_estado}</td>
                    <td>${register.inscripcion_certificado_participante_nombre}</td>
                    <td>${register.inscripcion_certificado_participante_cedula}</td>
                    <td>${register.inscripcion_certificado_empresa_nombre}</td>
                    <td>${register.inscripcion_certificado_empresa_ciudad}</td>
                    <td>${register.inscripcion_certificado_empresa_gerente}</td>
                    <td>${register.inscripcion_certificado_empresa_docente}</td>
                    <td>${register.inscripcion_certificado_curso_nombre}</td>
                    <td>${register.inscripcion_certificado_curso_fecha_inicio}</td>
                    <td>${register.inscripcion_certificado_curso_fecha_fin}</td>
                    <td>${register.inscripcion_certificado_curso_horas}</td>
                    <td>${register.inscripcion_certificado_emision}</td>
                    <td>${register.inscripcion_certificado_codigo}</td>
                    <td>${register.inscripcion_curso_calificacion}</td>
                    <td>${register.inscripcion_curso_opinion}</td>
                    <td>${register.inscripcion_pago_live}</td>
                    <td>${register.inscripcion_pago_record}</td>
                    <td>${register.usuario_id}</td>
                    <td>${register.curso_id}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.inscripcion.index = ${index})">
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
                for (let i = 0; i < entity.inscripcion.database.length; i++) {
                    if (
                        textSearch === entity.inscripcion.database[i].inscripcion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_estado.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_participante_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_participante_cedula.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_empresa_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_empresa_ciudad.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_empresa_gerente.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_empresa_docente.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_curso_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_curso_fecha_inicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_curso_fecha_fin.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_curso_horas.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_emision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_certificado_codigo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_curso_calificacion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_curso_opinion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_pago_live.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].inscripcion_pago_record.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].usuario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.inscripcion.database[i].curso_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.inscripcion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.inscripcion.fun.select();
            }
        },
    },
    inscripcion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.inscripcion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.inscripcion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.inscripcion_estado.value !== "" &&
                    entity.view.form.inscripcion_certificado_participante_nombre.value !== "" &&
                    entity.view.form.inscripcion_certificado_participante_cedula.value !== "" &&
                    entity.view.form.inscripcion_certificado_empresa_nombre.value !== "" &&
                    entity.view.form.inscripcion_certificado_empresa_ciudad.value !== "" &&
                    entity.view.form.inscripcion_certificado_empresa_gerente.value !== "" &&
                    entity.view.form.inscripcion_certificado_empresa_docente.value !== "" &&
                    entity.view.form.inscripcion_certificado_curso_nombre.value !== "" &&
                    entity.view.form.inscripcion_certificado_curso_fecha_inicio.value !== "" &&
                    entity.view.form.inscripcion_certificado_curso_fecha_fin.value !== "" &&
                    entity.view.form.inscripcion_certificado_curso_horas.value !== "" &&
                    entity.view.form.inscripcion_certificado_emision.value !== "" &&
                    entity.view.form.inscripcion_certificado_codigo.value !== "" &&
                    entity.view.form.inscripcion_curso_calificacion.value !== "" &&
                    entity.view.form.inscripcion_curso_opinion.value !== "" &&
                    entity.view.form.inscripcion_pago_live.value !== "" &&
                    entity.view.form.inscripcion_pago_record.value !== "" &&
                    entity.view.form.usuario_id.value !== "" &&
                    entity.view.form.curso_id.value !== ""
                ) {
                    if (entity.inscripcion.index === null) {
                        entity.inscripcion.crud.insert();
                    } else {
                        entity.inscripcion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await InscripcionDao.select()
                    .then((res) => {
                        entity.inscripcion.database = res;
                        entity.inscripcion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                InscripcionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.inscripcion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                InscripcionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.inscripcion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("inscripcion_id", entity.inscripcion.database[entity.inscripcion.index].inscripcion_id);
                InscripcionDao.delete(formData)
                    .then((res) => {
                        entity.inscripcion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].usuario_id}">${res[i].usuario_id}</option>
`;
                }
                entity.view.form.usuario_id.innerHTML = html;
            });
        },
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
