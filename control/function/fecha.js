const Fecha = {
    getDate: (date) => {
        return new Date(date + "T00:00:00");
    },
    getString: (date, type) => {
        let conf = "";
        switch (type) {
            case 0: conf = { year: 'numeric', month: 'long', day: 'numeric' }; break;
            case 1: conf = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; break;
        }
        return date.toLocaleDateString("es-ES", conf);
    },
    getDiffDay: (ini, fin) => {
        ini = ini.getTime();
        fin = fin.getTime();
        return (fin - ini) / (1000 * 60 * 60 * 24);
    },
    getDiffHour: (ini, fin) => {
        ini = ini.getTime();
        fin = fin.getTime();
        return (fin - ini) / (1000 * 60 * 60);
    }
}