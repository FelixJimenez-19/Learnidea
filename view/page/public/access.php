<?php
    if (isset($viewPage)) {
    session_start();
    isset($_SESSION['usuario_id']) ? header("location: panel") : '';
} else {
    header("location: ../../../");
}
