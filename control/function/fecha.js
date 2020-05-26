const Fecha = {
    MORTAL_YEAR: 100,
    MAX_YEAR: new Date().getFullYear(),
    MIN_YEAR: new Date().getFullYear()-100,  //MORTAL YEAR
    getDate: (date) => {
        return new Date(date + "T00:00:00");
    },
    getOptionYear: () => {
        let array = [];
        let presentYear = new Date().getFullYear();
        for(let i=(presentYear-Fecha.MORTAL_YEAR); i<presentYear; i++){
            array.push(i);
        }
        return array;
    },
    getString: (date, type) => {
        let conf = "";
        switch (type) {
            case 0: conf = { year: 'numeric', month: 'long', day: 'numeric' }; break;
            case 1: conf = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; break;
        }
        return date.toLocaleDateString("es-ES", conf);
    },
    getAge: (year) => {
        let presentYear = new Date().getFullYear();
        return (year>(presentYear-Fecha.MORTAL_YEAR)) ? presentYear-year : NaN;
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