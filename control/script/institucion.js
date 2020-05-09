/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/institucion.js
*/
// MAIN INI
const main = async () => {
    await entity.institucion.crud.select();
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
            entity.institucion.index = index;
            if (index !== null) {
                entity.view.form.institucion_id.value = entity.institucion.database[index].institucion_id;
                entity.view.form.institucion_nombre.value = entity.institucion.database[index].institucion_nombre;
                entity.view.form.institucion_siglas.value = entity.institucion.database[index].institucion_siglas;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.institucion.index = null;
            entity.view.form.institucion_id.value = "";
            entity.view.form.institucion_nombre.value = "";
            entity.view.form.institucion_siglas.value = "";
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
            entity.institucion.index = null;
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
<td>${register.institucion_id}</td>
<td>${register.institucion_nombre}</td>
<td>${register.institucion_siglas}</td>
<td><img src="${register.institucion_logo !== null ? "view/src/files/institucion_logo/" + register.institucion_logo : "view/src/img/avatar.png"}"/></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.institucion.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.institucion.database.length; i++) {
                    if (
                        textSearch === entity.institucion.database[i].institucion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.institucion.database[i].institucion_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.institucion.database[i].institucion_siglas.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.institucion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.institucion.fun.select();
            }
        },
    },
    institucion: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.institucion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.institucion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.institucion_nombre.value !== "" && entity.view.form.institucion_siglas.value !== "") {
                    if (entity.institucion.index === null) {
                        entity.institucion.crud.insert();
                    } else {
                        entity.institucion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await InstitucionDao.select()
                    .then((res) => {
                        entity.institucion.database = res;
                        entity.institucion.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                InstitucionDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.institucion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                InstitucionDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.institucion.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("institucion_id", entity.institucion.database[entity.institucion.index].institucion_id);
                InstitucionDao.delete(formData)
                    .then((res) => {
                        entity.institucion.crud.select();
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
