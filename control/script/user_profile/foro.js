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
        ideaContentOnScroll: () => {}
    }
}


ForoMain();