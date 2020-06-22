const StripePayment = {
    value: {
        public_key: "pk_test_vmlGmaIRUobRgfRy9fAEF53W00r3GztYSj",
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    },
    view: {
        form: document.getElementById('payment-form'),
        errorElement: document.getElementById('card-errors')
    },
    crud: {
        payment: (token) => {
            let formData = new FormData(StripePayment.view.form);
            formData.append("stripeToken", token);
            StripeDao.payment(formData).then(res => {
                // hay que asignarle una funcion a external action para manejar el resultado

                StripePayment.fun.externalAction(res);
                console.log(res);
            });
        }
    },
    fun: {
        declare: () => {
            StripePayment.view.form = document.getElementById('payment-form');
            StripePayment.view.errorElement = document.getElementById('card-errors');
        },
        ini: () => {
            let stripe = Stripe(StripePayment.value.public_key);
            let elements = stripe.elements();
            let card = elements.create('card', {
                style: StripePayment.value.style
            });
            card.mount('#card-element');
            card.on('change', (event) => {
                StripePayment.fun.declare();
                (event.error) ? StripePayment.view.errorElement.textContent = event.error.message: StripePayment.view.errorElement.textContent = '';
            });
            StripePayment.view.form.onsubmit = () => {
                StripePayment.fun.declare();
                event.preventDefault();
                stripe.createToken(card).then((result) => {
                    (result.error) ? StripePayment.view.errorElement.textContent = result.error.message: StripePayment.crud.payment(result.token);
                });
            }
        },
        externalAction: (res) => {}
    }
}