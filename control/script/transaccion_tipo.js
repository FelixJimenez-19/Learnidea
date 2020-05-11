/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/transaccion_tipo.js
*/
// MAIN INI
const main = async () => {
    await entity.transaccion_tipo.crud.select();
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
            entity.transaccion_tipo.index = index;
            if (index !== null) {
                entity.view.form.transaccion_tipo_id.value = entity.transaccion_tipo.database[index].transaccion_tipo_id;
                entity.view.form.transaccion_tipo_nombre.value = entity.transaccion_tipo.database[index].transaccion_tipo_nombre;
                entity.view.form.transaccion_tipo_descripcion.value = entity.transaccion_tipo.database[index].transaccion_tipo_descripcion;
                entity.view.form.transaccion_tipo_credido.value = entity.transaccion_tipo.database[index].transaccion_tipo_credido;
                entity.view.form.transaccion_tipo_pago.value = entity.transaccion_tipo.database[index].transaccion_tipo_pago;
                entity.view.form.transaccion_tipo_entrada.value = entity.transaccion_tipo.database[index].transaccion_tipo_entrada;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.transaccion_tipo.index = null;
            entity.view.form.transaccion_tipo_id.value = "";
            entity.view.form.transaccion_tipo_nombre.value = "";
            entity.view.form.transaccion_tipo_descripcion.value = "";
            entity.view.form.transaccion_tipo_credido.value = "";
            entity.view.form.transaccion_tipo_pago.value = "";
            entity.view.form.transaccion_tipo_entrada.value = "";
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
            entity.transaccion_tipo.index = null;
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
                    <td>${register.transaccion_tipo_id}</td>
                    <td>${register.transaccion_tipo_nombre}</td>
                    <td>${register.transaccion_tipo_descripcion}</td>
                    <td>${register.transaccion_tipo_credido}</td>
                    <td>${register.transaccion_tipo_pago}</td>
                    <td>${register.transaccion_tipo_entrada}</td>
                    <td><img src="${register.transaccion_tipo_logo !== null ? "view/src/files/transaccion_tipo_logo/" + register.transaccion_tipo_logo : "view/src/img/avatar.png"}"/></td>
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
                for (let i = 0; i < entity.transaccion_tipo.database.length; i++) {
                    if (
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_credido.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_pago.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion_tipo.database[i].transaccion_tipo_entrada.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.transaccion_tipo.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.transaccion_tipo.fun.select();
            }
        },
    },
    transaccion_tipo: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.transaccion_tipo.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.transaccion_tipo.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.transaccion_tipo_nombre.value !== "" &&
                    entity.view.form.transaccion_tipo_descripcion.value !== "" &&
                    entity.view.form.transaccion_tipo_credido.value !== "" &&
                    entity.view.form.transaccion_tipo_pago.value !== "" &&
                    entity.view.form.transaccion_tipo_entrada.value !== ""
                ) {
                    if (entity.transaccion_tipo.index === null) {
                        entity.transaccion_tipo.crud.insert();
                    } else {
                        entity.transaccion_tipo.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Transaccion_tipoDao.select()
                    .then((res) => {
                        entity.transaccion_tipo.database = res;
                        entity.transaccion_tipo.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Transaccion_tipoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.transaccion_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Transaccion_tipoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.transaccion_tipo.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("transaccion_tipo_id", entity.transaccion_tipo.database[entity.transaccion_tipo.index].transaccion_tipo_id);
                Transaccion_tipoDao.delete(formData)
                    .then((res) => {
                        entity.transaccion_tipo.crud.select();
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
