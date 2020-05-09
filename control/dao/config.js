/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/config.js
*/
config = {
    key: `#tXCGuR8.UEy""p`,
    protocol: "http",
    host: "192.168.0.2",
    // host: "26.133.63.149",
    proyect: "learnidea",
    getUrl: () => {
        return `${config.protocol}://${config.host}/${config.proyect}/`;
    },
};
