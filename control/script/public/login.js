const LoginMain = async () => {
    await Login.crud.selectUsuario();
}

const Login = {
    usuario_database: [],
    usuario_index: 0,
    view: {
        containerForm: document.getElementById("container-form"),
        form: document.getElementById("form-login"),
    },
    crud: {
        selectUsuario: () => {
            UsuarioDao.select().then(res => {
                Login.usuario_database = res;
            }).catch(res => console.log("QUERY DENIED => usuario"));
        },
    },
    fun: {
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
        validateText: (input, msg, radio, parents) => {
            if (input.value === "") {
                Login.fun.setError(input, msg, true, parents);
                // radio.checked = true;
                input.focus();
                return false;
            } else {
                Login.fun.setError(input, "", false, parents);
                return true;
            }
        },
        validateEmail: () => {
            let validate = false;
            if (Login.fun.validateText(Login.view.form.usuario_email, "Debe llenar este campo", Login.view.radioPage1, 1)) {
                if (Login.fun.isEmail(Login.view.form.usuario_email.value)) {
                    Login.fun.setError(Login.view.form.usuario_email, "", false, 1);
                    let index = Login.usuario_database.findIndex(element => element.usuario_email === Login.view.form.usuario_email.value);
                    if (index > 0) {
                        validate = true;
                        Login.fun.setError(Login.view.form.usuario_email, "", false, 1);
                        Login.usuario_index = index;
                    } else {
                        validate = false;
                        Login.fun.setError(Login.view.form.usuario_email, "Este email no esta registrado", true, 1);
                        Login.usuario_index = 0;
                    }
                } else {
                    validate = false;
                    Login.fun.setError(Login.view.form.usuario_email, "Este no es un email", true, 1);
                    Login.usuario_index = 0;
                }
            }
            if (!validate) {
                Login.usuario_index = 0;
                Login.view.form.usuario_email.focus();
            }
            return validate;
        },
        validatePass: () => {
            let validate = false;
            if (Login.usuario_index === 0) {
                Login.fun.setError(Login.view.form.usuario_pass, "Ingrese un correo electronico válido", true, 1);
                validate = false;
            } else {
                if (Login.fun.validateText(Login.view.form.usuario_pass, "Debe llenar este campo", Login.view.radioPage1, 1)) {
                    let register = Login.usuario_database[Login.usuario_index];
                    if (register.usuario_pass !== Login.view.form.usuario_pass.value) {
                        Login.fun.setError(Login.view.form.usuario_pass, "Contraseña incorrecta", true, 1);
                        Login.view.form.usuario_pass.focus();
                        validate = false;
                    } else {
                        validate = true;
                    }
                } else {
                    Login.view.form.usuario_pass.focus();
                    validate = false;
                }
            }
            return validate;
        },
        validateSesion: () => {
            let register = Login.usuario_database[Login.usuario_index];
            if (
                register.usuario_email.toLowerCase() === Login.view.form.usuario_email.value.toLowerCase() &&
                register.usuario_pass === Login.view.form.usuario_pass.value
            ) {
                UsuarioDao.login(new FormData(Login.view.form)).then(res => window.location.href = "panel");
            } else {
                Login.fun.setError(Login.view.form.usuario_pass, "Contraseña incorrecta", true, 1);
            }
        },
        submit: (evt) => {
            evt.preventDefault();
            if (Login.fun.validateEmail() && Login.fun.validatePass()) {
                Login.fun.validateSesion();
            }
        }
    }
}

Login.view.form.onsubmit = (evt) => Login.fun.submit(evt);

Login.view.form.usuario_email.onkeyup = (evt) => Login.fun.validateEmail();
Login.view.form.usuario_pass.onkeyup = (evt) => Login.fun.validatePass();





LoginMain();