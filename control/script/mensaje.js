/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/mensaje.js
*/
// MAIN INI
const main = async () => {
    await entity.mensaje.crud.select();
    await entity.selects.usuario();
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
            entity.mensaje.index = index;
            if (index !== null) {
                entity.view.form.mensaje_id.value = entity.mensaje.database[index].mensaje_id;
                entity.view.form.mensaje_texto.value = entity.mensaje.database[index].mensaje_texto;
                entity.view.form.usuario_id1.value = entity.mensaje.database[index].usuario_id1;
                entity.view.form.usuario_id2.value = entity.mensaje.database[index].usuario_id2;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.mensaje.index = null;
            entity.view.form.mensaje_id.value = "";
            entity.view.form.mensaje_texto.value = "";
            entity.view.form.usuario_id1.value = "";
            entity.view.form.usuario_id2.value = "";
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
            entity.mensaje.index = null;
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
<td>${register.mensaje_id}</td>
<td>${register.mensaje_texto}</td>
<td>${register.usuario_id1}</td>
<td>${register.usuario_id2}</td>
<td><img src="${register.mensaje_foto !== null ? "view/src/files/mensaje_foto/" + register.mensaje_foto : "view/src/img/avatar.png"}"/></td>

<td>
<button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
<button><img src="view/src/icon/delete.png" onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.mensaje.index = ${index}); "></button>
</td>
</tr>
`;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.mensaje.database.length; i++) {
                    if (
                        textSearch === entity.mensaje.database[i].mensaje_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.mensaje.database[i].mensaje_texto.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.mensaje.database[i].usuario_id1.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.mensaje.database[i].usuario_id2.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.mensaje.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.mensaje.fun.select();
            }
        },
    },
    mensaje: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.mensaje.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.mensaje.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (entity.view.form.mensaje_texto.value !== "" && entity.view.form.usuario_id1.value !== "" && entity.view.form.usuario_id2.value !== "") {
                    if (entity.mensaje.index === null) {
                        entity.mensaje.crud.insert();
                    } else {
                        entity.mensaje.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await MensajeDao.select()
                    .then((res) => {
                        entity.mensaje.database = res;
                        entity.mensaje.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                MensajeDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.mensaje.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                MensajeDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.mensaje.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("mensaje_id", entity.mensaje.database[entity.mensaje.index].mensaje_id);
                MensajeDao.delete(formData)
                    .then((res) => {
                        entity.mensaje.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO_ID1</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].usuario_id1}">${res[i].usuario_id1}</option>
`;
                }
                entity.view.form.usuario_id1.innerHTML = html;
            });
        },
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO_ID2</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].usuario_id2}">${res[i].usuario_id2}</option>
`;
                }
                entity.view.form.usuario_id2.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
