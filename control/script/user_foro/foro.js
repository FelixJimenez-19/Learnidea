const ForoMain = async () => {}

const Foro = {
    MAX: 10,
    database: [],
    view: {
        modalForm: document.getElementById("idea_modal_form"),
        modalMessage: document.getElementById("idea_modal_message"),
        message: document.getElementById("idea_message"),
        modalConfirm: document.getElementById("idea_modal_confirm"),
        confirm: document.getElementById("idea_confirm"),
        ideaContent: document.getElementById("idea_content"),
        containerCol1: document.getElementById("foro-col-1"),
        contentCol1: document.getElementById("foro-col-1__content"),
        containerCol2: document.getElementById("foro-col-2"),
        contentCol2: document.getElementById("foro-col-2__content"),
        containerCol3: document.getElementById("foro-col-3"),
        contentCol3: document.getElementById("foro-col-3__content"),
    },
    crud: {},
    fun: {
        showModalForm: (action) => {
            action();
            Foro.view.modalForm.style.top = "0%";
        },

        hideModalForm: (action) => {
            action();
            Foro.view.modalForm.style.top = "-100%";
        },
        showModalMessage: (msg) => {
            Foro.view.modalMessage.style.top = "0%";
            Foro.view.message.innerHTML = msg;
        },
        hideModalMessage: () => {
            Foro.view.modalMessage.style.top = "-100%";
            Foro.view.message.innerHTML = "";
        },
        showModalConfirm: (msg, action) => {
            Foro.view.modalConfirm.style.top = "0%";
            Foro.view.confirm.innerHTML = msg;
            action();
        },
        hideModalConfirm: () => {
            Foro.view.modalConfirm.style.top = "-100%";
            Foro.view.confirm.innerHTML = "";
        },
        pressYesModalConfirm: (action) => {
            action();
            Foro.fun.hideModalConfirm();
        },
        actionPressYesModalConfirm: () => {
            console.log("FUNCTION NOT FOUND");
        },
        ideaContentOnScroll: () => {
            const HEADER_HEIGHT = 40;
            let setStyleNormal = (container, content) => {
                content.style = `
                    position: inherit;
                    width: 100%;
                `;
            }
            let setStyleTop = (container, content) => {
                content.style = `
                    position: fixed;
                    width: ${ container.clientWidth }px;
                    top: ${ HEADER_HEIGHT };
                `;
            }
            let setStyleBottom = (container, content) => {
                content.style = `
                    position: fixed;
                    width: ${ container.clientWidth }px;
                    bottom: 0;  
                `;
            }
            let scrollTop = Foro.view.ideaContent.scrollTop;
            let windowWidth = window.innerWidth;
            let content = Foro.view.ideaContent;
            let containerCol1 = Foro.view.containerCol1;
            let contentCol1 = Foro.view.contentCol1;
            let containerCol2 = Foro.view.containerCol2;
            let contentCol2 = Foro.view.contentCol2;
            let containerCol3 = Foro.view.containerCol3;
            let contentCol3 = Foro.view.contentCol3;

            if (windowWidth > 1100) {
                if (contentCol1.clientHeight + HEADER_HEIGHT > content.clientHeight) {
                    (scrollTop > ((contentCol1.clientHeight + HEADER_HEIGHT) - content.clientHeight)) ? setStyleBottom(containerCol1, contentCol1): setStyleNormal(containerCol1, contentCol1);
                } else {
                    setStyleTop(containerCol1, contentCol1);
                }
            } else {
                setStyleNormal(containerCol1, contentCol1);
            }

            // if (windowWidth > 900) {
            //     if (contentCol2.clientHeight + HEADER_HEIGHT > content.clientHeight) {
            //         (scrollTop > ((contentCol2.clientHeight + HEADER_HEIGHT) - content.clientHeight)) ? setStyleBottom(containerCol2, contentCol2): setStyleNormal(containerCol2, contentCol2);
            //     } else {
            //         setStyleTop(containerCol2, contentCol2);
            //     }
            // } else {
            //     setStyleNormal(containerCol2, contentCol2);
            // }

            if (windowWidth > 900) {
                if (contentCol3.clientHeight + HEADER_HEIGHT > content.clientHeight) {
                    (scrollTop > ((contentCol3.clientHeight + HEADER_HEIGHT) - content.clientHeight)) ? setStyleBottom(containerCol3, contentCol3): setStyleNormal(containerCol3, contentCol3);
                } else {
                    setStyleTop(containerCol3, contentCol3);
                }
            } else {
                setStyleNormal(containerCol3, contentCol3);
            }
        }
    }
}


Foro.view.ideaContent.onscroll = (evt) => Foro.fun.ideaContentOnScroll(evt);
window.onresize = (evt) => Foro.fun.ideaContentOnScroll();

// Foro.view.ideaContent.onwheel = async (evt) => {
//     // console.log(evt);
//     let windowWidth = window.innerWidth;
//     if (windowWidth > 900) {
//         // evt.preventDefault();
//         const INCREMENT = 0;
//         let element = Foro.view.ideaContent;
//         let inc = evt.deltaY > 0 ? evt.deltaY + INCREMENT : evt.deltaY - INCREMENT;
//         $(element).stop().animate({
//             scrollTop: element.scrollTop + inc
//         }, 200, 'swing');
//     }
// }


ForoMain();