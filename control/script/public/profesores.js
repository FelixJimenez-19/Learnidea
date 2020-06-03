const ProfesoresMain = async () => {
    await Profesores.crud.selectUsuario();
}

const Profesores = {
    database: [],
    refresh: new Date().getDay(),
    view: {
        viewAll: document.getElementById("coach-all"),
        viewOne: document.getElementById("coach-one"),
        containerAll: document.getElementById("coach-all-container"),
    },
    crud: {
        selectUsuario: () => {
            UsuarioDao.select().then(res => {
                Profesores.database = res;
                usuario_id === 0 ? Profesores.fun.selectCoachAll() : Profesores.fun.selectCoachOne();
            // }).catch(res => console.log("QUERY DENIED => usuario"));
            });
        },
    },
    fun: {
        getHtmlItem: (index) => {
            let register = Profesores.database[index];
            return `
                <a class="item" href="?usuario_id=${ register.usuario_id }">
                    <div class="usuario_foto" style="background-image: url(${register.usuario_foto !== null ? `view/src/files/usuario_foto/${register.usuario_foto}?date=${ Profesores.refresh }` : "view/src/img/avatar.png"}")"></div>
                    <span class="usuario_nombre">${ register.usuario_nombre }</span>
                    <div class="pais_bandera" style="background-image: url(${register.usuario_pais_bandera !== null ? `view/src/files/usuario_pais_bandera/${register.usuario_pais_bandera}` : "view/src/icon/world1.png"}")"></div>
                </a>
            `;
        },
        selectCoachAll: () => {
            Profesores.view.viewOne.style.display = "none";
            Profesores.view.viewAll.style.display = "block";
            let html = "";
            for (let i in Profesores.database) {
                let register = Profesores.database[i];
                register.usuario_tipo_coach == true ? html += Profesores.fun.getHtmlItem(i) : '';
            }
            Profesores.view.containerAll.innerHTML = html;
        },
        selectCoachOne: () => {
            Profesores.view.viewAll.style.display = "none";
            Profesores.view.viewOne.style.display = "block";
            let register = Profesores.database.find(element => element.usuario_id == usuario_id);
            Profesores.view.viewOne.innerHTML = `
                <div class="section">
                    <div class="title">${ register.usuario_nombre }</div>
                </div>
            `;
        }
    }
}



ProfesoresMain();