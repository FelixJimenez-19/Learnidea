/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso_seccion.js
*/
// MAIN INI
const main = async () => {
    await entity.curso_seccion.crud.select();
    // await entity.selects.curso();
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
            entity.fun.closeBrowserIframe();
        },

        hideModalForm: () => {
            entity.curso_seccion.index = null;
            entity.view.form.curso_seccion_id.value = "";
            entity.view.form.curso_seccion_nombre.value = "";
            entity.view.form.curso_seccion_descripcion.value = "";
            // entity.view.form.curso_id.value = "";
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
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso_seccion.index = ${index})">
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
        loadBrowserIframe: (page, iframe_id) => {
            const URL = "browser.php?url=view/page/panel/";
            let iframe = document.getElementById(iframe_id);
            let curso_seccion_id = entity.view.form.curso_seccion_id.value;
            if (entity.fun.closeBrowserIframe()) {
                document.getElementById("idea_iframes-msg").style.display = "none";
                document.getElementById("idea_iframes-container").style.display = "flex";
                if (iframe.src === "") {
                    iframe.src = URL + page + ".php&curso_seccion_id=" + curso_seccion_id;
                }
            } else {
                document.getElementById("idea_iframes-container").style.display = "none";
                document.getElementById("idea_iframes-msg").style.display = "flex";
            }
        },
        loadForm: () => {
            document.getElementById("idea_iframes-msg").style.display = "none";
            document.getElementById("idea_iframes-container").style.display = "flex";
        },
        closeBrowserIframe: () => {
            let iframes = document.querySelectorAll(".iframe-container .sub-iframe-container .iframe");
            let radios = document.querySelectorAll(".content-form input[name='radio-option']");
            let curso_seccion_id = entity.view.form.curso_seccion_id.value;
            if (entity.curso_seccion.curso_seccion_id != curso_seccion_id && (curso_seccion_id != 0 || curso_seccion_id === '')) {
                entity.curso_seccion.curso_seccion_id = curso_seccion_id;
                for (let i of iframes) {
                    i.removeAttribute("src");
                }
                for (let i of radios) {
                    i.checked = false;
                }
                document.getElementById("radio-option-1").checked = true;
            }
            if (curso_seccion_id === '') {
                document.getElementById("idea_form-btn-submit").innerText = "CREAR";
                return false;
            } else {
                document.getElementById("idea_form-btn-submit").innerText = "GUARDAR";
                return true;
            }
        },
        existByName: (nombre) => {
            for (let i in entity.curso_seccion.database) {
                if (entity.curso_seccion.database[i].curso_seccion_nombre.toLowerCase() == nombre.toLowerCase() && entity.curso_seccion.index != i) {
                    return true;
                }
            }
            return false;
        }

    },
    curso_seccion: {
        curso_seccion_id: 0,
        curso_seccion_nombre: 0,
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
                    if (!entity.fun.existByName(entity.view.form.curso_seccion_nombre.value)) {
                        if (entity.curso_seccion.index === null) {
                            entity.curso_seccion.crud.insert();
                        } else {
                            entity.curso_seccion.crud.update();
                        }
                    } else {
                        entity.fun.showModalMessage("Ya existe una seccion con este nombre!");
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                let formData = new FormData();
                formData.append("curso_id", curso_id);
                await Curso_seccionDao.selectByCurso_id(formData).then((res) => {
                    entity.curso_seccion.database = res;
                    entity.curso_seccion.fun.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            insert: () => {
                Curso_seccionDao.insert(new FormData(entity.view.form)).then(async (res) => {
                    entity.curso_seccion.curso_seccion_nombre = entity.view.form.curso_seccion_nombre.value;
                    await entity.curso_seccion.crud.select();
                    entity.fun.hideModalForm();
                    let index = entity.curso_seccion.database.findIndex(element => element.curso_seccion_nombre === entity.curso_seccion.curso_seccion_nombre);
                    index > 0 ? entity.fun.showModalForm(index) : '';
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            update: () => {
                Curso_seccionDao.update(new FormData(entity.view.form)).then((res) => {
                    entity.curso_seccion.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_seccion_id", entity.curso_seccion.database[entity.curso_seccion.index].curso_seccion_id);
                Curso_seccionDao.delete(formData).then((res) => {
                    entity.curso_seccion.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => {
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