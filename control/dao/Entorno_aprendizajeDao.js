/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Entorno_aprendizajeDao.js
*/
Entorno_aprendizajeDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/select.php", {
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
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/selectById.php", {
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
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/selectByCurso_modelo_id.php", {
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
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/insert.php", {
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
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/update.php", {
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
        return fetch(config.getUrl() + "model/script/entorno_aprendizaje/delete.php", {
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