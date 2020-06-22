const UserCursoTransaccionMain = () => {
    UserCursoTransaccion.crud.selectTipo();
}

const UserCursoTransaccion = {
    database: [],
    view: {
        selectPaymentMethod: document.getElementById("select-payment-method")
    },
    crud: {
        selectTipo: () => {
            Transaccion_tipoDao.select().then(res => {
                console.log(res);
                UserCursoTransaccion.fun.select(res);
            });
        }
    },
    fun: {
        getHtmlItem: (register) => {
            return `
                <option value="${ register.transaccion }"></option>
            `;
        },
        selectTipo: (database) => {
            let html = ``;
            for (let i of database) {
                html += UserCursoTransaccion.fun.getHtmlItem(i);
            }
            UserCursoTransaccion.view.selectPaymentMethod.innerHTML = html;
        }
    }
}