/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/panel.js
*/
window.onresize = () => {
    resposive_tool();
};

let resposive_tool = () => {
    if (window.innerWidth <= 1000) {
        document.getElementById("idea_input_check_header_tool").checked = true;
    } else {
        document.getElementById("idea_input_check_header_tool").checked = false;
    }
};

resposive_tool();

let interface = {
    btn_logout: document.getElementById("idea_btn_logount"),
        checkboxModeDark: document.getElementById("header-options-profile-darkmode"),
        checkboxTool: document.getElementById("idea_input_check_header_tool")
}

let interactions = {
    logout: () => {
        UsuarioDao.logout().then((res) => {
            window.location.href = "login";
        });
    },
    changeModeDark: (evt) => {
        let formData = new FormData();
        formData.append("usuario_id", Session.getSession().usuario_id);
        formData.append("usuario_tema_mode_dark", evt.srcElement.checked ? 1 : 0);
        UsuarioDao.updateTema_mode_dark(formData).then(res => console.log("Mode changed")).catch(res => console.log("Error to changed mode"));
        Session.session.usuario_tema_mode_dark = evt.srcElement.checked ? 1 : 0;
        theme.main(Session.getSession());
    },
    loadTool: () => {
        if (localStorage.getItem("header-tool-open")) {
            interface.checkboxTool.checked = localStorage.getItem("header-tool-open") == "true" ? true : false;
        }
    },
    saveTool: (evt) => {
        localStorage.setItem("header-tool-open", evt.srcElement.checked);

        // Manejamos los widht de las 3 columnas del foro
        if (typeof (Foro) !== "undefined") {
            (async () => {
                for (let i = 0; i < 100; i++) {
                    await new Promise((resolve) => setTimeout(() => resolve(Foro.fun.ideaContentOnScroll()), 1));
                }
            })();
        }
    },
    hideShowTool: (evt) => {
        if (evt.keyCode == 66 && evt.ctrlKey) {
            let checked = !interface.checkboxTool.checked;
            interface.checkboxTool.checked = checked;
            let evt = {
                srcElement: {
                    checked: checked
                }
            }
            interactions.saveTool(evt);
        }
        if (evt.keyCode == 188 && evt.ctrlKey) {
            let checks = document.querySelectorAll("input[type='checkbox']");
            for (let i of checks) {
                i.id !== interface.checkboxModeDark.id ? i.checked = false : '';
            }
            interface.checkboxTool.checked = true;
        }
        if (evt.keyCode == 190 && evt.ctrlKey) {
            let checks = document.querySelectorAll("input[type='checkbox']");
            for (let i of checks) {
                i.id !== interface.checkboxModeDark.id ? i.checked = true : '';
            }
            interface.checkboxTool.checked = false;
        }
        if (evt.keyCode == 222 && evt.ctrlKey) {
            let checked = !interface.checkboxModeDark.checked;
            let evt = {
                srcElement: {
                    checked: checked
                }
            }
            interface.checkboxModeDark.checked = checked;
            interactions.changeModeDark(evt);
        }

        if (evt.keyCode === 27) {
            if (typeof (viewscreen) !== "undefined") {
                if (viewscreen.CONTAINER.style.display === "flex") {
                    viewscreen.hide();
                }
            } else {}
        }
    }
}

// EVENTS
interface.btn_logout.onclick = () => interactions.logout();
interface.checkboxModeDark.onchange = (evt) => interactions.changeModeDark(evt);
interface.checkboxTool.onchange = (evt) => interactions.saveTool(evt);
// CTRL + B Cierra o abre la barra de herramientas
window.onkeydown = (evt) => interactions.hideShowTool(evt);
interactions.loadTool();