/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/login.js
*/
const form = document.getElementById("idea_form_login");
let showMsg = (msg) => {
    document.getElementById("idea_msg").innerHTML = msg;
    setTimeout(() => {
        document.getElementById("idea_msg").innerHTML = "";
    }, 1000);
};
form.onsubmit = (evt) => {
    evt.preventDefault();
    if (form.usuario_email.value !== "" && form.usuario_pass.value !== "") {
        UsuarioDao.login(new FormData(form)).then((res) => {
            if (res[0] !== null) {
                window.location.href = "panel";
            } else {
                showMsg("Credenciales incorrectos");
            }
        });
    } else {
        showMsg("Debe ingresar sus credenciales");
    }
};
