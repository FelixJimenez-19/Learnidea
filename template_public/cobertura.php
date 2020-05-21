<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!--  STYLES-->
  <link rel="stylesheet" href="layers/view/public/css/cobertura.css">
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>COBERTURA</span>
      <?php
        $rs = $_cobertura_ciudad -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
        <a href="#scroll-seccion-<?php echo $r['id_cobertura_ciudad'] ?>"><?php echo $r['nombre'] ?></a>
      <?php } ?>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
    
      <!--  CONTENEDOR SECCIONES > SECCION  -->
      <?php
        $rs = $_cobertura_ciudad -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
      <div class="section" id="scroll-seccion-<?php echo $r['id_cobertura_ciudad'] ?>">
        <div class="title"><?php echo $r['nombre'] ?></div>
        <div class="accounts">
          <?php
            $count = 1;
            $rscs = $_cobertura_sector -> findByIdCoberturaCiudad($r['id_cobertura_ciudad']);
            while($rsc = mysqli_fetch_assoc($rscs)){
          ?>
            <p> <b><?php echo $count++ ?>. </b> <?php echo $rsc['nombre'] ?></p>
          <?php } ?>
        </div>
      </div>
      <?php } ?>
      
    </div>
    
<?php
  include 'layers/view/public/sections/footer.php';
?>