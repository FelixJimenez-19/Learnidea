/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Curso_eventoDao.js
*/
Curso_eventoDao = {

    select: () => {
        let formData = new FormData();
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/select.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData,
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    selectById: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/selectById.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },
    
    selectByCurso_id: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/selectByCurso_id.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    insert: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/insert.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    update: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/update.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    delete: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/curso_evento/delete.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },



}