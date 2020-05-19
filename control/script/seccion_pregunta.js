/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/seccion_pregunta.js
*/
// MAIN INI
const main = async () => {
    await entity.seccion_pregunta.crud.select();
    // await entity.selects.seccion_leccion();
    entity.view.editor.summernote();
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
        editor: $('#seccion_pregunta-editor')
    },
    fun: {
        showModalForm: (index) => {
            entity.seccion_pregunta.index = index;
            if (index !== null) {
                entity.view.form.seccion_pregunta_id.value = entity.seccion_pregunta.database[index].seccion_pregunta_id;
                // entity.view.form.seccion_pregunta_descripcion.value = entity.seccion_pregunta.database[index].seccion_pregunta_descripcion;
                entity.view.editor.summernote('code', entity.seccion_pregunta.database[index].seccion_pregunta_descripcion);
                entity.view.form.seccion_pregunta_porcentaje.value = entity.seccion_pregunta.database[index].seccion_pregunta_porcentaje;
                entity.view.form.seccion_leccion_id.value = entity.seccion_pregunta.database[index].seccion_leccion_id;
            }
            entity.view.modalForm.style.top = "0%";
            entity.fun.closeBrowserIframe();
            entity.fun.calcPercent();
        },

        hideModalForm: () => {
            entity.seccion_pregunta.index = null;
            entity.view.form.seccion_pregunta_id.value = "";
            // entity.view.form.seccion_pregunta_descripcion.value = "";
            entity.view.editor.summernote('code', '');
            entity.view.form.seccion_pregunta_porcentaje.value = "";
            // entity.view.form.seccion_leccion_id.value = "";
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
            entity.seccion_pregunta.index = null;
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
                    <td>${register.seccion_pregunta_id}</td>
                    <td>${register.seccion_pregunta_descripcion}</td>
                    <td>${register.seccion_pregunta_porcentaje}%</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.seccion_pregunta.index = ${index})">
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
                for (let i = 0; i < entity.seccion_pregunta.database.length; i++) {
                    if (
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_pregunta_porcentaje.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.seccion_pregunta.database[i].seccion_leccion_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.seccion_pregunta.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.seccion_pregunta.fun.select();
            }
        },
        loadBrowserIframe: (page, iframe_id) => {
            const URL = "browser.php?url=view/page/panel/";
            let iframe = document.getElementById(iframe_id);
            let seccion_pregunta_id = entity.view.form.seccion_pregunta_id.value;
            if (entity.fun.closeBrowserIframe()) {
                document.getElementById("idea_iframes-msg").style.display = "none";
                document.getElementById("idea_iframes-container").style.display = "flex";
                if (iframe.src === "") {
                    iframe.src = URL + page + ".php&seccion_pregunta_id=" + seccion_pregunta_id;
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
            let seccion_pregunta_id = entity.view.form.seccion_pregunta_id.value;
            if (entity.seccion_pregunta.seccion_pregunta_id != seccion_pregunta_id && (seccion_pregunta_id != 0 || seccion_pregunta_id === '')) {
                entity.seccion_pregunta.seccion_pregunta_id = seccion_pregunta_id;
                for (let i of iframes) {
                    i.removeAttribute("src");
                }
                for (let i of radios) {
                    i.checked = false;
                }
                document.getElementById("radio-option-1").checked = true;
            }
            if (seccion_pregunta_id === '') {
                document.getElementById("idea_form-btn-submit").innerText = "CREAR";
                return false;
            } else {
                document.getElementById("idea_form-btn-submit").innerText = "GUARDAR";
                return true;
            }
        },
        existByDescripcion: (descipcion) => {
            for (let i in entity.seccion_pregunta.database) {
                if (entity.seccion_pregunta.database[i].seccion_pregunta_descripcion.toLowerCase() == descipcion.toLowerCase() && entity.seccion_pregunta.index != i) {
                    return true;
                }
            }
            return false;
        },
        calcPercent: () => {
            let max = 100;
            let sum = 0;
            for (let i of entity.seccion_pregunta.database) {
                if(entity.seccion_pregunta.index === null) {
                    sum += parseInt(i.seccion_pregunta_porcentaje);
                } else if(entity.seccion_pregunta.database[entity.seccion_pregunta.index].seccion_pregunta_id !== i.seccion_pregunta_id) {
                    sum += parseInt(i.seccion_pregunta_porcentaje);
                }
            }
            if (max - sum < 0) {
                entity.view.form.seccion_pregunta_porcentaje.setAttribute("max", 0);
                return 0;
            } else {
                entity.view.form.seccion_pregunta_porcentaje.setAttribute("max", max - sum);
                return max - sum;
            }
        }
    },
    seccion_pregunta: {
        seccion_pregunta_id: 0,
        seccion_pregunta_descripcion: 0,
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.seccion_pregunta.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.seccion_pregunta.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.seccion_pregunta_descripcion.value !== "" &&
                    entity.view.form.seccion_pregunta_porcentaje.value !== "" &&
                    entity.view.form.seccion_leccion_id.value !== ""
                ) {
                    if (!entity.fun.existByDescripcion(entity.view.form.seccion_pregunta_descripcion.value)) {
                        if (entity.seccion_pregunta.index === null) {
                            entity.seccion_pregunta.crud.insert();
                        } else {
                            entity.seccion_pregunta.crud.update();
                        }
                    } else {
                        entity.fun.showModalMessage("Ya existe una pregunta con esta descipcion!");
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                let formData = new FormData();
                formData.append("seccion_leccion_id", seccion_leccion_id);
                await Seccion_preguntaDao.selectBySeccion_leccion_id(formData).then((res) => {
                    entity.seccion_pregunta.database = res;
                    entity.seccion_pregunta.fun.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            insert: () => {
                Seccion_preguntaDao.insert(new FormData(entity.view.form)).then(async (res) => {
                    entity.seccion_pregunta.seccion_pregunta_descripcion = entity.view.form.seccion_pregunta_descripcion.value;
                    await entity.seccion_pregunta.crud.select();
                    entity.fun.hideModalForm();
                    let index = entity.seccion_pregunta.database.findIndex(element => element.seccion_pregunta_descripcion === entity.seccion_pregunta.seccion_pregunta_descripcion);
                    index > 0 ? entity.fun.showModalForm(index) : '';
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            update: () => {
                Seccion_preguntaDao.update(new FormData(entity.view.form)).then((res) => {
                    entity.seccion_pregunta.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            delete: () => {
                let formData = new FormData();
                formData.append("seccion_pregunta_id", entity.seccion_pregunta.database[entity.seccion_pregunta.index].seccion_pregunta_id);
                Seccion_preguntaDao.delete(formData).then((res) => {
                    entity.seccion_pregunta.crud.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
        },
    },

    selects: {
        seccion_leccion: async () => {
            await Seccion_leccionDao.select().then((res) => {
                let html = `<option value="">LECCION</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].seccion_leccion_id}">${res[i].seccion_leccion_id}</option>
                    `;
                }
                entity.view.form.seccion_leccion_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
entity.view.form.seccion_pregunta_porcentaje.onkeyup = (evt) => {
    let value = parseInt(evt.srcElement.value.toLowerCase());
    if (value !== 0) {
        let percent = entity.fun.calcPercent();
        (value < 0) ? evt.srcElement.value = 0: '';
        (value > percent) ? evt.srcElement.value = percent: '';
    } else {
        evt.srcElement.value = 0;
    }
}
// MAIN CALL
main();