<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!-- STYLES -->
  <link rel="stylesheet" href="layers/view/public/css/contactenos.css">
<!-- SCRIPTS -->
  <script src="layers/logic/public/js/contactenos.js"></script>
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>CONTACTENOS</span>
      <?php
        $rs = $_sucursal -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
        <a href="#scroll-seccion-<?php echo $r['id_sucursal'] ?>"><?php echo $r['nombre'] ?></a>
      <?php } ?>
      <a href="#scroll-seccion-contact"><img src="layers/view/resources/png/icons/contact.png">Contáctenos</a>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
      

      <!--  CONTENEDOR SECCIONES > SECCION  -->
      <?php
        $rs = $_sucursal -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
      <div class="section" id="scroll-seccion-<?php echo $r['id_sucursal'] ?>">
        <div class="title"><?php echo $r['nombre'] ?></div>
<!--  CONTENEDOR SECCIONES > SECCION > ITEMS  -->
        <div class="sub_section">
          <div class="social">
            <?php
              $rsc = $_contacto -> findByIdSucursal($r['id_sucursal']);
              while($rc = mysqli_fetch_assoc($rsc)){
            ?>
            <a target="_blank" href="<?php echo $rc['url'] ?>">
              <img src="layers/view/resources/png/web/contacto/<?php echo $rc['icon'] ?>">
              <span><?php echo $rc['nombre'] ?></span>
            </a>
            <?php } ?>
          </div>
          <div class="schedule">
            <p> <b>Direccion: </b> <?php echo $r['direccion'] ?></p>
            <p> <b>Horario: </b> <?php echo $r['horario'] ?></p>
          </div>
          <div class="map">
            <?php echo $r['map'] ?>
          </div>
          
        </div>
        
      </div>
      <?php } ?>


      



<!--  CONTENEDOR SECCIONES > SECCION  -->
      <div class="section" id="scroll-seccion-contact">
        <div class="title">CONTACTENOS</div>
<!--  CONTENEDOR SECCIONES > SECCION > FORM  -->
        <form action="layers/data/scripts/insert_mensaje_publico.php" method="post" onsubmit="return validar_mensajePublico(this)">
          <div class="campo">
            <span>Nombre <b>*</b></span>
            <input type="text" name="nombre" placeholder="Carlos">
          </div>
          <div class="campo">
            <span>Apellido <b>*</b></span>
            <input type="text" name="apellido" placeholder="Jimenez">
          </div>
          <div class="campo">
            <span>Cedula <b>*</b></span>
            <input type="text" name="cedula" placeholder="0704870375">
          </div>
          <div class="campo">
            <span>Celular / Telefono<b>*</b></span>
            <input type="text" name="celular" placeholder="0980199937">
          </div>
          <div class="campo">
            <span>Correo Electronico</span>
            <input type="text" name="email" placeholder="nombre@gmail.com">
          </div>
          <div class="campo">
            <span>Elige un Plan <b>*</b></span>
            <select name="plan">
              <option value="">Elige una opcion</option>
              <option value="Domiciliario Básico 4Mbs">Domiciliario Básico 4Mbs</option>
              <option value="Domiciliario Medio 14Mbs">Domiciliario Medio 14Mbs</option>
              <option value="Domiciliario Avanzado 20Mbs">Domiciliario Avanzado 20Mbs</option>
              <option value="Pymes Basico 10Mbs">Pymes Basico 10Mbs</option>
              <option value="Pymes Medio 20Mbs">Pymes Medio 20Mbs</option>
              <option value="Pymes Avanzado 30Mbs">Pymes Avanzado 30Mbs</option>
              <option value="Corportativo Basico 20Mbs">Corportativo Basico 20Mbs</option>
              <option value="Corportativo Medio 50Mbs">Corportativo Medio 50Mbs</option>
              <option value="Corportativo Avanzado 100Mbs">Corportativo Avanzado 100Mbs</option>
            </select>
          </div>
          <div class="campo textarea">
            <span>Direccion de la instalacion <b>*</b></span>
            <textarea name="direccion"></textarea>
          </div>
          <div class="campo textarea">
            <input type="submit" value="REALIZAR PEDIDO">
          </div>
        </form>
      </div>
      
    
      
    </div>
    
<?php
  include 'layers/view/public/sections/footer.php';
?>