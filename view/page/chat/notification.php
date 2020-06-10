<?php
if (isset($viewPage)) {
?>
    <div id="notification-master-container">
      <input type="checkbox" id="checkbox-msg-container">
      <input type="checkbox" id="checkbox-new-msg">
      <div class="notification-msg-container">
          <div class="label-button-container">
              <label for="checkbox-msg-container">
                  <img src="view/src/icon/message.png">
              </label>
          </div>
          <div class="div-container" id="msg-notification-container"></div>
      </div>
    </div>
<?php
} else {
    header("location: ../../../panel");
}
?>