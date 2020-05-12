/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Contenido_primarioDao.js
*/
Contenido_primarioDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/contenido_primario/select.php", {
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
        return fetch(config.getUrl() + "model/script/contenido_primario/selectById.php", {
                method: "POST",
                headers: new Headers().append("Accept", "application/json"),
                body: formData,
            })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    selectByCurso_modelo_id: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/contenido_primario/selectByCurso_modelo_id.php", {
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
        return fetch(config.getUrl() + "model/script/contenido_primario/insert.php", {
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
        return fetch(config.getUrl() + "model/script/contenido_primario/update.php", {
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
        return fetch(config.getUrl() + "model/script/contenido_primario/delete.php", {
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