/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/informacion.js
*/
// MAIN INI
const main = async () => {
    await entity.informacion.crud.select();
    await entity.selects.usuario_tema();

    entity.view.editorPagina_mision.summernote();
    entity.view.editorPagina_vision.summernote();
    entity.view.editorPagina_copyright.summernote();
    entity.view.editorEmpresa_mision.summernote();
    entity.view.editorEmpresa_vision.summernote();
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
        btnEdit: document.getElementById("idea_header-btn-edit"),
        viewContainer: document.getElementById("idea-view-container"),
        editorPagina_mision: $('#editor-informacion_pagina_mision'),
        editorPagina_vision: $('#editor-informacion_pagina_vision'),
        editorPagina_copyright: $('#editor-informacion_pagina_copyright'),
        editorEmpresa_mision: $('#editor-informacion_empresa_mision'),
        editorEmpresa_vision: $('#editor-informacion_empresa_vision')
    },
    fun: {
        showModalForm: (index) => {
            entity.informacion.index = index;
            if (index !== null) {
                entity.view.form.informacion_id.value = entity.informacion.database[index].informacion_id;
                entity.view.form.informacion_empresa_nombre.value = entity.informacion.database[index].informacion_empresa_nombre;
                entity.view.form.informacion_empresa_siglas.value = entity.informacion.database[index].informacion_empresa_siglas;
                entity.view.form.informacion_empresa_ciudad.value = entity.informacion.database[index].informacion_empresa_ciudad;
                // entity.view.form.informacion_empresa_mision.value = entity.informacion.database[index].informacion_empresa_mision;
                entity.view.editorEmpresa_mision.summernote('code', entity.informacion.database[index].informacion_empresa_mision);
                // entity.view.form.informacion_empresa_vision.value = entity.informacion.database[index].informacion_empresa_vision;
                entity.view.editorEmpresa_vision.summernote('code', entity.informacion.database[index].informacion_empresa_vision);
                entity.view.form.informacion_gerente_nombre.value = entity.informacion.database[index].informacion_gerente_nombre;
                entity.view.form.informacion_gerente_celular.value = entity.informacion.database[index].informacion_gerente_celular;
                entity.view.form.informacion_gerente_nivel_nombre.value = entity.informacion.database[index].informacion_gerente_nivel_nombre;
                entity.view.form.informacion_gerente_nivel_siglas.value = entity.informacion.database[index].informacion_gerente_nivel_siglas;
                entity.view.form.informacion_pagina_nombre.value = entity.informacion.database[index].informacion_pagina_nombre;
                // entity.view.form.informacion_pagina_mision.value = entity.informacion.database[index].informacion_pagina_mision;
                entity.view.editorPagina_mision.summernote('code', entity.informacion.database[index].informacion_pagina_mision);
                // entity.view.form.informacion_pagina_vision.value = entity.informacion.database[index].informacion_pagina_vision;
                entity.view.editorPagina_vision.summernote('code', entity.informacion.database[index].informacion_pagina_vision);
                // entity.view.form.informacion_pagina_copyright.value = entity.informacion.database[index].informacion_pagina_copyright;
                entity.view.editorPagina_copyright.summernote('code', entity.informacion.database[index].informacion_pagina_copyright);
                entity.view.form.informacion_ubicacion.value = entity.informacion.database[index].informacion_ubicacion;
                entity.view.form.informacion_api_key.value = entity.informacion.database[index].informacion_api_key;
                entity.view.form.usuario_tema_id.value = entity.informacion.database[index].usuario_tema_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.informacion.index = null;
            entity.view.form.informacion_id.value = "";
            entity.view.form.informacion_empresa_nombre.value = "";
            entity.view.form.informacion_empresa_siglas.value = "";
            entity.view.form.informacion_empresa_ciudad.value = "";
            // entity.view.form.informacion_empresa_mision.value = "";
            entity.view.editorEmpresa_mision.summernote('code', '');
            // entity.view.form.informacion_empresa_vision.value = "";
            entity.view.editorEmpresa_vision.summernote('code', '');
            entity.view.form.informacion_gerente_nombre.value = "";
            entity.view.form.informacion_gerente_celular.value = "";
            entity.view.form.informacion_gerente_nivel_nombre.value = "";
            entity.view.form.informacion_gerente_nivel_siglas.value = "";
            entity.view.form.informacion_pagina_nombre.value = "";
            // entity.view.form.informacion_pagina_mision.value = "";
            entity.view.editorPagina_mision.summernote('code', '');
            // entity.view.form.informacion_pagina_vision.value = "";
            entity.view.editorPagina_vision.summernote('code', '');
            // entity.view.form.informacion_pagina_copyright.value = "";
            entity.view.editorPagina_copyright.summernote('code', '');
            entity.view.form.informacion_ubicacion.value = "";
            entity.view.form.informacion_api_key.value = "";
            entity.view.form.usuario_tema_id.value = "";
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
                <div class="column">
                    <div class="tittle"><span>PAGINA</span></div>
                    <div class="content">
                        <div class="row img"><span class="row-head">LOGO: </span>
                            <p class="text">
                                <img 
                                    onclick="viewscreen.show('${register.informacion_pagina_logo !== null ? "view/src/files/informacion_pagina_logo/" + register.informacion_pagina_logo : "view/src/img/avatar.png"}')" 
                                    src="${register.informacion_pagina_logo !== null ? "view/src/files/informacion_pagina_logo/" + register.informacion_pagina_logo : "view/src/img/avatar.png"}"/>
                            </p>
                        </div>
                        <div class="row"><span class="row-head">NOMBRE: </span><p class="text"><span>${register.informacion_pagina_nombre}</span></p></div>
                        <div class="row"><span class="row-head">API-KEY: </span><p class="text"><span>${register.informacion_api_key}</span></p></div>
                        <div class="row"><span class="row-head">ASPECTO: </span>
                            <p class="text">
                                <span>${register.usuario_tema_nombre}</span>
                                <span class="color" style="background: ${ register.usuario_tema_primary };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_primary_hover };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_secondary };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_secondary_hover };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_tertiary };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_tertiary_hover };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_quaternary };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_quaternary_hover };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_success };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_info };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_warning };"></span>
                                <span class="color" style="background: ${ register.usuario_tema_error };"></span>
                            </p>
                        </div>
                        <div class="row long">
                            <input type="checkbox" id="checkbox-row-long-1">
                            <label for="checkbox-row-long-1" class="row-head">MISION: </label>
                            <p class="text">${register.informacion_pagina_mision}</p>
                        </div>
                        <div class="row long">
                            <input type="checkbox" id="checkbox-row-long-2">
                            <label for="checkbox-row-long-2" class="row-head">VISION: </label>
                            <p class="text">${register.informacion_pagina_vision}</p>
                        </div>
                        <div class="row long">
                            <input type="checkbox" id="checkbox-row-long-3">
                            <label for="checkbox-row-long-3" class="row-head">COPYRIGHT: </label>
                            <div class="text">${register.informacion_pagina_copyright}</div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="tittle"><span>EMPRESA</span></div>
                    <div class="content">
                        <div class="row img"><span class="row-head">LOGO: </span>
                            <p class="text">
                                <img 
                                    onclick="viewscreen.show('${register.informacion_empresa_logo !== null ? "view/src/files/informacion_empresa_logo/" + register.informacion_empresa_logo : "view/src/img/avatar.png"}')" 
                                    src="${register.informacion_empresa_logo !== null ? "view/src/files/informacion_empresa_logo/" + register.informacion_empresa_logo : "view/src/img/avatar.png"}"/>
                            </p>
                        </div>
                        <div class="row"><span class="row-head">NOMBRE: </span><p class="text"><span>${register.informacion_empresa_nombre}</span></p></div>
                        <div class="row"><span class="row-head">SIGLAS: </span><p class="text"><span>${register.informacion_empresa_siglas}</span></p></div>
                        <div class="row"><span class="row-head">CIUDAD: </span><p class="text"><span>${register.informacion_empresa_ciudad}</span></p></div>
                        <div class="row long">
                            <input type="checkbox" id="checkbox-row-long-4">
                            <label for="checkbox-row-long-4" class="row-head">MISION: </label>
                            <p class="text">${register.informacion_empresa_mision}</p>
                        </div>
                        <div class="row long">
                            <input type="checkbox" id="checkbox-row-long-5">
                            <label for="checkbox-row-long-5" class="row-head">VISION: </label>
                            <p class="text">${register.informacion_empresa_vision}</p>
                        </div>
                        <div class="row long map">
                            <input type="checkbox" id="checkbox-row-long-6">
                            <label for="checkbox-row-long-6" class="row-head">UBICACION: </label>
                            <p class="text">${register.informacion_ubicacion}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="tittle"><span>GERENTE</span></div>
                    <div class="content">
                        <div class="row"><span class="row-head">NOMBRE: </span><p class="text"><span>${register.informacion_gerente_nombre}</span></p></div>
                        <div class="row"><span class="row-head">CELULAR: </span><p class="text"><span>${register.informacion_gerente_celular}</span></p></div>
                        <div class="row"><span class="row-head">NIVEL: </span><p class="text"><span>${register.informacion_gerente_nivel_nombre}</span></p></div>
                        <div class="row"><span class="row-head">SIGLAS: </span><p class="text"><span>${register.informacion_gerente_nivel_siglas}</span></p></div>
                    </div>
                </div>
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
                    entity.view.btnEdit.onclick = () => entity.fun.showModalForm(i);
                }
                entity.view.viewContainer.innerHTML = html;
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
                    entity.view.form.informacion_api_key.value !== "" &&
                    entity.view.form.usuario_tema_id.value !== ""
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

    selects: {
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
