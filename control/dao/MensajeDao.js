/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/MensajeDao.js
*/
MensajeDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/mensaje/select.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    selectById: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/mensaje/selectById.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    selectByUsuario_idMensaje_visto: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/mensaje/selectByUsuario_idMensaje_visto.php", {
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
        return fetch(config.getUrl() + "model/script/mensaje/insert.php", {
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
        return fetch(config.getUrl() + "model/script/mensaje/update.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    updateMensaje_visto: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/mensaje/updateMensaje_visto.php", {
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
        return fetch(config.getUrl() + "model/script/mensaje/delete.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },
};