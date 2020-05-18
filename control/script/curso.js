/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso.js
*/
// MAIN INI
const main = async () => {
    await entity.curso.crud.select();
    await entity.selects.curso_modelo();
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
                entity.view.form.usuario_id.value = entity.curso.database[index].usuario_id;
            }
            entity.view.modalForm.style.top = "0%";
            entity.fun.closeBrowserIframe();
        },

        hideModalForm: () => {
            entity.curso.index = null;
            entity.view.form.curso_id.value = "";
            entity.view.form.curso_nombre.value = "";
            entity.view.form.curso_fecha_inicio.value = "";
            entity.view.form.curso_fecha_fin.value = "";
            entity.view.form.curso_cupos.value = "";
            entity.view.form.curso_whatsapp.value = "";
            entity.view.form.curso_calificacion.value = "0";
            entity.view.form.curso_proximo.value = "";
            entity.view.form.curso_visible.value = "";
            entity.view.form.curso_precio_live.value = "";
            entity.view.form.curso_precio_record.value = "";
            entity.view.form.curso_certificado_live.value = "";
            entity.view.form.curso_certificado_record.value = "";
            entity.view.form.curso_certificacion_live.value = "";
            entity.view.form.curso_modelo_id.value = "";
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
                    <td>
                        <img src='view/src/icon/star_${register.curso_calificacion}.png' class="stars" />
                    </td>
                    <td>$${register.curso_precio_live}</td>
                    <td>$${register.curso_precio_record}</td>
                    <td>${register.curso_proximo == 1 ? 'SI' : 'NO' }</td>
                    <td>${register.curso_visible == 1 ? 'SI' : 'NO' }</td>
                    <td>${register.curso_certificado_live == 1 ? 'SI' : 'NO' }</td>
                    <td>${register.curso_certificado_record == 1 ? 'SI' : 'NO' }</td>
                    <td>${register.curso_certificacion_live == 1 ? 'SI' : 'NO' }</td>
                    <td>${register.curso_modelo_id}</td>
                    <td>
                        <img 
                            onclick="viewscreen.show('${register.curso_foto !== null ? "view/src/files/curso_foto/" + register.curso_foto : "view/src/img/avatar.png"}')" 
                            src="${register.curso_foto !== null ? "view/src/files/curso_foto/" + register.curso_foto : "view/src/img/avatar.png"}"
                        />
                    </td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso.index = ${index})">
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
        loadBrowserIframe: (page, iframe_id) => {
            const URL = "browser.php?url=view/page/panel/";
            let iframe = document.getElementById(iframe_id);
            let curso_id = entity.view.form.curso_id.value;
            if (iframe.src === "") {
                iframe.src = URL + page + ".php&curso_id=" + curso_id;
            }
        },
        closeBrowserIframe: () => {
            let iframes = document.querySelectorAll(".iframe-container .sub-iframe-container .iframe");
            let radios = document.querySelectorAll(".content-form input[name='radio-option']");
            let curso_id = entity.view.form.curso_id.value;
            if (entity.curso.curso_id != curso_id && (curso_id != 0 || curso_id === '')) {
                entity.curso.curso_id = curso_id;
                for (let i of iframes) {
                    i.removeAttribute("src");
                }
                for (let i of radios) {
                    i.checked = false;
                }
            }
            if (curso_id === '') {
                document.getElementById("idea_iframes-container").style.display = "none";
                document.getElementById("idea_iframes-msg").style.display = "flex";
                document.getElementById("idea_form-btn-submit").innerText = "CREAR";
            } else {
                document.getElementById("idea_iframes-container").style.display = "flex";
                document.getElementById("idea_iframes-msg").style.display = "none";
                document.getElementById("idea_form-btn-submit").innerText = "GUARDAR";
            }
        },
        // 0 || false = left, 1 || true = right
        scrollHorizontal: (direction, element_id, increment) => {
            let element = document.getElementById(element_id);
            if (direction == 0) {
                element.scrollLeft -= increment;
            } else {
                element.scrollLeft += increment;
            }
        },
        existByName: (nombre) => {
            for (let i in entity.curso.database) {
                if (entity.curso.database[i].curso_nombre.toLowerCase() == nombre.toLowerCase() && entity.curso.index != i) {
                    return true;
                }
            }
            return false;
        }
    },
    curso: {
        curso_id: 0,
        curso_nombre: 0,
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
                    entity.view.form.curso_proximo.value !== "" &&
                    entity.view.form.curso_visible.value !== "" &&
                    entity.view.form.curso_precio_live.value !== "" &&
                    entity.view.form.curso_precio_record.value !== "" &&
                    entity.view.form.curso_certificado_live.value !== "" &&
                    entity.view.form.curso_certificado_record.value !== "" &&
                    entity.view.form.curso_certificacion_live.value !== "" &&
                    entity.view.form.curso_modelo_id.value !== ""
                ) {
                    if (!entity.fun.existByName(entity.view.form.curso_nombre.value)) {
                        if (entity.curso.index === null) {
                            entity.curso.crud.insert();
                        } else {
                            entity.curso.crud.update();
                        }
                    } else {
                        entity.fun.showModalMessage("Ya existe un curso con este nombre!");
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await CursoDao.select().then((res) => {
                    entity.curso.database = res;
                    entity.curso.fun.select();
                    entity.fun.hideModalForm();
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            insert: () => {
                CursoDao.insert(new FormData(entity.view.form)).then(async (res) => {
                    entity.curso.curso_nombre = entity.view.form.curso_nombre.value;
                    await entity.curso.crud.select();
                    entity.fun.hideModalForm();
                    let index = entity.curso.database.findIndex(element => element.curso_nombre === entity.curso.curso_nombre);
                    index > 0 ? entity.fun.showModalForm(index) : '';
                }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            update: () => {
                CursoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.curso.crud.select();
                        entity.fun.hideModalForm();
                    }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_id", entity.curso.database[entity.curso.index].curso_id);
                CursoDao.delete(formData)
                    .then((res) => {
                        entity.curso.crud.select();
                        entity.fun.hideModalForm();
                    }).catch((res) => entity.fun.showModalMessage("Problemas al conectar con el servidor"));
            },
        },
    },

    selects: {
        curso_modelo: async () => {
            await Curso_modeloDao.select().then((res) => {
                let html = `<option value="">MODELO</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].curso_modelo_id}">${res[i].curso_modelo_nombre}</option>
                    `;
                }
                entity.view.form.curso_modelo_id.innerHTML = html;
            });
        },
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${res[i].usuario_id}">${res[i].usuario_nombre}</option>
                    `;
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