/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/informacion.js
*/
// MAIN INI
const main = async () => {
    await entity.informacion.crud.select();
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
            entity.informacion.index = index;
            if (index !== null) {
                entity.view.form.informacion_id.value = entity.informacion.database[index].informacion_id;
                entity.view.form.informacion_empresa_nombre.value = entity.informacion.database[index].informacion_empresa_nombre;
                entity.view.form.informacion_empresa_siglas.value = entity.informacion.database[index].informacion_empresa_siglas;
                entity.view.form.informacion_empresa_ciudad.value = entity.informacion.database[index].informacion_empresa_ciudad;
                entity.view.form.informacion_empresa_mision.value = entity.informacion.database[index].informacion_empresa_mision;
                entity.view.form.informacion_empresa_vision.value = entity.informacion.database[index].informacion_empresa_vision;
                entity.view.form.informacion_gerente_nombre.value = entity.informacion.database[index].informacion_gerente_nombre;
                entity.view.form.informacion_gerente_celular.value = entity.informacion.database[index].informacion_gerente_celular;
                entity.view.form.informacion_gerente_nivel_nombre.value = entity.informacion.database[index].informacion_gerente_nivel_nombre;
                entity.view.form.informacion_gerente_nivel_siglas.value = entity.informacion.database[index].informacion_gerente_nivel_siglas;
                entity.view.form.informacion_pagina_nombre.value = entity.informacion.database[index].informacion_pagina_nombre;
                entity.view.form.informacion_pagina_mision.value = entity.informacion.database[index].informacion_pagina_mision;
                entity.view.form.informacion_pagina_vision.value = entity.informacion.database[index].informacion_pagina_vision;
                entity.view.form.informacion_pagina_copyright.value = entity.informacion.database[index].informacion_pagina_copyright;
                entity.view.form.informacion_ubicacion.value = entity.informacion.database[index].informacion_ubicacion;
                entity.view.form.informacion_api_key.value = entity.informacion.database[index].informacion_api_key;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.informacion.index = null;
            entity.view.form.informacion_id.value = "";
            entity.view.form.informacion_empresa_nombre.value = "";
            entity.view.form.informacion_empresa_siglas.value = "";
            entity.view.form.informacion_empresa_ciudad.value = "";
            entity.view.form.informacion_empresa_mision.value = "";
            entity.view.form.informacion_empresa_vision.value = "";
            entity.view.form.informacion_gerente_nombre.value = "";
            entity.view.form.informacion_gerente_celular.value = "";
            entity.view.form.informacion_gerente_nivel_nombre.value = "";
            entity.view.form.informacion_gerente_nivel_siglas.value = "";
            entity.view.form.informacion_pagina_nombre.value = "";
            entity.view.form.informacion_pagina_mision.value = "";
            entity.view.form.informacion_pagina_vision.value = "";
            entity.view.form.informacion_pagina_copyright.value = "";
            entity.view.form.informacion_ubicacion.value = "";
            entity.view.form.informacion_api_key.value = "";
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
            entity.informacion.index = null;
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
                    <td>${register.informacion_id}</td>
                    <td>${register.informacion_empresa_nombre}</td>
                    <td>${register.informacion_empresa_siglas}</td>
                    <td>${register.informacion_empresa_ciudad}</td>
                    <td><div class="long-text">${register.informacion_empresa_mision}</div></td>
                    <td><div class="long-text">${register.informacion_empresa_vision}</div></td>
                    <td>${register.informacion_ubicacion}</td>
                    <td>
                        <img 
                        onclick="viewscreen.show('${register.informacion_empresa_logo !== null ? "view/src/files/informacion_empresa_logo/" + register.informacion_empresa_logo : "view/src/img/avatar.png"}')" 
                            src="${register.informacion_empresa_logo !== null ? "view/src/files/informacion_empresa_logo/" + register.informacion_empresa_logo : "view/src/img/avatar.png"}"
                        />
                    </td>
                    <td>${register.informacion_pagina_nombre}</td>
                    <td><div class="long-text">${register.informacion_pagina_mision}</div></td>
                    <td><div class="long-text">${register.informacion_pagina_vision}</div></td>
                    <td><div class="long-text">${register.informacion_pagina_copyright}</div></td>
                    <td>
                        <img 
                        onclick="viewscreen.show('${register.informacion_pagina_logo !== null ? "view/src/files/informacion_pagina_logo/" + register.informacion_pagina_logo : "view/src/img/avatar.png"}')" 
                            src="${register.informacion_pagina_logo !== null ? "view/src/files/informacion_pagina_logo/" + register.informacion_pagina_logo : "view/src/img/avatar.png"}"
                        />
                    </td>
                    <td>${register.informacion_gerente_nombre}</td>
                    <td>${register.informacion_gerente_celular}</td>
                    <td>${register.informacion_gerente_nivel_nombre}</td>
                    <td>${register.informacion_gerente_nivel_siglas}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})">
                            <img src="view/src/icon/edit.png">
                        </button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.informacion.index = ${index})">
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
                for (let i = 0; i < entity.informacion.database.length; i++) {
                    if (
                        textSearch === entity.informacion.database[i].informacion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_empresa_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_empresa_siglas.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_empresa_ciudad.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_empresa_mision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_empresa_vision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_gerente_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_gerente_celular.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_gerente_nivel_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_gerente_nivel_siglas.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_pagina_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_pagina_mision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_pagina_vision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_pagina_copyright.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_ubicacion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.informacion.database[i].informacion_api_key.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.informacion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.informacion.fun.select();
            }
        },
    },
    informacion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.informacion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.informacion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.informacion_empresa_nombre.value !== "" &&
                    entity.view.form.informacion_empresa_siglas.value !== "" &&
                    entity.view.form.informacion_empresa_ciudad.value !== "" &&
                    entity.view.form.informacion_empresa_mision.value !== "" &&
                    entity.view.form.informacion_empresa_vision.value !== "" &&
                    entity.view.form.informacion_gerente_nombre.value !== "" &&
                    entity.view.form.informacion_gerente_celular.value !== "" &&
                    entity.view.form.informacion_gerente_nivel_nombre.value !== "" &&
                    entity.view.form.informacion_gerente_nivel_siglas.value !== "" &&
                    entity.view.form.informacion_pagina_nombre.value !== "" &&
                    entity.view.form.informacion_pagina_mision.value !== "" &&
                    entity.view.form.informacion_pagina_vision.value !== "" &&
                    entity.view.form.informacion_pagina_copyright.value !== "" &&
                    entity.view.form.informacion_ubicacion.value !== "" &&
                    entity.view.form.informacion_api_key.value !== ""
                ) {
                    if (entity.informacion.index === null) {
                        entity.informacion.crud.insert();
                    } else {
                        entity.informacion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await InformacionDao.select()
                    .then((res) => {
                        entity.informacion.database = res;
                        entity.informacion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                InformacionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.informacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                InformacionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.informacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("informacion_id", entity.informacion.database[entity.informacion.index].informacion_id);
                InformacionDao.delete(formData)
                    .then((res) => {
                        entity.informacion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {},
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
