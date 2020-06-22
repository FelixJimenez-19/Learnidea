const UserCursoTransaccion_tipoMain = () => {
    UserCursoTransaccion_tipo.crud.select();
}

const UserCursoTransaccion_tipo = {
    database: [],
    view: {
        selectPaymentMethod: document.getElementById("select-payment-method"),
        containerFormsPayment: document.getElementById("container-forms-payment"),
        formCredito: document.getElementById("payment-form"),
        formDebito: document.getElementById("form-payment-method-debito")
    },
    crud: {
        select: () => {
            Transaccion_tipoDao.select().then(res => {
                UserCursoTransaccion_tipo.database = res;
                UserCursoTransaccion_tipo.fun.select();
            });
        }
    },
    fun: {
        getHtmlItem: (register) => {
            return `
                <option value="${ register.transaccion_tipo_id }">${ register.transaccion_tipo_nombre }</option>
            `;
        },
        select: () => {
            let html = `<option value="0">Métodos de pago</option>`;
            for (let i of UserCursoTransaccion_tipo.database) {
                if (i.transaccion_tipo_entrada == 1 || i.transaccion_tipo_credito == 1) {
                    html += UserCursoTransaccion_tipo.fun.getHtmlItem(i);
                }
            }
            UserCursoTransaccion_tipo.view.selectPaymentMethod.innerHTML = html;
        },
        actionSelectPaymentMethod: (evt) => {
            UserCursoTransaccion_tipo.view.formDebito.innerHTML = ``;
            UserCursoTransaccion_tipo.view.formCredito.innerHTML = ``;
            let optionSelected = UserCursoTransaccion_tipo.view.selectPaymentMethod.value;
            if (optionSelected != 0) {
                let transaccion_tipo_selected = UserCursoTransaccion_tipo.database.find(element => element.transaccion_tipo_id == optionSelected);
                if (transaccion_tipo_selected.transaccion_tipo_credito == 1) {
                    UserCursoTransaccion_tipo.fun.loadCredito(transaccion_tipo_selected);
                    UserCursoTransaccion_tipo.fun.goForm(1);
                } else if (transaccion_tipo_selected.transaccion_tipo_entrada == 1) {
                    UserCursoTransaccion_tipo.fun.loadDebito(transaccion_tipo_selected);
                    UserCursoTransaccion_tipo.fun.goForm(2);
                } else {
                    UserCursoTransaccion_tipo.fun.goForm(0);
                }
            } else {
                UserCursoTransaccion_tipo.fun.goForm(0);
            }
        },
        // 0 => ninguno
        // 1 => credito
        // 2 => debito
        goForm: (form_option) => {
            switch (form_option) {
                case 0:
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.height = "0px";
                    break;
                case 1:
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.height = "auto";
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.marginLeft = "0%";
                    break;
                case 2:
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.height = "auto";
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.marginLeft = "-100%";
                    break;
                default:
                    UserCursoTransaccion_tipo.view.containerFormsPayment.style.height = "0px";
                    break;
            }
        },
        loadCredito: (register) => {
            UserCursoTransaccion_tipo.view.formCredito.innerHTML = `
                <div class="sub-row row-img">
                    <img src="view/src/files/transaccion_tipo_logo/${ register.transaccion_tipo_logo }">
                </div>
                <div class="sub-row row-descripcion">
                    <span>${ register.transaccion_tipo_descripcion }</span>
                </div>
                <input type="hidden" name="transaccion_tipo_id" value="${ register.transaccion_tipo_id }" />
                <input type="hidden" name="transaccion_descripcion" value="Curso: ${ UserCursoOne.curso.curso_nombre }, Usuario: ${ Session.getSession().usuario_nombre }" />
                <input type="hidden" name="transaccion_valor" value="${ FunctionCurso.fun.isLive(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_live : FunctionCurso.fun.isRecord(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_record : 0 }" />
                <input type="hidden" name="usuario_id" value="${ Session.getSession().usuario_id }" />

                <label class="card-label" for="card-element">Número de la Tarjeta de Credito:</label>
                <div class="card-element" id="card-element"></div>
                <div class="card-errors" id="card-errors" role="alert"></div>

                <input type="hidden" name="amount" value="${ FunctionCurso.fun.isLive(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_live : FunctionCurso.fun.isRecord(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_record : 0 }" />
                <input type="hidden" name="currency" value="usd" />
                <input type="hidden" name="description" value="Curso: ${ UserCursoOne.curso.curso_nombre }, Usuario: ${ Session.getSession().usuario_nombre }" />

                <div class="sub-row">
                    <input type="submit" value="CONFIRMAR" />
                </div>
            `;
            StripePayment.fun.ini();
        },
        loadDebito: (register) => {
            UserCursoTransaccion_tipo.view.formDebito.innerHTML = `
                <div class="sub-row row-img">
                    <img src="view/src/files/transaccion_tipo_logo/${ register.transaccion_tipo_logo }">
                </div>
                <div class="sub-row row-descripcion">
                    <span>${ register.transaccion_tipo_descripcion }</span>
                </div>
                <div class="sub-row">
                    <b>Número: </b><span>${ register.transaccion_tipo_numero }</span>
                </div>
                <input type="hidden" name="transaccion_tipo_id" value="${ register.transaccion_tipo_id }" />
                <input type="hidden" name="transaccion_descripcion" value="Curso: ${ UserCursoOne.curso.curso_nombre }, Usuario: ${ Session.getSession().usuario_nombre }" />
                <input type="hidden" name="transaccion_valor" value="${ FunctionCurso.fun.isLive(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_live : FunctionCurso.fun.isRecord(UserCursoOne.curso) ? UserCursoOne.curso.curso_precio_record : 0 }" />
                <input type="hidden" name="usuario_id" value="${ Session.getSession().usuario_id }" />
                <div class="sub-row">
                    <b>COMPROBANTE: </b>
                    <input type="file" name="transacion_foto" accept="image/png, image/jpg, image/jpeg" placeholder="SUBIR FOTO" />
                </div>
                <div class="sub-row">
                    <input type="submit" value="CONFIRMAR" />
                </div>
            `;
        }
    }
}


UserCursoTransaccion_tipo.view.selectPaymentMethod.onchange = (evt) => UserCursoTransaccion_tipo.fun.actionSelectPaymentMethod(evt);
UserCursoTransaccion_tipo.view.selectPaymentMethod.onclick = (evt) => UserCursoTransaccion_tipo.fun.actionSelectPaymentMethod(evt);