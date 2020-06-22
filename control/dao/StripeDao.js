StripeDao = {
    payment: (formData) => {
        formData.append("key", config.key);
        return fetch(config.getUrl() + "model/script/stripe/payment.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        }).then((res) => res.json()).then((res) => {
            return res;
        });
    },
};