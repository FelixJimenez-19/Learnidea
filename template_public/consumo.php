<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!-- STYLES -->
  <link rel="stylesheet" href="layers/view/public/css/consumo.css">
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>CONSUMO</span>
      <a href="#scroll-seccion-1"><img src="layers/view/resources/png/icons/speed.png">Ver Nuestro Consumo</a>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
      

      <!--  CONTENEDOR SECCIONES > SECCION  -->
      <?php
        $count = 1;
        $rs = $_consumo -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
      <div class="section" id="scroll-seccion-<?php echo $count++ ?>">
        <div class="title"><?php echo $r['fecha'] ?></div><img src="layers/view/resources/png/web/consumo/<?php echo $r['img'] ?>">
      </div>
      <?php } ?>
    </div>
    
<?php
  include 'layers/view/public/sections/footer.php';
?>