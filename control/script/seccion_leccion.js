/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/seccion_leccion.js
*/
// MAIN INI
const main = async () => {
    await entity.seccion_leccion.crud.select();
    // await entity.selects.curso_seccion();
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
            entity.seccion_leccion.index = index;
            if (index !== null) {
                entity.view.form.seccion_leccion_id.value = entity.seccion_leccion.database[index].seccion_leccion_id;
                entity.view.form.seccion_leccion_descripcion.value = entity.seccion_leccion.database[index].seccion_leccion_descripcion;
                entity.view.form.seccion_leccion_puntaje.value = entity.seccion_leccion.database[index].seccion_leccion_puntaje;
                entity.view.form.seccion_leccion_intento.value = entity.seccion_leccion.database[index].seccion_leccion_intento;
                entity.view.form.seccion_leccion_tiempo.value = entity.seccion_leccion.database[index].seccion_leccion_tiempo;
                entity.view.form.curso_seccion_id.value = entity.seccion_leccion.database[index].curso_seccion_id;
            }
            entity.view.modalForm.style.top = "0%";
            entity.fun.closeBrowserIframe();
        },

        hideModalForm: () => {
            entity.seccion_leccion.index = null;
            entity.view.form.seccion_leccion_id.value = "";
            entity.view.form.seccion_leccion_descripcion.value = "";
            entity.view.form.seccion_leccion_puntaje.value = "";
            entity.view.form.seccion_leccion_intento.value = "";
            entity.view.form.seccion_leccion_tiempo.value = "";
            // entity.view.form.curso_seccion_id.value = "";
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
            entity.seccion_leccion.index = null;
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
                    <td>${register.seccion_leccion_id}</td>
                    <td>${register.seccion_leccion_descripcion}</td>
                    <td>${register.seccion_leccion_puntaje}</td>
                    <td>${register.seccion_leccion_intento}</td>
                    <td>${register.seccion_leccion_tiempo}</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.seccion_leccion.index = ${index})">
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
                for (let i = 0; i < entity.seccion_leccion.database.length; i++) {
                    if (
                        textSearch === entity.seccion_leccion.database[i].seccion_leccion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_leccion.database[i].seccion_leccion_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_leccion.database[i].seccion_leccion_puntaje.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_leccion.database[i].seccion_leccion_intento.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_leccion.database[i].seccion_leccion_tiempo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_leccion.database[i].curso_seccion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.seccion_leccion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.seccion_leccion.fun.select();
            }
        },
        loadBrowserIframe: (page, iframe_id) => {
            const URL = "browser.php?url=view/page/panel/";
            let iframe = document.getElementById(iframe_id);
            let seccion_leccion_id = entity.view.form.seccion_leccion_id.value;
            if (entity.fun.closeBrowserIframe()) {
                document.getElementById("idea_iframes-msg").style.display = "none";
                document.getElementById("idea_iframes-container").style.display = "flex";
                if (iframe.src === "") {
                    iframe.src = URL + page + ".php&seccion_leccion_id=" + seccion_leccion_id;
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
            let seccion_leccion_id = entity.view.form.seccion_leccion_id.value;
            if (entity.seccion_leccion.seccion_leccion_id != seccion_leccion_id && (seccion_leccion_id != 0 || seccion_leccion_id === '')) {
                entity.seccion_leccion.seccion_leccion_id = seccion_leccion_id;
                for (let i of iframes) {
                    i.removeAttribute("src");
                }
                for (let i of radios) {
                    i.checked = false;
                }
                document.getElementById("radio-option-1").checked = true;
            }
            if (seccion_leccion_id === '') {
                document.getElementById("idea_form-btn-submit").innerText = "CREAR";
                return false;
            } else {
                document.getElementById("idea_form-btn-submit").innerText = "GUARDAR";
                return true;
            }
        },
        existByDescripcion: (descipcion) => {
            for (let i in entity.seccion_leccion.database) {
                if (entity.seccion_leccion.database[i].seccion_leccion_descripcion.toLowerCase() == descipcion.toLowerCase() && entity.seccion_leccion.index != i) {
                    return true;
                }
            }
            return false;
        }
    },
    seccion_leccion: {
        seccion_leccion_id: 0,
        seccion_leccion_descripcion: 0,
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.seccion_leccion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.seccion_leccion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.seccion_leccion_descripcion.value !== "" &&
                    entity.view.form.seccion_leccion_puntaje.value !== "" &&
                    entity.view.form.seccion_leccion_intento.value !== "" &&
                    entity.view.form.seccion_leccion_tiempo.value !== "" &&
                    entity.view.form.curso_seccion_id.value !== ""
                ) {
                    if (!entity.fun.existByDescripcion(entity.view.form.seccion_leccion_descripcion.value)) {
                        if (entity.seccion_leccion.index === null) {
                            entity.seccion_leccion.crud.insert();
                        } else {
                            entity.seccion_leccion.crud.update();
                        }
                    } else {
                        entity.fun.showModalMessage("Ya existe una leccion con esta descipcion!");
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                let formData = new FormData();
                formData.append("curso_seccion_id", curso_seccion_id);
                await Seccion_leccionDao.selectByCurso_seccion_id(formData).then((res) => {
                    entity.seccion_leccion.database = res;
                    entity.seccion_leccion.fun.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            insert: () => {
                Seccion_leccionDao.insert(new FormData(entity.view.form)).then(async (res) => {
                    entity.seccion_leccion.seccion_leccion_descripcion = entity.view.form.seccion_leccion_descripcion.value;
                    await entity.seccion_leccion.crud.select();
                    entity.fun.hideModalForm();
                    let index = entity.seccion_leccion.database.findIndex(element => element.seccion_leccion_descripcion === entity.seccion_leccion.seccion_leccion_descripcion);
                    index > 0 ? entity.fun.showModalForm(index) : '';
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            update: () => {
                Seccion_leccionDao.update(new FormData(entity.view.form)).then((res) => {
                    entity.seccion_leccion.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            delete: () => {
                let formData = new FormData();
                formData.append("seccion_leccion_id", entity.seccion_leccion.database[entity.seccion_leccion.index].seccion_leccion_id);
                Seccion_leccionDao.delete(formData).then((res) => {
                    entity.seccion_leccion.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
        },
    },

    selects: {
        curso_seccion: async () => {
            await Curso_seccionDao.select().then((res) => {
                let html = `<option value="">CURSO_SECCION_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].curso_seccion_id}">${res[i].curso_seccion_id}</option>
                    `;
                }
                entity.view.form.curso_seccion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();