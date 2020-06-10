<?php 
$viewPage = 0;
include "view/page/public/access.php";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <?php include 'view/page/public/head.php' ?>
    <link rel="stylesheet" href="view/css/public/secciones.css" />
    <link rel="stylesheet" href="view/css/public/foro.css" />
</head>

<body>
    <header id="header">
        <?php include 'view/page/public/header.php' ?>
    </header>
    <content>
        <div class="sections">
            <div class="section">
                <div class="title">Foro</div>
            </div>
        </div>
        <div class="idea_content" id="idea_content">
            <?php include 'view/page/panel/user_foro.php' ?>
        </div>
    </content>
    <footer>
        <?php include 'view/page/public/footer.php' ?>
    </footer>
</body>

<foot>
    <?php include 'view/page/public/foot.php' ?>
</foot>

</html>