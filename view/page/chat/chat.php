<?php
if (isset($viewPage)) {
?>
    <div class="chat-container" id="chat-master-container">
        <div id="chat-container"></div>
        <div class="item-container item-container-contact">
            <input type="checkbox" id="checkbox-chat-item-c1" class="checkbox-items-chats-windows">
            <div class="item item-contact">
                <div class="head-contact">
                    <label class="label-title-name" for="checkbox-chat-item-c1">
                        <!-- NEW -->
                        <img class="icon_contact" src="view/src/icon/contact.png">
                        <!-- NEW -->
                        <i class="connect"></i>
                        <div class="title-name"><span>CONTACTOS</span></div>
                    </label>
                    <input type="checkbox" id="checkbox-contact-sound">
                    <label class="label-contact-sound" for="checkbox-contact-sound">
                        <img src="view/src/icon/sound_true.png">
                        <img src="view/src/icon/sound_off.png">
                    </label>
                </div>
                <div class="chat contact-container" id="contact-container"></div>
                <div class="search" id="contact-search">
                    <input type="search" placeholder="Buscar..">
                </div>
            </div>
        </div>
    </div>
<?php
} else {
    header("location: ../../../panel");
}
?>