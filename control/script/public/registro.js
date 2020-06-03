const RegistroMain = async () => {
    await Registro.crud.selectUsuario();
    await Registro.crud.selectTipo();
    await Registro.crud.selectPais();
    await Registro.crud.SelectUsuario_nacimiento();
}

const Registro = {
    usuario_database: [],
    usuario_pais_database: [],
    validateForm: false,
    emailCode: 0,
    view: {
        containerForm: document.getElementById("container-form"),
        form: document.getElementById("form-registro"),
        seccionError: document.getElementById("seccion-error"),
        seccionRegistro: document.getElementById("seccion-registro"),
        radioPage1: document.getElementById("radio-page-1"),
        radioPage2: document.getElementById("radio-page-2"),
        radioPage3: document.getElementById("radio-page-3"),
        radioPage4: document.getElementById("radio-page-4"),
        radioPage5: document.getElementById("radio-page-5"),
    },
    crud: {
        selectUsuario: () => {
            UsuarioDao.select().then(res => {
                Registro.usuario_database = res;
            }).catch(res => console.log("QUERY DENIED => usuario"));
        },
        selectTipo: () => {
            Usuario_tipoDao.select().then(res => {
                let usuario_tipo = "";
                for (let i of res) {
                    if (i.usuario_tipo_super == 0 && i.usuario_tipo_admin == 0 && i.usuario_tipo_coach == 0 && i.usuario_tipo_user == 1) {
                        usuario_tipo = i;
                    }
                }
                if (usuario_tipo !== "") {
                    Registro.view.form.usuario_tipo_id.value = usuario_tipo.usuario_tipo_id;
                    Registro.crud.selectTema();
                } else {
                    Registro.fun.disable(true);
                }
            }).catch(res => console.log("QUERY DENIED => usuario_tipo"));
        },
        selectTema: () => {
            Usuario_temaDao.select().then(res => {
                let usuario_tema = "";
                for (let i of res) {
                    i.usuario_tema_default == 1 ? usuario_tema = i : '';
                }
                if (usuario_tema !== "") {
                    Registro.view.form.usuario_tema_id.value = usuario_tema.usuario_tema_id;
                    Registro.fun.disable(false);
                } else {
                    Registro.fun.disable(true);
                }
            }).catch(res => console.log("QUERY DENIED => usuario_tema"));
        },
        selectPais: () => {
            Usuario_paisDao.select().then(res => {
                Registro.usuario_pais_database = res;
                let usuario_pais = `
                    <option value="">Elije tu País</option>
                `;
                for (let i of res) {
                    usuario_pais += `
                        <option value="${ i.usuario_pais_id }">${ i.usuario_pais_nombre }</option>
                    `;
                }
                Registro.view.form.usuario_pais_id.innerHTML = usuario_pais;
            }).catch(res => console.log("QUERY DENIED => usuario_pais"));
        },
        SelectUsuario_nacimiento: async () => {
            let html = `<option value="">Elige tu año de nacimiento</option>`;
            let array = Fecha.getOptionYear();
            for (let i of array) {
                html += `
                    <option value="${ i }">${ i }</option>
                `;
            }
            Registro.view.form.usuario_nacimiento.innerHTML = html;
        },
    },
    fun: {
        disable: (bool) => {
            if (bool) {
                Registro.view.seccionError.style.display = "flex";
                Registro.view.seccionRegistro.style.display = "none";
            } else {
                Registro.view.seccionError.style.display = "none";
                Registro.view.seccionRegistro.style.display = "flex";
            }
        },
        setError: (input, text, bool, parents) => {
            let row = input.parentNode;
            for (let i = 0; i < parents - 1; i++) {
                row = row.parentNode;
            }
            row.querySelector(".msg").innerText = text;
            (bool) ? $(row).addClass("error"): $(row).removeClass("error");
        },
        isEmail: (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        isPass: (input) => {
            var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            return (input.value.match(paswd));
        },
        validateText: (input, msg, radio, parents) => {
            if (input.value === "") {
                Registro.fun.setError(input, msg, true, parents);
                radio.checked = true;
                input.focus();
                return false;
            } else {
                Registro.fun.setError(input, "", false, parents);
                return true;
            }
        },
        validateRadio: (input, msg, radio, parents) => {
            if (input.value === "") {
                Registro.fun.setError(input[0], msg, true, parents);
                radio.checked = true;
                return false;
            } else {
                Registro.fun.setError(input[0], "", false, parents);
                return true;
            }
        },
        validateEmail: () => {
            let validate = false;
            if (Registro.fun.validateText(Registro.view.form.usuario_email, "Debe llenar este campo", Registro.view.radioPage1, 1)) {
                if (Registro.fun.isEmail(Registro.view.form.usuario_email.value)) {
                    Registro.fun.setError(Registro.view.form.usuario_email, "", false, 1);
                    let exist = false;
                    for (let i of Registro.usuario_database) {
                        (Registro.view.form.usuario_email.value.toLowerCase() === i.usuario_email.toLowerCase()) ? exist = true: '';
                    }
                    if (exist) {
                        validate = false;
                        Registro.fun.setError(Registro.view.form.usuario_email, "Este email ya esta registrado", true, 1);
                    } else {
                        validate = true;
                        Registro.fun.setError(Registro.view.form.usuario_email, "", false, 1);
                    }
                } else {
                    validate = false;
                    Registro.fun.setError(Registro.view.form.usuario_email, "Este no es un email", true, 1);
                }
            }
            if (!validate) {
                Registro.view.radioPage1.checked = true;
                Registro.view.form.usuario_email.focus();
            }
            return validate;
        },
        validatePass: () => {
            if (Registro.fun.validateText(Registro.view.form.usuario_pass, "Debe llenar este campo", Registro.view.radioPage1, 1)) {
                if (Registro.fun.isPass(Registro.view.form.usuario_pass)) {
                    Registro.fun.setError(Registro.view.form.usuario_pass, "", false, 1);
                    return true;
                } else {
                    Registro.fun.setError(Registro.view.form.usuario_pass, "6 - 20 Caracteres, una Mayúscula y una Minúscula", true, 1);
                    Registro.view.radioPage1.checked = true;
                    Registro.view.form.usuario_pass.focus();
                    return false;
                }
            } else {
                return false;
            }
        },
        validatePassConfirm: () => {
            let validate = false;
            if (Registro.fun.validateText(Registro.view.form.usuario_pass_confirm, "Debe llenar este campo", Registro.view.radioPage1, 1)) {
                if (Registro.view.form.usuario_pass.value !== Registro.view.form.usuario_pass_confirm.value) {
                    validate = false;
                    Registro.fun.setError(Registro.view.form.usuario_pass_confirm, "Las contraseñas no coinciden", true, 1);
                    Registro.view.form.usuario_pass_confirm.focus();
                } else {
                    validate = true;
                    Registro.fun.setError(Registro.view.form.usuario_pass_confirm, "", false, 1);
                }
            }
            (!validate) ? Registro.view.radioPage1.checked = true: '';
            return validate;
        },
        sendCode: () => {
            Registro.validateForm = true;
            Registro.view.radioPage5.checked = true;
            Registro.emailCode = Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10);
            let formData = new FormData();
            formData.append("usuario_email", Registro.view.form.usuario_email.value);
            formData.append("informacion_pagina_nombre", Informacion.database.informacion_pagina_nombre);
            formData.append("informacion_pagina_logo", Informacion.database.informacion_pagina_logo);
            formData.append("usuario_email_code", Registro.emailCode);
            formData.append("tittle", "Confirmacion de registro");
            formData.append("mensaje", `Saludos <b>${ Registro.view.form.usuario_nombre.value }</b> en respuesta a su peticion para registrarse en nuestra plataforma. Necesitamos que confirme con el codigo a continuacion.`);
            UsuarioDao.sendEmailCode(formData).then(res => console.log("Code sent")).catch(res => console.log("QUERY DENIED => send_email_code"));
        },
        validateCodeEmail: () => {
            if (Registro.fun.validateText(Registro.view.form.usuario_email_code, "Debe llenar este campo", Registro.view.radioPage5, 2)) {
                if (Registro.emailCode === Registro.view.form.usuario_email_code.value) {
                    let formData = new FormData(Registro.view.form);
                    UsuarioDao.insert(formData).then(res => {
                        UsuarioDao.login(formData).then(res => {
                            curso_id !== "" ?
                                window.location.href = `panel?page=private_curso&curso_id=${ curso_id }` :
                                window.location.href = "panel?page=private_perfil";
                        });
                    }).catch(res => console.log("QUERY DENIED => insert usuario"));
                } else {
                    Registro.fun.setError(Registro.view.form.usuario_email_code, "El codigo ingresado es incorrecto", true, 2);
                }
            }
        },
        validateForm: () => {
            if (
                Registro.fun.validateText(Registro.view.form.usuario_nombre, "Debe llenar este campo", Registro.view.radioPage1, 1) &&
                Registro.fun.validateEmail() &&
                Registro.fun.validatePass() &&
                Registro.fun.validatePassConfirm() &&
                Registro.fun.validateText(Registro.view.form.usuario_pais_id, "Debe llenar este campo", Registro.view.radioPage2, 2) &&
                Registro.fun.validateText(Registro.view.form.usuario_direccion, "Debe llenar este campo", Registro.view.radioPage2, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_celular, "Debe llenar este campo", Registro.view.radioPage2, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_telefono, "Debe llenar este campo", Registro.view.radioPage2, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_nacimiento, "Debe llenar este campo", Registro.view.radioPage3, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_cedula, "Debe llenar este campo", Registro.view.radioPage3, 1) &&
                Registro.fun.validateRadio(Registro.view.form.usuario_sexo, "Debe llenar este campo", Registro.view.radioPage3, 2) &&
                Registro.fun.validateRadio(Registro.view.form.usuario_nivel, "Debe llenar este campo", Registro.view.radioPage3, 2) &&
                Registro.fun.validateText(Registro.view.form.usuario_empresa_nombre, "Debe llenar este campo", Registro.view.radioPage4, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_empresa_actividad, "Debe llenar este campo", Registro.view.radioPage4, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_empresa_direccion, "Debe llenar este campo", Registro.view.radioPage4, 1) &&
                Registro.fun.validateText(Registro.view.form.usuario_empresa_telefono, "Debe llenar este campo", Registro.view.radioPage4, 1)
            ) {
                Registro.fun.sendCode();
            }
        },
        submit: (evt) => {
            evt.preventDefault();
            if (
                Registro.validateForm === true &&
                !Registro.view.radioPage1.checked &&
                !Registro.view.radioPage2.checked &&
                !Registro.view.radioPage3.checked &&
                !Registro.view.radioPage4.checked &&
                Registro.view.radioPage5.checked
            ) {
                Registro.fun.validateCodeEmail();
            } else {
                Registro.fun.validateForm();
            }
        }
    }
}

Registro.view.form.onsubmit = (evt) => Registro.fun.submit(evt);
Registro.view.form.usuario_nombre.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_nombre, "Debe llenar este campo", Registro.view.radioPage1, 1);
Registro.view.form.usuario_email.onkeyup = (evt) => Registro.fun.validateEmail();
Registro.view.form.usuario_pass.onkeyup = (evt) => Registro.fun.validatePass();
Registro.view.form.usuario_pass_confirm.onkeyup = (evt) => Registro.fun.validatePassConfirm();
Registro.view.form.usuario_direccion.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_direccion, "Debe llenar este campo", Registro.view.radioPage2, 1);
Registro.view.form.usuario_celular.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_celular, "Debe llenar este campo", Registro.view.radioPage2, 1);
Registro.view.form.usuario_telefono.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_telefono, "Debe llenar este campo", Registro.view.radioPage2, 1);
Registro.view.form.usuario_nacimiento.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_nacimiento, "Debe llenar este campo", Registro.view.radioPage3, 1);
Registro.view.form.usuario_cedula.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_cedula, "Debe llenar este campo", Registro.view.radioPage3, 1);
Registro.view.form.usuario_empresa_nombre.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_empresa_nombre, "Debe llenar este campo", Registro.view.radioPage4, 1);
Registro.view.form.usuario_empresa_actividad.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_empresa_actividad, "Debe llenar este campo", Registro.view.radioPage4, 1);
Registro.view.form.usuario_empresa_direccion.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_empresa_direccion, "Debe llenar este campo", Registro.view.radioPage4, 1);
Registro.view.form.usuario_empresa_telefono.onkeyup = (evt) => Registro.fun.validateText(Registro.view.form.usuario_empresa_telefono, "Debe llenar este campo", Registro.view.radioPage4, 1);
Registro.view.form.usuario_nacimiento.onchange = (evt) => Registro.fun.validateText(Registro.view.form.usuario_nacimiento, "Debe llenar este campo", Registro.view.radioPage3, 1);
Registro.view.form.usuario_pais_id.onchange = (evt) => {
    Registro.fun.validateText(Registro.view.form.usuario_pais_id, "Debe llenar este campo", Registro.view.radioPage2, 2)
    let value = evt.srcElement.value;
    let url = `view/src/icon/world1.png`;
    if (value !== "") {
        let index = Registro.usuario_pais_database.findIndex(element => element.usuario_pais_id == value);
        let register = Registro.usuario_pais_database[index];
        url = register.usuario_pais_bandera === null ? "view/src/icon/world.png" : `view/src/files/usuario_pais_bandera/${ register.usuario_pais_bandera }`;
    }
    document.getElementById("usuario_pais_bandera").style.backgroundImage = `url(${url})`;
}

Registro.view.form.usuario_email_code.onkeyup = (evt) => {
    if (
        Registro.validateForm === true &&
        !Registro.view.radioPage1.checked &&
        !Registro.view.radioPage2.checked &&
        !Registro.view.radioPage3.checked &&
        !Registro.view.radioPage4.checked &&
        Registro.view.radioPage5.checked
    ) {
        Registro.fun.validateCodeEmail();
    }
}

for (let i of Registro.view.form.usuario_sexo) {
    i.onclick = (evt) => Registro.fun.validateText(i, "Debe llenar este campo", Registro.view.radioPage3, 2);
}

for (let i of Registro.view.form.usuario_nivel) {
    i.onclick = (evt) => Registro.fun.validateText(i, "Debe llenar este campo", Registro.view.radioPage3, 2);
}

Registro.view.containerForm.onscroll = (evt) => evt.srcElement.scrollLeft -= evt.srcElement.clientWidth;

RegistroMain();



// Registro.view.radioPage5.checked = true;