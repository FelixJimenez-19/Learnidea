<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!--  STYLES-->
  <link rel="stylesheet" href="layers/view/public/css/inicio.css">
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>INICIO</span>
      <a href="#scroll-seccion-1"><img src="layers/view/resources/png/icons/help.png">¿Porque Preferirnos?</a>
      <a href="#scroll-seccion-2"><img src="layers/view/resources/png/icons/idea.png">Tips Para Navegar</a>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
    
<!--  CONTENEDOR SECCIONES > SECCION  -->
      <div class="section" id="scroll-seccion-1">
        <div class="title">¿Porque Preferirnos?</div>
        
        
        <?php
          $rs = $_preferirnos -> select();
          while($r = mysqli_fetch_assoc($rs)){
        ?>  
        <!--  CONTENEDOR SECCIONES > SECCION > ITEM  -->
        <div class="item">
          <img src="layers/view/resources/png/web/preferirnos/<?php echo $r['icon'] ?>">
          <h4><?php echo $r['titulo'] ?></h4>
          <p><?php echo $r['descripcion'] ?></p>
        </div>
        <?php } ?>
        
        
      </div>
      
    
<!--  CONTENEDOR SECCIONES > SECCION  -->
      <div class="section" id="scroll-seccion-2">
        <div class="title">Tips Para Navegar</div>
        
        
        <?php
          $rs = $_tip -> select();
          while($r = mysqli_fetch_assoc($rs)){
        ?> 
        <!--  CONTENEDOR SECCIONES > SECCION > ITEM  -->
        <div class="item">
          <img src="layers/view/resources/png/web/tip/<?php echo $r['icon'] ?>">
          <h4><?php echo $r['titulo'] ?></h4>
          <p><?php echo $r['descripcion'] ?></p>
        </div>
        <?php } ?>
        
        
      </div>
      
    </div>
    
<?php
include 'layers/view/public/sections/footer.php';
?>