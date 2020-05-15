let viewscreen = {
    CONTAINER: document.getElementById("viewscreen-container"),
    IMAGE: document.getElementById("viewscreen-img"),
    ZOOM: false,
    show: (url) => {
        viewscreen.CONTAINER.style.display = "flex";
        viewscreen.IMAGE.style.backgroundImage = `url(${ url }`;
    },
    hide: () => {
        viewscreen.CONTAINER.style.display = "none";
        viewscreen.IMAGE.style.backgroundImage = "";
        viewscreen.ZOOM = false;
        viewscreen.IMAGE.style.cursor = "zoom-in";
        viewscreen.IMAGE.style.backgroundSize = "contain";
        viewscreen.IMAGE.style.backgroundPosition = "center";
    },
    inzoom: (zoom) => {
        viewscreen.ZOOM = true;
        viewscreen.IMAGE.style.cursor = "zoom-out";
        viewscreen.IMAGE.style.backgroundSize = zoom + "%";
    },
    outzoom: () => {
        viewscreen.ZOOM = false;
        viewscreen.IMAGE.style.cursor = "zoom-in";
        viewscreen.IMAGE.style.backgroundSize = "contain";
        viewscreen.IMAGE.style.backgroundPosition = "center";
    },
    move: (evt) => {
        if (viewscreen.ZOOM) {
            let posX = (evt.offsetX / viewscreen.IMAGE.clientWidth) * 100;
            let posY = (evt.offsetY / viewscreen.IMAGE.clientHeight) * 100;
            viewscreen.IMAGE.style.backgroundPositionX = posX + "%";
            viewscreen.IMAGE.style.backgroundPositionY = posY + "%";
        }
    }
}

viewscreen.IMAGE.onmousemove = (evt) => viewscreen.move(evt);

viewscreen.IMAGE.onclick = (evt) => {
    (viewscreen.ZOOM) ? viewscreen.outzoom() : viewscreen.inzoom(150);
}