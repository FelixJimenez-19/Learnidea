/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/UsuarioDao.js
*/
UsuarioDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/select.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    selectById: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/selectById.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    insert: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/insert.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    update: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/update.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    updateTema_mode_dark: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/updateTema_mode_dark.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    updateFechaConexion: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/updateFechaConexion.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    delete: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/delete.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    login: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/login.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    logout: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/usuario/logout.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },
};