<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!-- STYLES -->
  <link rel="stylesheet" href="layers/view/public/css/planes.css">
<!-- SCRIPTS -->
  <script src="layers/logic/public/js/planes.js"></script>
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>PLANES</span>
      <?php
        $rs = $_tipo_plan -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
      <a href="#scroll-seccion-<?php echo $r['id_tipo_plan'] ?>"><?php echo $r['nombre'] ?></a>
      <?php } ?>
      
      <a href="#scroll-seccion-contact"><img src="layers/view/resources/png/icons/contact.png">Contáctenos</a>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
    
<!--  CONTENEDOR SECCIONES > SECCION  -->
      <?php
        $rs = $_tipo_plan -> select();
        while($r = mysqli_fetch_assoc($rs)){
      ?>
        <div class="section" id="scroll-seccion-<?php echo $r['id_tipo_plan'] ?>">
          <div class="title">Planes <?php echo $r['nombre'] ?></div>
          <!--  CONTENEDOR SECCIONES > SECCION > ITEMS  -->
          <div class="items">
            
            <?php
              $rsp = $_plan -> findByIdTipoPlan($r['id_tipo_plan']);
              while($rp = mysqli_fetch_assoc($rsp)){
            ?>
            <div class="item">
              <!--    PUPULAS | INICIO       -->
              <?php if($rp['popular'] == true){ ?>
              <div class="popular">
                <span>MÁS POPULAR</span>
                <img src="layers/view/resources/png/icons/arrow.png">
              </div>
              <?php } ?>
              <!--    PUPULAS | FIN          -->
              <div class="header">
                <h3><?php echo $rp['nombre'] ?></h3> <!-- Nombre -->
                <h4>$<?php echo $rp['precio'] ?></h4> <!-- Precio -->
                <span>Mensual Inc.IVA</span>
                <h4><?php echo $rp['velocidad'] ?>mbs</h4> <!-- Velocidad -->
                <span>Comparticion <?php echo $r['comparticion'] ?></span> <!-- Comparticion -->
              </div>
              <div class="body">
                <h5>Internet Ilimitado</h5>
                <h5>Soporte Técnico</h5>
                <p>Conexion Banda Ancha por Radio Frecuencia</p> <!-- Descripcion -->
                <a href="#scroll-seccion-contact">CONTRATAR</a>
              </div>
            </div>
            <?php } ?>
            
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
              <option value="Domiciliario Medio 14Mbs">Domiciliario Medio 6Mbs</option>
              <option value="Domiciliario Avanzado 20Mbs">Domiciliario Avanzado 8Mbs</option>
              <option value="Corportativo Basico 20Mbs">Corportativo Basico 6Mbs</option>
              <option value="Corportativo Medio 50Mbs">Corportativo Medio 8Mbs</option>
              <option value="Corportativo Avanzado 100Mbs">Corportativo Avanzado 15Mbs</option>
            </select>
          </div>
          <div class="campo textarea">
            <span>Direccion de la instalacion <b>*</b></span>
            <textarea name="direccion"></textarea>
          </div>
          <div class="campo textarea">
            <input type="submit" value="REALIZAR PEDIDO" name="submit">
          </div>
        </form>
      </div>
      
    
      
    </div>
    
<?php
  include 'layers/view/public/sections/footer.php';
?>