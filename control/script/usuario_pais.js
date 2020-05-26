/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/usuario_pais.js
*/
// MAIN INI
const main = async () => {
    await entity.usuario_pais.crud.select();

}
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
        search: document.getElementById("idea_search")
    },
    fun: {

        showModalForm: (index) => {
            entity.usuario_pais.index = index;
            if (index !== null) {
                entity.view.form.usuario_pais_id.value = entity.usuario_pais.database[index].usuario_pais_id;
                entity.view.form.usuario_pais_nombre.value = entity.usuario_pais.database[index].usuario_pais_nombre;
                entity.view.form.usuario_pais_descripcion.value = entity.usuario_pais.database[index].usuario_pais_descripcion;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.usuario_pais.index = null;
            entity.view.form.usuario_pais_id.value = "";
            entity.view.form.usuario_pais_nombre.value = "";
            entity.view.form.usuario_pais_descripcion.value = "";
            entity.view.modalForm.style.top = '-100%';
        },

        showModalMessage: (msg) => {
            entity.view.modalMessage.style.top = '0%';
            entity.view.message.innerHTML = msg;
        },
        hideModalMessage: () => {
            entity.view.modalMessage.style.top = '-100%';
            entity.view.message.innerHTML = '';
        },
        showModalConfirm: (msg, action) => {
            entity.view.modalConfirm.style.top = '0%';
            entity.view.confirm.innerHTML = msg;
            action();
        },
        hideModalConfirm: () => {
            entity.usuario_pais.index = null;
            entity.view.modalConfirm.style.top = '-100%';
            entity.view.confirm.innerHTML = '';
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
                    <td>${ register.usuario_pais_id }</td>
                    <td>${ register.usuario_pais_nombre }</td>
                    <td>
                        <img 
                            src="${ (register.usuario_pais_bandera !== null) ?'view/src/files/usuario_pais_bandera/' + register.usuario_pais_bandera : 'view/src/img/avatar.png'}"
                            onclick="viewscreen.show('${register.usuario_pais_bandera !== null ? "view/src/files/usuario_pais_bandera/" + register.usuario_pais_bandera : "view/src/img/avatar.png"}')"    
                        />
                    </td>
                    <td>${ register.usuario_pais_descripcion }</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_pais.index = ${ index })">
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
                for (let i = 0; i < entity.usuario_pais.database.length; i++) {
                    if (
                        textSearch === entity.usuario_pais.database[i].usuario_pais_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario_pais.database[i].usuario_pais_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario_pais.database[i].usuario_pais_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.usuario_pais.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.usuario_pais.fun.select();
            }
        },

    },
    usuario_pais: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.usuario_pais.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.usuario_pais.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.usuario_pais_nombre.value !== "" &&
                    entity.view.form.usuario_pais_descripcion.value !== ""
                ) {
                    if (entity.usuario_pais.index === null) {
                        entity.usuario_pais.crud.insert();
                    } else {
                        entity.usuario_pais.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await Usuario_paisDao.select().then(res => {
                    entity.usuario_pais.database = res;
                    entity.usuario_pais.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: () => {
                Usuario_paisDao.insert(new FormData(entity.view.form)).then(res => {
                    entity.usuario_pais.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: () => {
                Usuario_paisDao.update(new FormData(entity.view.form)).then(res => {
                    entity.usuario_pais.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("usuario_pais_id", entity.usuario_pais.database[entity.usuario_pais.index].usuario_pais_id);
                Usuario_paisDao.delete(formData).then(res => {
                    entity.usuario_pais.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            }
        }
    },

    selects: {

    }

}
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();