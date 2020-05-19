/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Seccion_alternativaDao.js
*/
Seccion_alternativaDao = {
    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/seccion_alternativa/select.php", {
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
        return fetch(config.getUrl() + "model/script/seccion_alternativa/selectById.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },
    
    selectBySeccion_pregunta_id: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/seccion_alternativa/selectBySeccion_pregunta_id.php", {
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
        return fetch(config.getUrl() + "model/script/seccion_alternativa/insert.php", {
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
        return fetch(config.getUrl() + "model/script/seccion_alternativa/update.php", {
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
        return fetch(config.getUrl() + "model/script/seccion_alternativa/delete.php", {
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
