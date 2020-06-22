<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pruebas con STRIPE</title>
    <!-- STRIPE -->
    <link rel="stylesheet" href="index.css" />
    <script src="https://js.stripe.com/v3/"></script>
</head>

<body>
    <!-- STRIPE -->
    <form action="CreateCharge.php" method="post" id="payment-form">
        <div class="form-row">
            <label for="card-element">Tarjeta de Credito o Debito</label>
            <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>
        <button>Pagar</button>
    </form>
</body>
<script src="index.js"></script>

</html>