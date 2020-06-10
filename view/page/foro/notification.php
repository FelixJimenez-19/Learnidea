<?php
if (isset($viewPage)) {
?>
    <div id="foro-notification-master-container">
        <input type="checkbox" id="checkbox-foro-notification-container">
        <!-- <input type="checkbox" id="checkbox-foro-notification-new"> -->
        <div class="foro-notification-container">
            <div class="label-button-container">
                <label for="checkbox-foro-notification-container">
                    <img src="view/src/icon/notification.png">
                </label>
            </div>
            <div class="div-container" id="foro-notification-container"></div>
        </div>
    </div>
<?php
} else {
    header("location: ../../../panel");
}
?>