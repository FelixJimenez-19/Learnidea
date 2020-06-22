/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Transaccion_tipoDao.js
*/
Transaccion_tipoDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion_tipo/select.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },

    selectById: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion_tipo/selectById.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },

    insert: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion_tipo/insert.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },

    update: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion_tipo/update.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },

    delete: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion_tipo/delete.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },
};