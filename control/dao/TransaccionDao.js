/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/TransaccionDao.js
*/
TransaccionDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/transaccion/select.php", {
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
        return fetch(config.getUrl() + "model/script/transaccion/selectById.php", {
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
        return fetch(config.getUrl() + "model/script/transaccion/insert.php", {
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
        return fetch(config.getUrl() + "model/script/transaccion/update.php", {
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
        return fetch(config.getUrl() + "model/script/transaccion/delete.php", {
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
