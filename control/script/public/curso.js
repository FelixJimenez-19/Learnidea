const Curso = {
    database: [],
    view: {
        containerLive: document.getElementById("curso-container-live")
    },
    crud: {},
    fun: {
        scrollHorizontal: (direction, element_id) => {
            let element = document.getElementById(element_id);
            let increment = element.clientWidth;
            if (direction == 0) {
                element.scrollLeft -= increment;
            } else {
                element.scrollLeft += increment;
            }
        },
    }
}