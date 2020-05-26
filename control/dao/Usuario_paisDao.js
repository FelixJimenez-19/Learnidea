/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Usuario_paisDao.js
*/
Usuario_paisDao = {

    select: () => {
        return fetch(config.getUrl() + "model/script/usuario_pais/select.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json')
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    selectById: (formData) => {
        return fetch(config.getUrl() + "model/script/usuario_pais/selectById.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    insert: (formData) => {
        return fetch(config.getUrl() + "model/script/usuario_pais/insert.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    update: (formData) => {
        return fetch(config.getUrl() + "model/script/usuario_pais/update.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },


    delete: (formData) => {
        return fetch(config.getUrl() + "model/script/usuario_pais/delete.php", {
            method: "POST",
            headers: new Headers().append('Accept', 'application/json'),
            body: formData
        }).then(res => res.json()).then(res => {
            return res;
        });
    },
}