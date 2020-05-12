/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/usuario.js
*/
// MAIN INI
const main = async () => {
    await entity.usuario.crud.select();
    await entity.selects.usuario_tipo();
    await entity.selects.usuario_tema();
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
            entity.usuario.index = index;
            if (index !== null) {
                entity.view.form.usuario_id.value = entity.usuario.database[index].usuario_id;
                entity.view.form.usuario_nombre.value = entity.usuario.database[index].usuario_nombre;
                entity.view.form.usuario_cedula.value = entity.usuario.database[index].usuario_cedula;
                entity.view.form.usuario_edad.value = entity.usuario.database[index].usuario_edad;
                entity.view.form.usuario_indice.value = entity.usuario.database[index].usuario_indice;
                entity.view.form.usuario_celular.value = entity.usuario.database[index].usuario_celular;
                entity.view.form.usuario_telefono.value = entity.usuario.database[index].usuario_telefono;
                entity.view.form.usuario_email.value = entity.usuario.database[index].usuario_email;
                entity.view.form.usuario_pass.value = entity.usuario.database[index].usuario_pass;
                entity.view.form.usuario_sexo.value = entity.usuario.database[index].usuario_sexo;
                entity.view.form.usuario_nivel.value = entity.usuario.database[index].usuario_nivel;
                entity.view.form.usuario_calificacion.value = entity.usuario.database[index].usuario_calificacion;
                entity.view.form.usuario_direccion.value = entity.usuario.database[index].usuario_direccion;
                entity.view.form.usuario_descripcion.value = entity.usuario.database[index].usuario_descripcion;
                entity.view.form.usuario_empresa_nombre.value = entity.usuario.database[index].usuario_empresa_nombre;
                entity.view.form.usuario_empresa_actividad.value = entity.usuario.database[index].usuario_empresa_actividad;
                entity.view.form.usuario_empresa_direccion.value = entity.usuario.database[index].usuario_empresa_direccion;
                entity.view.form.usuario_empresa_telefono.value = entity.usuario.database[index].usuario_empresa_telefono;
                entity.view.form.usuario_tema_mode_dark.value = entity.usuario.database[index].usuario_tema_mode_dark;
                entity.view.form.usuario_tipo_id.value = entity.usuario.database[index].usuario_tipo_id;
                entity.view.form.usuario_tema_id.value = entity.usuario.database[index].usuario_tema_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.usuario.index = null;
            entity.view.form.usuario_id.value = "";
            entity.view.form.usuario_nombre.value = "";
            entity.view.form.usuario_cedula.value = "";
            entity.view.form.usuario_edad.value = "";
            entity.view.form.usuario_indice.value = "";
            entity.view.form.usuario_celular.value = "";
            entity.view.form.usuario_telefono.value = "";
            entity.view.form.usuario_email.value = "";
            entity.view.form.usuario_pass.value = "";
            entity.view.form.usuario_sexo.value = "";
            entity.view.form.usuario_nivel.value = "";
            entity.view.form.usuario_calificacion.value = "0";
            entity.view.form.usuario_direccion.value = "";
            entity.view.form.usuario_descripcion.value = "";
            entity.view.form.usuario_empresa_nombre.value = "";
            entity.view.form.usuario_empresa_actividad.value = "";
            entity.view.form.usuario_empresa_direccion.value = "";
            entity.view.form.usuario_empresa_telefono.value = "";
            entity.view.form.usuario_tema_mode_dark.value = "";
            entity.view.form.usuario_tipo_id.value = "";
            entity.view.form.usuario_tema_id.value = "";
            entity.view.form.usuario_foto.value = "";
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
            entity.usuario.index = null;
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
                    <td>${register.usuario_id}</td>
                    <td>${register.usuario_nombre}</td>
                    <td>
                        <img src="${register.usuario_foto !== null ? "view/src/files/usuario_foto/" + register.usuario_foto : "view/src/img/avatar.png"}"/>
                    </td>
                    <td>
                        <img src="${register.usuario_firma !== null ? "view/src/files/usuario_firma/" + register.usuario_firma : "view/src/img/avatar.png"}"/>
                    </td>
                    <td>
                        <a target="_blank" ${register.usuario_curriculum !== null ? 'href="view/src/files/usuario_curriculum/' + register.usuario_curriculum + '"' : ""}">
                            <img src='view/src/icon/link.png' />
                        </a>
                    </td>
                    <td>
                        <img src='view/src/icon/star_${register.usuario_calificacion}.png' class="stars" />
                    </td>
                    <td>${register.usuario_cedula}</td>
                    <td>${register.usuario_edad}</td>
                    <td>${register.usuario_indice}</td>
                    <td>${register.usuario_celular}</td>
                    <td>${register.usuario_telefono}</td>
                    <td>${register.usuario_email}</td>
                    <td>${register.usuario_direccion}</td>
                    <td>${register.usuario_descripcion}</td>
                    <td>${register.usuario_sexo}</td>
                    <td>${register.usuario_nivel}</td>
                    <td>${register.usuario_tipo_nombre}</td>
                    <td>${register.usuario_tema_nombre}</td>
                    <td>${register.usuario_tema_mode_dark == 1 ? "DARK" : "CLEAR"}</td>
                    <td>${register.usuario_empresa_nombre}</td>
                    <td>${register.usuario_empresa_actividad}</td>
                    <td>${register.usuario_empresa_direccion}</td>
                    <td>${register.usuario_empresa_telefono}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario.index = ${index}) ">
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
                for (let i = 0; i < entity.usuario.database.length; i++) {
                    if (
                        textSearch === entity.usuario.database[i].usuario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_cedula.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_edad.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_indice.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_celular.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_telefono.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_email.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_pass.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_sexo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_nivel.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_direccion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_empresa_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_empresa_actividad.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_empresa_direccion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_empresa_telefono.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_tipo_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_tema_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.usuario.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.usuario.fun.select();
            }
        },
    },
    usuario: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.usuario.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.usuario.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.usuario_nombre.value !== "" &&
                    entity.view.form.usuario_cedula.value !== "" &&
                    entity.view.form.usuario_edad.value !== "" &&
                    entity.view.form.usuario_indice.value !== "" &&
                    entity.view.form.usuario_celular.value !== "" &&
                    entity.view.form.usuario_telefono.value !== "" &&
                    entity.view.form.usuario_email.value !== "" &&
                    entity.view.form.usuario_pass.value !== "" &&
                    entity.view.form.usuario_sexo.value !== "" &&
                    entity.view.form.usuario_nivel.value !== "" &&
                    entity.view.form.usuario_direccion.value !== "" &&
                    entity.view.form.usuario_descripcion.value !== "" &&
                    entity.view.form.usuario_empresa_nombre.value !== "" &&
                    entity.view.form.usuario_empresa_actividad.value !== "" &&
                    entity.view.form.usuario_empresa_direccion.value !== "" &&
                    entity.view.form.usuario_empresa_telefono.value !== "" &&
                    entity.view.form.usuario_tema_mode_dark.value !== "" &&
                    entity.view.form.usuario_tipo_id.value !== "" &&
                    entity.view.form.usuario_tema_id.value !== ""
                ) {
                    if (entity.usuario.index === null) {
                        entity.usuario.crud.insert();
                    } else {
                        entity.usuario.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await UsuarioDao.select()
                    .then((res) => {
                        entity.usuario.database = res;
                        entity.usuario.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                UsuarioDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                UsuarioDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("usuario_id", entity.usuario.database[entity.usuario.index].usuario_id);
                UsuarioDao.delete(formData)
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        usuario_tipo: async () => {
            await Usuario_tipoDao.select().then((res) => {
                let html = `<option value="">TIPO</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].usuario_tipo_id}">${res[i].usuario_tipo_nombre}</option>
                    `;
                }
                entity.view.form.usuario_tipo_id.innerHTML = html;
            });
        },
        usuario_tema: async () => {
            await Usuario_temaDao.select().then((res) => {
                let html = `<option value="">TEMA</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].usuario_tema_id}">${res[i].usuario_tema_nombre}</option>
                    `;
                }
                entity.view.form.usuario_tema_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
