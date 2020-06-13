const RecuperacionMain = async () => {
    await Recuperacion.crud.selectUsuario();
}

const Recuperacion = {
    usuario_database: [],
    usuario_pais_database: [],
    validateForm: false,
    emailCode: 0,
    view: {
        containerForm: document.getElementById("container-form"),
        form: document.getElementById("form-recuperacion"),
        seccionError: document.getElementById("seccion-error"),
        seccionRecuperacion: document.getElementById("seccion-recuperacion"),
        radioPage1: document.getElementById("radio-page-1"),
        radioPage2: document.getElementById("radio-page-2"),
        radioPage3: document.getElementById("radio-page-3"),
    },
    crud: {
        selectUsuario: () => {
            UsuarioDao.select().then(res => {
                Recuperacion.usuario_database = res;
            }).catch(res => console.log("QUERY DENIED => usuario"));
        },
    },
    fun: {
        loadUsuario: (index) => {
            let usuario = Recuperacion.usuario_database[index];
            Recuperacion.view.form.usuario_id.value = usuario.usuario_id;
            Recuperacion.view.form.usuario_nombre.value = usuario.usuario_nombre;
            Recuperacion.view.form.usuario_cedula.value = usuario.usuario_cedula;
            Recuperacion.view.form.usuario_nacimiento.value = usuario.usuario_nacimiento;
            Recuperacion.view.form.usuario_indice.value = usuario.usuario_indice;
            Recuperacion.view.form.usuario_celular.value = usuario.usuario_celular;
            Recuperacion.view.form.usuario_telefono.value = usuario.usuario_telefono;
            Recuperacion.view.form.usuario_sexo.value = usuario.usuario_sexo;
            Recuperacion.view.form.usuario_nivel.value = usuario.usuario_nivel;
            Recuperacion.view.form.usuario_calificacion.value = usuario.usuario_calificacion;
            Recuperacion.view.form.usuario_direccion.value = usuario.usuario_direccion;
            Recuperacion.view.form.usuario_descripcion.value = usuario.usuario_descripcion;
            Recuperacion.view.form.usuario_empresa_nombre.value = usuario.usuario_empresa_nombre;
            Recuperacion.view.form.usuario_empresa_actividad.value = usuario.usuario_empresa_actividad;
            Recuperacion.view.form.usuario_empresa_direccion.value = usuario.usuario_empresa_direccion;
            Recuperacion.view.form.usuario_empresa_telefono.value = usuario.usuario_empresa_telefono;
            Recuperacion.view.form.usuario_tema_mode_dark.value = usuario.usuario_tema_mode_dark;
            Recuperacion.view.form.usuario_tipo_id.value = usuario.usuario_tipo_id;
            Recuperacion.view.form.usuario_tema_id.value = usuario.usuario_tema_id;
            Recuperacion.view.form.usuario_pais_id.value = usuario.usuario_pais_id;
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
                Recuperacion.fun.setError(input, msg, true, parents);
                radio.checked = true;
                input.focus();
                return false;
            } else {
                Recuperacion.fun.setError(input, "", false, parents);
                return true;
            }
        },
        validateRadio: (input, msg, radio, parents) => {
            if (input.value === "") {
                Recuperacion.fun.setError(input[0], msg, true, parents);
                radio.checked = true;
                return false;
            } else {
                Recuperacion.fun.setError(input[0], "", false, parents);
                return true;
            }
        },
        validateEmail: () => {
            let validate = false;
            if (Recuperacion.fun.validateText(Recuperacion.view.form.usuario_email, "Debe llenar este campo", Recuperacion.view.radioPage1, 1)) {
                if (Recuperacion.fun.isEmail(Recuperacion.view.form.usuario_email.value)) {
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_email, "", false, 1);
                    let index = Recuperacion.usuario_database.findIndex(element => element.usuario_email === Recuperacion.view.form.usuario_email.value);
                    if (index > 0) {
                        validate = true;
                        Recuperacion.fun.setError(Recuperacion.view.form.usuario_email, "", false, 1);
                        Recuperacion.fun.loadUsuario(index);
                    } else {
                        validate = false;
                        Recuperacion.fun.setError(Recuperacion.view.form.usuario_email, "Este email no esta registrado", true, 1);
                    }
                } else {
                    validate = false;
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_email, "Este no es un email", true, 1);
                }
            }
            if (!validate) {
                Recuperacion.view.radioPage1.checked = true;
                Recuperacion.view.form.usuario_email.focus();
            }
            return validate;
        },
        validatePass: () => {
            if (Recuperacion.fun.validateText(Recuperacion.view.form.usuario_pass, "Debe llenar este campo", Recuperacion.view.radioPage3, 1)) {
                let index = Recuperacion.usuario_database.findIndex(element => element.usuario_email === Recuperacion.view.form.usuario_email.value);
                let register = Recuperacion.usuario_database[index];
                if (register.usuario_pass === Recuperacion.view.form.usuario_pass.value) {
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_pass, "Debe ser diferente a la anterior", true, 1);
                    Recuperacion.view.radioPage3.checked = true;
                    Recuperacion.view.form.usuario_pass.focus();
                    return false;
                } else {
                    if (Recuperacion.fun.isPass(Recuperacion.view.form.usuario_pass)) {
                        Recuperacion.fun.setError(Recuperacion.view.form.usuario_pass, "", false, 1);
                        return true;
                    } else {
                        Recuperacion.fun.setError(Recuperacion.view.form.usuario_pass, "6 - 20 Caracteres, una Mayúscula y una Minúscula", true, 1);
                        Recuperacion.view.radioPage3.checked = true;
                        Recuperacion.view.form.usuario_pass.focus();
                        return false;
                    }
                }
            } else {
                return false;
            }
        },
        validatePassConfirm: () => {
            let validate = false;
            if (Recuperacion.fun.validateText(Recuperacion.view.form.usuario_pass_confirm, "Debe llenar este campo", Recuperacion.view.radioPage3, 1)) {
                if (Recuperacion.view.form.usuario_pass.value !== Recuperacion.view.form.usuario_pass_confirm.value) {
                    validate = false;
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_pass_confirm, "Las contraseñas no coinciden", true, 1);
                    Recuperacion.view.form.usuario_pass_confirm.focus();
                } else {
                    validate = true;
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_pass_confirm, "", false, 1);
                }
            }
            (!validate) ? Recuperacion.view.radioPage3.checked = true: '';
            return validate;
        },
        sendCode: () => {
            Recuperacion.view.radioPage2.checked = true;
            Recuperacion.emailCode = Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10);
            let formData = new FormData();
            formData.append("usuario_email", Recuperacion.view.form.usuario_email.value);
            formData.append("informacion_pagina_nombre", Informacion.database.informacion_pagina_nombre);
            formData.append("informacion_pagina_logo", Informacion.database.informacion_pagina_logo);
            formData.append("usuario_email_code", Recuperacion.emailCode);
            formData.append("tittle", "Recuperacion de cuenta");
            formData.append("mensaje", `Saludos <b>${ Recuperacion.view.form.usuario_nombre.value }</b> en respuesta a su peticion para recuperar su cuenta en nuestra plataforma. Necesitamos que confirme con el codigo a continuacion.`);
            UsuarioDao.sendEmailCode(formData).then(res => console.log("Code sent")).catch(res => console.log("QUERY DENIED => send_email_code"));
        },
        validateCodeEmail: () => {
            if (Recuperacion.fun.validateText(Recuperacion.view.form.usuario_email_code, "Debe llenar este campo", Recuperacion.view.radioPage2, 2)) {
                if (Recuperacion.emailCode === Recuperacion.view.form.usuario_email_code.value) {
                    Recuperacion.view.radioPage3.checked = true;
                } else {
                    Recuperacion.fun.setError(Recuperacion.view.form.usuario_email_code, "El codigo ingresado es incorrecto", true, 2);
                }
            }
        },
        validateForm: () => {
            if (Recuperacion.view.radioPage1.checked) {
                Recuperacion.fun.validateEmail() ? Recuperacion.fun.sendCode() : '';
            } else if (Recuperacion.view.radioPage2.checked) {
                Recuperacion.fun.validateCodeEmail();
            } else if (Recuperacion.view.radioPage3.checked) {
                if (
                    Recuperacion.fun.validatePass() &&
                    Recuperacion.fun.validatePassConfirm()
                ) {
                    let formData = new FormData(Recuperacion.view.form);
                    UsuarioDao.update(formData).then(res => {
                        UsuarioDao.login(formData).then(res => {
                            curso_id !== "" ?
                                window.location.href = `panel?page=user_curso&curso_id=${ curso_id }` :
                                window.location.href = "panel?page=user_profile";
                        });
                    }).catch(res => console.log("QUERY DENIED => updated usuario"));
                }
            }
        },
        submit: (evt) => {
            evt.preventDefault();
            Recuperacion.fun.validateForm();
        }
    }
}

Recuperacion.view.form.onsubmit = (evt) => Recuperacion.fun.submit(evt);

Recuperacion.view.form.usuario_email.onkeyup = (evt) => Recuperacion.fun.validateEmail();
Recuperacion.view.form.usuario_pass.onkeyup = (evt) => Recuperacion.fun.validatePass();
Recuperacion.view.form.usuario_pass_confirm.onkeyup = (evt) => Recuperacion.fun.validatePassConfirm();

Recuperacion.view.form.usuario_email_code.onkeyup = (evt) => Recuperacion.fun.validateForm();

Recuperacion.view.containerForm.onscroll = (evt) => evt.srcElement.scrollLeft -= evt.srcElement.clientWidth;





RecuperacionMain();