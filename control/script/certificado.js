/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/certificado.js
*/
// MAIN INI
const main = async () => {
    await entity.certificado.crud.select();
    await entity.selects.certificado_tipo();
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
            entity.certificado.index = index;
            if (index !== null) {
                entity.view.form.certificado_id.value = entity.certificado.database[index].certificado_id;
                entity.view.form.certificado_codigo.value = entity.certificado.database[index].certificado_codigo;
                entity.view.form.certificado_tipo_id.value = entity.certificado.database[index].certificado_tipo_id;
                entity.view.form.usuario_id.value = entity.certificado.database[index].usuario_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.certificado.index = null;
            entity.view.form.certificado_id.value = "";
            entity.view.form.certificado_codigo.value = "";
            entity.view.form.certificado_tipo_id.value = "";
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
            entity.certificado.index = null;
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
                    <td>${register.certificado_id}</td>
                    <td>${register.certificado_codigo}</td>
                    <td>${register.certificado_tipo_id}</td>
                    <td>${register.usuario_id}</td>
                    <td><a target="_blank" ${register.certificado_pdf !== null ? 'href="view/src/files/certificado_pdf/' + register.certificado_pdf + '"' : ""}"><img src='view/src/icon/link.png' /></a></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_tipo.index = ${index})">
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
                for (let i = 0; i < entity.certificado.database.length; i++) {
                    if (
                        textSearch === entity.certificado.database[i].certificado_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.certificado.database[i].certificado_codigo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.certificado.database[i].certificado_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.certificado.database[i].usuario_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.certificado.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.certificado.fun.select();
            }
        },
    },
    certificado: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.certificado.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.certificado.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.certificado_codigo.value !== "" && entity.view.form.certificado_tipo_id.value !== "" && entity.view.form.usuario_id.value !== "") {
                    if (entity.certificado.index === null) {
                        entity.certificado.crud.insert();
                    } else {
                        entity.certificado.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await CertificadoDao.select()
                    .then((res) => {
                        entity.certificado.database = res;
                        entity.certificado.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                CertificadoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.certificado.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                CertificadoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.certificado.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("certificado_id", entity.certificado.database[entity.certificado.index].certificado_id);
                CertificadoDao.delete(formData)
                    .then((res) => {
                        entity.certificado.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        certificado_tipo: async () => {
            await Certificado_tipoDao.select().then((res) => {
                let html = `<option value="">CERTIFICADO_TIPO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].certificado_tipo_id}">${res[i].certificado_tipo_id}</option>
`;
                }
                entity.view.form.certificado_tipo_id.innerHTML = html;
            });
        },
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
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
