<?php
include 'model/dao/Mysql.php';
include 'model/dao/InformacionDao.php';
$_informacion = new InformacionDao();
$row_informacion = mysqli_fetch_assoc($_informacion->select());
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title><?php echo $row_informacion['informacion_pagina_nombre'] ?> - Copyright</title>
    <link rel="icon" href="view/src/files/informacion_pagina_logo/<?php echo $row_informacion['informacion_pagina_logo'] ?>">
    <link rel="stylesheet" href="view/css/public/copyright.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>

<body>
    <div class="fondo"></div>
    <div class="content">
        <!--    CONTENT / INICIO-->
        <?php echo $row_informacion['informacion_pagina_copyright'] ?>
        <!--    CONTENT / FIN-->
        <br><br><br>
        <p class="creditos">
            Programarte
        </p>
    </div>
</body>

</html>