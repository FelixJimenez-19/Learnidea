const main = async () => {
    await Informacion.crud.select();
    await Slider.crud.select();
    await Particles.init("particles-js");
    await Institucion.crud.select();
    await Contacto.crud.select();
}
setTimeout(() => main(), 0);