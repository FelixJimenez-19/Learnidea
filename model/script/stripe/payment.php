<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require './../../vendor/autoload.php';
include './../../dao/Mysql.php';
include './../../function/validation.php';
if (isset($_POST['amount']) and isset($_POST['currency']) and isset($_POST['description']) and isset($_POST['stripeToken']) and isset($_POST['key'])) {
    if (validation($_POST['key'])) {
        // Clave Secreta
        \Stripe\Stripe::setApiKey("sk_test_jTgXJJbjtdRFO3aK7xjT8MIP00gCeIDdVS");

        $amount = $_POST['amount'];
        $currency = $_POST['currency'];
        $description = $_POST['description'];
        $token = $_POST['stripeToken'];

        $charge = \Stripe\Charge::create([
            "amount" => $amount,
            "currency" => $currency,
            "description" => $description,
            "source" => $token
        ]);

        echo json_encode($charge);
    } else {
        echo json_encode(['DENIED']);
    }
} else {
    echo json_encode(['NULL']);
}
