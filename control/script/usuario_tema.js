/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/usuario_tema.js
*/
// MAIN INI
const main = async () => {
    await entity.usuario_tema.crud.select();
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
            entity.usuario_tema.index = index;
            if (index !== null) {
                entity.view.form.usuario_tema_id.value = entity.usuario_tema.database[index].usuario_tema_id;
                entity.view.form.usuario_tema_nombre.value = entity.usuario_tema.database[index].usuario_tema_nombre;
                entity.view.form.usuario_tema_primary.value = entity.usuario_tema.database[index].usuario_tema_primary;
                entity.view.form.usuario_tema_primary_hover.value = entity.usuario_tema.database[index].usuario_tema_primary_hover;
                entity.view.form.usuario_tema_secondary.value = entity.usuario_tema.database[index].usuario_tema_secondary;
                entity.view.form.usuario_tema_secondary_hover.value = entity.usuario_tema.database[index].usuario_tema_secondary_hover;
                entity.view.form.usuario_tema_tertiary.value = entity.usuario_tema.database[index].usuario_tema_tertiary;
                entity.view.form.usuario_tema_tertiary_hover.value = entity.usuario_tema.database[index].usuario_tema_tertiary_hover;
                entity.view.form.usuario_tema_quaternary.value = entity.usuario_tema.database[index].usuario_tema_quaternary;
                entity.view.form.usuario_tema_quaternary_hover.value = entity.usuario_tema.database[index].usuario_tema_quaternary_hover;
                entity.view.form.usuario_tema_success.value = entity.usuario_tema.database[index].usuario_tema_success;
                entity.view.form.usuario_tema_info.value = entity.usuario_tema.database[index].usuario_tema_info;
                entity.view.form.usuario_tema_warning.value = entity.usuario_tema.database[index].usuario_tema_warning;
                entity.view.form.usuario_tema_error.value = entity.usuario_tema.database[index].usuario_tema_error;
                entity.view.form.usuario_tema_dark_primary.value = entity.usuario_tema.database[index].usuario_tema_dark_primary;
                entity.view.form.usuario_tema_dark_primary_hover.value = entity.usuario_tema.database[index].usuario_tema_dark_primary_hover;
                entity.view.form.usuario_tema_dark_secondary.value = entity.usuario_tema.database[index].usuario_tema_dark_secondary;
                entity.view.form.usuario_tema_dark_secondary_hover.value = entity.usuario_tema.database[index].usuario_tema_dark_secondary_hover;
                entity.view.form.usuario_tema_dark_tertiary.value = entity.usuario_tema.database[index].usuario_tema_dark_tertiary;
                entity.view.form.usuario_tema_dark_tertiary_hover.value = entity.usuario_tema.database[index].usuario_tema_dark_tertiary_hover;
                entity.view.form.usuario_tema_dark_quaternary.value = entity.usuario_tema.database[index].usuario_tema_dark_quaternary;
                entity.view.form.usuario_tema_dark_quaternary_hover.value = entity.usuario_tema.database[index].usuario_tema_dark_quaternary_hover;
                entity.view.form.usuario_tema_dark_success.value = entity.usuario_tema.database[index].usuario_tema_dark_success;
                entity.view.form.usuario_tema_dark_info.value = entity.usuario_tema.database[index].usuario_tema_dark_info;
                entity.view.form.usuario_tema_dark_warning.value = entity.usuario_tema.database[index].usuario_tema_dark_warning;
                entity.view.form.usuario_tema_dark_error.value = entity.usuario_tema.database[index].usuario_tema_dark_error;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.usuario_tema.index = null;
            entity.view.form.usuario_tema_id.value = "";
            entity.view.form.usuario_tema_nombre.value = "";
            entity.view.form.usuario_tema_primary.value = "";
            entity.view.form.usuario_tema_primary_hover.value = "";
            entity.view.form.usuario_tema_secondary.value = "";
            entity.view.form.usuario_tema_secondary_hover.value = "";
            entity.view.form.usuario_tema_tertiary.value = "";
            entity.view.form.usuario_tema_tertiary_hover.value = "";
            entity.view.form.usuario_tema_quaternary.value = "";
            entity.view.form.usuario_tema_quaternary_hover.value = "";
            entity.view.form.usuario_tema_success.value = "";
            entity.view.form.usuario_tema_info.value = "";
            entity.view.form.usuario_tema_warning.value = "";
            entity.view.form.usuario_tema_error.value = "";
            entity.view.form.usuario_tema_dark_primary.value = "";
            entity.view.form.usuario_tema_dark_primary_hover.value = "";
            entity.view.form.usuario_tema_dark_secondary.value = "";
            entity.view.form.usuario_tema_dark_secondary_hover.value = "";
            entity.view.form.usuario_tema_dark_tertiary.value = "";
            entity.view.form.usuario_tema_dark_tertiary_hover.value = "";
            entity.view.form.usuario_tema_dark_quaternary.value = "";
            entity.view.form.usuario_tema_dark_quaternary_hover.value = "";
            entity.view.form.usuario_tema_dark_success.value = "";
            entity.view.form.usuario_tema_dark_info.value = "";
            entity.view.form.usuario_tema_dark_warning.value = "";
            entity.view.form.usuario_tema_dark_error.value = "";
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
            entity.usuario_tema.index = null;
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
        togglePickColor: (inputName) => {
            let input = document.querySelector(`#idea_form input[name="${inputName}"]`);
            input.type === "text" ? (input.type = "color") : (input.type = "text");
        },

        getHtmlTr: (register, index) => {
            return `
                <tr>
                    <td>${register.usuario_tema_id}</td>
                    <td>${register.usuario_tema_nombre}</td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_primary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_primary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_secondary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_secondary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_tertiary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_tertiary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_quaternary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_quaternary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_success}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_info}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_warning}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_error}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_primary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_primary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_secondary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_secondary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_tertiary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_tertiary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_quaternary}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_quaternary_hover}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_success}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_info}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_warning}"></span></td>
                    <td><span class="theme_color" style="background:${register.usuario_tema_dark_error}"></span></td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${index})">
                            <img src="view/src/icon/edit.png">
                        </button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario_tema.index = ${index})">
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
                for (let i = 0; i < entity.usuario_tema.database.length; i++) {
                    if (
                        textSearch === entity.usuario_tema.database[i].usuario_tema_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario_tema.database[i].usuario_tema_nombre.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.usuario_tema.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.usuario_tema.fun.select();
            }
        },
    },
    usuario_tema: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.usuario_tema.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.usuario_tema.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.usuario_tema_nombre.value !== "" &&
                    entity.view.form.usuario_tema_primary.value !== "" &&
                    entity.view.form.usuario_tema_primary_hover.value !== "" &&
                    entity.view.form.usuario_tema_secondary.value !== "" &&
                    entity.view.form.usuario_tema_secondary_hover.value !== "" &&
                    entity.view.form.usuario_tema_tertiary.value !== "" &&
                    entity.view.form.usuario_tema_tertiary_hover.value !== "" &&
                    entity.view.form.usuario_tema_quaternary.value !== "" &&
                    entity.view.form.usuario_tema_quaternary_hover.value !== "" &&
                    entity.view.form.usuario_tema_success.value !== "" &&
                    entity.view.form.usuario_tema_info.value !== "" &&
                    entity.view.form.usuario_tema_warning.value !== "" &&
                    entity.view.form.usuario_tema_error.value !== "" &&
                    entity.view.form.usuario_tema_dark_primary.value !== "" &&
                    entity.view.form.usuario_tema_dark_primary_hover.value !== "" &&
                    entity.view.form.usuario_tema_dark_secondary.value !== "" &&
                    entity.view.form.usuario_tema_dark_secondary_hover.value !== "" &&
                    entity.view.form.usuario_tema_dark_tertiary.value !== "" &&
                    entity.view.form.usuario_tema_dark_tertiary_hover.value !== "" &&
                    entity.view.form.usuario_tema_dark_quaternary.value !== "" &&
                    entity.view.form.usuario_tema_dark_quaternary_hover.value !== "" &&
                    entity.view.form.usuario_tema_dark_success.value !== "" &&
                    entity.view.form.usuario_tema_dark_info.value !== "" &&
                    entity.view.form.usuario_tema_dark_warning.value !== "" &&
                    entity.view.form.usuario_tema_dark_error.value !== ""
                ) {
                    if (entity.usuario_tema.index === null) {
                        entity.usuario_tema.crud.insert();
                    } else {
                        entity.usuario_tema.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await Usuario_temaDao.select()
                    .then((res) => {
                        entity.usuario_tema.database = res;
                        entity.usuario_tema.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                Usuario_temaDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario_tema.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                Usuario_temaDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario_tema.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("usuario_tema_id", entity.usuario_tema.database[entity.usuario_tema.index].usuario_tema_id);
                Usuario_temaDao.delete(formData)
                    .then((res) => {
                        entity.usuario_tema.crud.select();
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
