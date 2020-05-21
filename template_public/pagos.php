<?php
  $index = 0;
  include 'layers/view/public/sections/header.php';
?>
<!--  STYLES-->
  <link rel="stylesheet" href="layers/view/public/css/pagos.css">
<!--  SCRIPTS-->
  <script src="layers/logic/public/js/pagos.js"></script>
<!-- CONTENT > CONTENT_HEADER -->
    <div class="content_buttons_header">
      <span>PAGOS</span>
      <a href="#scroll-seccion-accounts"><img src="layers/view/resources/png/icons/dollar.png">Hacer Pago</a>
      <a href="#scroll-seccion-report"><img src="layers/view/resources/png/icons/bill.png">Reportar Pago</a>
    </div>
<!--  CONTENEDOR SECCIONES  -->
    <div class="sections">
    
<!--  CONTENEDOR SECCIONES > SECCION  -->
      <div class="section" id="scroll-seccion-accounts">
        <div class="title">Deposito o Transferencia</div>
        
        <div class="accounts">
          <?php
            $rs = $_cuenta_pago -> select();
            while($r = mysqli_fetch_assoc($rs)){
          ?>
          <p> <b>- </b> <a target="_blank" href="<?php echo $r['institucion_link'] ?>"><?php echo $r['institucion_nombre'] ?></a>: <?php echo $r['cuenta_tipo'].' #'.$r['cuenta_numero'] ?> | <b>Nombre: </b><?php echo $r['cuenta_dueno'] ?></p>
          <?php } ?>
        </div>
      
      </div>
<!--  CONTENEDOR SECCIONES > SECCION  -->
      <div class="section" id="scroll-seccion-report">
        <div class="title">Reportar Pago</div>
       
<!--  CONTENEDOR SECCIONES > SECCION > FORM  -->
          <form action="layers/data/scripts/insert_reporte_pago.php" method="post" onsubmit="return validar_reportePago(this)" enctype="multipart/form-data">
            <div class="campo">
              <span>Nombre del Dueño de Cuenta <b>*</b></span>
              <input type="text" name="cuenta_dueno" placeholder="Carlos Lopez">
            </div>
            <div class="campo">
              <span>Correo Electronico</span>
              <input type="text" name="email" placeholder="nombre@gmail.com">
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
              <span>Asunto<b>*</b></span>
              <input type="text" name="asunto" placeholder="Reporte de Pago">
            </div>
            <div class="campo">
              <span>Monto<b>*</b></span>
              <input type="text" name="monto" placeholder="28.00">
            </div>
            <div class="campo">
              <span>Banco / Coperativa <b>*</b></span>
              <select name="cuenta_institucion">
                <option value="">Elige una opcion</option>
                <option value="Banco de Pichincha">Banco de Pichincha</option>
                <option value="BanEcuador">BanEcuador</option>
                <option value="Coperativa Jep">Coperativa Jep</option>
                <option value="Coperativa Merced">Coperativa Merced</option>
              </select>
            </div>
            <div class="campo">
              <span>Foto del Comprobante<b>*</b></span>
              <input type="file" name="foto_comprobante" accept="image/x-png,image/jpg">
            </div>
            <div class="campo textarea">
              <span>Mensaje <b>*</b></span>
              <textarea name="mensaje"></textarea>
            </div>
            <div class="campo textarea">
              <input type="submit" value="REPORTAR PAGO" name="submit">
            </div>
          </form>
      
        
        
      </div>
      
    </div>
    
<?php
  include 'layers/view/public/sections/footer.php';
?>