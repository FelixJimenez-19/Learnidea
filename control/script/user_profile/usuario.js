const ProfileUsuarioMain = async () => {
    await ProfileUsuario.crud.selectById(global_usuario_id);
    await ProfileUsuario.foreigns.selectTema();
    await ProfileUsuario.foreigns.selectPais();
}

const ProfileUsuario = {
    database: [],
    view: {
        infoContainer: document.getElementById("profile-info-container"),
        usuarioNombre: document.getElementById("profile-usuario-nombre"),
        usuarioTipo: document.getElementById("profile-usuario-tipo"),
        usuarioPortada: document.getElementById("profile-usuario-portada"),
        usuarioFoto: document.getElementById("profile-usuario-foto")
    },
    crud: {
        selectById: (param_usuario_id) => {
            let formData = new FormData();
            formData.append("usuario_id", param_usuario_id);
            UsuarioDao.selectById(formData).then(res => {
                ProfileUsuario.database = res;
                ProfileUsuario.fun.selectById(param_usuario_id);
            });
        },
        update: (formData, param_usuario_id) => {
            UsuarioDao.update(formData).then(res => {
                ProfileUsuario.crud.selectById(param_usuario_id);
            });
        }
    },
    fun: {
        getItemHtml: (index, param_usuario_id) => {
            let register = ProfileUsuario.database[index];
            return `
                <div class="tittle"><span>INFORMACION PERSONAL</span></div>
                <div class="row">
                    <b>NOMBRE: </b><span>${ register.usuario_nombre }</span>
                </div>
                <div class="row">
                    <b>CEDULA: </b><span>${ register.usuario_cedula }</span>
                </div>
                <div class="row">
                    <b>EDAD: </b><span>${ Fecha.getAge(register.usuario_nacimiento) } años</span>
                </div>
                <div class="row">
                    <b>INDICE DACTILAR: </b><span>${ register.usuario_indice }</span>
                </div>
                <div class="row">
                    <b>CELULAR: </b>
                    <a target="_blank" href="tel:${ register.usuario_celular }"><img src="view/src/icon/link.png"></a>
                    <span>${ register.usuario_celular }</span>
                </div>
                <div class="row">
                    <b>TELEFONO: </b>
                    <a target="_blank" href="tel:${ register.usuario_telefono }"><img src="view/src/icon/link.png"></a>
                    <span>${ register.usuario_telefono }</span>
                </div>
                <div class="row">
                    <b>EMAIL: </b>
                    <a target="_blank" href="mailto:${ register.usuario_email }"><img src="view/src/icon/link.png"></a>
                    <span>${ register.usuario_email }</span>
                </div>
                <div class="row">
                    <b>SEXO: </b><span>${ register.usuario_sexo }</span>
                </div>
                <div class="row">
                    <b>NIVEL ACADEMICO: </b><span>${ register.usuario_nivel }</span>
                </div>
                <div class="row">
                    <b>DIRECCIÓN: </b><span>${ register.usuario_direccion }</span>
                </div>
                <div class="row vertical-center">
                    <b>PAIS: </b><img class="bandera" src="view/src/files/usuario_pais_bandera/${ register.usuario_pais_bandera }"><span>${ register.usuario_pais_nombre }</span>
                </div>
                <div class="row vertical-center">
                    <b>CURRICULUM: </b>
                    <a target="_blank" href="view/src/files/usuario_curriculum/${ register.usuario_curriculum }"><img src="view/src/icon/link.png"></a>
                    <span>.pdf</span>
                </div>
                <div class="row vertical-center">
                    <b>CALIFICACIÓN: </b><img class="calificacion" src="view/src/icon/star_${ register.usuario_calificacion }.png">
                </div>
                <div class="row">
                    <b>FIRMA: </b><img class="firma" src="view/src/files/usuario_firma/${ register.usuario_firma }">
                </div>
                <div class="col">
                    <b>DESCRIPCIÓN: </b><span>${ register.usuario_descripcion }</span>
                </div>
                <div class="tittle"><span>INFORMACION LABORAL</span></div>
                <div class="row">
                    <b>EMPRESA: </b><span>${ register.usuario_empresa_nombre }</span>
                </div>
                <div class="row">
                    <b>LABOR: </b><span>${ register.usuario_empresa_actividad }</span>
                </div>
                <div class="row">
                    <b>DIRECCIÓN: </b><span>${ register.usuario_empresa_direccion }</span>
                </div>
                <div class="row">
                    <b>TELEFONO: </b>
                    <a target="_blank" href="tel:${ register.usuario_empresa_telefono }"><img src="view/src/icon/link.png"></a>
                    <span>${ register.usuario_empresa_telefono }</span>
                </div>
                ${ Session.getSession().usuario_id === register.usuario_id ? `<button onclick="Foro.fun.showModalForm(() => ProfileUsuario.fun.prepareEdit('${ register.usuario_id }'))"><img src="view/src/icon/edit.png"><span>Editar</span></button>` : `` }
            `;
        },
        selectById: (param_usuario_id) => {
            let html = ``;
            let user = null;
            for (let i in ProfileUsuario.database) {
                user = ProfileUsuario.database[i];
                html = ProfileUsuario.fun.getItemHtml(i, param_usuario_id);
            }
            if (user !== null) {
                ProfileUsuario.view.usuarioNombre.innerText = user.usuario_nombre;
                ProfileUsuario.view.usuarioTipo.innerText = user.usuario_tipo_nombre;
                
                ProfileUsuario.view.usuarioPortada.style.backgroundImage = (user.usuario_portada !== null) ? `url(view/src/files/usuario_portada/${ user.usuario_portada })` : `url(view/src/img/background.png)`;
                ProfileUsuario.view.usuarioPortada.onclick = () => viewscreen.show(`${user.usuario_portada !== null ? `view/src/files/usuario_portada/${ user.usuario_portada }` : `view/src/img/background.png` }`);
                
                ProfileUsuario.view.usuarioFoto.style.backgroundImage = (user.usuario_foto !== null) ? `url(view/src/files/usuario_foto/${ user.usuario_foto })` : `url(view/src/img/logo.png)`;
                ProfileUsuario.view.usuarioFoto.onclick = () => viewscreen.show(`${user.usuario_foto !== null ? `view/src/files/usuario_foto/${ user.usuario_foto }` : `view/src/img/logo.png` }`);
            }
            ProfileUsuario.view.infoContainer.innerHTML = html;
        },
        update: (form_id) => {
            let form = document.getElementById(form_id);
            if (
                form.usuario_nombre.value !== "" &&
                form.usuario_cedula.value !== "" &&
                form.usuario_nacimiento.value !== "" &&
                form.usuario_indice.value !== "" &&
                form.usuario_celular.value !== "" &&
                form.usuario_telefono.value !== "" &&
                form.usuario_email.value !== "" &&
                form.usuario_pass.value !== "" &&
                form.usuario_sexo.value !== "" &&
                form.usuario_nivel.value !== "" &&
                form.usuario_direccion.value !== "" &&
                form.usuario_descripcion.value !== "" &&
                form.usuario_empresa_nombre.value !== "" &&
                form.usuario_empresa_actividad.value !== "" &&
                form.usuario_empresa_direccion.value !== "" &&
                form.usuario_empresa_telefono.value !== "" &&
                form.usuario_tema_mode_dark.value !== "" &&
                form.usuario_tema_id.value !== ""
            ) {
                ProfileUsuario.crud.update(new FormData(form), form.usuario_id.value);
                Foro.fun.hideModalForm(() => {});
            } else {
                Foro.fun.showModalMessage("Debe llenar todos los campos");
            }
        },
        prepareEdit: (param_usuario_id) => {
            let register = ProfileUsuario.database.find(element => element.usuario_id === param_usuario_id);
            Foro.view.modalForm.innerHTML = `
                <form class="foro-form" id="idea_form" onsubmit="return false">
                    <span class="title">FORMULARIO</span>
                    <div class="inputs">
                        <input type="hidden" name="usuario_id" value="${ register.usuario_id }">
                        <input type="hidden" name="usuario_calificacion" value="${ register.usuario_calificacion }">
                        <input type="hidden" name="usuario_tipo_id" value="${ register.usuario_tipo_id }">
                        <div class="row"><span class="section">INFORMACION PERSONAL</span></div>
                        <div class="row">
                            <span>FOTO: </span>
                            <input type="file" name="usuario_foto" placeholder="PNG" accept="image/*">
                        </div>
                        <div class="row">
                            <span>PORTADA: </span>
                            <input type="file" name="usuario_portada" placeholder="PNG" accept="image/*">
                        </div>
                        <div class="row">
                            <span>FIRMA: </span>
                            <input type="file" name="usuario_firma" placeholder="PNG" accept="image/*">
                        </div>
                        <div class="row">
                            <span>CURRICULUM: </span>
                            <input type="file" name="usuario_curriculum" placeholder="PDF" accept="application/pdf">
                        </div>
                        <div class="row">
                            <span>NOMBRE: </span>
                            <input type="text" name="usuario_nombre" placeholder="NOMBRE" value="${ register.usuario_nombre }">
                        </div>
                        <div class="row">
                            <span>CEDULA: </span>
                            <input type="text" name="usuario_cedula" placeholder="CEDULA" value="${ register.usuario_cedula }">
                        </div>
                        <div class="row">
                            <span>AÑO NACIMIENTO: </span>
                            <select name="usuario_nacimiento">
                                <option value="${ register.usuario_nacimiento }">${ register.usuario_nacimiento }</option>
                                ${ ProfileUsuario.fun.getOptions_usuario_nacimiento() }
                            </select>
                        </div>
                        <div class="row">
                            <span>INDICE: </span>
                            <input type="text" name="usuario_indice" placeholder="INDICE" value="${ register.usuario_indice }">
                        </div>
                        <div class="row">
                            <span>CELULAR: </span>
                            <input type="text" name="usuario_celular" placeholder="CELULAR" value="${ register.usuario_celular }">
                        </div>
                        <div class="row">
                            <span>TELEFONO: </span>
                            <input type="text" name="usuario_telefono" placeholder="TELEFONO" value="${ register.usuario_telefono }">
                        </div>
                        <div class="row">
                            <span>EMAIL: </span>
                            <input type="email" name="usuario_email" placeholder="EMAIL" value="${ register.usuario_email }">
                        </div>
                        <div class="row">
                            <span>CONTRASEÑA: </span>
                            <input type="password" name="usuario_pass" placeholder="CONTRASEÑA" value="${ register.usuario_pass }">
                        </div>
                        <div class="row">
                            <span>DIRECCION: </span>
                            <input type="text" name="usuario_direccion" placeholder="DIRECCION" value="${ register.usuario_direccion }">
                        </div>
                        <div class="row">
                            <span>DESCRIPCION: </span>
                            <input type="text" name="usuario_descripcion" placeholder="DESCRIPCION" value="${ register.usuario_descripcion }">
                        </div>
                        <div class="row">
                            <span>SEXO: </span>
                            <div class="input-radio-container">
                                <input type="radio" name="usuario_sexo" class="input-radio-si-no" value="masculino" placeholder="MASCULINO" ${ register.usuario_sexo === "masculino" ? "checked" : ''}>
                                <input type="radio" name="usuario_sexo" class="input-radio-si-no" value="femenino" placeholder="FEMENINO" ${ register.usuario_sexo === "femenino" ? "checked" : ''}>
                            </div>
                        </div>
                        <div class="row">
                            <span>NIVEL: </span>
                            <div class="input-radio-container">
                                <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="primario" placeholder="PRIMARIO" ${ register.usuario_nivel === "primario" ? "checked" : "" }>
                                <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="secundario" placeholder="SECUNDARIO" ${ register.usuario_nivel === "secundario" ? "checked" : "" }>
                                <input type="radio" name="usuario_nivel" class="input-radio-si-no" value="superior" placeholder="SUPERIOR" ${ register.usuario_nivel === "superior" ? "checked" : "" }>
                            </div>
                        </div>
                        <div class="row">
                            <span>TEMA: </span>
                            <select name="usuario_tema_id">
                                <option value="${ register.usuario_tema_id }">${ register.usuario_tema_nombre }</option>
                                ${ ProfileUsuario.foreigns.getOptionsTema() }
                            </select>
                        </div>
                        <div class="row">
                            <span>PAIS: </span>
                            <select name="usuario_pais_id">
                                <option value="${ register.usuario_pais_id }">${ register.usuario_pais_nombre }</option>
                                ${ ProfileUsuario.foreigns.getOptionsPais() }
                            </select>
                        </div>
                        <div class="row">
                            <span>MODO: </span>
                            <div class="input-radio-container">
                                <input type="radio" name="usuario_tema_mode_dark" class="input-radio-si-no" value="0" placeholder="CLEAR" ${ register.usuario_tema_mode_dark === "0" ? "checked" : "" }>
                                <input type="radio" name="usuario_tema_mode_dark" class="input-radio-si-no" value="1" placeholder="DARK" ${ register.usuario_tema_mode_dark === "1" ? "checked" : "" }>
                            </div>
                        </div>
                        <div class="row"><span class="section">INFORMACION LABORAL</span></div>
                        <div class="row">
                            <span>EMPRESA: </span>
                            <input type="text" name="usuario_empresa_nombre" placeholder="EMPRESA" value="${ register.usuario_empresa_nombre }">
                        </div>
                        <div class="row">
                            <span>ACTIVIDAD: </span>
                            <input type="text" name="usuario_empresa_actividad" placeholder="ACTIVIDAD" value="${ register.usuario_empresa_actividad }">
                        </div>
                        <div class="row">
                            <span>DIRECCION: </span>
                            <input type="text" name="usuario_empresa_direccion" placeholder="DIRECCION" value="${ register.usuario_empresa_direccion }">
                        </div>
                        <div class="row">
                            <span>TELEFONO: </span>
                            <input type="text" name="usuario_empresa_telefono" placeholder="TELEFONO" value="${ register.usuario_empresa_telefono }">
                        </div>
                    </div>
                    <div class="buttons">
                        <button onclick="ProfileUsuario.fun.update('idea_form')">GUARDAR</button>
                        <button onclick="Foro.fun.hideModalForm( ()=>{} )">CANCELAR</button>
                    </div>
                </form>
            `;
        },
        getOptions_usuario_nacimiento: () => {
            let html = `<option value="">AÑO NACIMIENTO</option>`;
            let array = Fecha.getOptionYear();
            for (let i of array) {
                html += `
                    <option value="${ i }">${ i }</option>
                `;
            }
            return html;
        },
    },
    foreigns: {
        tema_database: [],
        pais_database: [],
        selectTema: () => Usuario_temaDao.select().then(res => ProfileUsuario.foreigns.tema_database = res),
        selectPais: () => Usuario_paisDao.select().then(res => ProfileUsuario.foreigns.pais_database = res),
        getOptionsTema: () => {
            let html = ``;
            for (let i of ProfileUsuario.foreigns.tema_database) {
                html += `<option value="${ i.usuario_tema_id }">${ i.usuario_tema_nombre }</option>`;
            }
            return html;
        },
        getOptionsPais: () => {
            let html = ``;
            for (let i of ProfileUsuario.foreigns.pais_database) {
                html += `<option value="${ i.usuario_pais_id }">${ i.usuario_pais_nombre }</option>`;
            }
            return html;
        }
    }
}

ProfileUsuarioMain();