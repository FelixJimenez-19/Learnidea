/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/slider.js
*/
// MAIN INI
const main = async () => {
    await entity.slider.crud.select();

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
            entity.slider.index = index;
            if (index !== null) {
                entity.view.form.slider_id.value = entity.slider.database[index].slider_id;
                entity.view.form.slider_frase.value = entity.slider.database[index].slider_frase;
            }
            entity.view.modalForm.style.top = '0%';
        },

        hideModalForm: () => {
            entity.slider.index = null;
            entity.view.form.slider_id.value = "";
            entity.view.form.slider_frase.value = "";
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
            entity.slider.index = null;
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
                    <td>${ register.slider_id }</td>
                    <td>${ register.slider_frase }</td>
                    <td>
                        <img 
                            onclick="viewscreen.show('${ (register.slider_foto !== null) ? 'view/src/files/slider_foto/' + register.slider_foto : 'view/src/img/avatar.png'}')"
                            src="${ (register.slider_foto !== null) ? 'view/src/files/slider_foto/' + register.slider_foto : 'view/src/img/avatar.png'}"/>
                    </td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.slider.index = ${ index })">
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
                for (let i = 0; i < entity.slider.database.length; i++) {
                    if (
                        textSearch === entity.slider.database[i].slider_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.slider.database[i].slider_frase.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.slider.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.slider.fun.select();
            }
        },

    },
    slider: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.slider.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.slider.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.slider_frase.value !== ""
                ) {
                    if (entity.slider.index === null) {
                        entity.slider.crud.insert();
                    } else {
                        entity.slider.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await SliderDao.select().then(res => {
                    entity.slider.database = res;
                    entity.slider.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: () => {
                SliderDao.insert(new FormData(entity.view.form)).then(res => {
                    entity.slider.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: () => {
                SliderDao.update(new FormData(entity.view.form)).then(res => {
                    entity.slider.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("slider_id", entity.slider.database[entity.slider.index].slider_id);
                SliderDao.delete(formData).then(res => {
                    entity.slider.crud.select();
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