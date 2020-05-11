/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/transaccion.js
*/
// MAIN INI
const main = async () => {
    await entity.transaccion.crud.select();
    await entity.selects.transaccion_tipo();
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
            entity.transaccion.index = index;
            if (index !== null) {
                entity.view.form.transaccion_id.value = entity.transaccion.database[index].transaccion_id;
                entity.view.form.transaccion_descripcion.value = entity.transaccion.database[index].transaccion_descripcion;
                entity.view.form.transaccion_valor.value = entity.transaccion.database[index].transaccion_valor;
                entity.view.form.transaccion_fecha.value = entity.transaccion.database[index].transaccion_fecha;
                entity.view.form.transaccion_tipo_id.value = entity.transaccion.database[index].transaccion_tipo_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.transaccion.index = null;
            entity.view.form.transaccion_id.value = "";
            entity.view.form.transaccion_descripcion.value = "";
            entity.view.form.transaccion_valor.value = "";
            entity.view.form.transaccion_fecha.value = "";
            entity.view.form.transaccion_tipo_id.value = "";
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
            entity.transaccion.index = null;
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
                    <td>${register.transaccion_id}</td>
                    <td>${register.transaccion_descripcion}</td>
                    <td>${register.transaccion_valor}</td>
                    <td>${register.transaccion_fecha}</td>
                    <td>${register.transaccion_tipo_id}</td>
                    <td><img src="${register.transaccion_foto !== null ? "view/src/files/transaccion_foto/" + register.transaccion_foto : "view/src/img/avatar.png"}"/></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.transaccion.index = ${index})">
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
                for (let i = 0; i < entity.transaccion.database.length; i++) {
                    if (
                        textSearch === entity.transaccion.database[i].transaccion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion.database[i].transaccion_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion.database[i].transaccion_valor.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion.database[i].transaccion_fecha.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.transaccion.database[i].transaccion_tipo_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.transaccion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.transaccion.fun.select();
            }
        },
    },
    transaccion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.transaccion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.transaccion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.transaccion_descripcion.value !== "" &&
                    entity.view.form.transaccion_valor.value !== "" &&
                    entity.view.form.transaccion_fecha.value !== "" &&
                    entity.view.form.transaccion_tipo_id.value !== ""
                ) {
                    if (entity.transaccion.index === null) {
                        entity.transaccion.crud.insert();
                    } else {
                        entity.transaccion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await TransaccionDao.select()
                    .then((res) => {
                        entity.transaccion.database = res;
                        entity.transaccion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                TransaccionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.transaccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                TransaccionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.transaccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("transaccion_id", entity.transaccion.database[entity.transaccion.index].transaccion_id);
                TransaccionDao.delete(formData)
                    .then((res) => {
                        entity.transaccion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        transaccion_tipo: async () => {
            await Transaccion_tipoDao.select().then((res) => {
                let html = `<option value="">TRANSACCION_TIPO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].transaccion_tipo_id}">${res[i].transaccion_tipo_id}</option>
`;
                }
                entity.view.form.transaccion_tipo_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
