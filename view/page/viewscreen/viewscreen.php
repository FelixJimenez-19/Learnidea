<?php
  if(isset($viewPage)) {
?>
  
  <div id="viewscreen-container">
    <button class="close" onclick="viewscreen.hide()">
      <img src="view/src/icon/close.png">
    </button>
    <div id="viewscreen-img"></div>
    <div class="zoom-level">
      <button class="plus" onclick="viewscreen.zoom(true, null)">
        <img src="view/src/icon/plus.png">
      </button>
      <div class="level">
        <input type="number" value="0" id="viewscreen-zoom-level">
        <span>%</span>
      </div>
      <button class="less" onclick="viewscreen.zoom(false, null)">
        <img src="view/src/icon/less.png">
      </button>
    </div>
  </div>
  
<?php
  } else {
    header("location: ../../../panel.php");
  }
?>