<?php
function validation($key1)
{
    $conn = new Mysql();
    $key2 = mysqli_fetch_assoc($conn->query("SELECT informacion_api_key FROM informacion"))['informacion_api_key'];
    if($key1 == $key2) {
        return true;
    } else {
        return false;
    }
}
