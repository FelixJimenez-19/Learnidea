<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/inicio.php
*/
if (isset($_SESSION)) {
    if (isset($viewPage)) {
?>
        <img src="view/src/img/background.png" class="idea_logo_home">
<?php

    } else {
        header("location: ../../../panel?page=inicio");
    }
} else {
    header("location: login");
}
?>