let viewscreen = {
    CONTAINER: document.getElementById("viewscreen-container"),
    IMAGE: document.getElementById("viewscreen-img"),
    LEVEL: document.getElementById("viewscreen-zoom-level"),
    ZOOM: false,
    show: (url) => {
        viewscreen.CONTAINER.style.display = "flex";
        viewscreen.IMAGE.style.backgroundImage = `url(${ url }`;
    },
    hide: () => {
        viewscreen.CONTAINER.style.display = "none";
        viewscreen.IMAGE.style.backgroundImage = "";
        viewscreen.zoomout();
    },
    // true->plus || false->less || null->nothing
    zoom: (bool, value) => {
        let zoom = viewscreen.LEVEL;
        value = value === null ? 10 : value;
        (bool === true) ? zoom.value = parseInt(zoom.value) + value: '';
        (bool === false) ? zoom.value = parseInt(zoom.value) - value: '';
        (zoom.value > 100) ? zoom.value = 100: '';
        if (zoom.value <= 0) {
            viewscreen.zoomout();
        } else {
            viewscreen.zoomin();
            let zoomVal = parseInt(zoom.value) + 100;
            viewscreen.IMAGE.style.backgroundSize = zoomVal + "%";
        }
    },
    zoomin: () => {
        viewscreen.ZOOM = true;
        viewscreen.IMAGE.style.cursor = "zoom-out";
    },
    zoomout: () => {
        viewscreen.ZOOM = false;
        viewscreen.LEVEL.value = "0";
        viewscreen.IMAGE.style.backgroundPosition = "center";
        viewscreen.IMAGE.style.backgroundSize = "contain";
        viewscreen.IMAGE.style.cursor = "zoom-in";
    },
    move: (evt) => {
        if (viewscreen.ZOOM && viewscreen.LEVEL.value > 0) {
            let posX = ((evt.offsetX / viewscreen.IMAGE.clientWidth) * 100);
            let posY = ((evt.offsetY / viewscreen.IMAGE.clientHeight) * 100);
            viewscreen.IMAGE.style.backgroundPositionX = posX + "%";
            viewscreen.IMAGE.style.backgroundPositionY = posY + "%";
        }
    }
}

viewscreen.IMAGE.onclick = (evt) => {
    if (viewscreen.ZOOM) {
        viewscreen.zoomout();
    } else {
        viewscreen.zoomin();
        viewscreen.zoom(true, 50);
        viewscreen.move(evt);
    }
}

viewscreen.LEVEL.onkeyup = () => viewscreen.zoom(null, null);
viewscreen.IMAGE.onmousemove = (evt) => viewscreen.move(evt);