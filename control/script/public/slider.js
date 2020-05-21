const Slider = {
    database: [],
    view: {
        container: document.getElementById("particles-js")
    },
    crud: {
        select: async () => {
            await SliderDao.select().then(async (res) => {
                await Slider.fun.prepare(res);
                await Slider.fun.select();
            }).catch(res => console.log("SLIDER => QUERY DENIED"));
        }
    },
    fun: {
        prepare: (res) => {
            let total = res.length;
            let widthUl = total * 100;
            let time = total * 2.5;
            let percent = 100 / total;
            let decrement = (percent / 100) * 10;
            let liImage = "";
            let liFrase = "";
            let urlImages = [];
            let idImages = [];
            let idFrases = [];
            for (let i of res) {
                urlImages.push(`view/src/files/slider_foto/${i.slider_foto}`);
                idImages.push(`image-${ i.slider_id }`);
                idFrases.push(`frase-${ i.slider_id }`);
                liImage += `<li id="image-${ i.slider_id }" style="background-image: url('view/src/files/slider_foto/${i.slider_foto}')"></li>`;
                liFrase += `<li id="frase-${ i.slider_id }"><span>${i.slider_frase}</span></li>`;
            }
            let object = {
                total,
                widthUl,
                time,
                percent,
                decrement,
                urlImages,
                idImages,
                idFrases,
                keyframe: `@keyframes change {${ Slider.fun.getTransitions(percent, decrement) }}`,
                logo: `<img src="view/src/files/informacion_pagina_logo/${Informacion.database.informacion_pagina_logo}" class="logo">`,
                ulImage: `<ul style="width:${widthUl}%; animation: change ${time}s ease 1s infinite alternate" id="slider-images">${ liImage }</ul>`,
                ulFrase: `<ul style="width:${widthUl}%; animation: change ${time}s ease 1s infinite alternate" id="slider-frases">${ liFrase }</ul>`
            };
            Slider.database = object;
            return object;
        },
        getTransitions: (porcentaje, tamanoDecremental) => {
            let i = 0;
            let desplazamientoImagen = 0;
            let transitions = "";
            let last_transition = "";
            while (i < 100) {
                transitions += `${i}% { margin-left: -${desplazamientoImagen}%; }`;
                i += porcentaje;
                transitions += `${i-tamanoDecremental}% { margin-left: -${desplazamientoImagen}%; }`;
                last_transition = `100% { margin-left: -${desplazamientoImagen}%; }`;
                desplazamientoImagen += 100;
            }
            transitions += last_transition;
            return transitions;
        },
        select: () => {
            Slider.view.container.innerHTML = Slider.database.logo + Slider.database.ulImage + Slider.database.ulFrase;
            let styleTag = document.createElement("style");
            styleTag.innerHTML = Slider.database.keyframe;
            document.getElementsByTagName('head')[0].appendChild(styleTag);
        }
    }
}