/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/curso_evento.js
*/
// MAIN INI
const main = async () => {
    await entity.curso_evento.crud.select();
    await entity.selects.curso();
    entity.view.editor.summernote();
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
        search: document.getElementById("idea_search"),
        editor: $('#curso_evento-editor')
    },
    fun: {

        showModalForm: (index) => {
            entity.curso_evento.index = index;
            if (index !== null) {
                entity.view.form.curso_evento_id.value = entity.curso_evento.database[index].curso_evento_id;
                entity.view.form.curso_evento_nombre.value = entity.curso_evento.database[index].curso_evento_nombre;
                entity.view.form.curso_evento_fecha.value = entity.curso_evento.database[index].curso_evento_fecha;
                entity.view.editor.summernote('code', entity.curso_evento.database[index].curso_evento_descripcion);
                entity.view.form.curso_id.value = entity.curso_evento.database[index].curso_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.curso_evento.index = null;
            entity.view.form.curso_evento_id.value = "";
            entity.view.form.curso_evento_nombre.value = "";
            entity.view.form.curso_evento_fecha.value = "";
            entity.view.form.curso_evento_descripcion.value = "";
            entity.view.editor.summernote('code', "");
            entity.view.form.curso_id.value = "";
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
            entity.curso_evento.index = null;
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
                    <td>${ register.curso_evento_id }</td>
                    <td>${ register.curso_evento_nombre }</td>
                    <td>${ register.curso_evento_fecha }</td>
                    <td>${ register.curso_evento_descripcion }</td>
                    <td>${ register.curso_id }</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.curso_evento.index = ${ index })">
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
                for (let i = 0; i < entity.curso_evento.database.length; i++) {
                    if (
                        textSearch === entity.curso_evento.database[i].curso_evento_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_evento.database[i].curso_evento_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_evento.database[i].curso_evento_fecha.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_evento.database[i].curso_evento_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.curso_evento.database[i].curso_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.curso_evento.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.curso_evento.fun.select();
            }
        },

    },
    curso_evento: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.curso_evento.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.curso_evento.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.curso_evento_nombre.value !== "" &&
                    entity.view.form.curso_evento_fecha.value !== "" &&
                    entity.view.form.curso_evento_descripcion.value !== "" &&
                    entity.view.form.curso_id.value !== ""
                ) {
                    if (entity.curso_evento.index === null) {
                        entity.curso_evento.crud.insert();
                    } else {
                        entity.curso_evento.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await Curso_eventoDao.select().then(res => {
                    entity.curso_evento.database = res;
                    entity.curso_evento.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: () => {
                Curso_eventoDao.insert(new FormData(entity.view.form)).then(res => {
                    entity.curso_evento.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: () => {
                Curso_eventoDao.update(new FormData(entity.view.form)).then(res => {
                    entity.curso_evento.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("curso_evento_id", entity.curso_evento.database[entity.curso_evento.index].curso_evento_id);
                Curso_eventoDao.delete(formData).then(res => {
                    entity.curso_evento.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            }
        }
    },

    selects: {

        curso: async () => {
            await CursoDao.select().then(res => {
                let html = `<option value="">CURSO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
                        <option value="${ res[i].curso_id }">${ res[i].curso_id }</option>
                    `;
                }
                entity.view.form.curso_id.innerHTML = html;
            });
        }

    }

}
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();