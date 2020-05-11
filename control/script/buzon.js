/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/buzon.js
*/
// MAIN INI
const main = async () => {
    await entity.buzon.crud.select();
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
            entity.buzon.index = index;
            if (index !== null) {
                entity.view.form.buzon_id.value = entity.buzon.database[index].buzon_id;
                entity.view.form.buzon_email.value = entity.buzon.database[index].buzon_email;
                entity.view.form.buzon_descripcion.value = entity.buzon.database[index].buzon_descripcion;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.buzon.index = null;
            entity.view.form.buzon_id.value = "";
            entity.view.form.buzon_email.value = "";
            entity.view.form.buzon_descripcion.value = "";
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
            entity.buzon.index = null;
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
                    <td>${register.buzon_id}</td>
                    <td>${register.buzon_email}</td>
                    <td>${register.buzon_descripcion}</td>
                    <td><img src="${register.buzon_foto !== null ? "view/src/files/buzon_foto/" + register.buzon_foto : "view/src/img/avatar.png"}"/></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.buzon.index = ${index})">
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
                for (let i = 0; i < entity.buzon.database.length; i++) {
                    if (
                        textSearch === entity.buzon.database[i].buzon_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.buzon.database[i].buzon_email.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.buzon.database[i].buzon_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.buzon.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.buzon.fun.select();
            }
        },
    },
    buzon: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.buzon.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.buzon.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.buzon_email.value !== "" && entity.view.form.buzon_descripcion.value !== "") {
                    if (entity.buzon.index === null) {
                        entity.buzon.crud.insert();
                    } else {
                        entity.buzon.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await BuzonDao.select()
                    .then((res) => {
                        entity.buzon.database = res;
                        entity.buzon.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                BuzonDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.buzon.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                BuzonDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.buzon.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("buzon_id", entity.buzon.database[entity.buzon.index].buzon_id);
                BuzonDao.delete(formData)
                    .then((res) => {
                        entity.buzon.crud.select();
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